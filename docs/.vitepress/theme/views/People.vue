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

            <h2 class="people-title phd-title">{{ t.phdTitle }}</h2>
            <div class="year-sections">
                <section v-for="group in phdByYear" :key="`phd-${group.year}`" class="year-section">
                    <div class="year-header">
                        <div class="year-header-left">
                            <span class="year-num">{{ group.year }}</span>
                            <span class="year-label">{{ t.enrolledSuffix }}</span>
                        </div>
                        <span class="year-divider-line" />
                    </div>
                    <div class="chip-grid">
                        <component :is="s.website ? 'a' : 'span'" v-for="s in group.list" :key="s.name.en"
                            :href="s.website || undefined"
                            :target="s.website ? '_blank' : undefined"
                            rel="noopener noreferrer"
                            class="name-chip"
                            :class="{ 'chip-link': s.website }">
                            {{ s.name[currentLang] }}
                        </component>
                    </div>
                </section>
            </div>

            <h2 class="people-title master-title">{{ t.masterTitle }}</h2>
            <div class="year-sections">
                <section v-for="group in masterByYear" :key="`ms-${group.year}`" class="year-section">
                    <div class="year-header">
                        <div class="year-header-left">
                            <span class="year-num">{{ group.year }}</span>
                            <span class="year-label">{{ t.enrolledSuffix }}</span>
                        </div>
                        <span class="year-divider-line" />
                    </div>
                    <div class="chip-grid">
                        <component :is="s.website ? 'a' : 'span'" v-for="s in group.list" :key="s.name.en"
                            :href="s.website || undefined"
                            :target="s.website ? '_blank' : undefined"
                            rel="noopener noreferrer"
                            class="name-chip"
                            :class="{ 'chip-link': s.website }">
                            {{ s.name[currentLang] }}
                        </component>
                    </div>
                </section>
            </div>

            <template v-if="phdAlumniByYear.length">
                <h2 class="people-title alumni-title">{{ t.phdAlumniTitle }}</h2>
                <div class="year-sections">
                    <section v-for="group in phdAlumniByYear" :key="`phd-alum-${group.year}`" class="year-section">
                        <div class="year-header">
                            <div class="year-header-left">
                                <span class="year-num">{{ group.year }}</span>
                                <span class="year-label">{{ t.graduatedSuffix }}</span>
                            </div>
                            <span class="year-divider-line" />
                        </div>
                        <div class="chip-grid">
                            <component :is="a.website ? 'a' : 'span'" v-for="a in group.list" :key="a.name.en"
                                :href="a.website || undefined"
                                :target="a.website ? '_blank' : undefined"
                                rel="noopener noreferrer"
                                class="name-chip"
                                :class="{ 'chip-link': a.website }">
                                {{ a.name[currentLang] }}
                            </component>
                        </div>
                    </section>
                </div>
            </template>

            <template v-if="masterAlumniByYear.length">
                <h2 class="people-title alumni-title">{{ t.masterAlumniTitle }}</h2>
                <div class="year-sections">
                    <section v-for="group in masterAlumniByYear" :key="`ms-alum-${group.year}`" class="year-section">
                        <div class="year-header">
                            <div class="year-header-left">
                                <span class="year-num">{{ group.year }}</span>
                                <span class="year-label">{{ t.graduatedSuffix }}</span>
                            </div>
                            <span class="year-divider-line" />
                        </div>
                        <div class="chip-grid">
                            <component :is="a.website ? 'a' : 'span'" v-for="a in group.list" :key="a.name.en"
                                :href="a.website || undefined"
                                :target="a.website ? '_blank' : undefined"
                                rel="noopener noreferrer"
                                class="name-chip"
                                :class="{ 'chip-link': a.website }">
                                {{ a.name[currentLang] }}
                            </component>
                        </div>
                    </section>
                </div>
            </template>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { facultyList, phdList, masterList, alumniList, type Alumni, type Student } from '../../data/people'
import Footer from '../components/Footer.vue'

const { lang } = useData()
const currentLang = computed<'zh' | 'en'>(() =>
    lang.value.startsWith('zh') ? 'zh' : 'en'
)

const TEXT = {
    zh: {
        facultyTitle: '教师',
        phdTitle: '博士生',
        masterTitle: '硕士生',
        phdAlumniTitle: '博士毕业生',
        masterAlumniTitle: '硕士毕业生',
        otherAlumniTitle: '本科毕业生',
        enrolledSuffix: '年入学',
        graduatedSuffix: '年毕业',
        countSuffix: '人'
    },
    en: {
        facultyTitle: 'Faculty',
        phdTitle: 'Doctoral Students',
        masterTitle: 'Master Students',
        phdAlumniTitle: 'PhD Alumni',
        masterAlumniTitle: 'Master Alumni',
        otherAlumniTitle: 'Undergraduate Alumni',
        enrolledSuffix: ' Enrolled',
        graduatedSuffix: ' Graduated',
        countSuffix: ''
    }
} as const

const t = computed(() => TEXT[currentLang.value])

function formatCount(n: number): string {
    if (currentLang.value === 'zh') {
        return `${n} 人`
    }
    return n === 1 ? '1 member' : `${n} members`
}

interface YearGroup<T> {
    year: string
    list: T[]
}

function parseYear(raw: string): number {
    const match = raw.match(/(\d{4})/)
    return match ? Number(match[1]) : 0
}

