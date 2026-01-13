<template>
    <div class="fullpage" @wheel="handleWheel">
        <div class="container" :style="{ transform: `translateY(-${current * 100}%)` }">
            <section v-for="(page, index) in pages" :key="index" class="page">
                <!-- 非最后一页：正常 slot -->
                <template v-if="index !== lastPageIndex">
                    <slot :name="`page-${index}`">
                        <Carousel v-if="index === 0" />
                        <HotNews v-else-if="index === 1" />
                        <Research v-else-if="index === 2" />
                        <template v-else>
                            {{ page }}
                        </template>
                    </slot>
                </template>

                <!-- 最后一页：内容 + Footer -->
                <template v-else>
                    <div class="last-page">
                        <div class="last-content">
                            <slot :name="`page-${index}`">
                                {{ page }}
                            </slot>
                        </div>

                        <Footer :Footer_Data="Footer_Data" />
                    </div>
                </template>
            </section>
        </div>

        <!-- 指示器 -->
        <div class="indicator">
            <span v-for="(_, index) in pages" :key="index" class="dot" :class="{ active: index === current }"
                @click="go(index)" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, computed } from 'vue'
import Carousel from './Carousel.vue'
import HotNews from './HotNews.vue'
import Research from './Research.vue'
import Footer from '../components/Footer.vue'

const pages = [0, 1, 2, 3]
const current = ref(0)
const lastPageIndex = pages.length - 1

// 触控板防抖
let locked = false
let wheelValues = []
let lastWheelTime = 0

const WHEEL_AVG_COUNT = 10     // 取最近 10 次
const WHEEL_THRESHOLD = 50    // 翻页阈值（可调）
const ANIMATION_TIME = 700


const go = (index) => {
    if (isMobile.value) return
    if (index < 0 || index >= pages.length) return
    current.value = index
}

const getAverage = (arr, count) => {
    const slice = arr.slice(-count)
    const sum = slice.reduce((a, b) => a + b, 0)
    return sum / slice.length
}

const handleWheel = (e) => {
    if (isMobile.value) return

    // 阻止默认滚动行为
    e.preventDefault()

    const now = Date.now()
    const deltaY = e.deltaY
    const deltaX = e.deltaX || 0

    // 1. 忽略横向滚动（只处理纵向）
    if (Math.abs(deltaX) > Math.abs(deltaY)) return

    // 2. 记录滚动强度，用于惯性计算
    wheelValues.push(Math.abs(deltaY))
    if (wheelValues.length > 100) wheelValues.shift()

    // 3. 超过一定时间间隔则重置滚动记录
    if (now - lastWheelTime > 200) {
        wheelValues = []
    }
    lastWheelTime = now

    // 4. 计算最近滚动的平均强度
    const avg = getAverage(wheelValues, WHEEL_AVG_COUNT)

    // 5. 滚动强度不够，忽略本次滚动
    if (avg < WHEEL_THRESHOLD) return

    // 6. 防止动画期间重复触发
    if (locked) return
    locked = true

    // 7. 根据滚动方向决定翻页
    if (deltaY > 0) {
        go(current.value + 1)
    } else {
        go(current.value - 1)
    }

    // 8. 重置滚动记录，防止滞后行为
    wheelValues = []

    // 9. 设置解锁延迟，避免重复触发
    setTimeout(() => {
        locked = false
    }, ANIMATION_TIME)
}

/* 移动端检测 */
const isMobile = ref(false)

const checkMobile = () => {
    isMobile.value = window.innerWidth <= 768
}

const checkDark = () => {
    const isDark = isMobile.value || current.value === 0;
    document.documentElement.style.setProperty(
        '--vp-nav-color',
        isDark ? 'var(--vp-nav-dark)' : 'var(--vp-bg-soft)'
    )
    document.documentElement.style.setProperty(
        '--vp-nav-text',
        isDark ? 'var(--vp-bg)' : 'var(--vp-c-text-1)'
    )
    document.documentElement.style.setProperty(
        '--vp-nav-text-activate',
        isDark ? 'var(--vp-bg-soft)' : 'var(--vp-c-brand-1)'
    )
    document.documentElement.style.setProperty(
        '--vp-nav-active',
        isDark ? 'var(--vp-nav-active-dark)' : 'var(--vp-nav-active-light)'
    )
    document.documentElement.style.setProperty(
        '--vp-logo-filter',
        isDark ? 'brightness(30) saturate(0.1)' : 'none'
    )
}

const removeDark = () => {
    document.documentElement.style.setProperty('--vp-nav-color', 'var(--vp-bg-soft)')
    document.documentElement.style.setProperty('--vp-nav-text', 'var(--vp-c-text-1)')
    document.documentElement.style.setProperty('--vp-nav-text-activate', 'var(--vp-c-brand-1)')
    document.documentElement.style.setProperty('--vp-nav-active', 'var(--vp-nav-active-light)')
    document.documentElement.style.setProperty('--vp-logo-filter', 'none')
}

onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
    checkDark()
})

onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
    removeDark()
})

watch([current, isMobile], () => {
    checkDark()
}, { immediate: true })

</script>

<style scoped>
.fullpage {
    height: calc(100vh - var(--vp-nav-height));
    width: 100%;
    overflow: hidden;
}

.container {
    height: 100%;
    transition: transform 0.7s ease;
}

.page {
    height: 100%;
    width: 100%;
    display: flex;
}

/* 最后一页布局 */
.last-page {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.last-content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 指示器 */
.indicator {
    position: fixed;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 10;
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgb(200, 210, 255);
    cursor: pointer;
    transition: transform 0.8s, background 0.2s;
}

.dot.active {
    border: 2px solid var(--vp-c-brand-1);
    background: var(--vp-bg);
    transform: scale(1.1);
}

/* 移动端降级 */
@media (max-width: 768px) {
    .fullpage {
        height: auto;
        overflow: visible;
    }

    .container {
        transition: none;
        transform: none !important;
    }

    .page {
        height: auto;
    }

    .indicator {
        display: none;
    }
}
</style>
