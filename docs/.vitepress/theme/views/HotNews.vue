<template>
    <section class="hot-news">
        <h1 class="news-title">新闻</h1>
        <div class="news-grid">
            <NewsCard v-if="mainNews" v-bind="mainNews" mode="large" />

            <div class="side">
                <NewsCard v-for="item in sideNews" :key="item.link" v-bind="item" mode="small" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import NewsCard from '../components/NewsCard.vue'
import { newsList } from '../../data/news'

const mainNews = computed(() => newsList[0])
const sideNews = computed(() => newsList.slice(1, 5))
</script>

<style scoped>
.hot-news {
    width: 100%;
    max-width: 1900px;
    margin: 0 auto;
    padding: 0 120px 60px 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.news-title {
    width: 100%;
    padding: 10px 0;
    font-size: var(--vp-h1-size);
    font-weight: 500;
    color: var(--vp-c-brand);
    text-align: start;
    margin-bottom: 24px;
    /* 与卡片列表的间距 */
}

.news-grid {
    display: grid;
    grid-template-columns: 0.9fr 1fr;
    gap: 36px;
}

.side {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

@media (max-width: 768px) {

    .hot-news {
        padding: 80px 60px;
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