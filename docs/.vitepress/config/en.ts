import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en',
  title: 'FVL Laboratory',

  themeConfig: {
    nav: nav(),
    siteTitle: "Fudan Vision and Learning Laboratory",
    langMenuLabel: 'Languages',
    returnToTopLabel: 'Back to top',
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Home',
      link: '/en/',
    },
    {
      text: 'News',
      link: '/news',
    },
    {
      text: 'Publications',
      link: '/en/publications',
    },
    {
      text: 'People',
      link: '/en/people',
    },
    {
      text: 'Join Us',
      link: '/en/joinus',
    }
  ]
}