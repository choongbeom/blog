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
  name: 'PageEvent',
  components: { Content },
  data () {
    return {
      title: "pageshow/pagehide event",
      date: "2021-12-20",
      content:[
        {
          title: "",
          type: "P",
          scr: 
`뒤로가기시에 브라우저별로 실행이 안되는 경우가 발생하였다.
일부 브라우저에서 뒤로가기 시 화면이 re-render가 되지 않는 이유는 무엇일까?`,
        },
        {
          title: "뒤로가기를 위한 캐시, BFCache",
          type: "P",
          scr: 
`크롬에서는 뒤로가기로 재진입을 해도 정상적으로 처리되는 것을 확인할 수 있었다. 하지만 사파리나, 파이어폭스에서 정상 처리가 되지 않았다.
이런 현상이 일어나는 이유는 뒤로가기를 항경우 빠른 반응을 위해 BFCache를 사용해서 저장해놓은 이전 페이지를 바로 로드하기 때문이다.

특히, onLoad 이벤트에 주요 스크립트 코드가 작성되어 있을 경우 BFCache의 영향으로 항상 재실행되는 것을 보장하기가 어렵다.
이럴 경우 BFCache로 인해 화면 업데이트가 되지 않는 문제가 발생 된다.`,
        },                          
        {
          title: "pageshow/pagehide 이벤트",
          type: "P",
          scr: 
`새롭게 진입하든, 뒤로가기 및 앞으로가기로 진입하든 항상 발생하는 이벤트는 없을까?
MDN의 BFCache에 대한 설명 페이지에서는 pageshow/pagehide 이벤트를 대안으로 제시하고 있다.
재진입한 경우 수행되어야 하는 코드가 있다면 pageshow 이벤트에 바인딩 하는 것이 바람직하다.
pageshow 이벤트가 load 이벤트에 대응한다면, pagehide 이벤트는 unload이벤트와 비슷한 기능을 가진다.`
        },        
        {
          title: "",
          type: "C",
          scr: 
`window.onpageshow = function (event) {
	if (event.persisted) {
		console.log('BFCache로부터 복원됨');
	}
	else {
		console.log('새로 열린 페이지');
	}
};`          
        },  
        {
          title: "",
          type: "P",
          scr: 
`콜백으로 넘겨지는 event파라메터의 속성 중 persisted가 true인 경우, BFCache로 부터 복원된 상태, 즉 뒤로가기 등으로 재진입한 상태임을 알수 있어 조금 더 정밀한 컨트롤이 가능하다.`,
        }               
      ],
      source: [
      ],         
      reference: [
        {
          title: '감성 프로그래밍',
          url: "https://programmingsummaries.tistory.com/380",
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