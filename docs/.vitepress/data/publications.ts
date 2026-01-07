export interface PublicationItem {
    year: string
    authors: string
    title: {
        zh: string
        en: string
    }
    venue: string
    image?: string
    pdf?: string
    dataset?: string
    code?: string
}

export const publicationsList: PublicationItem[] = [
    {
        year: '2025',
        authors: 'Wujian Peng, Lingchen Meng, Yitong Chen, Yiweng Xie, Yang Liu, Tao Gui, Hang Xu, Xipeng Qiu, Zuxuan Wu, Yu-Gang Jiang',
        title: {
            zh: 'INST-IT：通过显式视觉提示指令调优增强多模态实例理解',
            en: 'INST-IT: Boosting Multimodal Instance Understanding via Explicit Visual Prompt Instruction Tuning'
        },
        venue: 'NeurIPS 2025',
        image: '/images/publications/2025/NeurIPS-1.png',
        pdf: 'https://arxiv.org/pdf/2412.03565'
    },
    {
        year: '2025',
        authors: 'Danfeng Li, Hui Zhang, Sheng Wang, Jiacheng Li, Zuxuan Wu',
        title: {
            zh: 'Seg2Any：具有精确形状与语义控制的开放集分割掩码到图像生成',
            en: 'Seg2Any: Open-set Segmentation-Mask-to-Image Generation with Precise Shape and Semantic Control'
        },
        venue: 'NeurIPS 2025',
        image: '/images/publications/2025/NeurIPS-2.png',
        pdf: 'https://arxiv.org/pdf/2506.00596'
    },
    {
        year: '2024',
        authors: 'Xue Song, Jiequan Cui, Hanwang Zhang, Jingjing Chen, Richang Hong, Yu-Gang Jiang',
        title: {
            zh: '用于基于文本的图像编辑的双重溯因反事实推断',
            en: 'Doubly Abductive Counterfactual Inference for Text-based Image Editing'
        },
        venue: 'CVPR 2024',
        image: '/images/publications/2024/CVPR-songxue.png',
        pdf: 'https://arxiv.org/pdf/2403.02981',
        code: 'https://github.com/xuesong39/DAC'
    },
]