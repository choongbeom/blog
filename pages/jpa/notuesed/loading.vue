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
  name: 'Loading',
  components: { Content },
  data () {
    return {
      title: "프록시 and 즉시로딩 and 지연로딩",
      date: "2021-12-22",
      content:[
        {
          title: "",
          type: "P",
          scr: 
`프로젝트에서 @ManyToMany 단뱡향 처리를 이용한 부분에서 지연로딩의 오류가 발생하게 되었다.
소스상 문제는 전혀 없어 보이는데 계속 오류가 발생하여, 지연로딩에 대해서 검색을 하게 되었다.
확인을 해보니 지연로딩문제가 발생되는 엔티티의 연관관계에 해당하는 항목은 프록시 객체로 제공된다고 한다.
이때 연관관계를 참조하기 전까지 초기화가 되지 않으며, 프록시 객체를 참조할 때 초기화되고 SQL이 질의된다.
문제의 해결 방법은 연관관계의 항목을 해당 방법처럼 “entity.getItem().getIdx()” 연관관계 entity 필드를 가져올 경우 해결된다. (해당 시점에서 조회됨)`,
        },
        {
          title: "프록시",
          type: "P",
          scr: 
`JPA 구현체들은 연관된 객체들 처음부터 데이터베이스에서 조회하는 것이 아니라, 실제 사용하는 시점에 데이터베이스에서 조회할 수 있다. 이와 관련 된 기술이 프록시 인데, 이 프록시를 통해서 즉시로딩 “EAGER” 과 지연로딩 “LAZY”을 할 수 있다.

먼저, em.find() vs em.getReference() 에 대하여
find()는 데이터베이스를 통해 실제 엔티티를 조회하고, getReference()는 데이터베이스 조회를 미루는 가짜(프록시) 엔티티 객체를 조회한다. getReference는 쉽게 말해서 DB에 쿼리가 날아가지 않는데 객체가 조회되는 것이다.

그리고 이렇게 조회된 가짜 객체가 바로 ‘프록시(Proxy)’ 이다.
em.getReference는 실제로 DB가 실행되지 않고 가짜객체를 가져오는데, getReference를 호출하여 얻어낸 데이터를 어디선가 사용하는 순간 이 값을 채우기 위해 DB에 쿼리를 날려서 진짜 객체를 가져온다.`,
        },                          
        {
          title: "참고사항",
          type: "L",
          scr: {
            parent: [
              '엔티티 접근 방식을 프로퍼티 ( @Access(AccessType.PROPERTY)) 로 설정한 경우에만 초기화하지 않는다.',
              '엔티티 접근 방식을 필드( @Access(AccessType.FIELD )) 로 설정하면 JPA 는 프록시객체를 초기화 한다.'
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
              '프록시 확인하기'
            ],
            children: [
              '프록시 인스턴스의 초기화 여부 확인하기 -> PersistenceUnitUtil.isLoaded(Object entity)',
              '프록시 클래스 확인 방법 -> entity.getClass().getName() 출력하면 javasist… or …HibernateProxy…이런식으로 나온다.',
              '프록시 강제 초기화 -> org.hibernate.Hibernate.initialize(entity); // 사용예 ) Hibernate.initialize(refMember);',
              'JPA 표준은 강제 초기화 기능을 제공하지 않고 member.getName() 처럼 강제 호출하는 방식이 있다.',
              '위의 강제초기화 코드는 hibernate에서 제공하는 메소드이다.'
            ]
          }
        },  
        {
          title: "지연로딩",
          type: "P",
          scr: 
`엔티티 조회 시점이 아닌 엔티티 내 연관관계를 참조할 때 해당 연관관계에 대한 SQL이 질의되는 기능이며, “LAZY” 옵션으로 지정할 수 있다.`,
        },                
        {
          title: "즉시로딩",
          type: "P",
          scr: 
`엔티티 조회시 연관관계에 있는 데이터까지 한 번에 조회해오는 기능이며, “EAGER”옵션으로 지정할 수 있다.`,
        },                
        {
          title: "주의사항",
          type: "L",
          scr: {
            parent: [
              '실무에서는 가급적 지연 로딩만 사용하다.',
              '즉시로딩을 적용하면 예상하지 못한 SQL이 발생할 수 있기 때문이다.',
              '즉시로딩은 JPQL에서 N+1 문제를 일으킨다. (하나의 쿼리를 날렸는데 그 하나와 관련한 N개의 쿼리가 더 실행된다는 의미)'
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
              '연관관계별로 fetch 옵션의 기본값이 다르다.'
            ],
            children: [
              '@ManyToOne: EAGER',
              '@OneyToOne: EAGER',
              '@OneToMany: LAZY',
              '@ManyToMany: LAZY'
            ]
          }
        }
      ],
      source: [
        {
          title: '개발자의 기록습관',
          url: "https://ict-nroo.tistory.com/131",
        },
      ],         
      reference: [
        {
          title: '상후의 일상',
          url: "https://derekpark.tistory.com/92",
        },
        {
          title: '논리적 코딩',
          url: "https://logical-code.tistory.com/140",
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