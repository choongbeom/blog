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
  name: 'Cpp',
  components: { List },
  data: () => ({
    datas: [
      {
        title: '회고록',
        date: '2021-10-26',
        to: '/cpp/notuesed/history'
      }     
    ]
  })
}
</script>
