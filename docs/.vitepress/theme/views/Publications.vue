<template>
    <div class="all-publications">
        <div class="container">
            <h1 class="publications-title">{{ t.pageTitle }}</h1>
            <div class="content-area">
                <!-- 年份筛选器 -->
                <div class="year-filter">
                    <button v-for="year in availableYears" :key="year" :class="{ active: selectedYear === year }"
                        @click="selectYear(year)">
                        {{
                            year === 'all'
                                ? t.allYears
                                : year === 'earlier'
                                    ? earlierLabel
                                    : year
                        }}
                    </button>
                </div>

                <div class="publications-list" :key="selectedYear">
                    <div v-for="(item, index) in filteredPublications" :key="item.year + item.title"
                        class="publication-row"
                        :style="{ animationDelay: `${index * 150}ms` }">
                        <div class="thumb">
                            <template v-if="item.image">
                                <img :src="item.image" loading="lazy"/>
                            </template>

                            <div v-else class="image-placeholder">
                                <span class="placeholder-text">{{ item.title}}</span>
                            </div>
                            <span class="venue-badge" v-if="item.venue_abbreviated">
                                {{ item.venue_abbreviated }}
                            </span>
                        </div>

                        <div class="content">
                            <h2 class="title">{{ item.title }}</h2>
                            <p class="authors">{{ item.authors }}</p>
                            <p class="venue">{{ item.venue }}</p>

                            <div class="links">
                                <a v-if="item.pdf" :href="item.pdf" target="_blank" class="link-btn pdf">
                                    <span class="icon">📄</span>
                                    <span class="link-text">{{ t.pdf }}</span>
                                </a>

                                <a v-if="item.dataset" :href="item.dataset" target="_blank" class="link-btn dataset">
                                    <span class="icon">📦</span>
                                    <span class="link-text">{{ t.dataset }}</span>
                                </a>

                                <a v-if="item.code" :href="item.code" target="_blank" class="link-btn code">
                                    <img class="icon github-icon" src="/assets/icons/github-mark/github-mark.svg"
                                        alt="GitHub" />
                                    <span class="link-text">{{ t.code }}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'
import { publicationsList } from '../../data/publications'
import Footer from '../components/Footer.vue'

/* =========================
   1. 语言上下文与文案
   ========================= */
const { lang } = useData()

const currentLang = computed<'zh' | 'en'>(() =>
    lang.value.startsWith('zh') ? 'zh' : 'en'
)

const TEXT = {
    zh: {
        pageTitle: '论文',
        allYears: '全部',
        pdf: 'PDF',
        dataset: '数据集',
        code: '代码'
    },
    en: {
        pageTitle: 'Publications',
        allYears: 'All',
        pdf: 'PDF',
        dataset: 'Dataset',
        code: 'Code'
    }
} as const

const t = computed(() => TEXT[currentLang.value])

/* =========================
   2. 年份定义与筛选逻辑
   ========================= */
type YearFilter = 'all' | 'earlier' | string

const selectedYear = ref<YearFilter>('all')

const currentYear = new Date().getFullYear()
const recentYearThreshold = currentYear - 9
const earlierYear = recentYearThreshold - 1

// earlier 文案显示
const earlierLabel = computed(() => `${earlierYear} & earlier`)

// 侧边栏/顶部显示的合法年份列表
const availableYears = computed<YearFilter[]>(() => {
    const years = Array.from(
        new Set(publicationsList.map(p => Number(p.year)))
    ).sort((a, b) => b - a)

    const recentYears = years.filter(y => y >= recentYearThreshold)

    return ['all', ...recentYears.map(String), 'earlier']
})

/* =========================
   3. Hash 路由、重定向与同步逻辑
   ========================= */

/**
 * 核心逻辑：校验 Hash 并返回规范化的年份标签
 * 处理输入如 #2014 重定向到 #earlier，输入 #abc 重定向到全部
 */
