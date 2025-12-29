<template>
    <div class="all-publications">
        <div class="container">
            <h1 class="publications-title">{{ t.pageTitle }}</h1>

            <!-- 年份筛选器 -->
            <div class="year-filter">
                <button 
                    v-for="year in availableYears" 
                    :key="year" 
                    :class="{ active: selectedYear === year }"
                    @click="selectedYear = year"
                >
                    {{ year === 'all' ? t.allYears : year }}
                </button>
            </div>

            <!-- 论文列表 - 带翻页动画 -->
            <div class="publications-list" :key="currentPage">
                <div 
                    v-for="(item, index) in pagedPublications" 
                    :key="item.date + item.title" 
                    class="publication-row"
                    :style="{ animationDelay: `${index * 150}ms` }"
                >
                    <div class="date-card">
                        <div class="md">{{ formatMD(item.date) }}</div>
                        <div class="divider"></div>
                        <div class="year">{{ formatYear(item.date) }}</div>
                    </div>

                    <div class="content">
                        <h2 class="title">{{ item.title }}</h2>
                        <p class="authors">{{ item.authors }}</p>
                        <p class="venue">{{ item.venue }}</p>
                        
                        <div class="links">
                            <a v-if="item.pdf" :href="item.pdf" target="_blank" class="link-btn pdf">
                                <span class="icon">📄</span>
                                {{ t.pdf }}
                            </a>
                            <a v-if="item.project" :href="item.project" target="_blank" class="link-btn project">
                                <span class="icon">🌐</span>
                                {{ t.project }}
                            </a>
                            <a v-if="item.code" :href="item.code" target="_blank" class="link-btn code">
                                <span class="icon">💻</span>
                                {{ t.code }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 分页器 -->
            <div class="pagination">
                <span class="total">
                    {{ t.total(filteredPublications.length) }}
                </span>

                <div class="pages-wrapper">
                    <button @click="currentPage--" :disabled="currentPage === 1">
                        {{ t.prev }}
                    </button>
                    <div class="pages">
                        <button 
                            v-for="p in visiblePages" 
                            :key="p" 
                            :class="{ active: p === currentPage }"
                            @click="typeof p === 'number' && (currentPage = p)" 
                            :disabled="p === '...'"
                        >
                            {{ p }}
                        </button>
                    </div>

                    <button @click="currentPage++" :disabled="currentPage === totalPages">
                        {{ t.next }}
                    </button>
                </div>

                <div class="jump-page">
                    <input 
                        type="number" 
                        min="1" 
                        :max="totalPages" 
                        v-model.number="jumpPage"
                        :placeholder="t.pagePlaceholder" 
                    />
                    <button @click="goPage">{{ t.jump }}</button>
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
   VitePress 语言上下文
   ========================= */

const { lang } = useData()

const currentLang = computed<'zh' | 'en'>(() =>
    lang.value.startsWith('zh') ? 'zh' : 'en'
)

/* =========================
   多语言文本
   ========================= */

const TEXT = {
    zh: {
        pageTitle: '论文',
        total: (n: number) => `共 ${n} 篇`,
        prev: '上一页',
        next: '下一页',
        jump: '跳转',
        pagePlaceholder: '页',
        allYears: '全部',
        pdf: 'PDF',
        project: '项目',
        code: '代码'
    },
    en: {
        pageTitle: 'Publications',
        total: (n: number) => `Total ${n}`,
        prev: 'Previous',
        next: 'Next',
        jump: 'Go',
        pagePlaceholder: 'Page',
        allYears: 'All',
        pdf: 'PDF',
        project: 'Project',
        code: 'Code'
    }
} as const

const t = computed(() => TEXT[currentLang.value])

/* =========================
   多语言论文数据派生
   ========================= */

interface LocalizedPublication {
    date: string
    authors: string
    title: string
    venue: string
    pdf?: string
    project?: string
    code?: string
}

const localizedPublicationsList = computed<LocalizedPublication[]>(() =>
    publicationsList.map(item => ({
        ...item,
        title: item.title[currentLang.value]
    }))
)

/* =========================
   年份筛选
   ========================= */

const selectedYear = ref<string | 'all'>('all')

const availableYears = computed(() => {
    const years = new Set(
        publicationsList.map(p => p.date.split('-')[0])
    )
    return ['all', ...Array.from(years).sort().reverse()]
})

const filteredPublications = computed(() => {
    if (selectedYear.value === 'all') {
        return localizedPublicationsList.value
    }
    return localizedPublicationsList.value.filter(
        p => p.date.startsWith(selectedYear.value as string)
    )
})

/* =========================
   分页逻辑
   ========================= */

const PAGE_SIZE = 10
const currentPage = ref(1)
const jumpPage = ref<number | null>(null)

const totalPages = computed(() =>
    Math.ceil(filteredPublications.value.length / PAGE_SIZE)
)

const pagedPublications = computed(() => {
    const start = (currentPage.value - 1) * PAGE_SIZE
    const end = start + PAGE_SIZE
    return filteredPublications.value.slice(start, end)
})

// 显示的页码（省略号逻辑）
const visiblePages = computed(() => {
    const pages: (number | string)[] = []
    const total = totalPages.value
    const current = currentPage.value

    if (total <= 7) {
        for (let i = 1; i <= total; i++) pages.push(i)
        return pages
    }

    pages.push(1)
    if (current > 3) pages.push('...')

    const start = Math.max(2, current - 1)
    const end = Math.min(total - 1, current + 1)

    for (let i = start; i <= end; i++) pages.push(i)

    if (current < total - 2) pages.push('...')
    pages.push(total)

    return pages
})

// 跳转页面
const goPage = () => {
    if (!jumpPage.value) return
    const target = Math.max(1, Math.min(totalPages.value, jumpPage.value))
    currentPage.value = target
    jumpPage.value = null
}

// 筛选年份时重置到第一页
watch(selectedYear, () => {
    currentPage.value = 1
})

/* =========================
   日期格式化
   ========================= */

const formatMD = (date: string) => {
    const [year, month, day] = date.split('-')
    return `${month}-${day || '01'}`
}

const formatYear = (date: string) => {
    return date.split('-')[0]
}
</script>

<style scoped>
.all-publications {
    min-height: calc(100vh - var(--vp-nav-height));
    background-color: var(--vp-bg-soft);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 40px 40px;
}

.publications-title {
    font-size: var(--vp-h1-size);
    font-weight: var(--vp-h1-weight);
    color: var(--vp-c-brand-1);
    text-align: center;
    margin-bottom: 60px;
}

/* 年份筛选器 */
.year-filter {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.year-filter button {
    padding: 8px 20px;
    border: 2px solid var(--vp-c-brand-2);
    border-radius: 20px;
    background: var(--vp-bg);
    color: var(--vp-c-text-1);
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.year-filter button:hover {
    background: var(--vp-c-brand-soft);
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
    gap: 30px;
}

.publication-row {
    display: flex;
    gap: 30px;
    padding: 30px;
    background: var(--vp-bg);
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    animation: slideInUp 0.6s ease-out backwards;
}

.publication-row:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transform: translateY(-4px);
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 日期卡片 */
.date-card {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--vp-c-brand-1);
    border-radius: 8px;
    background: var(--vp-bg-soft);
}

.date-card .md {
    font-size: 18px;
    font-weight: 600;
    color: var(--vp-c-brand-1);
    font-style: italic;
}

.date-card .divider {
    width: 40px;
    height: 1px;
    background: var(--vp-c-brand-2);
    margin: 4px 0;
}

.date-card .year {
    font-size: 16px;
    font-weight: 500;
    color: var(--vp-c-brand-1);
    font-style: italic;
}

/* 内容区域 */
.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.content .title {
    font-size: 22px;
    font-weight: 600;
    color: var(--vp-c-text-1);
    line-height: 1.4;
    margin: 0;
}

.content .authors {
    font-size: 15px;
    color: var(--vp-c-text-2);
    line-height: 1.6;
    margin: 0;
}

.content .venue {
    font-size: 15px;
    color: var(--vp-c-brand-1);
    font-style: italic;
    margin: 0;
}

.links {
    display: flex;
    gap: 12px;
    margin-top: 8px;
    flex-wrap: wrap;
}

.link-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 16px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
}

.link-btn .icon {
    font-size: 16px;
}

.link-btn.pdf {
    background: var(--vp-c-brand-soft);
    color: var(--vp-c-brand-1);
    border: 1px solid var(--vp-c-brand-2);
}

.link-btn.pdf:hover {
    background: var(--vp-c-brand-1);
    color: var(--vp-bg);
}

.link-btn.project {
    background: rgba(16, 185, 129, 0.1);
    color: rgb(16, 185, 129);
    border: 1px solid rgba(16, 185, 129, 0.3);
}

.link-btn.project:hover {
    background: rgb(16, 185, 129);
    color: white;
}

.link-btn.code {
    background: rgba(139, 92, 246, 0.1);
    color: rgb(139, 92, 246);
    border: 1px solid rgba(139, 92, 246, 0.3);
}

.link-btn.code:hover {
    background: rgb(139, 92, 246);
    color: white;
}

/* 分页器样式 - 复用新闻页样式 */
.pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
    padding: 30px;
    background: var(--vp-bg);
    border-radius: 12px;
    flex-wrap: wrap;
    gap: 20px;
}

