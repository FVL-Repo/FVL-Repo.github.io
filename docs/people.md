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
    avatar: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/ygjiang.png',
    name: '姜育刚',
    desc: '教授 & 实验室主任'
  },
  {
    avatar: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/wzx.png',
    name: '吴祖煊',
    desc: '副教授'
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
</VPTeamPage>
