<template>
  <v-container>
    <div>
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
        to: '/github/notuesed/merge'
      },
      {
        title: 'GitHub 업로드',
        date: '2021-10-26',
        to: '/github/notuesed/upload'
      },
      {
        title: 'GitHub Branch',
        date: '2021-10-26',
        to: '/github/notuesed/branch'
      },   
      {
        title: 'GitHub 자료',
        date: '2021-10-25',
        to: '/github/notuesed/github'
      }
    ]
  })
}
</script>
