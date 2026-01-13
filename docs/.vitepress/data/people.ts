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
        avatar: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/head/teacher/caoyixin.png',
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
        avatar: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/cjj.jpeg',
        position: {
            zh: '副教授',
            en: 'Associate Professor'
        },
        website: 'https://jingjing1.github.io/'
    },
    {
        name: { zh: '陈智能', en: 'Zhineng Chen' },
        avatar: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/czn.png',
        position: {
            zh: '教授',
            en: 'Professor'
        },
        website: 'https://zhinchenfd.github.io/'
    },
    {
        name: { zh: '贾萧松', en: 'Xiaosong Jia' },
        avatar: '/images/people/faculty/XiaosongJia.png',
        position: {
            zh: '助理教授',
            en: 'Assistant Professor'
        },
        website: 'https://jiaxiaosong1002.github.io/'
    },
    {
        name: { zh: '姜育刚', en: 'Yu-gang Jiang' },
        avatar: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/ygjiang.png',
        position: {
            zh: '教授 & 实验室主任',
            en: 'Professor & Director'
        },
        website: ''
    },
    {
        name: { zh: '马兴军', en: 'Xingjun Ma' },
        avatar: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/mxj.jpeg',
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
        avatar: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/wzx.png',
        position: {
            zh: '副教授',
            en: 'Associate Professor'
        },
        website: 'https://zxwu.azurewebsites.net/'
    },
    {
        name: { zh: '叶子逸', en: 'Ziyi Ye' },
        avatar: '/images/people/faculty/ZiyiYe.png',
        position: {
            zh: '助理教授',
            en: 'Assistant Professor'
        },
        website: 'https://ziyiye.cn/'
    }
];