export interface PublicationItem {
    date: string
    authors: string
    title: {
        zh: string
        en: string
    }
    venue: string
    pdf?: string
    project?: string
    code?: string
}

export const publicationsList: PublicationItem[] = [
    {
        date: '2025-12',
        authors: 'Wujian Peng, Lingchen Meng, Yitong Chen, Yiweng Xie, Yang Liu, Tao Gui, Hang Xu, Xipeng Qiu, Zuxuan Wu, Yu-Gang Jiang',
        title: {
            zh: 'INST-IT: 通过显式视觉提示指令调优增强多模态实例理解',
            en: 'INST-IT: Boosting Multimodal Instance Understanding via Explicit Visual Prompt Instruction Tuning'
        },
        venue: 'Advances in Neural Information Processing Systems (NeurIPS), San Diego, USA, 2025',
        pdf: 'https://example.com/paper.pdf'
    }
    // 可以继续添加更多论文
]