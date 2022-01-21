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
  name: 'Vue',
  components: { List },
  data: () => ({
    datas: [
      {
        title: 'Vue Life Cycle, Vuex의 구조',
        date: '2021-12-20',
        to: '/vue/notuesed/vueliftcycle'
      }     
    ]
  })
}
</script>
