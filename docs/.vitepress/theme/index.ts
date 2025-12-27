// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import { h, type Plugin } from 'vue';
import { useData, useRoute } from 'vitepress';
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client';
import codeblocksFold from 'vitepress-plugin-codeblocks-fold';
// import { ShareButton } from '@theojs/lumen';//不好看
import {
  NolebaseInlineLinkPreviewPlugin,
} from '@nolebase/vitepress-plugin-inline-link-preview/client'


import '@shikijs/vitepress-twoslash/style.css';
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'
import "vitepress-markdown-timeline/dist/theme/index.css";
import 'vitepress-plugin-codeblocks-fold/style/index.css';
import '@nolebase/vitepress-plugin-page-properties/client/style.css';
import Confetti from "./components/Confetti.vue";
import NCard from './components/NCard.vue';
import Homepage from './views/Homepage.vue';
import Footer from './components/Footer.vue'
import JoinUs from './views/JoinUs.vue';
import News from './views/News.vue';

import './custom.css';
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("Confetti", Confetti); //注册全局组件
    app.component("Homepage", Homepage);
    app.component("Footer", Footer);
    app.component("JoinUs", JoinUs);
    app.component("News", News);
    app.use(TwoslashFloatingVue);
    app.component('NCard', NCard);
    app.use(TwoslashFloatingVue as unknown as Plugin);
    app.use(NolebaseInlineLinkPreviewPlugin as Plugin);
  },
  setup() {
    const route = useRoute();
    const { frontmatter } = useData();
    codeblocksFold({ route, frontmatter }, true, 400);
  }
}