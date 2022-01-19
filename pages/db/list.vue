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
  name: 'DB',
  components: { List },
  data: () => ({
    datas: [
      {
        title: 'SQL-DDL',
        date: '2021-10-28',
        to: '/db/sqlddl'
      }     
    ]
  })
}
</script>
