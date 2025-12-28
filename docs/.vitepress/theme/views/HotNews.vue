<template>
    <section class="hot-news">
        <h1 class="news-header">
            <span class="news-title">{{ t.title }}</span>

            <a href="/news" class="more-link">
                {{ t.more }}
            </a>
        </h1>

        <div class="news-grid">
            <NewsCard v-if="mainNews" v-bind="mainNews" mode="large" />

            <div class="side">
                <NewsCard v-for="item in sideNews" :key="item.link" v-bind="item" mode="small" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import NewsCard from '../components/NewsCard.vue'
import { newsList } from '../../data/news'

/* =========================
   VitePress 语言上下文
   ========================= */

const { lang } = useData()

const currentLang = computed < 'zh' | 'en' > (() =>
    lang.value.startsWith('zh') ? 'zh' : 'en'
)

/* =========================
   页面固定文案
   ========================= */

const TEXT = {
    zh: {
        title: '新闻',
        more: '更多'
    },
    en: {
        title: 'News',
        more: 'More'
    }
} as const

const t = computed(() => TEXT[currentLang.value])

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

/* =========================
   首页新闻分组
   ========================= */

const mainNews = computed(() =>
    localizedNewsList.value[0]
)

const sideNews = computed(() =>
    localizedNewsList.value.slice(1, 5)
)
</script>


<style scoped>
.hot-news {
    padding: 0 8vw 12vh 8vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, var(--vp-bg-soft) 50%, rgb(235, 235, 250) 100%);
}

.news-header {
    padding: 0 6px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;
}

.news-title {
    font-size: var(--vp-h1-size);
    font-weight: 400;
    color: var(--vp-c-brand);
    margin-bottom: 0;
    /* 与卡片列表的间距 */
}

.more-link {
    font-size: var(--vp-h3-size);
    font-weight: 500;
    font-style: italic;
    color: var(--vp-c-text-2);
}

.more-link:hover {
    color: var(--vp-c-brand-3);
}

.news-grid {
    display: grid;
    grid-template-columns: 0.9fr 1fr;
    gap: 48px;
}

.side {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

@media (max-width: 768px) {
    .hot-news {
        padding: 35px 20px 50px 20px;
    }

    .news-grid {
        display: flex;
        flex-direction: column;
    }

    .news-grid {
        flex-direction: column;
    }

    .side {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }
}
</style>