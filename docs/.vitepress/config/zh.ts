import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-CN',
  title: '复旦大学视觉与学习实验室',
  themeConfig: {
    nav: nav(),

    outline: {
      label: '页面导航'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '主页',
      link: '/',
    },
    {
      text: '成员',
      link: '/people',
    },
  ]
}
