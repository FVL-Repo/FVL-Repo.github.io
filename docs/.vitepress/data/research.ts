export interface ResearchItem {
    id: string
    title: {
        zh: string
        en: string
    }
    description: {
        zh: string
        en: string
    }
    image: string
}

export const researchList: ResearchItem[] = [
    {
        id: 'multimodal',
        title: {
            zh: '多模态大模型',
            en: 'Multimodal Large Language Model'
        },
        description: {
            zh: '多模态人工智能是推动大模型迈向通用智能的关键。实验室聚焦多源信息融合、跨场景泛化与可解释推理，开展表征、架构与数据一体化研究，形成开放数据、算法与工具，成果广泛应用并在国际竞赛与国家级任务中取得突出成效。',
            en: 'We explore alignment, reasoning, and generation across vision, language, and other modalities toward general AI.'
        },
        image: '/images/research/multimodal.png'
    },
    {
        id: 'multimodal',
        title: {
            zh: '视频生成',
            en: 'Video Generation'
        },
        description: {
            zh: '视频生成技术正迈向真实复杂场景建模。实验室针对运动真实性、时序一致性与可控性，研究多模态引导的视频生成与编辑，并构建指令驱动的长视频生成框架。相关模型在国际基准中领先，成果开源并累计获得数千 GitHub Star，部分技术已落地应用。',
            en: 'We explore alignment, reasoning, and generation across vision, language, and other modalities toward general AI.'
        },
        image: '/images/research/video-generation.png'
    },
    {
        id: 'multimodal',
        title: {
            zh: '具身智能',
            en: 'Embodied AI'
        },
        description: {
            zh: '具身智能作为国家培育新质生产力、打造新的经济增长点的重要技术方向，正在成为推动人工智能向真实世界深度落地的关键支撑。实验室聚焦具身智能的建模范式、数据引擎、交互机制与能力泛化，构建支撑跨任务、跨场景能力迁移的具身基础模型，使智能体具备在动态环境中稳定运行和自主适应的能力。',
            en: 'We explore alignment, reasoning, and generation across vision, language, and other modalities toward general AI.'
        },
        image: '/images/research/EmbodiedAI.png'
    },
    {
        id: 'multimodal',
        title: {
            zh: '对抗机器学习',
            en: 'Video Generation'
        },
        description: {
            zh: '面向大模型时代的安全与可信需求，实验室围绕语言、多模态与具身模型的安全性、公平性、隐私与可解释性开展研究，构建覆盖模型、数据与系统的安全框架，提出鲁棒建模与攻防方法，在国际社区产生积极影响。',
            en: 'We explore alignment, reasoning, and generation across vision, language, and other modalities toward general AI.'
        },
        image: '/images/research/adversarial-machine-learning.png'
    },
]

