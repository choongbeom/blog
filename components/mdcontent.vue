<template>
  <v-container>
    <div class="main">
      <div>
        <h1>{{document.title}}</h1>
        {{formatDate(document.createdAt)}}
      </div>

      <hr style="height:1px;border:none;background-color:white;margin-bottom:30px">    
 
      <nuxt-content :document="document" style="margin-bottom:50px" />  

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
  name: 'MarkDownContent',
  props: {
    document: {
      type: Object,
      default: ()=> {return{}}
    }
  },
  data () {
    return {
    
    }
  },
  mounted () {

  },
  methods: {
    formatDate(datetime){
      var day = new Date(datetime);
      return day.toISOString().substring(0, 10);
    }
  }
}
</script>

<style>
</style>
