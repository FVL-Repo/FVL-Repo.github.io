import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en',
  title: 'FVL Lab',

  themeConfig: {
    nav: nav(),

    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },

    outline: {
      label: 'Page Navigation'
    },

    langMenuLabel: 'Languages',
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
  }
})

function nav(): DefaultTheme.NavItem[] {
  return []
}