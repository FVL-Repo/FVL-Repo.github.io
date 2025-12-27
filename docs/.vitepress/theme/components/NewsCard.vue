<template>
    <a :href="link" class="news-card" :class="`news-card--${mode}`" target="_blank" rel="noopener noreferrer">
        <div class="image-wrapper">
            <img :src="image" :alt="title" />
        </div>

        <!-- small 模式使用 -->
        <div class="date-badge date-badge--card">
            <div class="md">{{ formatMD(date) }}</div>
            <div class="divider"></div>
            <div class="year">{{ formatYear(date) }}</div>
        </div>

        <div class="content">
            <!-- large 模式使用 -->
            <div class="date-badge date-badge--content">
                <div class="md">{{ formatMD(date) }}</div>
                <div class="divider"></div>
                <div class="year">{{ formatYear(date) }}</div>
            </div>

            <h3 class="title">{{ title }}</h3>
        </div>
    </a>
</template>

<script setup lang="ts">
defineProps({
    date: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        default: 'small'
    }
})

const formatMD = (date: string) => {
    const d = new Date(date)
    const m = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${m}-${day}`
}

const formatYear = (date: string) =>
    new Date(date).getFullYear()
</script>

<style scoped>
.news-card {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: var(--vp-bg);
    color: var(--vp-c-text-1);
    text-decoration: none;
    border-radius: 2px;
    --ratio: 8 / 5;
}

.news-card--large {
    --ratio: 16 / 9;
    display: grid;
    grid-template-rows: auto 1fr;
}

.image-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    aspect-ratio: var(--ratio);
}


.image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.date-badge {
    position: absolute;
    background-color: rgba(245, 250, 255, 0.9);
    color: var(--vp-c-brand-1);
    font-size: var(--vp-tiny);
    line-height: 1;
    font-weight: 400;
    text-align: center;
    font-style: italic;
    padding: 6px 6px;
    border-radius: 1px;
    border: 1.5px solid var(--vp-c-brand-1);
}

.date-badge {
    display: none;
}

.date-badge .md,
.year {
    font-size: var(--vp-tiny);
    line-height: 1;
}

.date-badge .divider {
    height: 1px;
    margin: 6px 0;
    background-color: var(--vp-c-brand);
    transition: background-color 0.3s ease;
}

.news-card--small .date-badge--card {
    display: block;
    position: absolute;
    left: -10px;
    top: 10px;
}

.news-card--large .date-badge--content {
    display: inline-block;
    position: absolute;
    top: -10px;
    left: 10px;
}

.content {
    position: relative;
    display: flex;
    align-items: center;
}

.news-card--large .content {
    padding: 20px 20px 20px 80px;
}

.news-card--small .content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 8px 15px;
    background: linear-gradient(to top,
            rgba(0, 0, 0, 0.6) 5%,
            rgba(0, 0, 0, 0.3) 95%);
}

.title {
    color: var(--vp-c-text-1);
}

.news-card--small .title {
    font-size: var(--vp-tiny);
    color: #fff;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
}

.news-card--large .title {
    font-size: var(--vp-h3-size);
    font-weight: 500;
}

@media (max-width: 768px) {
    .news-card--small .title {
        -webkit-line-clamp: 1;
    }

    .date-badge {
        padding: 3px;
    }

    .date-badge .divider {
        margin: 2px 0;
    }

    .news-card--large .content {
        padding: 15px 50px;
    }

    .news-card--small .content {
        padding: 1px 4px;
    }

    .news-card--small .date-badge--card {
        left: -5px;
        top: 5px;
    }

    .news-card--large .date-badge--content {
        top: -8x;
        left: 8px;
    }
}
</style>