.total {
    font-size: 16px;
    font-weight: 500;
    color: var(--vp-c-text-2);
}

.pages-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
}

.pages-wrapper > button {
    padding: 8px 16px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    background: var(--vp-bg);
    color: var(--vp-c-text-1);
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.pages-wrapper > button:hover:not(:disabled) {
    background: var(--vp-c-brand-soft);
    color: var(--vp-c-brand-1);
    border-color: var(--vp-c-brand-2);
}

.pages-wrapper > button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}

.pages {
    display: flex;
    gap: 6px;
}

.pages button {
    min-width: 36px;
    height: 36px;
    padding: 0 8px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    background: var(--vp-bg);
    color: var(--vp-c-text-1);
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.pages button:hover:not(:disabled) {
    background: var(--vp-c-brand-soft);
    color: var(--vp-c-brand-1);
}

.pages button.active {
    background: var(--vp-c-brand-1);
    color: var(--vp-bg);
    border-color: var(--vp-c-brand-1);
}

.pages button:disabled {
    cursor: default;
    color: var(--vp-c-text-3);
}

.jump-page {
    display: flex;
    gap: 8px;
    align-items: center;
}

.jump-page input {
    width: 80px;
    padding: 8px 12px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    background: var(--vp-bg-soft);
    color: var(--vp-c-text-1);
    font-size: 14px;
}

.jump-page button {
    padding: 8px 16px;
    border: 1px solid var(--vp-c-brand-1);
    border-radius: 6px;
    background: var(--vp-c-brand-1);
    color: var(--vp-bg);
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.jump-page button:hover {
    background: var(--vp-c-brand-2);
}

/* 移动端适配 */
@media (max-width: 768px) {
    .container {
        padding: 40px 20px;
    }

    .publications-title {
        font-size: 32px;
        margin-bottom: 40px;
    }

    .publication-row {
        flex-direction: column;
        gap: 20px;
        padding: 20px;
    }

    .date-card {
        width: 70px;
        height: 70px;
    }

    .content .title {
        font-size: 18px;
    }

    .pagination {
        flex-direction: column;
        align-items: stretch;
    }

    .pages-wrapper {
        justify-content: center;
    }

    .jump-page {
        justify-content: center;
    }
}
</style>