<template>
  <v-container>
    <div class="main">
      <v-card>
        <v-toolbar color="#111">
          <v-toolbar-title>게시글 ({{datas.length}})</v-toolbar-title>
        </v-toolbar>

        <v-list style="min-height:400px">
          <v-list-item
            v-for="(item, i) in datas"
            :key="i"
            :to="item.to"
          >
            <v-list-item-content>
              <v-list-item-title>
                {{item.date}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.title}}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>      
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'List',
  props: {
    datas: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
    
    }
  }
}
</script>
