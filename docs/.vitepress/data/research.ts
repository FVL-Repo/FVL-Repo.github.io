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
            zh: '多模态大模型是推动大模型从语言智能迈向具备跨模态理解、生成与交互能力的通用智能形态的关键支撑。实验室围绕其在多源异构信息融合建模、跨场景泛化与可解释推理中的关键瓶颈，构建更贴近人类感知与认知习惯的智能范式，开展了表征、架构、数据三位一体的体系研究与系统化能力构建。',
            en: 'Multimodal LLMs are pivotal in evolving AI from linguistic intelligence to cross-modal AGI. Our lab targets bottlenecks in heterogeneous data fusion, generalization, and explainable reasoning. We develop human-centric paradigms through integrated research on representation, architecture, and data to build systemic capabilities.'
        },
        image: '/assets/images/research/multimodal.png'
    },
    {
        id: 'multimodal',
        title: {
            zh: '视频生成',
            en: 'Video Generation'
        },
        description: {
            zh: '视频生成技术正从简单的画面合成转向对真实复杂场景的精细建模，并在数字内容生产、虚拟环境构建等方面展现出重要应用潜力。实验室围绕现有方法在运动真实性、时序一致与内容可控性等方面面临的关键问题，探索多模态引导的高质量视频生成与内容编辑方法，并支撑对现实世界演化过程的持续建模。',
            en: 'Video generation is shifting from synthesis to modeling complex real-world scenes. We address challenges in motion realism, temporal consistency, and controllability. Our research explores multimodal-guided high-quality generation and editing, enabling continuous modeling of real-world evolutionary processes.'
        },
        image: '/assets/images/research/video-generation.png'
    },
    {
        id: 'multimodal',
        title: {
            zh: '具身智能',
            en: 'Embodied AI'
        },
        description: {
            zh: '具身智能作为国家培育新质生产力、打造新的经济增长点的重要技术方向，正在成为推动人工智能向真实世界深度落地的关键支撑。实验室聚焦具身智能的建模范式、数据引擎、交互机制与能力泛化，构建支撑跨任务、跨场景能力迁移的具身基础模型，使智能体具备在动态环境中稳定运行和自主适应的能力。',
            en: 'As a key driver for new productive forces, Embodied AI is vital for real-world AI deployment. We focus on modeling paradigms, data engines, and interaction mechanisms. By building embodied foundation models for cross-task transfer, we enable agents to operate stably and adapt autonomously in dynamic environments.'
        },
        image: '/assets/images/research/EmbodiedAI.png'
    },
    {
        id: 'adversarial',
        title: {
            zh: '对抗机器学习',
            en: 'Adversarial Machine Learning'
        },
        description: {
            zh: '面向人工智能深度融入国家关键领域的发展需求，围绕大模型时代智能系统面临的安全、可信与可控挑战，开展关键技术研究。实验室重点聚焦多模态大模型与具身基础模型的安全性、公平性、隐私保护与可解释性，揭示复杂智能系统的内在机理与行为规律，构建覆盖模型、数据与系统层面的安全技术框架。',
            en: 'Addressing safety and trust in the LLM era, we research key technologies for secure AI integration. We focus on the safety, fairness, and privacy of multimodal and embodied models. By revealing system mechanisms, we build security frameworks spanning models, data, and systems to ensure controllable intelligence.'
        },
        image: '/assets/images/research/adversarial-machine-learning.png'
    },
]

