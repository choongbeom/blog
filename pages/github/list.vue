<template>
  <v-container>
    <div class="main">
      <List :datas="datas" />
    </div>
  </v-container>
</template>

<script>
import List from "@/components/list";

export default {
  name: 'GitHub',
  components: { List },
  data: () => ({
    datas: [
      {
        title: 'GitHub Merge',
        date: '2021-12-27',
        to: '/github/merge'
      },
      {
        title: 'GitHub 업로드',
        date: '2021-10-26',
        to: '/github/upload'
      },
      {
        title: 'GitHub Branch',
        date: '2021-10-26',
        to: '/github/branch'
      },   
      {
        title: 'GitHub 자료',
        date: '2021-10-25',
        to: '/github/github'
      }
    ]
  })
}
</script>
