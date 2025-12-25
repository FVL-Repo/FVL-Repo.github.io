<template>
    <a :href="link" class="news-card" :class="`news-card--${mode}`" target="_blank" rel="noopener noreferrer">
        <div class="image-wrapper">
            <img :src="image" :alt="title" />
        </div>

        <!-- small 模式使用 -->
        <div class="date-badge date-badge--card">
            {{ date }}
        </div>

        <div class="content">
            <!-- large 模式使用 -->
            <div class="date-badge date-badge--content">
                {{ date }}
            </div>

            <h3 class="title">{{ title }}</h3>
        </div>
    </a>
</template>

<script setup>
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
    font-size: 13px;
    line-height: 1;
    font-weight: 400;
    font-style: italic;
    padding: 8px 8px;
    border-radius: 1px;
    border: 1.5px solid var(--vp-c-brand-1);
}

.date-badge {
    display: none;
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
    padding: 16px;
    position: relative;
}

.news-card--small .content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 8px 15px;
    background: linear-gradient(to top,
            rgba(0, 0, 0, 0.5) 40%,
            rgba(0, 0, 0, 0) 90%);
}

.title {
    color: var(--vp-c-text-1);
    margin-top: 3%;
}

.news-card--small .title {
    font-size: var(--vp-small);
    color: #fff;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.news-card--small .title {
    -webkit-line-clamp: 2;
}

.news-card--large .title {
    font-size: var(--vp-h3-size);
    font-weight: 600;
}

@media (max-width: 768px) {
    .news-card--small .title {
        -webkit-line-clamp: 1;
    }

    .date-badge {
        font-size: 10px;
        padding: 6px 6px;
    }
}
</style>