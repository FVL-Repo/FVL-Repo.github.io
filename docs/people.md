---
layout: page
title: FVL 实验室
titleTemplate: 成员
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers, VPTeamPageSection
} from 'vitepress/theme'

const orgnization = [
  {
    avatar: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/head/teacher/caoyixin.png',
    name: '曹艺馨',
    title: '青年研究员'
  },
  {
    avatar: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/cjj.jpeg',
    name: '陈静静',
    title: '副教授'
  },
  {
    avatar: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/czn.png',
    name: '陈智能',
    title: '教授'
  },
  {
    avatar: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/ygjiang.png',
    name: '姜育刚',
    title: '教授 & 实验室主任'
  },
  {
    avatar: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/mxj.jpeg',
    name: '马兴军',
    title: '青年研究员'
  },
  {
    avatar: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/wzx.png',
    name: '吴祖煊',
    title: '副教授'
  },
  {
    avatar: '/images/people/faculty/ZiyiYe.png',
    name: '叶子逸',
    title: '助理教授'
  },
  {
    avatar: '/images/people/faculty/XiaosongJia.png',
    name: '贾萧松',
    title: '助理教授'
  },
]


</script>

<VPTeamPage>
  <VPTeamPageSection>
    <template #title>教师</template>
    <template #members>
      <VPTeamMembers size="small" :members="orgnization" />
    </template>
  </VPTeamPageSection>
  <Footer/>
</VPTeamPage>
