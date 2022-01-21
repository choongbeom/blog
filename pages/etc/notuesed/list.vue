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
  name: 'ETC',
  components: { List },
  data: () => ({
    datas: [
      {
        title: 'Swagger와 Spring REST Docs 통합',
        date: '2021-12-20',
        to: '/etc/notuesed/swagger'
      }     
    ]
  })
}
</script>