const getNormalizedYear = (hashStr: string): YearFilter => {
    const rawTag = hashStr.replace('#', '').trim()

    if (!rawTag) return 'all'

    // 1. 如果直接在合法选项中 (all, 2026, earlier等)
    if (availableYears.value.includes(rawTag)) {
        return rawTag as YearFilter
    }

    // 2. 检查是否是数字，进行范围判定
    const yearNum = parseInt(rawTag)
    if (!isNaN(yearNum)) {
        // 如果输入的年份小于等于“早期”阈值，判定为 earlier
        if (yearNum <= earlierYear) {
            // 确保数据中确实有该年份或更早的论文，否则跳到 all
            const hasEarlierData = publicationsList.some(p => Number(p.year) <= earlierYear)
            return hasEarlierData ? 'earlier' : 'all'
        }
        // 如果是比当前年还大的数字，或者不在 recent 列表里的数字，统一归为 all
        return 'all'
    }

    // 3. 其他非法字符串
    return 'all'
}

/**
 * 同步状态到 URL 地址栏
 */
const syncUrlToState = (year: YearFilter) => {
    const newHash = year === 'all' ? '' : `#${year}`
    // 使用 replaceState 更新 URL，避免在历史记录中产生大量垃圾条目
    // 同时也保证了重定向（如 #2010 -> #earlier）在地址栏即时生效
    const newUrl = window.location.pathname + window.location.search + newHash
    window.history.replaceState(null, '', newUrl)
}

/**
 * 按钮点击触发函数
 */
const selectYear = (year: YearFilter) => {
    selectedYear.value = year
    syncUrlToState(year)
}

/**
 * 监听 Hash 变化（处理浏览器前进/后退或手动修改 URL）
 */
const handleHashChange = () => {
    const normalized = getNormalizedYear(window.location.hash)
    selectedYear.value = normalized
    syncUrlToState(normalized) // 再次同步确保地址栏显示的是标准化后的结果
}

onMounted(() => {
    // 页面加载时执行初始化校验
    const initialYear = getNormalizedYear(window.location.hash)
    selectedYear.value = initialYear
    syncUrlToState(initialYear)

    window.addEventListener('hashchange', handleHashChange)
})

onUnmounted(() => {
    window.removeEventListener('hashchange', handleHashChange)
})

/* =========================
   4. 论文数据计算
   ========================= */
const filteredPublications = computed(() => {
    let list = publicationsList

    if (selectedYear.value === 'earlier') {
        list = publicationsList.filter(
            p => Number(p.year) <= earlierYear
        )
    } else if (selectedYear.value !== 'all') {
        list = publicationsList.filter(
            p => p.year.startsWith(selectedYear.value)
        )
    }

    // 默认按年份降序排列
    return [...list].sort((a, b) => Number(b.year) - Number(a.year))
})

// 监听选中年份变化，平滑滚动至顶
watch(selectedYear, () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
</script>

<style scoped>
.all-publications {
    min-height: calc(100vh - var(--vp-nav-height));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--vp-bg-soft);
}

.container {
    max-width: 1500px;
    margin: 0 auto;
    padding: 50px;
    display: flex;
    flex-direction: column;
}

.publications-title {
    font-size: var(--vp-h1-size);
    line-height: 1;
    font-weight: var(--vp-h1-weight);
    color: var(--vp-c-brand-1);
    text-align: center;
    margin-bottom: 48px;
}

