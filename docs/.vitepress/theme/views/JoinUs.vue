<template>
    <div class="recruitment-page">
        <div class="container">
            <h1 class="title">加入我们</h1>

            <p class="intro">
                复旦大学视觉与学习实验室欢迎有志于从事计算机视觉、机器（深度）学习、可信人工智能等相关方面研究的同仁和同学加入我们的研究团队。
            </p>

            <div class="button-group">
                <button v-for="item in tabs" :key="item.key" class="tab-button"
                    :class="{ active: activeTab === item.key }" @click="activeTab = item.key">
                    {{ item.label }}
                </button>
            </div>

            <div class="content-card">
                <div v-if="activeTab === 'postdoc'" class="content">
                    <h2>申请博士后</h2>

                    <p>
                        欢迎对我们的研究方向或科研项目有浓厚兴趣的即将毕业的博士生或已毕业的博士来复旦大学计算机科学与技术博士后流动站进一步从事博士后研究。
                    </p>

                    <h3>主要研究方向（不限于）：</h3>
                    <ul>
                        <li>计算机视觉（视频内容识别、文字检测与识别等）</li>
                        <li>视觉与语言、跨媒体分析与推理</li>
                        <li>可信人工智能、鲁棒机器学习</li>
                        <li>AI 在生物医疗、金融风控等问题上的应用</li>
                    </ul>

                    <h3>岗位职责：</h3>
                    <ol>
                        <li>围绕以上研究方向之一开展科研工作</li>
                        <li>指导博士生 / 硕士生 / 本科生</li>
                        <li>牵头或协助申报科研项目及承担实验室管理工作</li>
                    </ol>

                    <h3>申请人基本条件要求：</h3>
                    <ol>
                        <li>年龄一般不超过 35 周岁</li>
                        <li>获得博士学位一般在 3 年内</li>
                        <li>
                            近三年在 CCF A 类期刊和会议（或同等档次综合性期刊）发表论文不少于 2 篇，
                            或参与国家重大科研项目并具有丰富工程实践经验
                        </li>
                        <li>身体健康，具有良好的敬业精神和团队合作精神</li>
                    </ol>

                    <h3>科研环境及待遇：</h3>
                    <ol>
                        <li>提供优良科研条件与充足科研经费，支持申请各类国家与地方基金</li>
                        <li>
                            薪资、保险按学校政策执行，年收入不低于 30 万元；
                            入选博新计划者不低于 50 万元
                        </li>
                        <li>协助申请博士后公寓及子女入学相关事宜</li>
                    </ol>

                    <p class="email">
                        有意者请将简历发送至
                        <a href="mailto:zhinchen@fudan.edu.cn">zhinchen@fudan.edu.cn</a>
                        （陈智能老师），
                        邮件主题：“应聘博士后--姓名--专业--学校”
                    </p>
                </div>

                <div v-else-if="activeTab === 'graduate'" class="content">
                    <h2>申请博士 / 硕士研究生</h2>

                    <p>
                        欢迎校内外本学科或跨学科优秀保研推免生或优秀考研生联系本实验室攻读博士或硕士学位。
                        尤其欢迎科研热情高、英文阅读与写作能力强、数学基础扎实、编程能力突出的同学。
                    </p>

                    <p class="email">
                        请将简历发送至
                        <a href="mailto:zxwu@fudan.edu.cn">zxwu@fudan.edu.cn</a>
                        （吴祖煊老师），
                        邮件主题：“申请普博/直博/硕士--姓名--专业--学校”
                    </p>

                    <p class="note">由于招生名额有限，请尽早联系。</p>
                </div>

                <div v-else class="content">
                    <h2>本科生科研</h2>

                    <p>
                        如果你是大二或大三本科生，在课程学习之余希望投身科研，
                        并对实验室研究方向或项目有浓厚兴趣，欢迎联系我们。
                    </p>

                    <p>
                        我们希望你具备良好的编程能力（如 Python、C++、Matlab），
                        掌握线性代数、统计学、机器学习等基础课程，
                        具备英文文献阅读能力与科研热情。
                    </p>

                    <p>
                        通过科研训练，我们将帮助你掌握前沿算法，
                        培养科研探索能力，甚至独立提出研究问题的能力。
                    </p>

                    <p class="email">
                        请将简历和完整成绩单发送至
                        <a href="mailto:zxwu@fudan.edu.cn">zxwu@fudan.edu.cn</a>
                        （吴祖煊老师），
                        简历中请列出熟悉的编程语言及项目经历。
                    </p>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('postdoc')

const tabs = [
    { key: 'postdoc', label: '博士后' },
    { key: 'graduate', label: '博士 / 硕士' },
    { key: 'undergraduate', label: '本科生科研' }
]
</script>

<style scoped>
.recruitment-page {
    min-height: calc(100vh - var(--vp-nav-height));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--vp-c-bg-soft);
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.title {
    font-size: var(--vp-h1-size);
    font-weight: var(--vp-h1-weight);
    text-align: center;
    color: var(--vp-c-text);
}

.intro {
    max-width: 1000px;
    text-align: center;
    margin: 0 auto;
    color: var(--vp-c-text-2);
    font-size: 20px;
    line-height: 1.8;
}

.button-group {
    display: flex;
    justify-content: center;
    gap: 60px;
    flex-wrap: wrap;
}

.tab-button {
    padding: 12px 20px;
    border-radius: 3px;
    background-color: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    cursor: pointer;
    font-size: 22px;
    font-weight: 500;
}

.tab-button:hover {
    color: var(--vp-c-brand-1);
}

.tab-button.active {
    color: var(--vp-c-brand);
    border: 2px solid var(--vp-c-brand-2);
}

.content-card {
    background-color: var(--vp-c-bg);
    border-radius: 8px;
    padding: 32px;
    color: var(--vp-c-text);
}

.content {
    h2 {
        text-align: center;
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 24px;
    }

    h3 {
        font-size: 20px;
        font-weight: 600;
        line-height: 2.0;
    }

    p,
    li {
        font-size: 20px;
        line-height: 1.8;
    }

    p {
        text-indent: 2rem;
    }

    ul,
    ol {
        padding-left: 4rem;
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
    color: var(--vp-c-brand);
    text-decoration: none;
}

.note {
    color: var(--vp-c-text-1);
}
</style>