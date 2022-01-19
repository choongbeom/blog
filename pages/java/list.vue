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
  name: 'Java',
  components: { List },
  data: () => ({
    datas: [
      {
        title: 'JCF',
        date: '2021-10-29',
        to: '/java/jcf'
      }     
    ]
  })
}
</script>
