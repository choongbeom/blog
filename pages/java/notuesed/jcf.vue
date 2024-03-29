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
  name: 'JCF',
  components: { Content },
  data () {
    return {
      title: "JCF",
      date: "2021-10-29",
      content:[
        {
          title: "Java Collection Framework (JCF)",
          type: "P",
          scr: 
`Java에서 데이터를 저장하는 기본적인 자료구조들을 한 곳에 모아 관리하고 편하게 사용하기 위해서 제공하는 것을 의미한다. 다음은 JCF의 상속 구조이며 사용 용도에 따라 List, Set, Map 3가지로 요약할 수 있다.`,
        },
        {
          title: "각 인터페이스의 특징",
          type: "T",
          scr: {
            headers: [
              {
                text: '인터페이스',
                align: 'center',
                sortable: false,
                value: 'interface', 
              },
              {
                text: '구현 클래스',
                align: 'center',
                sortable: false,
                value: 'class', 
              },
              {
                text: '특 징',
                align: 'center',
                sortable: false,
                value: 'feature', 
              }
            ],
            desserts: [
              {
                interface: 'List',
                class: 'LinkedList, Stack, Vector, ArrayList',
                feature: '순서가 있는 데이터의 집합, 데이터의 중복을 허용한다.',
              },
              {
                interface: 'Set',
                class: 'HashSet, TreeSet',
                feature: '순서를 유지하지 않는 데이터의 집합, 데이터의 중복을 허용하지 않는다..',
              },
              {
                interface: 'Map',
                class: 'HashMap, TreeMap, HashTable, Properties',
                feature: '키(key)와 값(value)의 쌍으로 이루어진 데이터의 집합이다. 순서는 유지되지 않고, 키는 중복을 허용하지 않으며 값의 중복을 허용한다.',
              },
            ]
          }
        },   
        {
          title: "Collection Interface",
          type: "P",
          scr: 
`모든 콜렉션의 상위 인터페이스로써 콜렉션들이 갖고 있는 핵심 메소드를 선언 (add, contain, isEmpty, remove, size, iterator …)`,
        },                          
        {
          title: "List Interface",
          type: "P",
          scr: 
`Collection 인터페이스를 확장한 자료형으로 요소들의 순서를 저장하여 색인(Index)를 사용하여 특정 위치에 요소를 삽입하거나 접근할 수 있으며 중복 요소 허용`          
        },
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              'ArrayList'
            ],
            children: [ 
              '상당히 빠르고 크기를 마음대로 조절할 수 있는 배열',
              '단방향 포인터 구조로 자료에 대한 순차적인 접근에 강점이 있음'
            ]
          }
        },
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              'Vector'
            ],
            children: [ 
              'ArrayList의 구형버전이며, 모든 메소드가 동기화 되어있음',
              '잘 쓰이진 않음'
            ]
          }
        },
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              'LinkedList'
            ],
            children: [ 
              '양방향 포인터 구조로 데이터의 삽입, 삭제가 빈번할 경우 빠른 성능을 보장',
              '스택, 큐, 양방향 큐 등을 만들기 위한 용도로 쓰임'
            ]
          }
        }, 
        {
          title: "Set Interface",
          type: "P",
          scr: 
`집합을 정의하며 요소의 중복을 허용하지 않음. 상위 메소드만 사용함`,
        },
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              'HashSet'
            ],
            children: [ 
              '가장 빠른 임의 접근 속도',
              '순서를 전혀 예측할 수 없음'
            ]
          }
        },                      
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              'LinkedHashSet'
            ],
            children: [ 
              '추가된 순서, 또는 가장 최근에 접근한 순서대로 접근 가능'
            ]
          }
        },                      
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              'TreeSet'
            ],
            children: [ 
              '정렬된 순서대로 보관하며 정렬 방법을 지정할 수 있음',
              '중복 허용'
            ]
          }
        },                      
        {
          title: "Map Interface",
          type: "P",
          scr: 
`집합을 정의하며 요소의 중복을 허용하지 않음. 상위 메소드만 사용함`,
        },
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              'HashMap'
            ],
            children: [ 
              'Map 인터페이스를 구현하기 위해 해시테이블을 사용한 클래스',
              '중복을 허용하지 않고 순서를 보장하지 않음',
              '키와 값으로 null이 허용'
            ]
          }
        },                      
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              'Hashtable'
            ],
            children: [ 
              'HashMap 보다는 느리지만 동기화가 지원',
              '키와 값으로 null이 허용되지 않음'
            ]
          }
        },                      
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              'TreeMap'
            ],
            children: [ 
              '이진검색트리의 형태로 키와 값의 쌍으로 이루어진 데이터를 저장',
              '정렬된 순서로 키/값 쌍을 저장하므로 빠른 검색이 가능',
              '저장시 정렬(오름차순)을 하기 때문에 저장시간이 다소 오래 걸림'
            ]
          }
        },          
        {
          title: "",
          type: "L",
          scr: {
            parent: [
              'LinkedHashMap'
            ],
            children: [ 
              '기본적으로 HashMap을 상속받아 HashMap과 매우 흡사',
              'Map에 있는 엔트리들의 연결 리스트를 유지되므로 입력한 순서대로 반복 가능'
            ]
          }
        }
      ],
      source: [
      ],         
      reference: [
        {
          title: '공대인들이 직접쓰는 컴퓨터공부방',
          url: "https://hackersstudy.tistory.com/26?category=500113",
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