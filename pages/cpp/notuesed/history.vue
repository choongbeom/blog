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
  name: '회고록',
  components: { Content },
  data () {
    return {
      title: "회고록",
      date: "2021-10-26",
      content:[
        {
          title: "",
          type: "P",
          scr: 
`13년간 C/C++ 사용을 하면서 정리를 해야 된다는 것을 알면서도 아직까지도 정리를 못하고 있습니다.
첫 회사의 개발언어는 C++있었지만 체계적으로 배우고 학습하지 못해 C, C++를 혼합해서 사용하곤 했습니다.
시간이 없다는 핑계를 무기 삼아서 자기계발에 너무 소홀했던게 아닌가 싶습니다.
또한, MFC를 주로 사용하다 보니, STL를 많이 경험하지 못한 부분이 많이 아쉽기도 합니다.


제가 정리를한 자료는 아니지만, 아주 정리가 잘된 사이트를 공유 합니다.
저도 종종 참고하는 사이트 입니다.`
        }
      ],
      source: [
        {
          title: '모두의 코드',
          url: "https://milooy.wordpress.com/2017/06/21/working-together-with-github-tutorial/",
        },
        {
          title: '프로그래머스',
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