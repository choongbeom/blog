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
  name: 'ExpressionUtils',
  components: { Content },
  data () {
    return {
      title: "ExpressionUtils",
      date: "2021-11-09",
      content:[
        {
          title: "",
          type: "P",
          scr: 
`Querydsl에서 Subquery를 사용하는 방법은 아래와 같습니다.
다만 모든 절에서 지원하는 것은 아니고, select 절과 where 절에서만 지원합니다.`,
        },
        {
          title: "SELECT - SubQuery",
          type: "C",
          scr: 
`   @Test
    public void simpleSubQueryTest() {
        QMember m = QMember.member;
        QTeam t = QTeam.team;

        query.select(Projections.fields(MemberCountDTO.class, t.teamName,
                ExpressionUtils.as(
                        JPAExpressions.select(m.team.count())
                                .from(m)
                                .where(m.team.eq(t)),
                        "memberCount")
        ))
                .from(t)
                .fetch()
                .stream()
                .forEach(result -> {
                    log.info("team name is : " + result.getTeamName());
                    log.info("member count is : " + result.getMemberCount());
                });
    }`
        },   
        {
          title: "WHERE - SubQuery",
          type: "C",
          scr: 
`   @Test
    public void whereSubQueryTest() {
        QMember m = QMember.member;
        QTeam t = QTeam.team;

        query.selectFrom(t)
                .where(t.teamId.in(
                        JPAExpressions
                                .select(m.team.teamId)
                                .from(m)
                                .where(m.memberId.eq(1L))
                ))
                .fetch()
                .stream()
                .forEach(result -> {
                    log.info("team id is " + result.getTeamId());
                    log.info("team name is " + result.getTeamName());
                });
    }`
        },        
        {
          title: "",
          type: "P",
          scr: 
`서브쿼리는 사실 성능적인 측면에서는 그다지 좋지 못합니다. 물론 서브쿼리를 사용하는 편이 더 나은 경우도 있습니다. 하지만 대부분의 경우에는 서브쿼리를 지양하는 것이 좋다고 생각합니다.

서브쿼리의 문제점은 다음과 같습니다.
  1. 서브쿼리는 테이블과 다르게 SQL 구문이 실행될 때에만 존재하는 비영속적인 임시 테이블입니다.
     이 말은 곧, 서브쿼리에 접근할 때마다 SELECT 구문을 실행하여 데이터를 만들어야한다는 뜻입니다.
     따라서 SELECT 구문을 실행하는 비용이 추가적으로 발생하게 됩니다.
  2. 서브쿼리는 비영속적인 임시 테이블이므로 실행된 후에 결과를 저장해두기 위해 메모리에 적재되어야 합니다.
     메모리 용량이 충분하다면 이러한 오버헤드가 적지만, 데이터양이 큰 경우에는 DBMS가 저장소에 있는 파일에 결과를 쓸 때도 있습니다.
     이러한 문제는 저장소의 성능에 따라 접근 속도가 급격하게 떨어지게 됩니다.
  3. 명시적인 제약과 인덱스가 작성되어 있는 테이블과 달리, 서브쿼리는 이러한 메타정보가 존재하지 않으므로 옵티마이저의 최적화를 받을 수 없습니다.
    
위와 같은 문제로 서브쿼리가 필요하다면 아래와 같은 방법을 고려하는 것이 좋아보입니다.`,
        },                          
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              'Join을 이용하여 해결하는 방법',
              '어플리케이션 레벨에서 처리하는 방법',
              '쿼리를 나누어서 실행하는 방법'
            ],
            children: [ 
            ]
          }
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