function groupStudentsByYear(list: Student[]): YearGroup<Student>[] {
    const map = new Map<number, Student[]>()
    for (const s of list) {
        const y = parseYear(s.year)
        if (!map.has(y)) map.set(y, [])
        map.get(y)!.push(s)
    }
    return [...map.entries()]
        .sort((a, b) => b[0] - a[0])
        .map(([year, list]) => ({ year: String(year), list }))
}

const phdByYear = computed(() => groupStudentsByYear(phdList))
const masterByYear = computed(() => groupStudentsByYear(masterList))

type AlumniDegree = 'phd' | 'master' | 'other'

function classifyAlumni(a: Alumni): AlumniDegree {
    const zh = a.year.zh || ''
    const en = a.year.en || ''
    if (zh.includes('博士') || /\bPhD\b/i.test(en)) return 'phd'
    if (zh.includes('硕士') || /\bM\.?(S|Eng)\b/i.test(en) || /Master/i.test(en)) return 'master'
    return 'other'
}

function groupAlumniByYear(list: Alumni[]): YearGroup<Alumni>[] {
    const map = new Map<number, Alumni[]>()
    for (const a of list) {
        const y = parseYear(a.year.zh) || parseYear(a.year.en)
        if (!map.has(y)) map.set(y, [])
        map.get(y)!.push(a)
    }
    return [...map.entries()]
        .sort((a, b) => b[0] - a[0])
        .map(([year, list]) => ({ year: String(year), list }))
}

const phdAlumniByYear = computed(() =>
    groupAlumniByYear(alumniList.filter(a => classifyAlumni(a) === 'phd'))
)
const masterAlumniByYear = computed(() =>
    groupAlumniByYear(alumniList.filter(a => classifyAlumni(a) === 'master'))
)
const otherAlumniByYear = computed(() =>
    groupAlumniByYear(alumniList.filter(a => classifyAlumni(a) === 'other'))
)
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
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 30px;
    margin: 0 auto;
    max-width: 1200px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background-color: var(--vp-c-bg-alt);
}

.person-avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
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

/* ---------- Year-grouped sections (students / alumni) ---------- */

.year-sections {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.year-section {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.year-header {
    display: flex;
    align-items: baseline;
    gap: 12px;
    padding: 0 4px;
}

.year-header-left {
    display: flex;
    align-items: baseline;
    gap: 8px;
    flex-shrink: 0;
}

.year-num {
    font-size: var(--vp-h1-size);
    font-weight: var(--vp-h1-weight);
    line-height: 1;
    letter-spacing: 0.5px;
    color: var(--vp-c-brand-1);
    font-variant-numeric: tabular-nums;
}

.year-label {
    font-size: var(--vp-small);
    font-weight: 500;
    line-height: 1;
    color: var(--vp-c-text-2);
}

.year-divider-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--vp-c-brand-4), transparent);
    align-self: center;
}

.chip-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 12px 12px;
}

.name-chip {
    position: relative;
    display: flex;
    align-items: center;
    padding: 16px 18px;
    min-height: 48px;
    overflow: hidden;
    background-color: var(--vp-bg);
    border: 1px solid var(--vp-c-brand-5);
    border-radius: 6px;
    color: var(--vp-c-brand-1);
    text-decoration: none;
    font-size: var(--vp-p-size);
    font-weight: 500;
    line-height: 1;
    transition: background-color 0.2s ease, border-color 0.2s ease;
}

.name-chip::before {
    position: absolute;
    top: 12px;
    bottom: 12px;
    left: 0;
    width: 3px;
    background-color: var(--vp-c-brand-2);
    border-radius: 0 3px 3px 0;
    content: "";
}

.name-chip:hover {
    background-color: var(--vp-c-brand-5);
    border-color: var(--vp-c-brand-4);
}

.name-chip.chip-link:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
}

.name-chip.chip-link:focus-visible {
    border-radius: 2px;
    outline: 2px solid var(--vp-c-brand-3);
    outline-offset: 3px;
}

.section-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, var(--vp-c-divider), transparent);
    margin: 48px 0 40px;
}

.phd-title,
.master-title,
.alumni-title {
    margin-top: 72px !important;
    margin-bottom: 36px !important;
}

.section-divider + .people-title {
    margin-top: 0 !important;
}

@media (min-width: 768px) and (max-width: 1024px) {
    .container {
        width: 88vw;
    }

    .people-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
}

@media (max-width: 768px) {
    .container {
        width: 84vw;
        padding: 20px 0 40px 0;
    }

    .people-title {
        margin-bottom: 30px;
    }

    .phd-title,
    .master-title,
    .alumni-title {
        margin-top: 48px !important;
    }

    .people-grid {
        grid-template-columns: minmax(0, 1fr);
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

    .person-description {
        max-width: none;
    }

    .year-sections {
        gap: 36px;
    }

    .year-section {
        gap: 18px;
    }

    .year-header {
        gap: 8px;
    }

    .year-header-left {
        gap: 6px;
    }

    .chip-grid {
        grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
        gap: 8px 8px;
    }

    .name-chip {
        padding: 8px 12px;
        min-height: 32px;
        border-radius: 4px;
    }

    .name-chip::before {
        top: 6px;
        bottom: 6px;
        left: 0;
        width: 2px;
        border-radius: 0 2px 2px 0;
    }
}
</style>
