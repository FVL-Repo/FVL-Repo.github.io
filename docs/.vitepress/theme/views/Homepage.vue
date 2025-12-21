<template>
    <div class="fullpage" @wheel.prevent="handleWheel">
        <div class="container" :style="{ transform: `translateY(-${current * 100}%)` }">
            <section v-for="(page, index) in pages" :key="index" class="page">
                <slot :name="`page-${index}`">
                    <Carousel v-if="index === 0" />
                    <template v-else>
                        {{ page }}
                    </template>
                </slot>
            </section>
        </div>

        <div class="indicator">
            <span v-for="(_, index) in pages" :key="index" class="dot" :class="{ active: index === current }"
                @click="go(index)" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import Carousel from './Carousel.vue'

const pages = [0, 1, 2, 3]
const current = ref(0)
let locked = false

const go = (index) => {
    if (index < 0 || index >= pages.length) return
    current.value = index
}

const handleWheel = (e) => {
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

// 页面切换时控制 html 的 class
// const updateHtmlClass = () => {
//     const htmlEl = document.documentElement
//     if (current.value === 0) {
//         htmlEl.classList.add('dark')
//     } else {
//         htmlEl.classList.remove('dark')
//     }
// }

// 监听 current 变化
// watch(current, updateHtmlClass)

// 组件挂载时也执行一次，保证初始状态正确
// onMounted(() => {
//     updateHtmlClass()
// })

// onUnmounted(() => {
//     document.documentElement.classList.remove('dark')
// })
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
    align-items: center;
    justify-content: center;
}

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
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--vp-c-brand-2);
    cursor: pointer;
    transition: transform 0.8s, background 0.2s;
}

.dot.active {
    border: 2px solid var(--vp-c-brand);
    background: var(--vp-c-bg);
    transform: scale(1.1);
}
</style>
