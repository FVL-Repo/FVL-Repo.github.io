<template>
    <div class="carousel">

        <div class="bg-gradient"></div>
        <div class="track" :style="{ transform: `translateX(-${current * 100}%)` }">
            <div v-for="(item, index) in slides" :key="index" class="slide">
                <img :src="item.image" alt="" />
                <div class="mask">
                    <h1>{{ item.title }}</h1>
                    <p>{{ item.desc }}</p>
                </div>
            </div>
        </div>

        <div class="dots">
            <span v-for="(_, index) in slides" :key="index" :class="{ active: index === current }" @click="go(index)" />
        </div>

        <div class="caption" v-if="captionText">
            {{ captionText }}
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const slides = [
    {
        image: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/building.png',
    },
    {
        image: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/jiangwan_4.png',
    },
    {
        image: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/carousel_images/kexuejishujiang2023.png',
    },
    {
        image: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/jiangwan_5.png',
    },
]

const current = ref(0)
let timer = null

const go = (index) => {
    current.value = index
}

const next = () => {
    current.value = (current.value + 1) % slides.length
}

onMounted(() => {
    timer = setInterval(next, 8000)
})

onUnmounted(() => {
    clearInterval(timer)
})

const captions = [
    '',
    '姜育刚团队获国家自然科学奖二等奖',
    '姜育刚团队获上海市技术发明一等奖',
    '实验室在 CVPR2024 三项挑战赛中斩获冠军'
];

const captionText = computed(() => captions[current.value]);

</script>

<style scoped>
.carousel {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.track {
    display: flex;
    height: 100%;
    transition: transform 0.8s ease;
}

.slide {
    flex: 0 0 100%;
    height: 100%;
    position: relative;
    background: linear-gradient(to bottom, var(--vp-c-brand-1) 20%, var(--vp-c-brand-3) 80%);
    display: flex;
    align-items: center;
    /* 垂直偏上 */
    justify-content: center;
    /* 水平居中 */
}

.slide img {
    width: 90%;
    /* 固定宽度 */
    height: auto;
    /* 自适应高度，保持比例 */
    object-fit: contain;
    display: block;
    transform: translateY(-8%);
}

.dots {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 12px;
}

.dots span {
    width: 28px;
    height: 4px;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    transition: background 0.3s, transform 0.3s;
}

.dots span.active {
    background: #fff;
    transform: scaleX(1.2);
}

.caption {
    position: absolute;
    bottom: 20%;
    left: 5%;
    right: 5%;
    width: 90%;
    padding: 12px 20px;
    background: linear-gradient(to right,
            rgba(100, 100, 100, 0.7) 25%,
            rgba(120, 120, 120, 0.1) 75%);
    /* 灰底，可半透明 */
    color: #fff;
    /* 白字 */
    font-size: 24px;
    text-align: center;
    z-index: 3;
    /* 确保在轮播图和 dots 之上 */
    box-sizing: border-box;
}
</style>
