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
            zh: '多模态大模型是驱动人工智能从单一语言智能迈向跨模态理解、生成与交互的通用智能形态的核心引擎。针对多源异构信息融合、跨场景泛化及可解释推理等关键瓶颈，实验室构建了“表征-架构-数据”三位一体的研究体系，致力于探索更契合人类感知与认知规律的智能新范式，实现系统化能力的全面跃升。',
            en: 'Multimodal LLMs are the core engine driving AI from language-only intelligence toward cross-modal understanding, generation, and interaction. Targeting bottlenecks in heterogeneous information fusion, cross-scenario generalization, and explainable reasoning, our lab has built an integrated "representation-architecture-data" research system. We explore new paradigms better aligned with human perception and cognition to achieve a comprehensive leap in systemic capabilities.'
        },
        image: '/assets/research/multimodal.png'
    },
    {
        id: 'video-generation',
        title: {
            zh: '视频生成',
            en: 'Video Generation'
        },
        description: {
            zh: '视频生成技术正从简单的视觉合成迈向真实复杂场景的精细建模，在数字内容生产、虚拟环境构建等方面展现出巨大的应用潜力。针对现有方法在运动真实性、时序一致与内容可控性等方面面临的核心瓶颈，实验室致力于探索多模态引导的高质量视频生成与内容编辑方法，并支撑对现实世界演化过程的持续建模。',
            en: 'Video generation is advancing from simple visual synthesis to fine-grained modeling of complex real-world scenes, showing great application potential in digital content production and virtual environment construction. Targeting core bottlenecks in motion realism, temporal consistency, and controllability, our lab explores multimodal-guided high-quality video generation and content editing, supporting continuous modeling of real-world evolutionary processes.'
        },
        image: '/assets/research/video-generation.png'
    },
    {
        id: 'embodied-ai',
        title: {
            zh: '具身智能',
            en: 'Embodied AI'
        },
        description: {
            zh: '具身智能作为国家培育新质生产力、打造新的经济增长点的核心技术方向，正在成为推动人工智能向真实物理世界深度落地的关键支撑。实验室聚焦具身智能的建模范式、数据引擎、交互机制与能力泛化，致力于构建支撑跨任务、跨场景能力迁移的具身基础模型，赋能智能体具备在动态环境中稳定运行和自主适应的能力。',
            en: 'As a core technological direction for cultivating new quality productive forces and new economic growth drivers, Embodied AI is becoming key to deploying AI deeply in the real physical world. Our lab focuses on modeling paradigms, data engines, interaction mechanisms, and capability generalization. By building embodied foundation models that support cross-task and cross-scenario transfer, we empower agents to operate stably and adapt autonomously in dynamic environments.'
        },
        image: '/assets/research/EmbodiedAI.png'
    },
    {
        id: 'trustworthy-ai',
        title: {
            zh: '可信人工智能',
            en: 'Trustworthy AI'
        },
        description: {
            zh: '面向人工智能深度融入国家关键领域的发展需求，围绕大模型时代智能系统面临的安全、可信与可控挑战，实验室深入开展关键技术研究，重点聚焦多模态大模型与具身基础模型的安全性、公平性、隐私保护与可解释性，致力于揭示复杂智能系统的内在机理与行为规律，构建覆盖模型、数据与系统层面的全链路安全技术框架。',
            en: 'Facing the deep integration of AI into critical national domains and the safety, trustworthiness, and controllability challenges of intelligent systems in the LLM era, our lab conducts in-depth research on key technologies. We focus on the safety, fairness, privacy protection, and interpretability of multimodal LLMs and embodied foundation models. By revealing the intrinsic mechanisms and behavioral patterns of complex intelligent systems, we build a full-chain security framework spanning the model, data, and system levels.'
        },
        image: '/assets/research/trustworthy-ai.png'
    },
]

