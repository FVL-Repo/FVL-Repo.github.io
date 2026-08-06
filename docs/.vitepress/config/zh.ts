import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-CN',
  title: '复旦大学视觉与学习实验室',
  themeConfig: {
    nav: nav(),
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '主页',
      link: '/',
    },
    {
      text: '新闻',
      link: '/news',
    },
    {
      text: '论文',
      link: '/publications',
    },
    {
      text: '成员',
      link: '/people',
    },
    {
      text: '加入我们',
      link: '/joinus',
    },
  ]
}