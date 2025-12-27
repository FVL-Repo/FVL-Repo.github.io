<template>
    <div class="all-news">
        <div class="container">
            <h1 class="news-title">新闻</h1>

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
                <span class="total">共 {{ newsList.length }} 条</span>
                <div class="pages">
                    <button v-for="p in totalPages" :key="p" :class="{ active: p === currentPage }"
                        @click="currentPage = p">
                        {{ p }}
                    </button>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { newsList } from '../../data/news'

const pageSize = 6
const currentPage = ref(1)

const totalPages = computed(() =>
    Math.ceil(newsList.length / pageSize)
)

const pagedNews = computed(() => {
    const start = (currentPage.value - 1) * pageSize
    return newsList.slice(start, start + pageSize)
})

const formatMD = (date: string) => {
    const d = new Date(date)
    const m = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${m}-${day}`
}

const formatYear = (date: string) =>
    new Date(date).getFullYear()

// 翻页后回到顶部
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
    align-items: flex-start;

    border-bottom: 1px solid var(--vp-c-text-2);
    overflow: hidden;

    /* 统一状态变量 */
    --row-title: var(--vp-c-text-1);
    --row-date-bg: rgba(245, 250, 255, 0.9);
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
    border: 1.5px solid var(--row-date-text);
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
    line-height: 1.6;

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
    justify-content: space-between;
    align-items: center;
}

.total {
    color: var(--vp-c-text-2);
    font-size: var(--vp-small);
}

.pages {
    display: flex;
    align-items: center;
    gap: 12px;
}

.pages button {
    background: none;
    border: 1px solid var(--vp-c-text-4);
    padding: 6px 9px;
    font-size: var(--vp-small);
    line-height: 1;
    color: var(--vp-c-text-1);
    cursor: pointer;
    transition: color 0.2s ease;
}

.pages button:hover {
    color: var(--vp-c-brand);
}

.pages button.active {
    border-color: var(--vp-c-brand);
    background-color: var(--vp-c-brand);
    color: var(--vp-c-bg-soft);
}

/* ========================= 响应式（可选微调） ========================= */
@media (max-width: 768px) {
    .container {
        padding: 40px 20px;
    }

    .news-row {
        padding: 16px 8px;
        gap: 10px;
    }

    .news-list {
        min-width: 90%;
    }

    .title {
        font-size: var(--vp-small);
    }

    .date-card {
        padding: 5px;
    }
}
</style>