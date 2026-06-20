<template>
    <div class="all-people">
        <div class="container">
            <h1 class="people-title">{{ t.facultyTitle }}</h1>

            <div class="people-grid">
                <component :is="person.website ? 'a' : 'div'" v-for="(person, index) in facultyList"
                    :key="person.name.en" :href="person.website || undefined"
                    :target="person.website ? '_blank' : undefined" rel="noopener noreferrer" class="person-card"
                    :class="{ 'clickable': person.website }" :style="{ animationDelay: `${index * 100}ms` }">
                    <div class="avatar-wrapper">
                        <img :src="person.avatar" :alt="person.name[currentLang]" class="person-avatar" />
                    </div>

                    <div class="person-info">
                        <h2 class="person-name">{{ person.name[currentLang] }}</h2>
                        <p class="person-position">{{ person.position[currentLang] }}</p>
                        <p v-if="person.description?.[currentLang]" class="person-description">
                            {{ person.description[currentLang] }}
                        </p>
                    </div>
                </component>
            </div>

            <div class="section-divider" />

            <h2 class="people-title postdoc-title">{{ t.postdocTitle }}</h2>

            <div class="people-grid">
                <component :is="student.website ? 'a' : 'div'" v-for="(student, index) in postdocList"
                    :key="student.name.en" :href="student.website || undefined"
                    :target="student.website ? '_blank' : undefined" rel="noopener noreferrer"
                    class="person-card"
                    :class="{ 'clickable': student.website }"
                    :style="{ animationDelay: `${index * 100}ms` }">
                    <div class="avatar-wrapper">
                        <img :src="student.avatar" :alt="student.name[currentLang]" class="person-avatar" />
                    </div>
                    <div class="person-info">
                        <h2 class="person-name">{{ student.name[currentLang] }}</h2>
                        <p class="person-position">{{ student.year }}</p>
                    </div>
                </component>
            </div>

            <div class="section-divider" />

            <h2 class="people-title phd-title">{{ t.phdTitle }}</h2>

            <div class="people-grid">
                <component :is="student.website ? 'a' : 'div'" v-for="(student, index) in phdList"
                    :key="student.name.en" :href="student.website || undefined"
                    :target="student.website ? '_blank' : undefined" rel="noopener noreferrer"
                    class="person-card"
                    :class="{ 'clickable': student.website }"
                    :style="{ animationDelay: `${index * 100}ms` }">
                    <div class="avatar-wrapper">
                        <img :src="student.avatar" :alt="student.name[currentLang]" class="person-avatar" />
                    </div>
                    <div class="person-info">
                        <h2 class="person-name">{{ student.name[currentLang] }}</h2>
                        <p class="person-position">{{ student.year }}</p>
                    </div>
                </component>
            </div>

            <div class="section-divider" />

            <h2 class="people-title master-title">{{ t.masterTitle }}</h2>

            <div class="people-grid">
                <component :is="student.website ? 'a' : 'div'" v-for="(student, index) in masterList"
                    :key="student.name.en" :href="student.website || undefined"
                    :target="student.website ? '_blank' : undefined" rel="noopener noreferrer"
                    class="person-card"
                    :class="{ 'clickable': student.website }"
                    :style="{ animationDelay: `${index * 100}ms` }">
                    <div class="avatar-wrapper">
                        <img :src="student.avatar" :alt="student.name[currentLang]" class="person-avatar" />
                    </div>
                    <div class="person-info">
                        <h2 class="person-name">{{ student.name[currentLang] }}</h2>
                        <p class="person-position">{{ student.year }}</p>
                    </div>
                </component>
            </div>

            <div class="section-divider" />

            <h2 class="people-title alumni-title">{{ t.alumniTitle }}</h2>

            <div class="people-grid">
                <component :is="alumni.website ? 'a' : 'div'" v-for="(alumni, index) in alumniList"
                    :key="alumni.name.en" :href="alumni.website || undefined"
                    :target="alumni.website ? '_blank' : undefined" rel="noopener noreferrer"
                    class="person-card"
                    :class="{ 'clickable': alumni.website }"
                    :style="{ animationDelay: `${index * 100}ms` }">
                    <div class="avatar-wrapper">
                        <img :src="alumni.avatar" :alt="alumni.name[currentLang]" class="person-avatar" />
                    </div>
                    <div class="person-info">
                        <h2 class="person-name">{{ alumni.name[currentLang] }}</h2>
                        <p class="person-position">{{ alumni.year[currentLang] }}</p>
                        <p v-if="alumni.company[currentLang]" class="person-description alumni-company">
                            {{ alumni.company[currentLang] }}
                        </p>
                    </div>
                </component>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { facultyList, phdList, postdocList, masterList, alumniList } from '../../data/people'
