<template>
    <div class="recruitment-page">
        <div class="container">
            <nav class="back-nav">
                <a href="./"> ← {{ t.back }}</a>
            </nav>

            <div class="content-card">
                <div v-if="type === 'postdoc'">
                    <h2 class="section-main-title">{{ t.postdoc.title }}</h2>
                    <p class="desc-text">{{ t.postdoc.desc }}</p>

                    <section class="info-block">
                        <h3>{{ t.postdoc.directionsTitle }}</h3>
                        <ul>
                            <li v-for="item in t.postdoc.directions" :key="item">{{ item }}</li>
                        </ul>
                    </section>

                    <section class="info-block">
                        <h3>{{ t.postdoc.dutiesTitle }}</h3>
                        <ol>
                            <li v-for="item in t.postdoc.duties" :key="item">{{ item }}</li>
                        </ol>
                    </section>

                    <section class="info-block">
                        <h3>{{ t.postdoc.requirementsTitle }}</h3>
                        <ol>
                            <li v-for="item in t.postdoc.requirements" :key="item">{{ item }}</li>
                        </ol>
                    </section>

                    <section class="info-block">
                        <h3>{{ t.postdoc.benefitsTitle }}</h3>
                        <ol>
                            <li v-for="item in t.postdoc.benefits" :key="item">{{ item }}</li>
                        </ol>
                    </section>

                    <div class="contact-box">
                        <p class="email">
                            {{ t.postdoc.emailPrefix }}
                            <a href="mailto:zhinchen@fudan.edu.cn">zhinchen@fudan.edu.cn</a>
                            {{ t.postdoc.contact }}
                        </p>
                        <p class="note-text">{{ t.postdoc.emailNote }}</p>
                    </div>
                </div>

                <div v-else-if="type === 'graduate'">
                    <h2 class="section-main-title">{{ t.graduate.title }}</h2>
                    <p class="desc-text">{{ t.graduate.desc }}</p>

                    <div class="contact-box">
                        <p class="email">
                            {{ t.graduate.emailPrefix }}
                            <a href="mailto:zxwu@fudan.edu.cn">zxwu@fudan.edu.cn</a>
                            {{ t.graduate.contact }}
                        </p>
                        <p class="note-text">{{ t.graduate.emailNote }}</p>
                        <p class="important-note">{{ t.graduate.note }}</p>
                    </div>
                </div>

                <div v-else>
                    <h2 class="section-main-title">{{ t.undergraduate.title }}</h2>
                    <p class="desc-text">{{ t.undergraduate.p1 }}</p>

                    <div class="contact-box">
                        <p class="email">
                            {{ t.undergraduate.emailPrefix }}
                            <a href="mailto:zxwu@fudan.edu.cn">zxwu@fudan.edu.cn</a>
                            {{ t.undergraduate.contact }}
                        </p>
                        <p class="note-text">{{ t.undergraduate.emailNote }}</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { content } from '../../../data/recruitment'

const props = defineProps<{
    type: 'postdoc' | 'graduate' | 'undergraduate'
}>()

const { lang } = useData()
const currentLang = computed<'zh' | 'en'>(() =>
    lang.value.startsWith('zh') ? 'zh' : 'en'
)

const t = computed(() => content[currentLang.value])
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
    padding: 50px 40px 70px 40px;
    flex: 1;
}

.content-card {
    background-color: var(--vp-bg);
    border-radius: 8px;
    padding: 40px 50px;
    border: 1px solid var(--vp-c-gutter);
    box-shadow: var(--vp-shadow-1);
}

.section-main-title {
    text-align: center;
    font-size: var(--vp-h2-size);
    font-weight: 600;
    margin-bottom: 24px;
    color: var(--vp-c-text-1);
    border-bottom: none;
}

.desc-text {
    font-size: var(--vp-p-size);
    line-height: 1.7;
    color: var(--vp-c-text-1);
    margin-bottom: 24px;
}

.info-block {
    margin-bottom: 28px;
}

.info-block h3 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: var(--vp-h3-size);
    margin-bottom: 12px;
    color: var(--vp-c-brand-1);
}

.info-block ul {
    list-style: disc;
    padding-left: 1.5rem;
}

.info-block ol {
    list-style: decimal;
    padding-left: 1.5rem;
}

.info-block li {
    display: list-item;
    margin-bottom: 8px;
    line-height: 1.5;
    color: var(--vp-c-text-1);
    font-size: var(--vp-p-size);
}

/* 联系方式区域 */
.contact-box {
    margin-top: 20px;
    padding-top: 24px;
    border-top: 1px dashed var(--vp-c-gutter);
}

.email {
    font-size: var(--vp-p-size);
    font-weight: 600;
    margin-bottom: 4px;
}

.email a {
    color: var(--vp-c-brand-1);
    text-decoration: underline;
    text-underline-offset: 4px;
}

.note-text {
    font-size: var(--vp-small);
    color: var(--vp-c-text-2);
}

.important-note {
    margin-top: 16px;
    padding: 6px 8px;
    background-color: var(--vp-c-brand-soft);
    border-left: 4px solid var(--vp-c-brand-1);
    border-radius: 4px;
    font-size: var(--vp-small);
}

/* 切换动画 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.back-nav {
    margin-left: 5px;
    margin-bottom: 20px;
}

.back-nav a {
    color: var(--vp-c-text-2);
    font-size: var(--vp-p-size);
    transition: color 0.2s;
}

.back-nav a:hover {
    color: var(--vp-c-brand);
}

@media (max-width: 768px) {
    .container {
        padding: 20px 30px 30px;
    }

    .content-card {
        border-radius: 6px;
        padding: 20px;
    }

    .section-main-title {
        margin-bottom: 8px;
    }

    .back-nav {
        margin-bottom: 12px;
    }

    .desc-text {
        margin-bottom: 8px;
    }

    .info-block {
        margin-bottom: 12px;
    }

    .info-block h3 {
        margin-bottom: 6px;
    }

    .contact-box {
        margin-top: 16px;
        padding-top: 16px;
    }

    .important-note {
        margin-top: 8px;
        padding: 3px 6px;
        border-radius: 2px;
    }
}
</style>