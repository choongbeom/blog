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
  name: 'Cshap',
  components: { List },
  data: () => ({
    datas: [    
    ]
  })
}
</script>
