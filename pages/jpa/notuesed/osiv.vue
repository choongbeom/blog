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
  name: 'OSIV',
  components: { Content },
  data () {
    return {
      title: "OSIV",
      date: "2021-10-28",
      content:[
        {
          title: "",
          type: "P",
          scr: 
`Open-In-View 또는 Open-Session-In-View 또는 Open-EntityManager-In-View를 관례상 OSIV라고 한다.

true일 경우 영속성 컨텍스트가 트랜잭션 범위를 넘어선 레이어까지 살아있다.
Api라면 클라이언트에게 응답될 때까지, View라면 View가 렌더링될 때까지 영속성컨텍스트가 살아있다.`,
        },
        {
          title: "OSIV = true",
          type: "I",
          scr: "https://github.com/choongbeom/choongbeom.github.io/blob/master/_posts/IMG/OSIV1.png?raw=true",
        },
        {
          title: "OSIV = false",
          type: "I",
          scr: "https://github.com/choongbeom/choongbeom.github.io/blob/master/_posts/IMG/OSIV2.png?raw=true",
        },
        {
          title: "정리",
          type: "P",
          scr: 
`사용자에게 응답 또는 view가 렌더링 될 때까지 영속성컨텍스트를 유지한다.
너무나도 당연하게 OSIV를 true로 두는 게 좋아보이지만! 단점이 존재한다.
영속성 컨텍스트를 유지한다는 건, DB Connection 또한 계속 가지고 있다는 뜻이다.
실시간 트래픽이 중요한 어플리케이션에서는 DB Connection이 모자를 수 있다.
성능이 중요하다면 OSIV는 false로 설정하자.`,
        }
      ],
      source: [
      ],         
      reference: [
        {
          title: '공부 기록',
          url: "https://gracelove91.tistory.com/100",
        }
      ]
    }
  },
  mounted () {

  },
  methods: {
  }
}
</script>