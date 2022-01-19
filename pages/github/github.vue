<template>
  <v-container>
    <div class="main">
      <Content :title="title" :date="date" :content="content" :source="source" :reference="reference" />
    </div>
  </v-container>
</template>

<script>
import Content from "@/components/content";

export default {
  name: '자료',
  components: { Content },
  data () {
    return {
      title: "GitHub 자료",
      date: "2021-10-25",
      content:[        
      ],
      source: [
        {
          title: '',
          url: "https://milooy.wordpress.com/2017/06/21/working-together-with-github-tutorial/",      
        },
        {
          title: 'Backlog',
          url: "https://backlog.com/git-tutorial/kr/",
        }
      ],   
      reference: [
      ]
    }
  },
  mounted () {

  },
  methods: {
  }
}
</script>