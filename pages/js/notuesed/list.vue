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
  name: 'JavaScript',
  components: { List },
  data: () => ({
    datas: [
      {
        title: 'pageshow/pagehide event',
        date: '2021-12-20',
        to: '/js/notuesed/pageevent'
      }     
    ]
  })
}
</script>