/* 年份筛选器 */
.year-filter {
    display: flex;
    justify-content: center;
    gap: 18px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.year-filter button {
    padding: 5px 6px;
    border: 1px solid var(--vp-c-brand-2);
    border-radius: 1px;
    background: var(--vp-bg);
    color: var(--vp-c-text-1);
    font-size: var(--vp-h3-size);
    line-height: 1;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.year-filter button:hover {
    background: var(--vp-c-bg);
    color: var(--vp-c-brand-1);
}

.year-filter button.active {
    background: var(--vp-c-brand-1);
    color: var(--vp-bg);
    border-color: var(--vp-c-brand-1);
}

/* 论文列表 */
.publications-list {
    display: flex;
    flex-direction: column;
}

.publication-row {
    position: relative;
    display: flex;
    gap: 24px;
    padding: 20px 24px;
    background: transparent;
    border-radius: 0;
    box-shadow: none;
    border-bottom: 1px solid rgba(150, 150, 150, 0.5);
    transition: transform 0.25s ease, background-color 0.25s ease;
    transform-origin: center left;
    height: auto;
    align-items: flex-start;
    /* 顶部对齐 */
}

.publication-row:hover {
    transform: scale(1.012);
    background-color: var(--vp-bg);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border-bottom: none;
}

.thumb {
    position: relative;
    width: 280px;
    padding: 8px;
    border-radius: 6px;
    aspect-ratio: 16 / 9;
    flex-shrink: 0;
    overflow: visible;
    background: var(--vp-bg);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.thumb img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.venue-badge {
    position: absolute;
    min-width: 100px;
    padding: 6px 8px;
    top: -1px;
    left: -1px;
    border-radius: 3px;
    font-size: var(--vp-small);
    font-weight: 500;
    font-style: italic;
    text-align: center;
    line-height: 1.4;
    color: var(--vp-bg);
    background-color: rgba(110, 110, 110, 0.9);
}

/* 占位符容器样式 */
.image-placeholder {
    width: 100%;
    height: 100%;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--vp-c-brand-4);
}

/* 占位符文字样式 */
.placeholder-text {
    font-size: 1.25rem;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
}

/* 内容区域 */
.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.content .title {
    font-size: var(--vp-h3-size);
    font-weight: 600;
    line-height: 1.4;
}

.content .authors {
    font-size: var(--vp-small);
    line-height: 1.5;
    color: var(--vp-c-text-2);
}

.content .venue {
    font-size: var(--vp-small);
    line-height: 1.4;
    color: var(--vp-c-text-1);
}

.links {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 8px;
}

.link-btn {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-size: var(--vp-small);
    line-height: 1;
    font-weight: 500;
    transition: all 0.3s ease;
}

.link-btn .icon {
    font-size: var(--vp-small);
}

.link-btn.pdf {
    color: var(--vp-c-brand-1);
}

.link-btn.code {
    color: var(--vp-c-brand-1);
}

.link-btn.dataset {
    color: var(--vp-c-brand-1);
}

.link-btn .icon {
    width: var(--vp-small);
    height: var(--vp-small);
    display: inline-block;
    flex-shrink: 0;
}

.link-btn .link-text {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
}


@media (min-width: 1024px) {
    .container {
        width: auto;
    }

    .content-area {
        display: flex;
        align-items: flex-start;
        gap: 60px;
    }

    .year-filter {
        width: 180px;
        padding-top: 8px;
        display: flex;
        flex-direction: column;
        gap: 0px;
        position: sticky;
        top: calc(var(--vp-nav-height) + 64px);
    }

    .year-filter button {
        all: unset;
        cursor: pointer;
        min-width: 120px;
        text-align: start;
        font-size: var(--vp-h3-size);
        font-weight: 500;
        color: var(--vp-c-text-3);
        border-radius: 5px;
        padding: 12px 15px;
        line-height: 1;
        transition: color 0.2s ease;
    }

    .year-filter button:hover {
        color: var(--vp-c-text-1);
    }

    .year-filter button.active {
        color: var(--vp-c-bg);
        font-weight: 600;
    }

    .year-filter button {
        position: relative;
    }

    .publications-list {
        flex: 1;
    }
}

/* 移动端适配 */
@media (max-width: 768px) {
    .container {
        max-width: 100%;
        padding: 20px 5vw 40px 5vw;
    }

    .content-area {
        display: block;
    }

    .year-filter {
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
        margin: 24px 6px 8px;
    }

    .year-filter button {
        min-width: 40px;
        padding: 4px 8px;
        flex-shrink: 0;
        white-space: nowrap;
        border-radius: 1px;
    }

    .publications-title {
        margin-bottom: 0;
    }

    .publication-row {
        padding: 12px 3vw;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }

    .thumb {
        width: 100%;
        height: 50vw;
        border-radius: 3px;
        box-shadow: none;
    }

    .venue-badge {
        min-width: 88px;
        border-radius: 2px;
        font-size: var(--vp-p-size);
        padding: 4px 6px;
    }

    .content {
        gap: 4px;
    }

    .links {
        margin-top: 5px;
    }

    .link-btn {
        gap: 6px;
    }
}
</style>