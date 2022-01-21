<template>
  <v-container>
    <div>
      <v-card style="min-height:700px;margin:30px">
        <v-toolbar color="#111">
          <v-toolbar-title>게시글({{datas.length}})</v-toolbar-title>
        </v-toolbar>

        <v-list>
          <v-list-item
            v-for="(item, i) in datas"
            :key="i"
            :to="{path: '_slug', query:{to:item.to}}"
          >
            <v-list-item-content>
              <v-list-item-title>
                {{formatDate(item.createdAt)}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.title}}
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
  },
  methods: {
    formatDate(datetime){
      var day = new Date(datetime);
      return day.toISOString().substring(0, 10);
    }
  }  
}
</script>
