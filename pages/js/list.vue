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
  name: 'JavaScript',
  components: { List },
  data: () => ({
    datas: [
      {
        title: 'pageshow/pagehide event',
        date: '2021-12-20',
        to: '/js/pageevent'
      }     
    ]
  })
}
</script>
