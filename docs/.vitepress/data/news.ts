export interface NewsItem {
    date: string
    title: string
    summary: string
    link: string
}

export const newsList = [
    {
        date: '2025-12-12',
        image: '/images/news/2025-12-12.png',
        title: {
            zh: '姜育刚教授入选 2025 年度 ACM 杰出会员',
            en: 'Prof. Yu-Gang Jiang elevated to ACM Distinguished Member'
        },
        summary: {
            zh: '近日，国际计算机学会（ACM）公布了2025年度杰出会员（Distinguished Member）评选结果，榜单汇聚了来自全球16个国家和地区的61位计算机领域专家，亚洲仅有11位上榜，中国学者占据7席。姜育刚教授凭借其在大规模视频分析领域的突出贡献成功入选。',
            en: 'The Association for Computing Machinery (ACM) has announced the 2025 ACM Distinguished Members. A total of 61 experts from 16 countries and regions worldwide were selected, including only 11 from Asia, with 7 scholars from China. Professor Yu-gang Jiang was elected in recognition of his outstanding contributions to large-scale video analysis.'
        },
        link: 'https://mp.weixin.qq.com/s/rWEsV1boXkaw3FTDvW-CMQ'
    },
    {
        date: '2025-11-6',
        image: '/images/news/2025-11-6.png',
        title: {
            zh: '杜永坤同学入选中国电子学会-腾讯博士生科研激励计划（混元大模型专项）',
            en: 'Yongkun Du was selected for the CIE-Tencent PhD Research Incentive Program'
        },
        summary: {
            zh: '近期，经专家评审，来自复旦大学视觉与学习实验室的博士生杜永坤凭借其在大模型前沿等领域取得的突出研究成果，入选中国电子学会-腾讯博士生科研激励计划（混元大模型专项）。',
            en: 'Following expert review, Ph.D. student Yongkun Du from the Vision and Learning Laboratory at Fudan University was selected for the CIE–Tencent Ph.D. Research Incentive Program (Hunyuan Large Model Track), in recognition of his outstanding research achievements in frontier areas of large-scale models.'
        },
        link: 'https://mp.weixin.qq.com/s/02xaEP0EernL7ebLmJfqvQ'
    },
    {
        date: '2025-10-20',
        image: '/images/news/2025-10-20.png',
        title: {
            zh: '王君可获 2025 年度 CCF-CV 学术新锐奖',
            en: 'Junke Wang received the CCF-CV Academic Rising Star Award in 2025'
        },
        summary: {
            zh: '近日，中国计算机学会计算机视觉专委会（CCF-CV）2025年度工作会议成功召开，来自复旦大学视觉与学习实验室的博士生王君可荣获2025年度CCF-CV学术新锐奖，全国共有3人获此奖项。',
            en: 'At the 2025 annual meeting of the CCF Technical Committee on Computer Vision (CCF-CV), Ph.D. student Junke Wang from the Vision and Learning Laboratory at Fudan University received the 2025 CCF-CV Rising Star Award. Only three recipients nationwide were selected for this honor.'
        },
        link: 'https://mp.weixin.qq.com/s/fJUUCAPoihSSP7NHHDWXMw'
    },
    {
        "date": "2025-9-18",
        "image": "",
        "title": {
            "zh": "十四篇论文被NeurIPS 2025接收",
            "en": "Fourteen papers accepted by NeurIPS 2025"
        },
        "summary": {
            "zh": "",
            "en": ""
        },
        "link": "/publications"
    },
    {
        date: '2025-7-5',
        image: '/images/news/2025-7-5.png',
        title: {
            zh: '15 篇论文入选 ICCV 2025',
            en: 'Fifteen papers accepted by ICCV 2025'
        },
        summary: {
            zh: 'ICCV 2025 将于10月19日至23日在美国夏威夷檀香山会议中心召开。本次会议共收到11239篇有效投稿，最终录用2698篇论文，录用率为24.0%。复旦大学视觉与学习实验室共有15篇论文入选，研究成果涵盖具身智能、多模态大模型、图像与视频生成、多模态对抗攻防等多个重要方向。',
            en: 'ICCV 2025 will be held from October 19 to 23 at the Honolulu Convention Center, Hawaii, USA. The conference received 11,239 valid submissions and accepted 2,698 papers, resulting in an acceptance rate of 24.0%. The Vision and Learning Laboratory at Fudan University had 15 papers accepted, covering key research areas such as embodied intelligence, multimodal large models, image and video generation, and multimodal adversarial learning.'
        },
        link: 'https://mp.weixin.qq.com/s/aJyxSIK8zxGkPEmzngMmcg'
    },
    {
        date: '2025-1-6',
        image: '/images/news/2025-1-6.png',
        title: {
            zh: '王君可入选首届中国科协青年人才托举工程博士生专项计划',
            en: 'Junke Wang Selected for the First CAS Youth Talent Support Program (Ph.D. Track)'
        },
        summary: {
            zh: '近日，中国科协公布首届“中国科协青年人才托举工程博士生专项计划”入选名单。复旦大学视觉与学习实验室博士生王君可成功入选，托举学会为中国人工智能学会。',
            en: 'The China Association for Science and Technology (CAST) has announced the first cohort of the Youth Talent Support Program (Ph.D. Track). Ph.D. student Junke Wang from the Vision and Learning Laboratory at Fudan University was selected, with the supporting academic society being the Chinese Association for Artificial Intelligence.'
        },
        link: 'https://mp.weixin.qq.com/s/Ga5xrHZiVRR_fpAYitsVMw'
    },
    {
        "date": "2024-12-19",
        "image": "",
        "title": {
            "zh": "姜育刚教授当选2024年度中国计算机学会会士（CCF Fellow）",
            "en": "Prof. Yu-Gang Jiang elevated to CCF Fellow"
        },
        "summary": {
            "zh": "近日，中国计算机学会（CCF）公布了2024年CCF会士名单，复旦大学计算机科学技术学院姜育刚教授当选。",
            "en": "Recently, the China Computer Federation (CCF) announced the list of 2024 CCF Fellows. Professor Yu-Gang Jiang from the School of Computer Science and Technology, Fudan University, was elected."
        },
        "link": "https://mp.weixin.qq.com/s/pmxXxXz2YKUmFl79yRIsKA"
    },
    {
        "date": "2024-10-24",
        "image": "",
        "title": {
            "zh": "姜育刚团队获2023年度上海市技术发明一等奖",
            "en": "FVL won Shanghai Technological Invention Award"
        },
        "summary": {
            "zh": "近日，2023年度上海市科学技术奖隆重揭晓，复旦大学计算机科学技术学院姜育刚教授、工程与应用技术研究院齐立哲研究员、大数据学院付彦伟教授等共同完成的项目《面向智能制造的跨域融合感知关键技术及应用》获上海市技术发明一等奖。",
            "en": "Recently, the 2023 Shanghai Science and Technology Awards were officially announced. The project \"Key Technologies and Applications of Cross-domain Fusion Perception for Intelligent Manufacturing,\" jointly completed by Professor Yu-Gang Jiang from the School of Computer Science, Researcher Lizhe Qi from the Academy of Engineering and Technology, and Professor Yanwei Fu from the School of Data Science at Fudan University, won the First Prize of the Shanghai Technological Invention Award."
        },
        "link": "https://mp.weixin.qq.com/s/qBEL-yBRBbsRy7ttMwxLzA"
    },
    {
        "date": "2024-10-13",
        "image": "",
        "title": {
            "zh": "八篇论文被NeurIPS 2024接收",
            "en": "Eight papers accepted by NeurIPS 2024"
        },
        "summary": {
            "zh": "",
            "en": ""
        },
        "link": "https://mp.weixin.qq.com/s/kqVD747QEmNOTKgQSMEpOQ"
    },
    {
        "date": "2024-7-11",
        "image": "",
        "title": {
            "zh": "八篇论文被ECCV 2024接收",
            "en": "Eight papers accepted by ECCV 2024"
        },
        "summary": {
            "zh": "",
            "en": ""
        },
        "link": "https://mp.weixin.qq.com/s/VDUqba4DBPJ_iFIO2aro8g"
    },
    {
        "date": "2024-6-24",
        "image": "",
        "title": {
            "zh": "姜育刚团队获2023年度国家自然科学二等奖",
            "en": "FVL won State Natural Science Award"
        },
        "summary": {
            "zh": "6月24日，2023年度国家科学技术奖揭晓，复旦大学计算机科学技术学院姜育刚教授、吴祖煊副教授、薛向阳教授与大数据学院付彦伟教授等共同完成的项目“多元协同的视觉计算理论与方法”获国家自然科学奖二等奖。",
            "en": "On June 24, the 2023 State Science and Technology Awards were unveiled. The project \"Theories and Methods of Multi-collaborative Visual Computing,\" jointly completed by Professor Yu-Gang Jiang, Associate Professor Zuxuan Wu, and Professor Xiangyang Xue from the School of Computer Science, along with Professor Yanwei Fu from the School of Data Science at Fudan University, was awarded the Second Prize of the State Natural Science Award."
        },
        "link": "https://news.fudan.edu.cn/2024/0624/c31a141416/page.htm"
    },
    {
        "date": "2024-6-22",
        "image": "",
        "title": {
            "zh": "实验室在CVPR 2024三项挑战赛中斩获冠军",
            "en": "FVL won three challenges at CVPR 2024"
        },
        "summary": {
            "zh": "2024年6月17日至21日，IEEE/CVF 国际计算机视觉与模式识别会议（CVPR）在美国西雅图召开。复旦大学视觉与学习实验室（FVL）共有7篇论文被大会接收，11名师生参会交流。FVL团队通过邀请报告、墙报等方式展示了实验室在视频内容识别、轻量级视频生成、图像内容编辑等方面的研究成果，并在大规模开放词汇目标检测等三项挑战赛中斩获冠军。",
            "en": "From June 17 to 21, 2024, the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) was held in Seattle, USA. A total of 7 papers from the Fudan Vision and Learning Laboratory (FVL) were accepted, and 11 faculty members and students attended the conference. The FVL team presented research achievements in video content recognition, lightweight video generation, and image content editing through invited talks and posters, and won championships in three challenges, including large-scale open-vocabulary object detection."
        },
        "link": "https://mp.weixin.qq.com/s/xHOOIYkkAiD8jORj7jVTnQ"
    },
    {
        "date": "2024-6-22",
        "image": "",
        "title": {
            "zh": "实验室在2024全球人工智能技术创新大赛算法挑战赛中荣获一等奖",
            "en": "FVL won first prize at Global AI Innovation Contest 2024"
        },
        "summary": {
            "zh": "6月22日，2024全球人工智能技术创新大赛算法挑战赛在杭州市未来科技城圆满落幕。复旦大学视觉与学习实验室（FVL）的参赛团队“openocr”获得了大赛“无人机视角下的双光目标检测”赛道一等奖。",
            "en": "On June 22, the Algorithm Challenge of the 2024 Global AI Innovation Contest concluded in Hangzhou Future Sci-Tech City. The \"openocr\" team from the Fudan Vision and Learning Laboratory (FVL) won the first prize in the \"Dual-light Object Detection from a UAV Perspective\" track."
        },
        "link": "https://mp.weixin.qq.com/s/_TTyu2zhGh8RT1w603IHZQ"
    },
    {
        "date": "2023-12-2",
        "image": "",
        "title": {
            "zh": "实验室毕业生陈绍祥入选2023中国图象图形学学会博士学位论文激励计划",
            "en": "Dr. Shaoxiang Chen won outstanding doctoral thesis award from CSIG"
        },
        "summary": {
            "zh": "近日，中国图象图形学学会（CSIG）发布“中国图象图形学学会博士学位论文激励计划”（原“CSIG优博”）入选名单。复旦大学视觉与学习实验室毕业生陈绍祥同学的博士学位论文《视觉与语言结合的视频理解方法研究》入选，导师为姜育刚教授。",
            "en": "Recently, the China Society of Image and Graphics (CSIG) released the list for the \"Doctoral Dissertation Incentive Program\" (formerly CSIG Outstanding Doctoral Dissertation Award). The dissertation titled \"Research on Video Understanding Methods Combining Vision and Language\" by Dr. Shaoxiang Chen, a graduate of Fudan Vision and Learning Laboratory, was selected. His supervisor is Professor Yu-Gang Jiang."
        },
        "link": "https://mp.weixin.qq.com/s/Q6oGE0PMFKhlIgMIY4o_Iw"
    },
    {
        "date": "2023-11-23",
        "image": "",
        "title": {
            "zh": "姜育刚教授当选2024年度国际电气和电子工程师协会会士（IEEE Fellow）",
            "en": "Prof. Yu-Gang Jiang elevated to IEEE Fellow"
        },
        "summary": {
            "zh": "近日，国际电气和电子工程师协会（Institute of Electrical and Electronic Engineers，简称IEEE）公布了2024年度新晋会士（Fellow）名单，全球共323人。姜育刚教授因在大规模视频分析以及开源数据集方面做出杰出贡献，当选IEEE Fellow。",
            "en": "Recently, the Institute of Electrical and Electronics Engineers (IEEE) announced the list of 2024 Fellows, totaling 323 individuals worldwide. Professor Yu-Gang Jiang was elected as an IEEE Fellow in recognition of his outstanding contributions to large-scale video analysis and open-source datasets."
        },
        "link": "https://mp.weixin.qq.com/s/BEsSdJZc-K0s3ZrnkG0sgQ"
    },
    {
        "date": "2023-3-9",
        "image": "",
        "title": {
            "zh": "十一篇论文被CVPR 2023接收",
            "en": "Eleven papers accepted by CVPR 2023"
        },
        "summary": {
            "zh": "",
            "en": ""
        },
        "link": "https://mp.weixin.qq.com/s/d1UP17zk5yz32pG0Rd3KTg"
    },
    {
        "date": "2023-1-31",
        "image": "",
        "title": {
            "zh": "陈绍祥获得2022年度上海市计算机学会优秀博士学位论文奖",
            "en": "Shaoxiang Chen received outstanding thesis award from Shanghai Computer Society"
        },
        "summary": {
            "zh": "",
            "en": ""
        },
        "link": "https://mp.weixin.qq.com/s/RNT_o4obCmc0S045-m-ygQ"
    },
    {
        "date": "2022-11-5",
        "image": "",
        "title": {
            "zh": "最新报告—视频内容分析：现状与六大趋势",
            "en": "Latest talk slides: Present and Future Trends of Video Content Analysis."
        },
        "summary": {
            "zh": "",
            "en": ""
        },
        "link": "/assets/video-content-analysis.pdf"
    },
    {
        "date": "2022-7-30",
        "image": "",
        "title": {
            "zh": "四篇论文被ECCV 2022接收，三篇论文被ACM MM 2022接收",
            "en": "Four papers accepted by ECCV 2022 & three papers accepted by ACM MM 2022"
        },
        "summary": {
            "zh": "",
            "en": ""
        },
        "link": "/publications"
    },
    {
        "date": "2022-7-10",
        "image": "",
        "title": {
            "zh": "蒋林曦获得2021年度上海市计算机学会优秀硕士学位论文奖",
            "en": "Linxi Jiang received outstanding thesis award from Shanghai Computer Society"
        },
        "summary": {
            "zh": "",
            "en": ""
        },
        "link": "https://mp.weixin.qq.com/s/jq2NmoAz4tsp7Zzk5QZGiA"
    },
    {
        "date": "2022-6-27",
        "image": "",
        "title": {
            "zh": "姜育刚教授当选2022年度国际模式识别学会会士（IAPR Fellow）",
            "en": "Prof. Yu-Gang Jiang elevated to IAPR Fellow"
        },
        "summary": {
            "zh": "近日，复旦大学计算机科学技术学院姜育刚教授当选2022年度国际模式识别学会会士（IAPR Fellow），当选理由为“在大规模和可信视频理解以及开源数据集方面的学术贡献（for contributions to large-scale and trustworthy video understanding, and open-source datasets）”。",
            "en": "Recently, Professor Yu-Gang Jiang from the School of Computer Science and Technology, Fudan University, was elected as a 2022 IAPR Fellow for his academic contributions to \"large-scale and trustworthy video understanding, and open-source datasets.\""
        },
        "link": "https://cs.fudan.edu.cn/e4/db/c24256a451803/page.htm"
    },
    {
        "date": "2022-4-28",
        "image": "",
        "title": {
            "zh": "复旦大学首个国家科技创新2030—“新一代人工智能”重大项目正式启动",
            "en": "FVL kicks off Fudan's first National \"Next Generation AI\" Project"
        },
        "summary": {
            "zh": "2022年4月26日，科技创新2030—“新一代人工智能”重大项目“数据安全与隐私保护下的机器学习技术”项目启动暨实施方案论证会在线上召开。项目由复旦大学牵头，负责人为姜育刚教授，参与单位包括上海交通大学、南京大学、浙江大学、华为技术有限公司、暨南大学、北京百度网讯科技有限公司、中国工商银行股份有限公司、翼健（上海）信息科技有限公司、华为云计算技术有限公司。该项目是我校牵头承担的首个国家科技创新2030—“新一代人工智能”重大项目。",
            "en": "On April 26, 2022, the launch and implementation plan demonstration meeting for the \"Machine Learning Technology under Data Security and Privacy Protection\" project, part of the Science and Technology Innovation 2030 — \"Next Generation Artificial Intelligence\" major program, was held online. Led by Fudan University with Professor Yu-Gang Jiang as the principal investigator, this project marks the first National \"Next Generation AI\" major project headed by our university."
        },
        "link": "https://news.fudan.edu.cn/2022/0428/c40a131093/page.htm"
    },
    {
        "date": "2022-3-29",
        "image": "",
        "title": {
            "zh": "开源了BEVT（BERT Pretraining of Video Transformers）的代码",
            "en": "We released the code for BEVT: BERT Pretraining of Video Transformers"
        },
        "summary": {
            "zh": "",
            "en": ""
        },
        "link": "https://github.com/xyzforever/BEVT"
    },
    {
        "date": "2022-3-3",
        "image": "",
        "title": {
            "zh": "五篇论文被CVPR 2022接收",
            "en": "Five papers accepted by CVPR 2022"
        },
        "summary": {
            "zh": "",
            "en": ""
        },
        "link": "/publications"
    },
    {
        "date": "2022-1-24",
        "image": "",
        "title": {
            "zh": "开源了长尾视频识别数据集及代码",
            "en": "We released the dataset and code for long-tailed video recognition"
        },
        "summary": {
            "zh": "",
            "en": ""
        },
        "link": "https://github.com/17Skye17/VideoLT"
    },
    {
        "date": "2021-12-28",
        "image": "",
        "title": {
            "zh": "博士生傅宇倩被评选为复旦大学优秀学生",
            "en": "PhD Candidate Yuqian Fu recognized as an outstanding student of Fudan Univeristy"
        },
        "summary": {
            "zh": "傅宇倩，党员，计算机应用技术专业，计算机科学技术学院2020级博士生（硕博连读）。学年绩点3.73/4.0，位列专业第一，师从姜育刚教授，主要研究内容为计算机视觉，尤其是小样本图像/视频识别。目前以第一作者身份在领域国际顶级学术会议ACM MM、ACM ICMR上发表论文4篇，并著有国家授权发明专利1项。",
            "en": "Yuqian Fu, a 2020-level Ph.D. student at the School of Computer Science and Technology, specializes in Computer Applied Technology. Supervised by Professor Yu-Gang Jiang, her research focuses on computer vision, particularly few-shot image/video recognition. She has published 4 papers as the first author in top-tier international conferences such as ACM MM and ACM ICMR and holds one authorized national invention patent."
        },
        "link": "https://cs.fudan.edu.cn/8d/1f/c24867a429343/page.htm"
    },
    {
        "date": "2022-12-2",
        "image": "",
        "title": {
            "zh": "四篇论文被AAAI 2022接收",
            "en": "Four papers accepted by AAAI 2022"
        },
        "summary": {
            "zh": "",
            "en": ""
        },
        "link": "/publications"
    }
]
