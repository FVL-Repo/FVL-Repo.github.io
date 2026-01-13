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
            zh: '多模态人工智能是推动大模型从语言智能迈向具备跨模态理解、生成与交互能力的通用智能形态的关键支撑。实验室围绕其在多源异构信息融合建模、跨场景泛化与可解释推理中的关键瓶颈，开展了表征、架构、数据三位一体的体系研究与系统化能力构建。基于上述研究构建的开源数据、算法和工具集被国内外高校及企业频繁使用，研发的系统在多个国际比赛中名列前茅，并多次成功部署于多项国家级重要任务中。',
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
            zh: '视频生成技术正从简单的画面合成转向对真实复杂场景的精细建模，并在数字内容生产、虚拟环境构建等方面展现出重要应用潜力。实验室围绕现有方法在运动真实性、时序一致与内容可控性等方面面临的关键问题，探索多模态引导的高质量视频生成与内容编辑方法。以此为基础，发展指令驱动的长视频生成框架，支撑对现实世界演化过程的持续建模与高效决策。研发的相关模型在多个国际基准排行榜上取得最佳表现，成果均已开源并累计获得数千GitHub Star，部分关键技术已在实际业务场景中落地应用。',
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
            zh: '具身智能作为国家培育新质生产力、打造新的经济增长点的重要技术方向，正在成为推动人工智能向真实世界深度落地的关键支撑。实验室聚焦具身智能的建模范式、数据引擎、交互机制与能力泛化，构建支撑跨任务、跨场景能力迁移的具身基础模型，使智能体具备在动态环境中稳定运行和自主适应的能力。实验室已发布多款多模态具身模型、复杂任务操作数据集、和具身视触觉传感器，在业界和学术社区具有显著影响力。',
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
            zh: '面向人工智能深度融入经济社会与国家关键领域的发展需求，围绕大模型时代智能系统面临的安全、可信与可控挑战，开展基础理论与关键技术研究。实验室重点聚焦大语言模型、多模态大模型与具身基础模型的安全性、公平性、隐私保护与可解释性，揭示复杂智能系统的内在机理与行为规律，构建覆盖模型、数据与系统层面的安全技术框架。构建的鲁棒神经网络模型、高效攻防策略等为可信人工智能贡献了一系列新思路、理论和实证结果，在国际社区中产生了积极反响。',
            en: 'We explore alignment, reasoning, and generation across vision, language, and other modalities toward general AI.'
        },
        image: '/images/research/adversarial-machine-learning.png'
    },
]

