<template>
  <v-container>    
    <div>
      <List :datas="datas" />
    </div>
  </v-container>
</template>

<script>
import List from "@/components/list";

export default {
  name: 'Jpa',
  components: { List },
  data: () => ({
    datas: [
      {
        title: '프록시 and 즉시로딩 and 지연로딩',
        date: '2021-12-22',
        to: '/jpa/notuesed/loading'
      },
      {
        title: 'ElementCollection',
        date: '2021-11-02',
        to: '/jpa/notuesed/elementcollection'
      },
      {
        title: 'Entity와 EntityManager와 EntityManagerFactory',
        date: '2021-11-02',
        to: '/jpa/notuesed/entity'
      },
      {
        title: '연관관계 매핑',
        date: '2021-11-02',
        to: '/jpa/notuesed/associationmapping'
      },
      {
        title: 'CASCADE',
        date: '2021-11-02',
        to: '/jpa/notuesed/cascade'
      },
      {
        title: 'OSIV',
        date: '2021-10-28',
        to: '/jpa/notuesed/osiv'
      },
    ]
  })
}
</script>
