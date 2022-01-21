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
  name: 'Mapping',
  components: { Content },
  data () {
    return {
      title: "연관관계 매핑",
      date: "2021-11-02",
      content:[
        {
          title: "",
          type: "P",
          scr: 
`객체는 참조를 사용하여 연관 관계를 맺고 테이블은 외래 키를 사용해서 연관 관계를 맺는다.
관계가 있는 다른 데이터를 참조한다는 점에서 동일하지만, 참조와 외래 키는 완전히 다른 특징을 갖는다.
연관관계 매핑을 이해하기 위한 두 가지 키워드가 있다.`,
        },
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              '방향 : 회원/팀이라는 관계를 생각해본다.'
            ],
            children: [
              '단방향 : 회원 → 팀, 팀 → 회원 둘 중 한 쪽만 참조하는 관계',
              '양방향 : 회원 → 팀, 팀 → 회원 둘이 서로를 참조하는 관계'                
            ]
          }
        },        
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              '다중성'
            ],
            children: [
              '1:1 (일대일)',
              '1:N (일대다 혹은 다대일)',
              'N:M (다대다)'                
            ]
          }
        },   
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              '연관관계의 주인 : 양방향 연관관계를 만들 떄 연관 관계의 주인을 정해야 한다.'
            ],
            children: [
            ]
          }
        }
      ],
      source: [
      ],         
      reference: [
        {
          title: '티끌모아 산을 쌓아보자',
          url: "https://private-space.tistory.com/87",
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