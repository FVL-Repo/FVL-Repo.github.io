<template>
    <div class="carousel">
      <div class="bg-gradient"></div>
      <div
        class="track"
        :style="{ transform: `translateX(-${current * 100}%)`, transition: trackStyle.transition }"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
      >
        <div v-for="(item, index) in extendedSlides" :key="index" class="slide">
          <img :src="item.image" alt="" />
        </div>
      </div>
  
      <div class="dots">
        <span
          v-for="(_, index) in slides"
          :key="index"
          :class="{ active: index === realIndex }"
          @click="go(index)"
        />
      </div>
  
      <div class="caption" v-if="captionText">
        {{ captionText }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
  
  const slides = [
    { image: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/building.png', title: '', desc: '' },
    { image: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/jiangwan_4.png', title: '姜育刚团队获国家自然科学奖二等奖', desc: '' },
    { image: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/carousel_images/kexuejishujiang2023.png', title: '姜育刚团队获上海市技术发明一等奖', desc: '' },
    { image: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/jiangwan_5.png', title: '实验室在 CVPR2024 三项挑战赛中斩获冠军', desc: '' },
  ]
  
  // 克隆首尾节点实现无缝轮播
  const extendedSlides = ref([slides[slides.length - 1], ...slides, slides[0]])
  
  const current = ref(1)
  const trackStyle = ref({ transition: 'transform 0.8s ease' })
  let timer = null
  
  const next = () => {
    current.value++
    enableTransition()
    if (current.value > slides.length) {
      setTimeout(() => {
        disableTransition()
        current.value = 1
      }, 800)
    }
  }
  
  const prev = () => {
    current.value--
    enableTransition()
    if (current.value === 0) {
      setTimeout(() => {
        disableTransition()
        current.value = slides.length
      }, 800)
    }
  }
  
  const go = (index) => {
    current.value = index + 1
    enableTransition()
  }
  
  const enableTransition = () => {
    trackStyle.value.transition = 'transform 0.8s ease'
  }
  
  const disableTransition = () => {
    trackStyle.value.transition = 'none'
  }
  
  onMounted(() => {
    timer = setInterval(next, 5000)
  })
  
  onUnmounted(() => {
    clearInterval(timer)
  })
  
  const realIndex = computed(() => {
    return current.value === 0
      ? slides.length - 1
      : current.value === slides.length + 1
      ? 0
      : current.value - 1
  })
  
  const captionText = computed(() => slides[realIndex.value].title || '')
  
  // --- touch swipe ---
  const startX = ref(0)
  const moveX = ref(0)
  const isSwiping = ref(false)
  
  const onTouchStart = (e) => {
    clearInterval(timer)
    startX.value = e.touches[0].clientX
    isSwiping.value = true
  }
  
  const onTouchMove = (e) => {
    if (!isSwiping.value) return
    moveX.value = e.touches[0].clientX - startX.value
  }
  
  const onTouchEnd = () => {
    if (!isSwiping.value) return
    const threshold = 50
    if (moveX.value > threshold) prev()
    else if (moveX.value < -threshold) next()
    moveX.value = 0
    isSwiping.value = false
    timer = setInterval(next, 5000)
  }
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
  }
  
  .slide {
    flex: 0 0 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, var(--vp-c-brand-1) 20%, var(--vp-c-brand-3) 80%);
  }
  
  .slide img {
    width: 90%;
    height: auto;
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
    z-index: 4;
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
    background: linear-gradient(to right, rgba(100, 100, 100, 0.7) 25%, rgba(120, 120, 120, 0.1) 75%);
    color: #fff;
    font-size: 24px;
    text-align: center;
    z-index: 2;
    box-sizing: border-box;
  }
  
  @media (max-width: 768px) {
    .slide img {
      width: 100%;
      transform: translateY(-15px);
    }
    .caption {
      left: 0;
      right: 0;
      width: 100%;
      bottom: 6px;
      padding: 2px 10px;
      font-size: 16px;
    }
    .dots {
      display: none;
    }
  }
  </style>
  