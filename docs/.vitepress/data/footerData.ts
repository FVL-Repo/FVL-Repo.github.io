export const FooterData = {
    zh: {
        address: '实验室地址: 上海市杨浦区湾谷科技园二期D2栋6楼',
        copyright: (year: number) =>
            `© ${year} Fudan Vision and Learning Laboratory. All Rights Reserved.`
    },
    en: {
        address: 'Address: Floor 6, Building D2, Wangu Science Park Phase II, Yangpu District, Shanghai',
        copyright: (year: number) =>
            `© ${year} Fudan Vision and Learning Laboratory. All Rights Reserved.`
    }
} as const
