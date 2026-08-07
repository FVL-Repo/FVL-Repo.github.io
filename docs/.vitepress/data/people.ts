export interface Faculty {
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

export interface Student {
    name: {
        zh: string;
        en: string;
    };
    avatar: string;
    year: string;
    website?: string;
}

export interface Alumni {
    name: {
        zh: string;
        en: string;
    };
    avatar: string;
    year: {
        zh: string;
        en: string;
    }
    company: {
        zh: string;
        en: string;
    };
    website?: string;
}

export const facultyList: Faculty[] = [
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
            zh: '教授',
            en: 'Professor'
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
            zh: '教授',
            en: 'Professor'
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

export const postdocList: Student[] = [
    {
        name: {
            zh: "李梦甜",
            en: "Mengtian Li"
        },
        avatar: "/assets/people/postdoc/MengtianLi.jpg",
        year: "2023",
        website: 'https://mengtianli.github.io/'
    }
]

export const phdList: Student[] = [
    {
        name: {
            zh: '翟坤',
            en: 'Kun Zhai'
        },
        avatar: '/assets/people/phd/KunZhai.jpg',
        year: '2022'
    },
    {
        name: {
            zh: '黎腾',
            en: 'Teng Li'
        },
        avatar: '/assets/people/phd/TengLi.png',
        year: '2022'
    },
    {
        name: {
            zh: '焦鹏昆',
            en: 'Pengkun Jiao'
        },
        avatar: '/assets/people/phd/PengkunJiao.jpg',
        year: '2023'
    },
    {
        name: {
            zh: '杜永坤',
            en: 'Yongkun Du'
        },
        avatar: '/assets/people/phd/YongkunDu.jpg',
        year: '2023'
    },
    {
        name: {
            zh: '孙野',
            en: 'Ye Sun'
        },
        avatar: '/assets/people/phd/YeSun.jpg',
        year: '2023'
    },
    {
        name: {
            zh: '苏宇辰',
            en: 'Yuchen Su'
        },
        avatar: '/assets/people/phd/YuchenSu.jpg',
        year: '2023'
    },
    {
        name: {
            zh: '徐自强',
            en: 'Ziqiang Xu'
        },
        avatar: '/assets/people/phd/ZiqiangXu.jpg',
        year: '2023'
    },
    {
        name: {
            zh: '丁一凡',
            en: 'Yifan Ding'
        },
        avatar: '/assets/people/phd/YifanDing.png',
        year: '2023'
    },
    {
        name: {
            zh: '高翌峰',
            en: 'Yifeng Gao'
        },
        avatar: '/assets/people/phd/YifengGao.png',
        year: '2023'
    },
    {
        name: {
            zh: '王熠旭',
            en: 'Yixu Wang'
        },
        avatar: '/assets/people/phd/YixuWang.png',
        year: '2023'
    },
    {
        name: {
            zh: '帅欣成',
            en: 'Xincheng Shuai'
        },
        avatar: '/assets/people/phd/XinchengShuai.png',
        year: '2023'
    },
    {
        name: {
            zh: '涂树源',
            en: 'Shuyuan Tu'
        },
        avatar: '/assets/people/phd/ShuyuanTu.png',
        year: '2023'
    },
    {
        name: {
            zh: '王佳煜',
            en: 'Jiayu Wang'
        },
        avatar: '/assets/people/phd/JiayuWang.png',
        year: '2023'
    },
    {
        name: {
            zh: '洪诗博',
            en: 'Shibo Hong'
        },
        avatar: '/assets/people/phd/ShiboHong.png',
        year: '2024'
    },
    {
        name: {
            zh: '王子龙',
            en: 'Zilong Wang'
        },
        avatar: '/assets/people/phd/ZilongWang.png',
        year: '2024'
    },
    {
        name: {
            zh: '陶云波',
            en: 'Yunbo Tao'
        },
        avatar: '/assets/people/phd/YunboTao.png',
        year: '2024'
    },
    {
        name: {
            zh: '刘金羽',
            en: 'Jinyu Liu'
        },
        avatar: '/assets/people/phd/JinyuLiu.png',
        year: '2024'
    },
    {
        name: {
            zh: '应凯宁',
            en: 'Kaining Ying'
        },
        avatar: '/assets/people/phd/KainingYing.png',
        year: '2024'
    },
    {
        name: {
            zh: '杨嘉瑞',
            en: 'Jiarui Yang'
        },
        avatar: '/assets/people/phd/JiaruiYang.png',
        year: '2024'
    },
    {
        name: {
            zh: '王书杰',
            en: 'Shujie Wang'
        },
        avatar: '/assets/people/phd/ShujieWang.png',
        year: '2024'
    },
    {
        name: {
            zh: '陈云豪',
            en: 'Yunhao Chen'
        },
        avatar: '/assets/people/phd/YunhaoChen.png',
        year: '2024'
    },
    {
        name: {
            zh: '孙志豪',
            en: 'Zhihao Sun'
        },
        avatar: '/assets/people/phd/ZhihaoSun.png',
        year: '2024'
    },
    {
        name: {
            zh: '杜智颖',
            en: 'Zhiying Du'
        },
        avatar: '/assets/people/phd/ZhiyingDu.jpg',
        year: '2024'
    },
    {
        name: {
            zh: '余玥',
            en: 'Yue Yu'
        },
        avatar: '/assets/people/phd/YueYu.jpg',
        year: '2024'
    },
    {
        name: {
            zh: '刘郭杉',
            en: 'Guoshan Liu'
        },
        avatar: '/assets/people/phd/GuoshanLiu.jpg',
        year: '2024'
    },
    {
        name: {
            zh: '杨海波',
            en: 'Haibo Yang'
        },
        avatar: '/assets/people/phd/HaiboYang.png',
        year: '2024'
    },
    {
        name: {
            zh: '彭舞鉴',
            en: 'Wujian Peng'
        },
        avatar: '/assets/people/phd/WujianPeng.jpg',
        year: '2024'
    },
    {
        name: {
            zh: '陈义桐',
            en: 'Yitong Chen'
        },
        avatar: '/assets/people/phd/YitongChen.png',
        year: '2024'
    },
    {
        name: {
            zh: '宋一飞',
            en: 'Yifei Song'
        },
        avatar: '/assets/people/phd/YifeiSong.jpg',
        year: '2024'
    },
    {
        name: {
            zh: '高雅',
            en: 'Ya Gao'
        },
        avatar: '/assets/people/phd/YaGao.png',
        year: '2024'
    },
    {
        name: {
            zh: '刘浩航',
            en: 'Haohang Liu'
        },
        avatar: '/assets/people/phd/HaohangLiu.png',
        year: '2024'
    },
    {
        name: {
            zh: '陈康',
            en: 'Kang Chen'
        },
        avatar: '/assets/people/phd/KangChen.png',
        year: '2024'
    },
    {
        name: {
            zh: '林星耀',
            en: 'Xingyao Lin'
        },
        avatar: '/assets/people/phd/XingyaoLin.jpg',
        year: '2025'
    },
    {
        name: {
            zh: '陆天一',
            en: 'Tianyi Lu'
        },
        avatar: '/assets/people/phd/TianyiLu.jpg',
        year: '2025'
    },
    {
        name: {
            zh: '赵祥宇',
            en: 'Xiangyu Zhao'
        },
        avatar: '/assets/people/phd/XiangyuZhao.png',
        year: '2025'
    },
    {
        name: {
            zh: '杨亚婕',
            en: 'Yajie Yang'
        },
        avatar: '/assets/people/phd/YajieYang.png',
        year: '2025'
    },
    {
        name: {
            zh: '文茗',
            en: 'Ming Wen'
        },
        avatar: '/assets/people/phd/MingWen.png',
        year: '2025'
    },
    {
        name: {
            zh: '夏康杰',
            en: 'Kangjie Xia'
        },
        avatar: '/assets/people/phd/KangjieXia.png',
        year: '2025'
    },
    {
        name: {
            zh: '杨依颖',
            en: 'Yiying Yang'
        },
        avatar: '/assets/people/phd/YiyingYang.png',
        year: '2025'
    },
    {
        name: {
            zh: '杨曦邦',
            en: 'Xibang Yang'
        },
        avatar: '/assets/people/phd/XibangYang.png',
        year: '2025'
    },
    {
        name: {
            zh: '竺江港',
            en: 'Jianggang Zhu'
        },
        avatar: '/assets/people/phd/JianggangZhu.png',
        year: '2025'
    },
    {
        name: {
            zh: '苑红榜',
            en: 'Hongbang Yuan'
        },
        avatar: '/assets/people/phd/HongbangYuan.png',
        year: '2025'
    },
    {
        name: {
            zh: '彭中园',
            en: 'Zhongyuan Peng'
        },
        avatar: '/assets/people/phd/ZhongyuanPeng.png',
        year: '2025'
    },
    {
        name: {
            zh: '徐才峻',
            en: 'Caijun Xu'
        },
        avatar: '/assets/people/phd/CaijunXu.png',
        year: '2025'
    },
    {
        name: {
            zh: '孙闻鹤',
            en: 'Wenhe Sun'
        },
        avatar: '/assets/people/phd/WenheSun.png',
        year: '2025'
    },
    {
        name: {
            zh: '岳琮涵',
            en: 'Conghan Yue'
        },
        avatar: '/assets/people/phd/ConghanYue.png',
        year: '2025'
    },
    {
        name: {
            zh: '黄扬林',
            en: 'Yanglin Huang'
        },
        avatar: '/assets/people/phd/YanglinHuang.png',
        year: '2025'
    },
    {
        name: {
            zh: '王昊天',
            en: 'Haotian Wang'
        },
        avatar: '/assets/people/phd/HaotianWang.png',
        year: '2025'
    },
    {
        name: {
            zh: '许晟旗',
            en: 'Shengqi Xu'
        },
        avatar: '/assets/people/phd/ShengqiXu.png',
        year: '2025'
    },
    {
        name: {
            zh: '郑翔宇',
            en: 'Xiangyu Zheng'
        },
        avatar: '/assets/people/phd/XiangyuZheng.png',
        year: '2025'
    },
    {
        name: {
            zh: '方东',
            en: 'Dong Fang'
        },
        avatar: '/assets/people/phd/DongFang.png',
        year: '2025'
    },
    {
        name: {
            zh: '钟国金',
            en: 'Guojin Zhong'
        },
        avatar: '/assets/people/phd/GuojinZhong.png',
        year: '2025'
    },
    {
        name: {
            zh: '何崧铭',
            en: 'Songming He'
        },
        avatar: '/assets/people/phd/SongmingHe.png',
        year: '2025'
    },
    {
        name: {
            zh: '葛祖浩',
            en: 'Zuhao Ge'
        },
        avatar: '/assets/people/phd/ZuhaoGe.png',
        year: '2025'
    },
    {
        name: {
            zh: '龙怡天',
            en: 'Yitian Long'
        },
        avatar: '/assets/people/phd/YitianLong.png',
        year: '2025'
    }
]

export const masterList: Student[] = [
    {
        name: {
            zh: "周士杰",
            en: "Shijie Zhou"
        },
        avatar: "/assets/people/master/ShijieZhou.jpg",
        year: "2024"
    },
    {
        name: {
            zh: "严键荣",
            en: "Jianrong Yan"
        },
        avatar: "/assets/people/master/JianrongYan.jpg",
        year: "2024"
    },
    {
        name: {
            zh: "徐天骁",
            en: "Tianxiao Xu"
        },
        avatar: "/assets/people/master/TianxiaoXu.jpg",
        year: "2024"
    },
    {
        name: {
            zh: "王雪桥",
            en: "Xueqiao Wang"
        },
        avatar: "/assets/people/master/XueqiaoWang.jpg",
        year: "2024"
    },
    {
        name: {
            zh: "李星翰",
            en: "Xinghan Li"
        },
        avatar: "/assets/people/master/XinghanLi.jpg",
        year: "2024"
    },
    {
        name: {
            zh: "公超",
            en: "Chao Gong"
        },
        avatar: "/assets/people/master/ChaoGong.png",
        year: "2024"
    },
    {
        name: {
            zh: "李亦安",
            en: "Yian Li"
        },
        avatar: "/assets/people/master/YianLi.jpg",
        year: "2024"
    },
    {
        name: {
            zh: "张园园",
            en: "Yuanyuan Zhang"
        },
        avatar: "/assets/people/master/YuanyuanZhang.png",
        year: "2024"
    },
    {
        name: {
            zh: "胥楚璇",
            en: "Chuxuan Xu"
        },
        avatar: "/assets/people/master/ChuxuanXu.png",
        year: "2024"
    },
    {
        name: {
            zh: "白维康",
            en: "Weikang Bai"
        },
        avatar: "/assets/people/master/WeikangBai.jpg",
        year: "2024"
    },
    {
        name: {
            zh: "叶兴松",
            en: "Xingsong Ye"
        },
        avatar: "/assets/people/master/XingsongYe.jpg",
        year: "2024"
    },
    {
        name: {
            zh: "谢雅真",
            en: "Yazhen Xie"
        },
        avatar: "/assets/people/master/YazhenXie.png",
        year: "2024"
    },
    {
        name: {
            zh: "唐松",
            en: "Song Tang"
        },
        avatar: "/assets/people/master/SongTang.png",
        year: "2024"
    },
    {
        name: {
            zh: "秦臻远",
            en: "Zhenyuan Qin"
        },
        avatar: "/assets/people/master/ZhenyuanQin.png",
        year: "2024"
    },
    {
        name: {
            zh: "梁海媛",
            en: "Haiyuan Liang"
        },
        avatar: "/assets/people/master/HaiyuanLiang.png",
        year: "2024"
    },
    {
        name: {
            zh: "揭光泉",
            en: "Guangquan Jie"
        },
        avatar: "/assets/people/master/GuangquanJie.png",
        year: "2024"
    },
    {
        name: {
            zh: "王耀宁",
            en: "Yaoning Wang"
        },
        avatar: "/assets/people/master/YaoningWang.png",
        year: "2024"
    },
    {
        name: {
            zh: "尹振云",
            en: "Zhenyun Yin"
        },
        avatar: "/assets/people/master/ZhenyunYin.png",
        year: "2024"
    },
    {
        name: {
            zh: "黎俊成",
            en: "Juncheng Li"
        },
        avatar: "/assets/people/master/JunchengLi.png",
        year: "2024"
    },
    {
        name: {
            zh: "陈籽杏",
            en: "Zixin Chen"
        },
        avatar: "/assets/people/master/ZixinChen.png",
        year: "2024"
    },
    {
        name: {
            zh: "许恒源",
            en: "Hengyuan Xu"
        },
        avatar: "/assets/people/master/HengyuanXu.png",
        year: "2024"
    },
    {
        name: {
            zh: "谢易蓊",
            en: "Yiwen Xie"
        },
        avatar: "/assets/people/master/YiwenXie.png",
        year: "2024"
    },
    {
        name: {
            zh: "申仕伟",
            en: "Shiwei Shen"
        },
        avatar: "/assets/people/master/ShiweiShen.png",
        year: "2024"
    },
    {
        name: {
            zh: "李全昊",
            en: "Quanhao Li"
        },
        avatar: "/assets/people/master/QuanhaoLi.jpg",
        year: "2024"
    },
    {
        name: {
            zh: "冷佳骐",
            en: "Jiaqi Leng"
        },
        avatar: "/assets/people/master/JiaqiLeng.jpg",
        year: "2024"
    },
    {
        name: {
            zh: "石佳朋",
            en: "Jiapeng Shi"
        },
        avatar: "/assets/people/master/JiapengShi.png",
        year: "2024"
    },
    {
        name: {
            zh: "曹海东",
            en: "Haidong Cao"
        },
        avatar: "/assets/people/master/HaidongCao.png",
        year: "2024"
    },
    {
        name: {
            zh: "刘震熙",
            en: "Zhenxi Liu"
        },
        avatar: "/assets/people/master/ZhenxiLiu.png",
        year: "2024"
    },
    {
        name: {
            zh: "陈笑雨",
            en: "Xiaoyu Chen"
        },
        avatar: "/assets/people/master/XiaoyuChen.png",
        year: "2024"
    },
    {
        name: {
            zh: "华佳彬",
            en: "Jiabin Hua"
        },
        avatar: "/assets/people/master/JiabinHua.png",
        year: "2024"
    },
    {
        name: {
            zh: "张睿琦",
            en: "Ruiqi Zhang"
        },
        avatar: "/assets/people/master/RuiqiZhang.png",
        year: "2024"
    },
    {
        name: {
            zh: "牟庭树",
            en: "Tingshu Mou"
        },
        avatar: "/assets/people/master/TingshuMou.png",
        year: "2025"
    },
    {
        name: {
            zh: "黎佳宇",
            en: "Jiayu Li"
        },
        avatar: "/assets/people/master/JiayuLi.png",
        year: "2025"
    },
    {
        name: {
            zh: "郑铭",
            en: "Ming Zheng"
        },
        avatar: "/assets/people/master/MingZheng.png",
        year: "2025"
    },
    {
        name: {
            zh: "黄飞达",
            en: "Feida Huang"
        },
        avatar: "/assets/people/master/FeidaHuang.png",
        year: "2025"
    },
    {
        name: {
            zh: "王煊斐",
            en: "Xuanfei Wang"
        },
        avatar: "/assets/people/master/XuanfeiWang.png",
        year: "2025"
    },
    {
        name: {
            zh: "时佳佳",
            en: "Jiajia Shi"
        },
        avatar: "/assets/people/master/JiajiaShi.png",
        year: "2025"
    },
    {
        name: {
            zh: "李妃",
            en: "Fei Li"
        },
        avatar: "/assets/people/master/FeiLi.png",
        year: "2025"
    },
    {
        name: {
            zh: "陈雨妍",
            en: "Yuyan Chen"
        },
        avatar: "/assets/people/master/YuyanChen.png",
        year: "2025"
    },
    {
        name: {
            zh: "唐梓耀",
            en: "Ziyao Tang"
        },
        avatar: "/assets/people/master/ZiyaoTang.png",
        year: "2025"
    },
    {
        name: {
            zh: "蔡子豪",
            en: "Zihao Cai"
        },
        avatar: "/assets/people/master/ZihaoCai.png",
        year: "2025"
    },
    {
        name: {
            zh: "周宇航",
            en: "Yuhang Zhou"
        },
        avatar: "/assets/people/master/YuhangZhou.png",
        year: "2025"
    },
    {
        name: {
            zh: "朱子越",
            en: "Ziyue Zhu"
        },
        avatar: "/assets/people/master/ZiyueZhu.png",
        year: "2025"
    },
    {
        name: {
            zh: "王恒",
            en: "Heng Wang"
        },
        avatar: "/assets/people/master/HengWang.png",
        year: "2025"
    },
    {
        name: {
            zh: "刘思远",
            en: "Siyuan Liu"
        },
        avatar: "/assets/people/master/SiyuanLiu.png",
        year: "2025"
    },
    {
        name: {
            zh: "余钒",
            en: "Fan Yu"
        },
        avatar: "/assets/people/master/FanYu.png",
        year: "2025"
    },
    {
        name: {
            zh: "陈昊天",
            en: "Haotian Chen"
        },
        avatar: "/assets/people/master/HaotianChen.png",
        year: "2025"
    },
    {
        name: {
            zh: "庄济宇",
            en: "Jiyu Zhuang"
        },
        avatar: "/assets/people/master/JiyuZhuang.png",
        year: "2025"
    },
    {
        name: {
            zh: "陈品轩",
            en: "Pinxuan Chen"
        },
        avatar: "/assets/people/master/PinxuanChen.png",
        year: "2025"
    },
    {
        name: {
            zh: "肖云严",
            en: "Yunyan Xiao"
        },
        avatar: "/assets/people/master/YunyanXiao.png",
        year: "2025"
    },
    {
        name: {
            zh: "张为尧",
            en: "Weiyao Zhang"
        },
        avatar: "/assets/people/master/WeiyaoZhang.png",
        year: "2025"
    },
    {
        name: {
            zh: "韩悦",
            en: "Yue Han"
        },
        avatar: "/assets/people/master/YueHan.png",
        year: "2025"
    },
    {
        name: {
            zh: "徐聪",
            en: "Cong Xu"
        },
        avatar: "/assets/people/master/CongXu.png",
        year: "2025"
    },
    {
        name: {
            zh: "李枳贤",
            en: "Zhixian Li"
        },
        avatar: "/assets/people/master/ZhixianLi.png",
        year: "2025"
    },
    {
        name: {
            zh: "周宇辰",
            en: "Yuchen Zhou"
        },
        avatar: "/assets/people/master/YuchenZhou.png",
        year: "2025"
    },
    {
        name: {
            zh: "刘卓瀚",
            en: "Zhuohan Liu"
        },
        avatar: "/assets/people/master/ZhuohanLiu.png",
        year: "2025"
    },
    {
        name: {
            zh: "王泽霄",
            en: "Zexiao Wang"
        },
        avatar: "/assets/people/master/ZexiaoWang.png",
        year: "2025"
    },
    {
        name: {
            zh: "曹文骏",
            en: "Wenjun Cao"
        },
        avatar: "/assets/people/master/WenjunCao.png",
        year: "2025"
    },
    {
        name: {
            zh: "庞建鸿",
            en: "Jianhong Pang"
        },
        avatar: "/assets/people/master/JianhongPang.png",
        year: "2025"
    },
    {
        name: {
            zh: "刘扬",
            en: "Yang Liu"
        },
        avatar: "/assets/people/master/YangLiu.png",
        year: "2025"
    },
    {
        name: {
            zh: "吴超",
            en: "Chao Wu"
        },
        avatar: "/assets/people/master/ChaoWu.png",
        year: "2025"
    },
    {
        name: {
            zh: "马周原",
            en: "Zhouyuan Ma"
        },
        avatar: "/assets/people/master/ZhouyuanMa.png",
        year: "2025"
    },
    {
        name: {
            zh: "魏蓝",
            en: "Lan Wei"
        },
        avatar: "/assets/people/master/LanWei.png",
        year: "2025"
    },
    {
        name: {
            zh: "司盛宇",
            en: "Shengyu Si"
        },
        avatar: "/assets/people/master/ShengyuSi.png",
        year: "2025"
    }
]

export const alumniList: Alumni[] = [
    {
        name: {
            zh: "宋雪",
            en: "Xue Song"
        },
        avatar: "/assets/people/alumni/XueSong.jpg",
        year: {
            zh: "2026 博士",
            en: "2026 PhD"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "王锐",
            en: "Rui Wang"
        },
        avatar: "/assets/people/alumni/RuiWang.jpg",
        year: {
            zh: "2026 博士",
            en: "2026 PhD"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "陈昊然",
            en: "Haoran Chen"
        },
        avatar: "/assets/people/alumni/HaoranChen.jpg",
        year: {
            zh: "2026 博士",
            en: "2026 PhD"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "王君可",
            en: "Junke Wang"
        },
        avatar: "/assets/people/alumni/JunkeWang.jpg",
        year: {
            zh: "2026 博士",
            en: "2026 PhD"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "王欣",
            en: "Xin Wang"
        },
        avatar: "/assets/people/phd/XinWang.jpg",
        year: {
            zh: "2026 博士",
            en: "2026 PhD"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "李时杰",
            en: "Shijie Li"
        },
        avatar: "/assets/people/phd/ShijieLi.jpg",
        year: {
            zh: "2026 博士",
            en: "2026 PhD"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "赵浩宇",
            en: "Haoyu Zhao"
        },
        avatar: "/assets/people/phd/HaoyuZhao.jpg",
        year: {
            zh: "2026 博士",
            en: "2026 PhD"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "田睿",
            en: "Rui Tian"
        },
        avatar: "/assets/people/phd/RuiTian.jpg",
        year: {
            zh: "2026 博士",
            en: "2026 PhD"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "张辉",
            en: "Hui Zhang"
        },
        avatar: "/assets/people/phd/HuiZhang.jpg",
        year: {
            zh: "2026 博士",
            en: "2026 PhD"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "焦洋",
            en: "Yang Jiao"
        },
        avatar: "/assets/people/phd/YangJiao.jpg",
        year: {
            zh: "2026 博士",
            en: "2026 PhD"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "罗扬",
            en: "Yang Luo"
        },
        avatar: "/assets/people/phd/YangLuo.jpg",
        year: {
            zh: "2026 博士",
            en: "2026 PhD"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "王若凡",
            en: "Ruofan Wang"
        },
        avatar: "/assets/people/phd/RuofanWang.png",
        year: {
            zh: "2026 博士",
            en: "2026 PhD"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "何恩州",
            en: "Enzhou He"
        },
        avatar: "/assets/people/master/EnzhouHe.png",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "卡穆",
            en: "Mu Ka"
        },
        avatar: "/assets/people/master/MuKa.png",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "吴欣岚",
            en: "Xinlan Wu"
        },
        avatar: "/assets/people/master/XinlanWu.png",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "姚文浩",
            en: "Wenhao Yao"
        },
        avatar: "/assets/people/master/WenhaoYao.jpg",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "尤祖尧",
            en: "Zuyao You"
        },
        avatar: "/assets/people/master/ZuyaoYou.jpg",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "张子豪",
            en: "Zihao Zhang"
        },
        avatar: "/assets/people/master/ZihaoZhang.jpg",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "曲志久",
            en: "Zhijiu Qu"
        },
        avatar: "/assets/people/master/ZhijiuQu.png",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "李丹峰",
            en: "Danfeng Li"
        },
        avatar: "/assets/people/master/DanfengLi.jpg",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "李潇",
            en: "Xiao Li"
        },
        avatar: "/assets/people/master/XiaoLi.png",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "李臻欣",
            en: "Zhenxin Li"
        },
        avatar: "/assets/people/master/ZhenxinLi.png",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "林嘉濠",
            en: "Jiahao Lin"
        },
        avatar: "/assets/people/master/JiahaoLin.png",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "殷海龙",
            en: "Zhanghao Yin"
        },
        avatar: "/assets/people/master/ZhanghaoYin.png",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "王学盛",
            en: "Xuesheng Wang"
        },
        avatar: "/assets/people/master/XueshengWang.jpg",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "石璞",
            en: "Pu Shi"
        },
        avatar: "/assets/people/master/PuShi.jpg",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "程明泽",
            en: "Mingze Cheng"
        },
        avatar: "/assets/people/master/MingzeCheng.jpg",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "罗林",
            en: "Lin Luo"
        },
        avatar: "/assets/people/master/LinLuo.png",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "许俊豪",
            en: "Junhao Xu"
        },
        avatar: "/assets/people/master/JunhaoXu.png",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "谢思程",
            en: "Sicheng Xie"
        },
        avatar: "/assets/people/master/SichengXie.jpg",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "赵永杰",
            en: "Yongjie Zhao"
        },
        avatar: "/assets/people/master/YongjieZhao.jpg",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "赵蕴涵",
            en: "Yunhan Zhao"
        },
        avatar: "/assets/people/master/YunhanZhao.jpg",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "陈一鸣",
            en: "Yiming Chen"
        },
        avatar: "/assets/people/master/YimingChen.jpg",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "陈品烨",
            en: "Pinye Chen"
        },
        avatar: "/assets/people/master/PinyeChen.png",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "雷一鸣",
            en: "Yiming Lei"
        },
        avatar: "/assets/people/master/YimingLei.jpg",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "韩枫",
            en: "Feng Han"
        },
        avatar: "/assets/people/master/FengHan.jpg",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "高子怡",
            en: "Ziyi Gao"
        },
        avatar: "/assets/people/master/ZiyiGao.png",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "黄叙彬",
            en: "Xubin Huang"
        },
        avatar: "/assets/people/master/XubinHuang.jpg",
        year: {
            zh: "2026 硕士",
            en: "2026 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "陈凯",
            en: "Kai Chen"
        },
        avatar: "/assets/people/phd/KaiChen.jpg",
        year: {
            zh: "2025 博士",
            en: "2025 PhD"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "翁泽佳",
            en: "Zejia Weng"
        },
        avatar: "/assets/people/phd/ZejiaWeng.jpg",
        year: {
            zh: "2025 博士",
            en: "2025 PhD"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "孟令琛",
            en: "Lingchen Meng"
        },
        avatar: "/assets/people/phd/LingchenMeng.jpg",
        year: {
            zh: "2025 博士",
            en: "2025 PhD"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "邢桢",
            en: "Zhen Xing"
        },
        avatar: "/assets/people/phd/ZhenXing.jpg",
        year: {
            zh: "2025 博士",
            en: "2025 PhD"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "刘佳",
            en: "Jia Liu"
        },
        avatar: "/assets/people/master/JiaLiu.jpg",
        year: {
            zh: "2025 硕士",
            en: "2025 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },

    {
        name: {
            zh: "刘茵",
            en: "Yin Liu"
        },
        avatar: "/assets/people/master/YinLiu.jpg",
        year: {
            zh: "2025 硕士",
            en: "2025 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "周胜天",
            en: "Shengtian Zhou"
        },
        avatar: "/assets/people/master/ShengtianZhou.jpg",
        year: {
            zh: "2025 硕士",
            en: "2025 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "朱炳文",
            en: "Bingwen Zhu"
        },
        avatar: "/assets/people/master/BingwenZhu.jpg",
        year: {
            zh: "2025 硕士",
            en: "2025 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "桂引暄",
            en: "Yinxuan Gui"
        },
        avatar: "/assets/people/master/YinxuanGui.jpg",
        year: {
            zh: "2025 硕士",
            en: "2025 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "汪平",
            en: "Ping Wang"
        },
        avatar: "/assets/people/master/PingWang.jpg",
        year: {
            zh: "2025 硕士",
            en: "2025 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "潘兆龙",
            en: "Zhaolong Pan"
        },
        avatar: "/assets/people/master/ZhaolongPan.jpg",
        year: {
            zh: "2025 硕士",
            en: "2025 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "王智祥",
            en: "Zhixiang Wang"
        },
        avatar: "/assets/people/master/ZhixiangWang.jpg",
        year: {
            zh: "2025 硕士",
            en: "2025 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "王雨轩",
            en: "Yuxuan Wang"
        },
        avatar: "/assets/people/master/YuxuanWang.jpg",
        year: {
            zh: "2025 硕士",
            en: "2025 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "田文韬",
            en: "Wentao Tian"
        },
        avatar: "/assets/people/master/WentaoTian.jpg",
        year: {
            zh: "2025 硕士",
            en: "2025 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "苏红宇",
            en: "Hongyu Su"
        },
        avatar: "/assets/people/master/HongyuSu.jpg",
        year: {
            zh: "2025 硕士",
            en: "2025 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "谢勇",
            en: "Yong Xie"
        },
        avatar: "/assets/people/master/YongXie.jpg",
        year: {
            zh: "2025 硕士",
            en: "2025 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "赵帅",
            en: "Shuai Zhao"
        },
        avatar: "/assets/people/master/ShuaiZhao.jpg",
        year: {
            zh: "2025 硕士",
            en: "2025 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "郑伟杰",
            en: "Weijie Zheng"
        },
        avatar: "/assets/people/master/WeijieZheng.jpg",
        year: {
            zh: "2025 硕士",
            en: "2025 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "陈浩翔",
            en: "Haoxiang Chen"
        },
        avatar: "/assets/people/master/HaoxiangChen.jpg",
        year: {
            zh: "2025 硕士",
            en: "2025 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "林朝坤",
            en: "Chaokun Lin"
        },
        avatar: "/assets/people/master/ChaokunLin.jpg",
        year: {
            zh: "2025 硕士",
            en: "2025 MS"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "魏志鹏",
            en: "Zhipeng Wei"
        },
        avatar: "/assets/people/alumni/ZhipengWei.jpg",
        year: {
            zh: "2024 博士",
            en: "2024 PhD"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "钱天文",
            en: "Tianwen Qian"
        },
        avatar: "/assets/people/alumni/TianwenQian.png",
        year: {
            zh: "2024 博士",
            en: "2024 PhD"
        },
        company: {
            zh: "博世科技",
            en: "Bosch"
        }
    },
    {
        name: {
            zh: "傅宇倩",
            en: "Yuqian Fu"
        },
        avatar: "/assets/people/alumni/YuqianFu.jpg",
        year: {
            zh: "2023 博士",
            en: "2023 PhD"
        },
        company: {
            zh: "苏黎世联邦理工学院",
            en: "ETH Zürich"
        }
    },
    {
        name: {
            zh: "张星",
            en: "Xing Zhang"
        },
        avatar: "/assets/people/alumni/XingZhang.jpg",
        year: {
            zh: "2023 博士",
            en: "2023 PhD"
        },
        company: {
            zh: "日本国立情报学研究所",
            en: "National Institute ofInformatics"
        }
    },
    {
        name: {
            zh: "卓林海",
            en: "Linhai Zhuo"
        },
        avatar: "/assets/people/alumni/LinhaiZhuo.jpg",
        year: {
            zh: "2023 博士",
            en: "2023 PhD"
        },
        company: {
            zh: "福州大学",
            en: "FZU"
        }
    },
    {
        name: {
            zh: "王铮",
            en: "Zheng Wang"
        },
        avatar: "/assets/people/alumni/ZhengWang.jpg",
        year: {
            zh: "2022 博士",
            en: "2022 PhD"
        },
        company: {
            zh: "浙江工业大学",
            en: "ZJUT"
        }
    },
    {
        name: {
            zh: "陈绍祥",
            en: "Shaoxiang Chen"
        },
        avatar: "/assets/people/alumni/ShaoxiangChen.png",
        year: {
            zh: "2022 博士",
            en: "2022 PhD"
        },
        company: {
            zh: "美团",
            en: "Meituan"
        }
    },
    {
        name: {
            zh: "吕熠强",
            en: "Yiqiang Lv"
        },
        avatar: "/assets/people/alumni/YiqiangLv.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 MS"
        },
        company: {
            zh: "华为",
            en: "Huawei"
        }
    },
    {
        name: {
            zh: "吴妍琪",
            en: "Yanqi Wu"
        },
        avatar: "/assets/people/alumni/YanqiWu.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 MS"
        },
        company: {
            zh: "PayPal",
            en: "PayPal"
        }
    },
    {
        name: {
            zh: "陈家胤",
            en: "Jiayin Chen"
        },
        avatar: "/assets/people/alumni/JiayinChen.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "程利霖",
            en: "Lilin Cheng"
        },
        avatar: "/assets/people/alumni/LilinCheng.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "马宇蒙",
            en: "Yumeng Ma"
        },
        avatar: "/assets/people/alumni/YumengMa.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "华为",
            en: "Huawei"
        }
    },
    {
        name: {
            zh: "聂全鑫",
            en: "QuanXin Nie"
        },
        avatar: "/assets/people/alumni/QuanXinNie.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "交通银行",
            en: "BOCOM"
        }
    },
    {
        name: {
            zh: "祁慧妍",
            en: "Huiyan Qi"
        },
        avatar: "/assets/people/alumni/HuiyanQi.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "孙可欣",
            en: "Kexin Sun"
        },
        avatar: "/assets/people/alumni/KexinSun.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "王淇锐",
            en: "Qirui Wang"
        },
        avatar: "/assets/people/alumni/QiruiWang.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "公务员",
            en: "Civil Servant"
        }
    },
    {
        name: {
            zh: "王世聪",
            en: "Shicong Wang"
        },
        avatar: "/assets/people/alumni/ShicongWang.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "徐文卓",
            en: "Wenzhuo Xu"
        },
        avatar: "/assets/people/alumni/WenzhuoXu.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "360",
            en: "360"
        }
    },
    {
        name: {
            zh: "徐志超",
            en: "Zhichao Xu"
        },
        avatar: "/assets/people/alumni/ZhichaoXu.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "MiniMax",
            en: "MiniMax"
        }
    },
    {
        name: {
            zh: "殷曰浩",
            en: "Yuehao Yin"
        },
        avatar: "/assets/people/alumni/YuehaoYin.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "周学卿",
            en: "Xueqing Zhou"
        },
        avatar: "/assets/people/alumni/XueqingZhou.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "张超",
            en: "Chao Zhang"
        },
        avatar: "/assets/people/alumni/ChaoZhang.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "中国结算",
            en: "CSDC"
        }
    },
    {
        name: {
            zh: "张建航",
            en: "Jianhang Zhang"
        },
        avatar: "/assets/people/alumni/JianhangZhang.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "美团",
            en: "Meituan"
        }
    },
    {
        name: {
            zh: "张逸伦",
            en: "Yilun Zhang"
        },
        avatar: "/assets/people/alumni/YilunZhang.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "",
            en: ""
        }
    },
    {
        name: {
            zh: "郑天伦",
            en: "Tianlun Zheng"
        },
        avatar: "/assets/people/alumni/TianlunZheng.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "公务员",
            en: "Civil Servant"
        }
    },
    {
        name: {
            zh: "干毅",
            en: "Yi Gan"
        },
        avatar: "/assets/people/alumni/YiGan.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "携程集团",
            en: "Trip.com Group"
        }
    },
    {
        name: {
            zh: "沙涛",
            en: "Tao Sha"
        },
        avatar: "/assets/people/alumni/TaoSha.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "携程集团",
            en: "Trip.com Group"
        }
    },
    {
        name: {
            zh: "程宇涛",
            en: "Yutao Cheng"
        },
        avatar: "/assets/people/alumni/YutaoCheng.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "字节跳动",
            en: "ByteDance"
        }
    },
    {
        name: {
            zh: "黄丙晨",
            en: "Bingchen Huang"
        },
        avatar: "/assets/people/alumni/BingchenHuang.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "美团",
            en: "Meituan"
        }
    },
    {
        name: {
            zh: "苏子轩",
            en: "Zixuan Su"
        },
        avatar: "/assets/people/alumni/ZixuanSu.jpg",
        year: {
            zh: "2024 硕士",
            en: "2024 M.Eng"
        },
        company: {
            zh: "腾讯",
            en: "Tencent"
        }
    },
    {
        name: {
            zh: "常明昊",
            en: "Minghao Chang"
        },
        avatar: "/assets/people/alumni/MinghaoChang.jpg",
        year: {
            zh: "2023 硕士",
            en: "2023 M.Eng"
        },
        company: {
            zh: "微软",
            en: "Microsoft"
        }
    },
    {
        name: {
            zh: "罗凡",
            en: "Fan Luo"
        },
        avatar: "/assets/people/alumni/FanLuo.jpg",
        year: {
            zh: "2023 硕士",
            en: "2023 M.Eng"
        },
        company: {
            zh: "Akuna",
            en: "Akuna"
        }
    },
    {
        name: {
            zh: "刘天义",
            en: "Tianyi Liu"
        },
        avatar: "/assets/people/alumni/TianyiLiu.jpg",
        year: {
            zh: "2023 硕士",
            en: "2023 M.Eng"
        },
        company: {
            zh: "PayPal",
            en: "PayPal"
        }
    },
    {
        name: {
            zh: "吴剑隆",
            en: "Jianlong Wu"
        },
        avatar: "/assets/people/alumni/JianlongWu.jpg",
        year: {
            zh: "2023 硕士",
            en: "2023 MS"
        },
        company: {
            zh: "上海樵弋机器人科技有限公司",
            en: "WOODMAN AI"
        }
    },
    {
        name: {
            zh: "蔡锦绵",
            en: "Jinmian Cai"
        },
        avatar: "/assets/people/alumni/JinmianCai.jpg",
        year: {
            zh: "2022 硕士",
            en: "2022 M.Eng"
        },
        company: {
            zh: "腾讯音乐",
            en: "Tencent Music"
        }
    },
    {
        name: {
            zh: "詹智勤",
            en: "Zhiqin Zhan"
        },
        avatar: "/assets/people/alumni/ZhiqinZhan.jpg",
        year: {
            zh: "2022 硕士",
            en: "2022 M.Eng"
        },
        company: {
            zh: "字节跳动",
            en: "ByteDance"
        }
    },
    {
        name: {
            zh: "訾柏嘉",
            en: "Bojia Zi"
        },
        avatar: "/assets/people/alumni/BojiaZi.jpg",
        year: {
            zh: "2022 硕士",
            en: "2022 MS"
        },
        company: {
            zh: "香港中文大学博士",
            en: "PhD student at CUHK"
        }
    },
    {
        name: {
            zh: "赵世豪",
            en: "Shihao Zhao"
        },
        avatar: "/assets/people/alumni/ShihaoZhao.jpg",
        year: {
            zh: "2022 硕士",
            en: "2022 M.Eng"
        },
        company: {
            zh: "香港大学博士",
            en: "PhD student at HKU"
        }
    },
    {
        name: {
            zh: "高吉祥",
            en: "Jixiang Gao"
        },
        avatar: "/assets/people/alumni/JixiangGao.jpg",
        year: {
            zh: "2022 硕士",
            en: "2022 M.Eng"
        },
        company: {
            zh: "蚂蚁金服",
            en: "Ant Group"
        }
    },
    {
        name: {
            zh: "郭宇田",
            en: "Yutian Guo"
        },
        avatar: "/assets/people/alumni/YutianGuo.png",
        year: {
            zh: "2021 硕士",
            en: "2021 MS"
        },
        company: {
            zh: "中国银行",
            en: "Bank of China"
        }
    },
    {
        name: {
            zh: "蒋林曦",
            en: "Linxi Jiang"
        },
        avatar: "/assets/people/alumni/LinxiJiang.png",
        year: {
            zh: "2021 硕士",
            en: "2021 M.Eng"
        },
        company: {
            zh: "腾讯",
            en: "Tencent"
        }
    },
    {
        name: {
            zh: "程君同",
            en: "Juntong Cheng"
        },
        avatar: "/assets/people/alumni/JuntongCheng.png",
        year: {
            zh: "2021 硕士",
            en: "2021 M.Eng"
        },
        company: {
            zh: "商汤科技",
            en: "SenseTime"
        }
    },
    {
        name: {
            zh: "李旻骏",
            en: "Minjun Li"
        },
        avatar: "/assets/people/alumni/MinjunLi.png",
        year: {
            zh: "2020 硕士",
            en: "2020 MS"
        },
        company: {
            zh: "Preferred Networks",
            en: "Preferred Networks"
        }
    },
    {
        name: {
            zh: "林道蔚",
            en: "Daowei Lin"
        },
        avatar: "/assets/people/alumni/DaoweiLin.png",
        year: {
            zh: "2020 硕士",
            en: "2020 M.Eng"
        },
        company: {
            zh: "腾讯",
            en: "Tencent"
        }
    },
    {
        name: {
            zh: "郝昱",
            en: "Yu Hao"
        },
        avatar: "/assets/people/alumni/YuHao.png",
        year: {
            zh: "2019 硕士",
            en: "2019 MS"
        },
        company: {
            zh: "字节跳动",
            en: "ByteDance"
        }
    },
    {
        name: {
            zh: "程昌茂",
            en: "Changmao Cheng"
        },
        avatar: "/assets/people/alumni/ChangmaoCheng.png",
        year: {
            zh: "2019 硕士",
            en: "2019 MS"
        },
        company: {
            zh: "旷视科技",
            en: "Megvii (Face++)"
        }
    },
    {
        name: {
            zh: "王南洋",
            en: "Nanyang Wang"
        },
        avatar: "/assets/people/alumni/NanyangWang.png",
        year: {
            zh: "2019 硕士",
            en: "2019 M.Eng"
        },
        company: {
            zh: "阿里巴巴",
            en: "Alibaba"
        }
    },
    {
        name: {
            zh: "赵瑞玮",
            en: "Rui-Wei Zhao"
        },
        avatar: "/assets/people/alumni/Rui-WeiZhao.png",
        year: {
            zh: "2018 博士",
            en: "2018 PhD"
        },
        company: {
            zh: "新加坡南洋理工大学",
            en: "NTU"
        }
    },
    {
        name: {
            zh: "顾佳伟",
            en: "Jiawei Gu"
        },
        avatar: "/assets/people/alumni/JiaweiGu.png",
        year: {
            zh: "2018 硕士",
            en: "2018 MS"
        },
        company: {
            zh: "饿了么",
            en: "ele.me"
        }
    },
    {
        name: {
            zh: "李适",
            en: "Shi Li"
        },
        avatar: "/assets/people/alumni/ShiLi.png",
        year: {
            zh: "2018 硕士",
            en: "2018 M.Eng"
        },
        company: {
            zh: "米哈游",
            en: "mihayo.com"
        }
    },
    {
        name: {
            zh: "戴琦",
            en: "Qi Dai"
        },
        avatar: "/assets/people/alumni/QiDai.png",
        year: {
            zh: "2017 博士",
            en: "2017 PhD"
        },
        company: {
            zh: "微软亚洲研究院",
            en: "Microsoft Research Asia"
        }
    },
    {
        name: {
            zh: "王曦",
            en: "Xi Wang"
        },
        avatar: "/assets/people/alumni/XiWang.png",
        year: {
            zh: "2017 硕士",
            en: "2017 MS"
        },
        company: {
            zh: "微软上海",
            en: "Microsoft Shanghai"
        }
    },
    {
        name: {
            zh: "陈晨",
            en: "Chen Chen"
        },
        avatar: "/assets/people/alumni/ChenChen.png",
        year: {
            zh: "2017 硕士",
            en: "2017 MS"
        },
        company: {
            zh: "VMWare",
            en: "VMWare"
        }
    },
    {
        name: {
            zh: "徐宝函",
            en: "Baohan Xu"
        },
        avatar: "/assets/people/alumni/BaohanXu.png",
        year: {
            zh: "2017 硕士",
            en: "2017 MS"
        },
        company: {
            zh: "众安科技",
            en: "ZhongAn Technologies"
        }
    },
    {
        name: {
            zh: "王强",
            en: "Qiang Wang"
        },
        avatar: "/assets/people/alumni/QiangWang.png",
        year: {
            zh: "2017 硕士",
            en: "2017 M.Eng"
        },
        company: {
            zh: "华为",
            en: "Huawei Technologies"
        }
    },
    {
        name: {
            zh: "贺川子",
            en: "Chuanzi He"
        },
        avatar: "/assets/people/alumni/ChuanziHe.png",
        year: {
            zh: "2017 BSc",
            en: "2017 BSc"
        },
        company: {
            zh: "Master student at USC",
            en: "Master student at USC"
        }
    },
    {
        name: {
            zh: "涂坚",
            en: "Jian Tu"
        },
        avatar: "/assets/people/alumni/JianTu.png",
        year: {
            zh: "2016 硕士",
            en: "2016 MS"
        },
        company: {
            zh: "滴滴出行",
            en: "Didi Chuxing"
        }
    },
    {
        name: {
            zh: "王佳军",
            en: "Jiajun Wang"
        },
        avatar: "/assets/people/alumni/JiajunWang.png",
        year: {
            zh: "2016 硕士",
            en: "2016 MS"
        },
        company: {
            zh: "滴滴出行",
            en: "Didi Chuxing"
        }
    },
    {
        name: {
            zh: "王德泉",
            en: "Dequan Wang"
        },
        avatar: "/assets/people/alumni/DequanWang.png",
        year: {
            zh: "2016 本科生",
            en: "2016 BSc"
        },
        company: {
            zh: "伯克利大学博士",
            en: "PhD student at UC Berkeley"
        }
    },
    {
        name: {
            zh: "叶浩",
            en: "Hao Ye"
        },
        avatar: "/assets/people/alumni/HaoYe.png",
        year: {
            zh: "2015 博士",
            en: "2015 PhD, co-advised"
        },
        company: {
            zh: "中国科学院上海高等研究院",
            en: "SARI, CAS"
        }
    },
    {
        name: {
            zh: "浦剑",
            en: "Jian Pu"
        },
        avatar: "/assets/people/alumni/JianPu.png",
        year: {
            zh: "2014 博士",
            en: "2014 PhD, co-advised"
        },
        company: {
            zh: "华东师范大学",
            en: "East China Normal University"
        }
    },
    {
        name: {
            zh: "蒋宇东",
            en: "Yudong Jiang"
        },
        avatar: "/assets/people/alumni/YudongJiang.png",
        year: {
            zh: "2014 硕士",
            en: "2014 MS"
        },
        company: {
            zh: "阿里巴巴",
            en: "Alibaba"
        }
    },
    {
        name: {
            zh: "郑莹斌",
            en: "Yingbin Zheng"
        },
        avatar: "/assets/people/alumni/YingbinZheng.png",
        year: {
            zh: "2013 博士",
            en: "2013 PhD, co-advised"
        },
        company: {
            zh: "中国科学院上海高等研究院",
            en: "SARI, CAS"
        }
    }
]