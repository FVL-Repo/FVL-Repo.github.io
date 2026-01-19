export interface Person {
    name: {
        zh: string;
        en: string;
    };
    avatar: string;
    position: {
        zh: string;
        en: string;
    };
    description?: {
        zh: string;
        en: string;
    };
    website?: string;
}

export const facultyList: Person[] = [
    {
        name: { zh: '曹艺馨', en: 'Yixin Cao' },
        avatar: '/assets/people/faculty/YixinCao.png',
        position: {
            zh: '青年研究员',
            en: 'Professor'
        },
        description: {
            zh: '',
            en: 'Pre-tenure'
        },
        website: 'https://sites.google.com/view/yixin-homepage'
    },
    {
        name: { zh: '陈静静', en: 'Jingjing Chen' },
        avatar: '/assets/people/faculty/JingjingChen.png',
        position: {
            zh: '副教授',
            en: 'Associate Professor'
        },
        website: 'https://jingjing1.github.io/'
    },
    {
        name: { zh: '陈智能', en: 'Zhineng Chen' },
        avatar: '/assets/people/faculty/ZhinengChen.png',
        position: {
            zh: '教授',
            en: 'Professor'
        },
        website: 'https://zhinchenfd.github.io/'
    },
    {
        name: { zh: '贾萧松', en: 'Xiaosong Jia' },
        avatar: '/assets/people/faculty/XiaosongJia.png',
        position: {
            zh: '助理教授',
            en: 'Assistant Professor'
        },
        website: 'https://jiaxiaosong1002.github.io/'
    },
    {
        name: { zh: '姜育刚', en: 'Yu-gang Jiang' },
        avatar: '/assets/people/faculty/YugangJiang.png',
        position: {
            zh: '教授 & 实验室主任',
            en: 'Professor & Director'
        },
        website: ''
    },
    {
        name: { zh: '马兴军', en: 'Xingjun Ma' },
        avatar: '/assets/people/faculty/XingjunMa.png',
        position: {
            zh: '青年研究员',
            en: 'Professor'
        },
        description: {
            zh: '',
            en: 'Pre-tenure'
        },
        website: 'http://xingjunma.com/'
    },
    {
        name: { zh: '吴祖煊', en: 'Zuxuan Wu' },
        avatar: '/assets/people/faculty/ZuxuanWu.png',
        position: {
            zh: '副教授',
            en: 'Associate Professor'
        },
        website: 'https://zxwu.azurewebsites.net/'
    },
    {
        name: { zh: '叶子逸', en: 'Ziyi Ye' },
        avatar: '/assets/people/faculty/ZiyiYe.png',
        position: {
            zh: '助理教授',
            en: 'Assistant Professor'
        },
        website: 'https://ziyiye.cn/'
    }
];