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
  name: 'Swagger',
  components: { Content },
  data () {
    return {
      title: "Swagger와 Spring REST Docs 통합",
      date: "2021-12-20",
      content:[
        {
          title: "Swagger와 Spring REST Docs 통합에 대한 고찰",
          type: "P",
          scr: 
`API 서버의 API 함수를 자동으로 문서화를 해주는 프레임워크들이다. 다만 각각의 장단점이 명확하여 어떤것으로 선정해야 될지 고민을 많이 하게 된다.
그러던 와중 “태태태님의 기술 블로그에서 Swagger와 Spring Restdocs의 우아한 조합 (by OpenAPI Spec)” 위와 같은 고민을 이미 해주신 덕분에 구현 테스트를 적용해 보았다.

결론부터 말하자면, Swagger와 Spring REST Docs 통합은 비효율 적인것 같다라는게 개인적인 견해이다. 통합을 하게 되면 Spring REST Docs만의 장점을 많이 잃어 버리는 느낌이 들었다.

각각 프레임워크의 장단점은 아래와 같다.`,
        },
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              'Swagger'
            ],
            children: [ 
              '문서에 대한 명세 보다는 API를 쉽게 호출해 볼수 있는 것에 초점',
              '테스트 코드가 없어도 문서화 가능 (Controller에 Annotation만 붙이면됨)',
              'API 테스트 UI 제공'
            ]
          }
        },         
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              'Spring REST Docs'
            ],
            children: [ 
              'RESTful (자원을 이름으로 구분하여 해당 자원의 상태를 주고받는 모든 것 ) 서비스에 대한 문서 생성을 도와준다.',
              '테스트를 통해 API 문서를 만듬',
              'HTML, PDF 문서로 생성가능 Hosting 도 가능',
              '변경에 따른 최신화 보장'
            ]
          }
        },         
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              'OpenAPI Spec'
            ],
            children: [ 
              'Rest API 에 대한 설명, 생성, 사용 및 시각화 하기 위한 인터페이스 파일 사용',
              'YAML 로 작성하면 이를 Swagger HTML로 바꿔주는 Spec'
            ]
          }
        },         
        {
          title: "",
          type: "P",
          scr: 
`태태태님의 기술 블로그에서는 MSA(MicroService Architecture) 환경을 기반으로 작성되어 있다.
MSA를 간단히 설명하면 기능별로 서버를 분리시킨다고 생각하면 된다.
갑자기 MSA를 거론한 이유는 Swagger와 Rest Docs를 통합하기 위해 Swagger 서버를 별도로 구축해야 되는 단점이 있다.
Swagger의 경우 API 서버가 하나일 경우에는 API 서버에서 바로 작성을 하게 된다.
그러나, API 서버가 여러개가 있을 경우 각각 API서버에 접속하여 확인을 해야 되는 단점이 발생한다.
즉, API 서버별 Swager URL을 관리해야 된다. 그러한 단점을 극복하기 위해 Swagger의 서버를 별도로 구축하여 API 문서를 통합하여 사용한다.

다음은 Docker를 이용하여 Swagger 서버를 구축한 방법 및 통합하는 과정이다.`
        },   
        {
          title: "docker에 swagger ui실행방법",
          type: "L",
          scr: {
            parent: [
              'docker에 swagger ui 이미지를 구동하여 구동된 container에 swagger json파일과 rest docs json파일을 지정된 위치에 복사하여 swagger ui에 swagger api와 rest doc을 통합한다.',
              'docker를 설치 - OS에 따라 설치방법이 다름.'
            ],
            children: [ 
            ]
          }
        },
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              'swagger image를 docker에 pull'
            ],
            children: [ 
              'docker pull swaggerapi/swagger-ui'
            ]
          }
        },
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              'docker에 받은 image를 실행'
            ],
            children: [ 
              'docker run -d -p 80:8080 -e SWAGGER_JSON=docs/swagger.json -e URLS_PRIMARY_NAME=SpringRestdocs -e URLS=”[{ url: ‘docs/swagger.json’, name: ‘Swagger’ }, { url: ‘docs/restdocs.json’, name: ‘SpringRestdocs’ }]” -v g:\\project\\apiserver\\docs:/usr/share/nginx/html/docs/ swaggerapi/swagger-ui'
            ]
          }
        },
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              '빌드 시 “.\\gradlew clean build openapi3”'
            ],
            children: [ 
              'clean을 안할경우 빌드 실패가 간혹 발생',
              'openapi를 통해서 rest docs을 json으로 변경함.'
            ]
          }
        },                        
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              'copy .\\build\\api-spec\\openapi3.json .\\docs\\restdocs.json'
            ],
            children: [ 
              'openapi로 생성된 json파일을 docker와 볼륨 바운딩(-v)된 폴더에 복사함.'
            ]
          }
        }
      ],
      source: [
        {
          title: '꿈꾸는 태태태의 공간',
          url: "https://taetaetae.github.io/posts/a-combination-of-swagger-and-spring-restdocs/",
        }
      ],      
      reference: [
        {
          title: '라이프온룸',
          url: "https://lifeonroom.com/study-lab/spring-rest-docs/",
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