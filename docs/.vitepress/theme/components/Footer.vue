<template>
    <footer class="footer">
        <div class="footer-inner">
            <div class="message">
                实验室地址: 上海市淞沪路2005号2号交叉学科楼5楼
            </div>
            <div class="copyright">
                All Rights Reserved by Fudan University
            </div>
        </div>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
    min-height: var(--vp-footer-height);
    padding: 15px;
    background-color: var(--vp-c-brand-1);
    margin-top: auto;
}

.footer-inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    text-align: center;
}

.message {
    font-size: 16px;
    color: var(--vp-c-bg-soft);
}

.copyright {
    font-size: 16px;
    color: var(--vp-c-bg-soft);
}
</style>
