<template>
    <div class="fullpage" @wheel.prevent="handleWheel">
        <div class="container" :style="{ transform: `translateY(-${current * 100}%)` }">
            <section v-for="(page, index) in pages" :key="index" class="page">
                <!-- 非最后一页：正常 slot -->
                <template v-if="index !== lastPageIndex">
                    <slot :name="`page-${index}`">
                        <Carousel v-if="index === 0" />
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
import Footer from '../components/Footer.vue'

const pages = [0, 1, 2, 3]
const current = ref(0)
const lastPageIndex = pages.length - 1

let locked = false

const go = (index) => {
    if (isMobile.value) return
    if (index < 0 || index >= pages.length) return
    current.value = index
}

const handleWheel = (e) => {
    if (isMobile.value) return
    if (locked) return

    locked = true

    if (e.deltaY > 0) {
        go(current.value + 1)
    } else {
        go(current.value - 1)
    }

    setTimeout(() => {
        locked = false
    }, 700)
}

/* 移动端检测 */
const isMobile = ref(false)

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

watch([current, isMobile], () => {

    document.documentElement.style.setProperty(
        '--vp-nav-color',
        isMobile.value || current.value === 0 ? 'var(--vp-c-brand)' : 'var(--vp-c-bg-soft)'
    )
    document.documentElement.style.setProperty(
        '--vp-nav-text',
        isMobile.value || current.value === 0 ? 'var(--vp-c-bg)' : 'var(--vp-c-text-2)'
    )
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
    background: var(--vp-c-brand-3);
    cursor: pointer;
    transition: transform 0.8s, background 0.2s;
}

.dot.active {
    border: 2px solid var(--vp-c-brand);
    background: var(--vp-c-bg);
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
