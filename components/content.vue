<template>
  <v-container>
    <div  class="main">
      <div class="title">
        <h1>{{title}}</h1>
        {{date}}
      </div>

      <hr style="height:1px;border:none;background-color:white;">    
      
      <div class="content" style="margin-bottom:50px">
        <div style="margin-top:30px;">
          <div v-for="(item,i) in content" :key="i">
            <h3 v-if="item.title !== ''" style="margin:0px 0 5px 0;"> 
              <br v-if="i > 0">
              #{{item.title}} 
            </h3>

            <div v-if="item.type === 'I'" style="margin:10px 0 10px 10px;">        
              <img :src='item.scr' alt="">
            </div>

            <div v-if="item.type === 'P'" style="margin:10px 0 10px 10px;"> 
              <pre>{{item.scr}}<span v-if="item.link !== ''"><a :href='item.link'>{{item.link}}</a></span></pre>        
            </div>

            <v-card v-if="item.type === 'C'" style="margin:10px 10px 10px 10px;" color="#333333"> 
              <v-system-bar color="#222222"> Code </v-system-bar>
              <pre style="margin:10px;">{{item.scr}}</pre>
            </v-card>

            <v-data-table 
              v-if="item.type === 'T'"
              style="margin:10px 10px 20px 10px;"
              :headers="item.scr.headers"
              :items="item.scr.desserts"
              :items-per-page="item.scr.desserts.length"
              hide-default-footer
            ></v-data-table>

            <ul v-if="item.type === 'L'" >
              <li v-for="pitem in item.scr.parent" :key="pitem">
                {{ pitem }}
                <ul  v-if="item.scr.children.length > 0">
                  <li v-for="citem in item.scr.children" :key="citem">
                  {{ citem }}
                  </li>
                </ul>
              </li>
            </ul>  
          </div>
        </div>

        <h3 v-if="source.length > 0" style="margin-top:50px;">#참고</h3>
        <div v-for="item in source" :key="item.url">      
          <h4>
            <a :href='item.url'>{{item.url}} <span v-if="item.title !== ''" style="color:white;">&nbsp;[{{item.title}}]</span></a>
          </h4>
        </div>    

        <h3 v-if="reference.length > 0" style="margin-top:50px;">#출처</h3>
        <div v-for="item in reference" :key="item.url">      
          <h4>
            <a :href='item.url'>{{item.url}} <span v-if="item.title !== ''" style="color:white;">&nbsp;[{{item.title}}]</span></a>
          </h4>
        </div>
      </div>

      <!-- github issues -->
      <script 
        src="https://utteranc.es/client.js"
        repo="choongbeom/choongbeom.github.io"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async />
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Content',
  props: {
    title: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    content: {
      type: Array,
      default: () => []
    },
    reference: {
      type: Array,
      default: () => []     
    },
    source: {
      type: Array,
      default: () => []     
    }
  },
  data () {
    return {
    
    }
  },
  mounted () {

  },
  methods: {
  }
}
</script>

<style>
</style>
