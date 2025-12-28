<template>
    <footer class="footer">
        <div class="footer-inner">
            <div class="message">{{ t.address }}</div>
            <div class="copyright">{{ t.copyright(year) }}</div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { FooterData } from '../../data/footerData'

const { lang } = useData()
const currentLang = computed<'zh' | 'en'>(() =>
    lang.value.startsWith('zh') ? 'zh' : 'en'
)

const t = computed(() => FooterData[currentLang.value])

const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
    min-height: var(--vp-footer-height);
    padding: var(--vp-small);
    background-color: var(--vp-c-brand-1);
    margin-top: auto;
}

.footer-inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    text-align: center;
}

.message,
.copyright {
    font-size: var(--vp-small);
    color: var(--vp-bg-soft);
}
</style>
