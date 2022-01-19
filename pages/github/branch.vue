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
  name: 'Branch',
  components: { Content },
  data () {
    return {
      title: "GitHub Branch",
      date: "2021-10-26",
      content:[
        {
          title: "",
          type: "P",
          scr: "브런치란 여러사람이 동시에 개발을 할 경우 각각 브런치를 만들어서 개별 개발을 진행 후 머지로 합쳐서 적용합니다."
        },
        {
          title: "",
          type: "C",
          scr: `$ git checkout -b <branch>`
        },
      ],
      source: [
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