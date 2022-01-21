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
  name: 'QueryDSL',
  components: { List },
  data: () => ({
    datas: [
      {
        title: 'CaseBuilder',
        date: '2021-11-09',
        to: '/qdsl/casebuilder'
      },
      {
        title: 'ExpressionUtils',
        date: '2021-11-09',
        to: '/qdsl/expressionutils'
      }     
    ]
  })
}
</script>
