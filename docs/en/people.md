---
layout: page
title: FVL Lab
titleTemplate: People
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
    name: 'Yixin Cao',
    title: 'Professor',
    desc: 'Pre-tenure'
  },
  {
    avatar: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/cjj.jpeg',
    name: 'Jingjing Chen',
    title: 'Associate Professor'
  },
  {
    avatar: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/czn.png',
    name: 'Zhineng Chen',
    title: 'Professor'
  },
  {
    avatar: '/images/people/faculty/fuyanwei.jpg',
    name: 'Yanwei Fu',
    title: 'Professor'
  },
  {
    avatar: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/ygjiang.png',
    name: 'Yu-gang Jiang',
    title: 'Professor & Director'
  },
  {
    avatar: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/mxj.jpeg',
    name: 'Xingjun Ma',
    title: 'Professor',
    desc: 'Pre-tenure'
  },
  {
    avatar: 'https://fvl.fudan.edu.cn/_upload/tpl/0d/24/3364/template3364/img/wzx.png',
    name: 'Zuxuan Wu',
    title: 'Associate Professor'
  },
]

</script>

<VPTeamPage>
<VPTeamPageSection>
    <template #title>Faculty</template>
    <template #members>
      <VPTeamMembers size="small" :members="orgnization" />
    </template>
  </VPTeamPageSection>
  <Footer/>
</VPTeamPage>
