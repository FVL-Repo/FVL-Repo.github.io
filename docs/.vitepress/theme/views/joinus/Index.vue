<template>
    <div class="recruitment-page">
        <div class="container">
            <header class="header-section">
                <h1 class="title">{{ t.title }}</h1>
                <p class="intro">{{ t.intro }}</p>
            </header>

            <div class="entry-grid">
                <a v-for="item in tabs" :key="item.key" :href="item.key" class="entry-card">
                    <div class="card-content">
                        <h2>{{ item.label }}</h2>
                        <p>{{ getBrief(item.key) }}</p>
                        <span class="more-link">{{ t.more }} →</span>
                    </div>
                </a>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { content } from '../../../data/recruitment'

const { lang } = useData()

const currentLang = computed<'zh' | 'en'>(() =>
    lang.value.startsWith('zh') ? 'zh' : 'en'
)

const t = computed(() => content[currentLang.value])

const tabs = computed(() => [
    { key: 'postdoc', label: t.value.tabs.postdoc },
    { key: 'graduate', label: t.value.tabs.graduate },
    { key: 'undergraduate', label: t.value.tabs.undergraduate }
])

// 获取简单的描述文字
const getBrief = (key: string) => {
    return t.value[key].desc || t.value[key].p1
}

</script>

<style scoped>
.recruitment-page {
    min-height: calc(100vh - var(--vp-nav-height));
    display: flex;
    flex-direction: column;
}

.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 50px 40px;
    flex: 1;
}

.header-section {
    text-align: center;
    margin-bottom: 24px;
}

.title {
    font-size: var(--vp-h1-size);
    line-height: 1;
    font-weight: var(--vp-h1-weight);
    color: var(--vp-c-brand);
    margin-bottom: 30px;
}

.intro {
    color: var(--vp-c-text-2);
    font-size: var(--vp-p-size);
    line-height: 1.8;
    max-width: 900px;
    margin: 0 auto;
}

.entry-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px;
    margin-top: 30px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}

.entry-card {
    background-color: var(--vp-bg);
    border: 1px solid var(--vp-c-gutter);
    border-radius: 8px;
    padding: 20px 30px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.entry-card:hover {
    transform: translateY(-2px);
    border-color: var(--vp-c-brand);
    box-shadow: var(--vp-shadow-3);
}

.entry-card h2 {
    color: var(--vp-c-brand-1);
    margin-bottom: 12px;
    font-size: var(--vp-h2-size);
    font-weight: 500;
}

.entry-card p {
    font-size: var(--vp-small);
    line-height: 1.8;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
}

.more-link {
    display: inline-block;
    margin-top: 12px;
    color: var(--vp-c-brand);
    font-size: var(--vp-small);
    font-weight: 500;
}

@media (max-width: 768px) {
    .container {
        padding: 20px 30px 40px 30px;
        flex: 1;
    }

    .title {
        margin-bottom: 16px;
    }

    .entry-grid {
        margin-top: 16px;
    }

    .entry-card {
        padding: 12px 16px;
        border-radius: 4px;
    }

    .entry-card h2 {
        margin-bottom: 6px;
    }

    .more-link {
        margin-top: 4px;
    }
}
</style>