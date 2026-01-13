<template>
    <div class="all-news">
        <div class="container">
            <h1 class="news-title">{{ t.pageTitle }}</h1>

            <!-- 关键：page 级 key，翻页即重建 DOM -->
            <div class="news-list" :key="currentPage">
                <a v-for="(item, index) in pagedNews" :key="item.link" :href="item.link" target="_blank"
                    class="news-row" :style="{ animationDelay: `${index * 150}ms` }">
                    <div class="date-card">
                        <div class="md">{{ formatMD(item.date) }}</div>
                        <div class="divider"></div>
                        <div class="year">{{ formatYear(item.date) }}</div>
                    </div>

                    <div class="content">
                        <div class="title">{{ item.title }}</div>
                        <p class="summary">{{ item.summary }}</p>
                    </div>
                </a>
            </div>

            <div class="pagination">
                <span class="total">
                    {{ t.total(localizedNewsList.length) }}
                </span>

                <div class="pages-wrapper">
                    <button @click="currentPage--" :disabled="currentPage === 1">
                        {{ t.prev }}
                    </button>
                    <div class="pages">
                        <button v-for="p in visiblePages" :key="p" :class="{ active: p === currentPage }"
                            @click="typeof p === 'number' && (currentPage = p)" :disabled="p === '...'">
                            {{ p }}
                        </button>
                    </div>

                    <button @click="currentPage++" :disabled="currentPage === totalPages">
                        {{ t.next }}
                    </button>
                </div>

                <div class="jump-page">
                    <input type="number" min="1" :max="totalPages" v-model.number="jumpPage"
                        :placeholder="t.pagePlaceholder" />
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
import { newsList } from '../../data/news'

/* =========================
   VitePress 语言上下文
   ========================= */

const { lang } = useData()

const currentLang = computed<'zh' | 'en'>(() =>
    lang.value.startsWith('zh') ? 'zh' : 'en'
)

/* =========================
   多语言新闻数据派生
   ========================= */

const localizedNewsList = computed(() =>
    newsList.map(item => ({
        ...item,
        title: item.title[currentLang.value],
        summary: item.summary[currentLang.value]
    }))
)

const TEXT = {
    zh: {
        pageTitle: '新闻',
        total: (n: number) => `共 ${n} 条`,
        prev: '上一页',
        next: '下一页',
        jump: '跳转',
        pagePlaceholder: '页'
    },
    en: {
        pageTitle: 'News',
        total: (n: number) => `Total ${n}`,
        prev: 'Previous',
        next: 'Next',
        jump: 'Go',
        pagePlaceholder: 'Page'
    }
} as const

const t = computed(() => TEXT[currentLang.value])


/* =========================
   分页逻辑
   ========================= */

const pageSize = 6
const currentPage = ref(1)

const totalPages = computed(() =>
    Math.ceil(localizedNewsList.value.length / pageSize)
)

const pagedNews = computed(() => {
    const start = (currentPage.value - 1) * pageSize
    return localizedNewsList.value.slice(start, start + pageSize)
})

/* =========================
   页索引显示
   ========================= */

const maxPageButtons = 7

const visiblePages = computed<(number | string)[]>(() => {
    const pages: (number | string)[] = []

    if (totalPages.value <= maxPageButtons) {
        for (let i = 1; i <= totalPages.value; i++) pages.push(i)
    } else {
        const start = Math.max(currentPage.value - 2, 2)
        const end = Math.min(currentPage.value + 2, totalPages.value - 1)

        pages.push(1)
        if (start > 2) pages.push('...')
        for (let i = start; i <= end; i++) pages.push(i)
        if (end < totalPages.value - 1) pages.push('...')
        pages.push(totalPages.value)
    }

    return pages
})

/* =========================
   跳转页
   ========================= */

const jumpPage = ref<number | null>(null)

const goPage = () => {
    if (jumpPage.value == null) return

    let page = Math.floor(jumpPage.value)
    if (page < 1) page = 1
    if (page > totalPages.value) page = totalPages.value

    currentPage.value = page
    jumpPage.value = null
}

/* =========================
   日期格式
   ========================= */

