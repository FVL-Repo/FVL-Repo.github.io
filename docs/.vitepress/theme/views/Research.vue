<template>
    <section class="research-section">
        <h1 class="page-title">{{ t.title }}</h1>

        <div class="research-container">
            <aside v-if="!isMobile" class="research-sidebar">
                <div v-for="item in researchList" :key="'nav-' + item.id" class="nav-item"
                    :class="{ active: activeId === item.id }" @click="activeId = item.id">
                    {{ item.title[currentLang] }}
                </div>
            </aside>

            <div class="research-content">
                <transition-group name="fade-slide">
                    <article v-for="item in visibleList" :key="item.id" class="research-card">
                        <div class="image-wrapper">
                            <img :src="item.image" :alt="item.title[currentLang]" />
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
    flex: 0 0 260px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.nav-item {
    padding: 16px 24px;
    cursor: pointer;
    background: transparent;
    /* 背景透明，去掉大方块感 */
    border-left: 3px solid transparent;
    transition: all 0.3s ease;
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--vp-c-text-2);
    position: relative;
}

.nav-item:hover {
    color: var(--vp-c-brand-2);
    transform: translateX(1px);
}

.nav-item.active {
    background: var(--vp-c-);
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
    gap: 40px;
    background: var(--vp-c-bg);
    padding: 40px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    align-items: center;
    height: auto;
    overflow: hidden;
}

.image-wrapper {
    width: 28vh;              
    height: 28vh;
    flex-shrink: 0;
    border-radius: 4px;
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
    font-size: 1.575rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: var(--vp-c-text-1);
}

.description {
    font-size: 1.25rem;
    line-height: 1.8;
    color: var(--vp-c-text-2);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* 过渡动画 */
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity 0.4s ease;
    grid-column: 1;
    grid-row: 1;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
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
        margin-bottom: 16px;
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
        margin-bottom: 8px;
    }

    .description {
        font-size: 0.9rem;
        line-height: 1.6;
    }
}
</style>