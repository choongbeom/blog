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
  name: 'ElementCollection',
  components: { Content },
  data () {
    return {
      title: "ElementCollection",
      date: "2021-11-02",
      content:[
        {
          title: "",
          type: "P",
          scr: 
`RDB에는 컬렉션과 같은 형태의 데이터를 컬럼에 저장할 수 없기 때문에, 별도의 테이블을 생성하여 컬렉션을 관리해야한다.
이때 컬렉션 객체임을 JPA에게 알려주는 어노테이션이 @ElementCollection이다.
JPA는 @Entity가 아닌 Basic Type이나 Embeddable Class로 정의된 컬렉션을 테이블로 생성하며 One-To-Many 관계를 다룬다.

아래에는 스터디그룹과 멤버 구성을 관리하는 Entity이다.
스터디 그룹에 대해 멤버는 1:N 관계로 구성되며, 멤버는 다양한 스터디 그룹에 참여할 수 있다.`,
        },
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              'StudyGroup entity : Entity, 스터디 그룹을 관리'
            ],
            children: [
              'id : PK, 스터디 그룹을 대표하는 값',
              'topicTags : Basic Collection, 스터디 주제',
              'GroupMember : Embedded Collection, 스터디 멤버'                  
            ]
          }
        },        
        {
          title: "",
          type: "C",
          scr: 
`@Entity
public class StudyGroup {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
 
    // Basic type
    @ElementCollection(fetch = FetchType.LAZY)
    private Set<String> topicTags = new HashSet<String>();
 
    // Embedded type
    @ElementCollection
    @CollectionTable(name="study_group_member", joinColumns = @JoinColumn(name= "study_group_id", referencedColumnName = "id"))
    private List<StudyGroupMember> members = new HashSet<StudyGroupMember>();
}

@Embeddable
public class StudyGroupMember {
    private UUID memberId;
    private Boolean isOwner;
}`
        },
        {
          title: "",
          type: "P",
          scr: 
`언뜻 연관 관계만 봤을 때에는 @ElementCollection과 JPA @Entity의 '@OneToMany'가 유사하게 느껴진다.
이 둘의 차이점은 간단하게 알아보자.`,
        },
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              '@ElementCollection:'
            ],
            children: [
              '연관된 부모 Entity 하나에만 연관되어 관리된다. (부모 Entity와 독립적으로 사용 X)',
              '항상 부모와 함께 저장되고 삭제되므로 cascade 옵션은 제공하지 않는다. (cascade = ALL 인 셈)',
              '부모 Entity Id와 추가 컬럼(basic or embedded 타입)으로 구성된다.',
              '기본적으로 식별자 개념이 없으므로 컬렉션 값 변경 시, 전체 삭제 후 새로 추가한다.'                  
            ]
          }
        },                
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              '@Entity 연관 (@OneToMany / @ManyToMany):'
            ],
            children: [
              '다른 Entity에 의해 관리될 수도 있다.',
              'join table이나 컬럼은 보통 ID만으로 연관을 맺는다.'                
            ]
          }
        }          
      ],
      source: [
      ],         
      reference: [
        {
          title: 'Hello, Hannah!',
          url: "https://prohannah.tistory.com/133",
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