const formatMD = (date: string) => {
    const d = new Date(date)
    const m = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${m}-${day}`
}

const formatYear = (date: string) =>
    new Date(date).getFullYear()

/* =========================
   监听：语言切换
   ========================= */

watch(lang, () => {
    currentPage.value = 1
})

/* =========================
   翻页回到顶部
   ========================= */

watch(currentPage, () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
</script>


<style scoped>
.all-news {
    min-height: calc(100vh - var(--vp-nav-height));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--vp-bg-soft);
}

.container {
    min-width: 60vw;
    max-width: 70vw;
    margin: 0 auto;
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.news-title {
    font-size: var(--vp-h1-size);
    font-weight: var(--vp-h1-weight);
    text-align: center;
    color: var(--vp-c-brand);
}

/* =========================
       新闻列表
       ========================= */

.news-list {
    display: flex;
    flex-direction: column;
}

/* =========================
       单条新闻（状态源）
       ========================= */

.news-row {
    position: relative;
    display: flex;
    gap: 24px;
    padding: 36px;
    align-items: center;

    border-bottom: 1px solid var(--vp-c-text-2);
    overflow: hidden;

    /* 统一状态变量 */
    --row-title: var(--vp-c-text-1);
    --row-date-bg: rgba(245, 250, 255, 0.9);
    --row-date-border: var(--vp-c-brand);
    --row-date-text: var(--vp-c-brand);
    --row-divider: var(--vp-c-brand);

    opacity: 0;
    transform: translateY(16px);
    animation: fade-up 0.5s ease forwards;
}

@keyframes fade-up {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 渐变背景：只能用伪元素 */
.news-row::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg,
            var(--vp-c-brand-5) 30%,
            var(--vp-c-brand-4) 90%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
}

/* hover：只改变量 + opacity */
.news-row:hover {
    --row-title: var(--vp-c-brand);
    --row-date-bg: var(--vp-c-brand);
    --row-date-text: var(--vp-c-bg-soft);
    --row-divider: var(--vp-c-bg-soft);
}

.news-row:hover::before {
    opacity: 1;
}

.news-row>* {
    position: relative;
    z-index: 1;
}

/* =========================
       日期卡片
       ========================= */

.date-card {
    padding: 8px;
    background-color: var(--row-date-bg);
    color: var(--row-date-text);
    border: 1.5px solid var(--row-date-border);
    text-align: center;
    font-style: italic;
    transition:
        background-color 0.3s ease,
        color 0.3s ease,
        border-color 0.3s ease;
}

.date-card .md,
.year {
    font-size: var(--vp-tiny);
    line-height: 1;
}

.date-card .divider {
    height: 1px;
    margin: 5px 0;
    background-color: var(--row-divider);
    transition: background-color 0.3s ease;
}

/* =========================
       内容区
       ========================= */

.content {
    flex: 1;
    min-width: 0;
}

.title {
    font-size: var(--vp-h3-size);
    line-height: 1.5;
    font-weight: 500;
    color: var(--row-title);
    transition: color 0.3s ease;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.summary {
    margin-top: 6px;
    color: var(--vp-c-text-2);
    font-size: var(--vp-small);
    line-height: 1.5;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* =========================
       分页
       ========================= */

.pagination {
    display: flex;
    flex-wrap: wrap;
    /* 允许换行 */
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-top: 25px;
}

.total {
    color: var(--vp-c-text-2);
    font-size: var(--vp-small);
}

.pages-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
}

.pages-wrapper button {
    padding: 6px 9px;
    border: 1px solid var(--vp-c-text-4);
    background: none;
    color: var(--vp-c-text-1);
    cursor: pointer;
    font-size: var(--vp-small);
    line-height: 1;
    transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
}

.pages-wrapper button:disabled {
    cursor: default;
    color: var(--vp-c-text-3);
    border-color: var(--vp-c-text-4);
    background-color: transparent;
    cursor: not-allowed;
}

.pages-wrapper button:hover:not(:disabled){
    background-color: var(--vp-c-bg);
}

.pages {
    display: flex;
    align-items: center;
    gap: 12px;
}

.pages button.active {
    border-color: var(--vp-c-brand);
    background-color: var(--vp-c-brand);
    color: var(--vp-c-bg-soft);
}

.pages button:disabled {
    cursor: default;
    color: var(--vp-c-text-2);
    border-color: var(--vp-c-text-4);
    background-color: transparent;
}

.pages button.active:hover{
    background-color: var(--vp-c-brand);
}

.jump-page {
    display: flex;
    align-items: center;
    gap: 6px;
}

.jump-page input {
    width: 40px;
    height: 30px;
    font-size: var(--vp-small);
    line-height: 1;
    border: 1px solid var(--vp-c-text-4);
    text-align: center;
    text-justify: center;
}

.jump-page button {
    width: 45px;
    height: 30px;
    text-align: center;
    font-size: var(--vp-small);
    line-height: 1;
    border: 1px solid var(--vp-c-text-4);
    background-color: var(--vp-bg-soft);
    cursor: pointer;
}

.jump-page button:hover {
    background-color: var(--vp-c-bg);
}

@media (max-width: 768px) {
    .container {
        max-width: 100vw;
        padding: 20px 30px;
        gap: 18px;
    }

    .news-row {
        padding: 16px 8px;
        gap: 10px;
    }

    .news-list {
        min-width: 100%;
    }

    .title {
        font-size: var(--vp-small);
    }

    .date-card {
        padding: 5px;
    }

    .pagination {
        margin-top: 10px;
    }

    .pages-wrapper {
        gap: 4px;
    }

    .pages-wrapper button {
        padding: 3px 6px;
    }

    .pages {
        gap: 4px;
    }

    .pages button {
        padding: 3px 6px;
    }

    .jump-page {
        gap: 4px;
    }

    .jump-page {
        input {
            width: 30px;
            height: 20px;
        }

        button {
            width: 30px;
            height: 20px;
        }
    }
}
</style>