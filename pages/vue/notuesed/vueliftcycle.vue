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
  name: 'VueLifeCycle',
  components: { Content },
  data () {
    return {
      title: "Vue Life Cycle, Vuex의 구조",
      date: "2021-12-20",
      content:[
        {
          title: "",
          type: "P",
          scr: 
`갑작스럽게 Vue에 대해서 글을 다루는 이유는 프론트 개발자가 없어 어쩔 수 없이 프론트 영역까지 하다 보니 Vue 항목을 추가 하게 되었다.
정말 기본적인 html 태그만 알고 있는 나에게는 생각보다 프론트쪽 개발은 쉽지 않았다. 쉽지 않지만 불가능 하지 않다는 생각으로 조금씩 조금씩 배워가는 중이다.

현재 담당하고 있는 프로젝트는 프론트엔트는 Nuxt.js로 개발되었다.
“Nuxt.js는 Vue.js 애플리케이션 개발을 보다 강력하고 사용하기 쉽게 만들어 주는 프레임워크이다. 개발자들은 조금 더 빠른 개발 속도를 위해 Vue.js를 빠르게 적용하는 방법을 고안했고, 이를 프레임워크로 만들었다.”고 설명은 되어 있으나, 하지만 나에게는 그렇게 쉽진 않았다.
아마도 프론트엔드 개발자 기준으로 작성하지 않았나 싶다. 웹개발을 시작한지 얼마 안된 개발자의 경우에는 모든게 다 어렵지 않을까?

그래서 Vue의 라이프 사이클부터 보려고 한다.`,
        },
        {
          title: "Vue Life Cycle",
          type: "I",
          scr: "https://github.com/choongbeom/choongbeom.github.io/blob/master/_posts/IMG/vuelifecycle.png?raw=true"
        },         
        {
          title: "",
          type: "P",
          scr: 
`그림에서 붉은색으로 표시된 기능(?)은 Vue 개발 시 소스에서 많이 볼수가 있다.
핵심적인 부분이라기 보다는 아마도 소스와 매칭되는 기능을 붉은색으로 표시한 것 같다.

이번에 특정 로직을 개선하는 업무를 맡아서 진행 하였는데 Store(Vuex)를 사용하는 부분에서 의도와 다르게 작동하여 문제가 발생하였다.
Vuex는 “Vue.js의 상태관리 라이브러리로 애플리케이션의 모든 컴포넌트에 대한 중앙 집중식 저장소 역할을 하며 의도적인 방법으로 상태를 변경 및 관리할 수 있다.”라고 정의가 되어 있다.
그렇다면 전역으로 사용하는 데이터를 담아서 사용하면 될것으로 예상하여 진행하였으나, 실패를 격게 되었다. 무엇이 문제일까?

아래는 Vuex 라이트 사이클이다.`          
        },         
        {
          title: "Vuex",
          type: "I",
          scr: "https://github.com/choongbeom/choongbeom.github.io/blob/master/_posts/IMG/vuex.png?raw=true"
        },         
        {
          title: "",
          type: "P",
          scr: 
`개선이 필요한 작업은 페이지가 변경 후 뒤로가기를 하더라도 변경전 페이지의 데이터를 가지고 있도록 처리해야 되는 것이였다. 그런데 왜 데이터가 저장되지 않을까?
개인적인 견해로는 SPA는 웹페이지 하나를 기준으로 되어 있는 것으로 예상된다. 즉, 한페이지 내에 여러개의 컴포넌트가 있을때 자원을 공유하는 개념으로 Vuex를 만들어서 사용한게 아닐까 싶다. 
그런데 페이지가 변경되니 다른 페이지가 생성되는 것으로 데이터가 초기화 된게 아닐까 하는게 나의 생각이다.

  ㆍ현재 프로젝트는 Nuxt.js 프레임워크의 “Universal” 모드로 구성되어 있는 것으로 확인된다. “Universal”모드일 경우 SPA가 아닌 MPA이다. 
    즉, 각 페이지별로 리소스를 따로 관리하게 된다. 다른 페이지 이동 후 뒤로가기로 이전페이지로 돌아 가게될 경우 페이지가 새로 그려지는 것과 동일하게 발생하므로 새로운 리소스를 로드한다.

따라서, 다른 방법으로 해결하였다. Web API의 “Window.sessionStorage“를 이용해서 처리를 했다.`
        }
      ],
      source: [
      ],
      reference: [
        {
          title: '버미노트',
          url: "https://lifeonroom.com/study-lab/spring-rest-docs/",
        },
        {
          title: '꿈꾸는 태태태의 공간',
          url: "https://taetaetae.github.io/posts/a-combination-of-swagger-and-spring-restdocs/",
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