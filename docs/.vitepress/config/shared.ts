import { defineConfig } from 'vitepress'
import {
  PageProperties,
  PagePropertiesMarkdownSection
} from '@nolebase/vitepress-plugin-page-properties/vite';
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it';
import timeline from 'vitepress-markdown-timeline';
import taskLists from "markdown-it-task-lists";
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';
import { transformerTwoslash } from '@shikijs/vitepress-twoslash';

export const shared = defineConfig({
  title: 'FVL',
  lastUpdated: false,
  appearance: false,
  cleanUrls: true,
  metaChunk: true,
  ignoreDeadLinks: true,
  vite: {
    ssr: {
      noExternal: [
        '@nolebase/*',
      ],
    },
    plugins: [
      PageProperties(),
      PagePropertiesMarkdownSection({
        excludes: [
          'index.md',
        ],
      }),
      groupIconVitePlugin({
        customIcon: {
          ts: 'logos:typescript',
          js: 'logos:javascript', //js图标
          md: 'logos:markdown', //markdown图标
          css: 'logos:css-3', //css图标
        },
      })
    ]
  },
  markdown: {
    math: true,
    config: (md) => {
      // 时间线
      md.use(timeline)
      // 任务列表
      md.use(taskLists)
      // 行内链接预览
      md.use(InlineLinkPreviewElementTransform)
      // 代码组图标
      md.use(groupIconMdPlugin)
    },
    codeTransformers: [
      transformerTwoslash()
    ]
  },

  sitemap: {
    hostname: 'https://fvl.fudan.edu.cn/',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  /* prettier-ignore */
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/images/fudan.png'
      }
    ],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
  ],

  themeConfig: {
    logo: 'images/fudan.png',
    //开启本地搜索
    // search: {
    //   provider: 'local'
    // },
    // socialLinks: [{ icon: 'github', link: 'https://github.com/FDUCSLG/CS101' }]
  }
})
