export const FooterData = {
    zh: {
        address: '实验室地址: 上海市淞沪路2005号2号交叉学科楼5楼',
        copyright: (year: number) =>
            `© ${year} Fudan Vision and Learning Laboratory. All Rights Reserved.`
    },
    en: {
        address: 'Lab Address: 5F, Interdisciplinary Building 2, 2005 Songhu Road, Shanghai',
        copyright: (year: number) =>
            `© ${year} Fudan Vision and Learning Laboratory. All Rights Reserved.`
    }
} as const
