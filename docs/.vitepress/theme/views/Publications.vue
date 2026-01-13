<template>
    <div class="all-publications">
        <div class="container">
            <h1 class="publications-title">{{ t.pageTitle }}</h1>
            <div class="content-area">
                <!-- 年份筛选器 -->
                <div class="year-filter">
                    <button v-for="year in availableYears" :key="year" :class="{ active: selectedYear === year }"
                        @click="selectedYear = year">
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
                        class="publication-row" :style="{ animationDelay: `${index * 150}ms` }">
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
                                    <img class="icon github-icon" src="/images/github-mark/github-mark.svg"
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
import { ref, computed, watch } from 'vue'
import { useData } from 'vitepress'
import { publicationsList } from '../../data/publications'
import Footer from '../components/Footer.vue'

/* =========================
   语言上下文
   ========================= */

const { lang } = useData()

const currentLang = computed<'zh' | 'en'>(() =>
    lang.value.startsWith('zh') ? 'zh' : 'en'
)

/* =========================
   文案
   ========================= */

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
   年份逻辑
   ========================= */

type YearFilter = 'all' | 'earlier' | string

const selectedYear = ref<YearFilter>('all')

const currentYear = new Date().getFullYear()
const recentYearThreshold = currentYear - 9
const earlierYear = recentYearThreshold - 1

/* earlier 文案：2016 & earlier / 2016 及更早 */
const earlierLabel = computed(() => {
    return `${earlierYear} & earlier`
})

/* 侧边栏年份 */
const availableYears = computed<YearFilter[]>(() => {
    const years = Array.from(
        new Set(publicationsList.map(p => Number(p.year)))
    ).sort((a, b) => b - a)

    const recentYears = years.filter(y => y >= recentYearThreshold)

    return ['all', ...recentYears.map(String), 'earlier']
})

/* 论文筛选 */
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

    return [...list].sort((a, b) => Number(b.year) - Number(a.year))
})

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
    padding: 24px 36px;
    background: transparent;
    border-radius: 0;
    box-shadow: none;
    border-bottom: 1px solid rgba(150, 150, 150, 0.5);
    transition: transform 0.25s ease, background-color 0.25s ease;
    transform-origin: center left;
}

.publication-row:hover {
    transform: scale(1.02);
    background-color: var(--vp-bg);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
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
        width: 84vw;
    }

    .content-area {
        display: flex;
        align-items: flex-start;
        gap: 120px;
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
        padding: 20px 30px 40px 30px;
    }

    .content-area {
        display: block;
    }

    .year-filter {
        padding: 0 10px;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
        margin-bottom: 8px;
    }

    .year-filter button {
        min-width: 40px;
        padding: 3px 5px;
        flex-shrink: 0;
        white-space: nowrap;
        border-radius: 1px;
    }

    .publications-title {
        margin-bottom: 30px;
    }

    .publication-row {
        padding: 15px 12px;
        flex-direction: column;
        gap: 12px;
    }

    .thumb {
        width: auto;
        border-radius: 3px;
    }

    .venue-badge {
        border-radius: 2px;
        padding: 6px 9px;
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