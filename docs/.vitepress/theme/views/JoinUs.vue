<template>
    <div class="recruitment-page">
        <div class="container">
            <h1 class="title">{{ t.title }}</h1>

            <p class="intro">{{ t.intro }}</p>

            <div class="button-group">
                <button v-for="item in tabs" :key="item.key" class="tab-button"
                    :class="{ active: activeTab === item.key }" @click="activeTab = item.key">
                    {{ item.label }}
                </button>
            </div>

            <div class="content-card">
                <!-- Postdoc -->
                <div v-if="activeTab === 'postdoc'" class="content">
                    <h2>{{ t.postdoc.title }}</h2>

                    <p>{{ t.postdoc.desc }}</p>

                    <h3>{{ t.postdoc.directionsTitle }}</h3>
                    <ul>
                        <li v-for="item in t.postdoc.directions" :key="item">
                            {{ item }}
                        </li>
                    </ul>

                    <h3>{{ t.postdoc.dutiesTitle }}</h3>
                    <ol>
                        <li v-for="item in t.postdoc.duties" :key="item">
                            {{ item }}
                        </li>
                    </ol>

                    <h3>{{ t.postdoc.requirementsTitle }}</h3>
                    <ol>
                        <li v-for="item in t.postdoc.requirements" :key="item">
                            {{ item }}
                        </li>
                    </ol>

                    <h3>{{ t.postdoc.benefitsTitle }}</h3>
                    <ol>
                        <li v-for="item in t.postdoc.benefits" :key="item">
                            {{ item }}
                        </li>
                    </ol>

                    <p class="email">
                        {{ t.postdoc.emailPrefix }}
                        <a href="mailto:zhinchen@fudan.edu.cn">zhinchen@fudan.edu.cn</a>
                        {{ t.postdoc.contact }}
                        {{ t.postdoc.emailNote }}
                    </p>
                </div>

                <!-- Graduate -->
                <div v-else-if="activeTab === 'graduate'" class="content">
                    <h2>{{ t.graduate.title }}</h2>

                    <p>{{ t.graduate.desc }}</p>

                    <p class="email">
                        {{ t.graduate.emailPrefix }}
                        <a href="mailto:zxwu@fudan.edu.cn">zxwu@fudan.edu.cn</a>
                        {{ t.graduate.contact }}
                        {{ t.graduate.emailNote }}
                    </p>

                    <p class="note">{{ t.graduate.note }}</p>
                </div>

                <!-- Undergraduate -->
                <div v-else class="content">
                    <h2>{{ t.undergraduate.title }}</h2>

                    <p>{{ t.undergraduate.p1 }}</p>
                    <p>{{ t.undergraduate.p2 }}</p>
                    <p>{{ t.undergraduate.p3 }}</p>

                    <p class="email">
                        {{ t.undergraduate.emailPrefix }}
                        <a href="mailto:zxwu@fudan.edu.cn">zxwu@fudan.edu.cn</a>
                        {{ t.undergraduate.contact }}
                        {{ t.undergraduate.emailNote }}
                    </p>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useData } from 'vitepress'
import {content} from '../../data/recruitment'

const { lang } = useData()
const isZh = computed(() => lang.value === 'zh-CN')

const activeTab = ref<'postdoc' | 'graduate' | 'undergraduate'>('postdoc')

const t = computed(() => (isZh.value ? content.zh : content.en))

const tabs = computed(() => [
    { key: 'postdoc', label: t.value.tabs.postdoc },
    { key: 'graduate', label: t.value.tabs.graduate },
    { key: 'undergraduate', label: t.value.tabs.undergraduate }
])
</script>

<style scoped>
.recruitment-page {
    min-height: calc(100vh - var(--vp-nav-height));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--vp-bg-soft);
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.title {
    font-size: var(--vp-h1-size);
    line-height: 1;
    font-weight: var(--vp-h1-weight);
    text-align: center;
    color: var(--vp-c-brand);
}

.intro {
    max-width: 960px;
    text-align: center;
    margin: 0 auto;
    color: var(--vp-c-text-2);
    font-size: var(--vp-h3-size);
    line-height: 1.8;
}

.button-group {
    display: flex;
    justify-content: center;
    gap: 60px;
    padding-bottom: 10px;
}

.tab-button {
    min-width: 150px;
    padding: 12px 20px;
    border-radius: 3px;
    background-color: var(--vp-bg-soft);
    color: var(--vp-c-text-1);
    cursor: pointer;
    font-size: var(--vp-h3-size);
    font-weight: 500;
}

.tab-button:hover {
    color: var(--vp-c-brand-1);
}

.tab-button.active {
    color: var(--vp-c-brand-1);
    border: 2px solid var(--vp-c-brand-2);
}

.content-card {
    background-color: var(--vp-bg);
    border-radius: 4px;
    padding: 40px 80px;
    color: var(--vp-c-text-1);
}

.content {
    h2 {
        text-align: center;
        font-size: var(--vp-h2-size);
        font-weight: var(--vp-h2-weight);
        margin-bottom: 3%;
    }

    h3 {
        font-size: var(--vp-h3-size);
        font-weight: 600;
        line-height: 2.0;
    }

    p,
    li {
        font-size: var(--vp-p-size);
        line-height: 1.8;
    }

    p {
        text-indent: 2rem;
    }

    ul,
    ol {
        padding-left: 3rem;
        color: var(--vp-c-text-1);
    }

    ul {
        list-style-type: disc;
    }

    ol {
        list-style-type: decimal;
    }
}

.email {
    color: var(--vp-c-text-1);
}

.email a {
    color: var(--vp-c-brand-1);
    text-decoration: none;
}

.note {
    color: var(--vp-c-text-1);
}


@media (max-width: 768px) {
    .container {
        padding: 20px 24px;
        max-width: 100vw;
    }

    .content-card {
        background-color: var(--vp-bg);
        border-radius: 4px;
        padding: 20px 30px;
        color: var(--vp-c-text-1);
    }

    .button-group {
        gap: 8px;
    }

    .tab-button {
        min-width: 96px;
        padding: 6px 0;
    }

    .container {

        ul,
        ol {
            padding-left: 2rem;
        }
    }

    .content p {
        text-indent: 1rem;
    }
}
</style>