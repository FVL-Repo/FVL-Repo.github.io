<template>
    <section class="research-section">
        <h1 class="page-title">{{ t.title }}</h1>

        <div class="research-grid">
            <article v-for="item in researchList" :key="item.id" class="research-card">
                <div class="image-wrapper">
                    <img :src="item.image" :alt="item.title[lang]" />
                </div>

                <div class="content">
                    <h2 class="title">{{ item.title[lang] }}</h2>
                    <p class="description">{{ item.description[lang] }}</p>
                </div>
            </article>
        </div>
    </section>
</template>

<script setup lang="ts">
import { researchList } from '../../data/research'

const lang = 'zh' // 或从 useI18n / useData 中获取

const t = {
    title: lang === 'zh' ? '研究方向' : 'Research Directions'
}
</script>

<style scoped>
.research-section {
    max-width: 90vw;
    height: calc(100vh - var(--vp-nav-height));
    margin: 0 auto;
    padding: 50px 20px;
    overflow: hidden;
}

.page-title {
    text-align: center;
    font-size: var(--vp-h1-size);
    line-height: 1;
    font-weight: var(--vp-h1-weight);
    margin-bottom: 60px;
    color: var(--vp-c-brand);
}

.research-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 48px;
}

.research-card {
    display: flex;
    flex-direction: column;
    background: var(--vp-c-bg-soft);
    border-radius: 2px;
    overflow: hidden;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.research-card:hover {
    transform: translateY(-6px);
    background: var(--vp-c-bg);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}

.image-wrapper {
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
}

.image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content {
    padding: 18px;
}

.title {
    font-size: var(--vp-h3-size);
    font-weight: 500;
    margin-bottom: 12px;
    color: var(--vp-c-brand);
}

.description {
    font-size: var(--vp-small);
    line-height: 1.5;
    color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
    .research-section {
        height: auto;
        width: 100vw;
        min-height: calc(100vh - var(--vp-nav-height));
        padding: 40px 20px;
        overflow-x: hidden;
    }

    .page-title {
        margin-bottom: 36px;
    }

    .research-grid {
        padding: 0;
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .image-wrapper {
        aspect-ratio: 1;
    }

    .content {
        padding: 6px 8px;
    }

    .title{
        margin-bottom: 6px;
    }
}
</style>