import Footer from '../components/Footer.vue'

const { lang } = useData()
const currentLang = computed<'zh' | 'en'>(() =>
    lang.value.startsWith('zh') ? 'zh' : 'en'
)
const TEXT = {
    zh: {
        facultyTitle: '教师',
        phdTitle: '博士生',
        postdocTitle: '博士后',
        masterTitle: '硕士生',
        alumniTitle: '毕业生'
    },
    en: {
        facultyTitle: 'Faculty',
        phdTitle: 'Doctoral Students',
        postdocTitle: 'Postdocs',
        masterTitle: 'Master Students',
        alumniTitle: 'Alumni'
    }
} as const

const t = computed(() => TEXT[currentLang.value])
</script>

<style scoped>
.all-people {
    min-height: calc(100vh - var(--vp-nav-height));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--vp-bg-soft);
}

.container {
    width: 100%;
    margin: 0 auto;
    padding: 50px;
    display: flex;
    flex-direction: column;
}

.people-title {
    font-size: var(--vp-h1-size);
    line-height: 1;
    font-weight: var(--vp-h1-weight);
    color: var(--vp-c-brand-1);
    text-align: center;
    margin-bottom: 48px;
}

.people-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 280px));
    gap: 30px;
    margin: 0 auto;
    max-width: 1250px;
    width: 100%;
    justify-content: center;
}

.person-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: var(--vp-c-bg);
    padding: 28px 18px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-decoration: none;
    color: inherit;
    width: 100%;
    animation: fade-in-up 0.5s ease-out forwards;
    opacity: 0;
}

/* 动画效果 */
@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.person-card:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.avatar-wrapper {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 18px;
    /* border: 2px solid var(--vp-c-brand-1); */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    /* 防止被挤压 */
    background-color: var(--vp-c-bg-alt);
    /* 占位符背景色 */
}

.person-avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.person-avatar-placeholder {
    font-size: 48px;
    font-weight: 600;
    color: var(--vp-c-brand-2);
    text-transform: uppercase;
    line-height: 1;
}

.person-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.person-name {
    font-size: var(--vp-h2-size);
    font-weight: 600;
    line-height: 1.5;
    color: var(--vp-c-text-1);
    margin: 0;
}

.person-position {
    font-size: var(--vp-p-size);
    color: var(--vp-c-brand-1);
    margin: 0;
}

.person-description {
    font-size: var(--vp-p-size);
    color: var(--vp-c-text-2);
    max-width: 250px;
    line-height: 1.5;
}

.alumni-company {
    margin: 0;
}

.section-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, var(--vp-c-divider), transparent);
    margin: 48px 0 40px;
}

.phd-title {
    margin-top: 0 !important;
    margin-bottom: 36px !important;
}


/* 响应式调整 */
@media (min-width: 1024px) {
    .container {
        width: 84vw;
    }

    .people-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 280px));
    }
}

@media (max-width: 768px) {
    .container {
        padding: 20px 48px 40px 48px;
    }

    .people-title {
        margin-bottom: 30px;
    }

    .people-grid {
        grid-template-columns: 1fr;
        /* 移动端单列显示 */
        gap: 20px;
    }

    .person-card {
        padding: 20px 15px;
    }

    .avatar-wrapper {
        width: 110px;
        height: 110px;
        margin-bottom: 12px;
    }

    .person-avatar-placeholder {
        font-size: 40px;
    }

    .person-description {
        max-width: none;
        /* 移动端不限制宽度 */
    }
}

@media (min-width: 480px) and (max-width: 768px) {
    .people-grid {
        grid-template-columns: repeat(auto-fit, minmax(240px, 280px));
        /* 手机横屏或小平板双列 */
    }
}
</style>
