export const FooterData = {
    zh: {
        address: '实验室地址: 上海市淞沪路2005号2号交叉学科楼5楼',
        copyright: (year: number) =>
            `© ${year} Fudan Vision and Learning Laboratory. All Rights Reserved.`
    },
    en: {
        address: 'Address: 5F, No. 2 Interdisciplinary Research Building, 2005 Songhu Road, Shanghai 200438, China.',
        copyright: (year: number) =>
            `© ${year} Fudan Vision and Learning Laboratory. All Rights Reserved.`
    }
} as const
