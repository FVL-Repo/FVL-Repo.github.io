import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en',
  title: 'FVL Lab',

  themeConfig: {
    nav: nav(),
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
      text: 'People',
      link: '/en/people',
    },
  ]
}