<template>
  <v-container>
    <div>
      <Content :title="title" :date="date" :content="content" :source="source" :reference="reference" />
    </div>
  </v-container>
</template>

<script>
import Content from "@/components/content";

export default {
  name: 'Merge',
  components: { Content },
  data () {
    return {
      title: "Github Merge",
      date: "2021-12-27",
      content:[
        {
          title: "",
          type: "P",
          scr: 
`이전에 Branch에 대해서 설명한 바와 같이 여러명이 개발하기 위해 개별로 브런치를 생성하여 작성한다.
이후 개별로 작성된 브런치를 합치기 위해 사용되는 명령어가 merge라는 명령어다.

먼저 메인이될 브런치로 checkout를 한다. 이후 합칠 브런치를 merge명령을 통해서 합치면 된다.`
        },
        {
          title: "",
          type: "C",
          scr: 
`$ git checkout <main branch>
$ git merge <merge할 branch>`
        },
        {
          title: "",
          type: "P",
          scr: 
`단, 충돌(Conflict)이 발생할 수도 있다. 같은 파일은 2개의 브런치에서 수정할 경우 발생된다.
그래서 충돌이 발생할 경우 충돌된 파일을 체크하여 해결해야 된다. 각각 수정한 사람이 다를 경우 서로 크로스 확인하여 소스를 합칠 수 있도록 해야 된다.
최대한 같은 파일은 서로 다른 브런치에서 수정하지 않도록 하는 것이 최선인것 같다.

VSCODE 사용 시 “GitLens — Git supercharged”을 설치하면, 충돌된 부분을 쉽게 수정할 수 있다.`
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