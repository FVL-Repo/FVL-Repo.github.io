<template>
    <section class="research-section">
        <h1 class="page-title">{{ t.title }}</h1>

        <div class="research-container">
            <aside v-if="!isMobile" class="research-sidebar">
                <button v-for="item in researchList" :key="'nav-' + item.id" type="button" class="nav-item"
                    :class="{ active: activeId === item.id }" :aria-pressed="activeId === item.id"
                    @click="activeId = item.id">
                    {{ item.title[currentLang] }}
                </button>
            </aside>

            <div class="research-content">
                <transition-group name="fade-slide">
                    <article v-for="item in visibleList" :key="item.id" class="research-card">
                        <div class="image-wrapper">
                            <img :src="item.image" :alt="item.title[currentLang]" loading="lazy" decoding="async" />
                        </div>

                        <div class="text-content">
                            <h2 class="card-item-title">{{ item.title[currentLang] }}</h2>
                            <p class="description">{{ item.description[currentLang] }}</p>
                        </div>
                    </article>
                </transition-group>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { researchList } from '../../data/research'
import { useData } from 'vitepress'

const { lang } = useData()

// 状态管理
const activeId = ref(researchList[0]?.id)
const isMobile = ref(false)

// 语言切换逻辑
const currentLang = computed<'zh' | 'en'>(() =>
    lang.value.startsWith('zh') ? 'zh' : 'en'
)

const t = computed(() => ({
    title: currentLang.value === 'zh' ? '研究方向' : 'Research'
}))

// 核心逻辑：根据设备类型决定显示 1 个还是全部
const visibleList = computed(() => {
    if (isMobile.value) return researchList
    return researchList.filter(item => item.id === activeId.value)
})

// 监听窗口大小切换布局模式
const checkMobile = () => {
    isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.research-section {
    max-width: 85vw;
    /* min-height 代替固定 height：内容放不下时页面可滚动，而不是被裁切 */
    min-height: calc(100vh - var(--vp-nav-height));
    margin: 0 auto;
    padding: 50px 20px;
    overflow: hidden;
}

.page-title {
    text-align: center;
    font-size: var(--vp-h1-size);
    line-height: 1;
    font-weight: var(--vp-h1-weight);
    margin-bottom: 12vh;
    color: var(--vp-c-brand);
}

/* 布局容器 */
.research-container {
    display: flex;
    gap: 24px;
    align-items: center;
}

/* 侧边索引样式 - 升级 */
.research-sidebar {
    /* 窄窗口下侧边栏随视口收窄，避免挤压右侧内容区 */
    flex: 0 0 clamp(170px, 24vw, 260px);
    padding-left: clamp(4px, 1.5vw, 20px);
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.nav-item {
    padding: clamp(10px, 1.5vw, 16px) clamp(12px, 2vw, 24px);
    cursor: pointer;
    background: transparent;
    /* 背景透明，去掉大方块感 */
    border: none;
    border-left: 3px solid transparent;
    border-radius: 0 2px 2px 0;
    transition: color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
    font-family: inherit;
    font-size: clamp(1rem, 0.85rem + 0.5vw, 1.25rem);
    font-weight: 500;
    line-height: 1.5;
    text-align: left;
    color: var(--vp-c-text-2);
    position: relative;
}

.nav-item:hover {
    color: var(--vp-c-brand-2);
    background: var(--vp-c-default-soft);
    transform: translateX(2px);
}

.nav-item:focus-visible {
    outline: 2px solid var(--vp-c-brand-3);
    outline-offset: 2px;
}

.nav-item.active {
    border-left-color: var(--vp-c-brand);
    color: var(--vp-c-brand);
    font-weight: 600;
}

.nav-item.active:hover {
    transform: none;
}

/* 内容区样式 */
.research-content {
    flex: 1;
    min-width: 0;
    /* 新增以下三行，让内部元素重叠 */
    display: grid;
    grid-template-columns: 1fr;
    align-items: stretch;
}

.research-card {
    display: flex;
    gap: clamp(20px, 3vw, 40px);
    background: var(--vp-c-bg);
    padding: clamp(20px, 3vw, 40px);
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    align-items: center;
    height: auto;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
}

.research-card:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.image-wrapper {
    /* 同时受视口宽度约束，避免窄窗口/竖屏下图片挤压文字区域 */
    width: min(28vh, 22vw);
    height: auto;
    aspect-ratio: 1;
    flex-shrink: 0;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    background: var(--vp-c-default-soft);
}

.image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

/* 悬浮时图片轻微放大 */
.research-card:hover .image-wrapper img {
    transform: scale(1.025);
}

.text-content {
    flex: 1;                   
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 10px 0;
    min-width: 0; 
}

.card-item-title {
    font-size: clamp(1.2rem, 1rem + 0.7vw, 1.575rem);
    font-weight: 600;
    margin-bottom: clamp(12px, 2vw, 24px);
    color: var(--vp-c-text-1);
    position: relative;
    overflow-wrap: break-word;
}

.description {
    font-size: clamp(1rem, 0.9rem + 0.4vw, 1.25rem);
    line-height: 1.8;
    color: var(--vp-c-text-2);
    text-align: justify;
    overflow-wrap: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* 过渡动画 */
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity 0.4s ease, transform 0.4s ease;
    grid-column: 1;
    grid-row: 1;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(12px);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-12px);
}

@media (prefers-reduced-motion: reduce) {

    .fade-slide-enter-active,
    .fade-slide-leave-active,
    .nav-item,
    .image-wrapper img,
    .research-card {
        transition: none;
    }
}

/* 中间过渡区间：桌面布局但空间有限（如浏览器窗口缩放） */
@media (min-width: 769px) and (max-width: 1100px) {
    .research-section {
        max-width: 96vw;
        padding: 30px 12px;
        /* 让内容容器占满标题以下的剩余高度，实现垂直居中 */
        display: flex;
        flex-direction: column;
    }

    .page-title {
        margin-bottom: 6vh;
    }

    .research-container {
        gap: 16px;
        flex: 1;
    }
}

@media (max-width: 768px) {
    .research-section {
        height: auto;
        width: 100vw;
        padding: 10px 10px;
        overflow-x: hidden;
    }

    .page-title {
        margin-bottom: 24px;
    }

    .research-container {
        flex-direction: column;
    }

    .research-card {
        background: transparent;
        flex-direction: column;
        height: auto;
        padding: 0;
        gap: 4px;
        margin-bottom: 28px;
        box-shadow: none;
        border: none;
        border-radius: 0;
    }

    .research-card:hover {
        box-shadow: none;
    }

    .image-wrapper {
        width: 100%;
        height: auto;
        aspect-ratio: 1;
        border-radius: 2px;
    }

    .card-item-title {
        font-size: 1rem;
        margin-top: 8px;
        margin-bottom: 8px;
        padding-bottom: 8px;
    }

    .description {
        font-size: 0.9rem;
        line-height: 1.6;
    }
}
</style>