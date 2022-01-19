<template>
  <v-container>
    <div class="main">

      <v-card>
        <v-toolbar color="#111">
          <v-toolbar-title>최신 게시글</v-toolbar-title>
        </v-toolbar>

        <v-list style="min-height:200px">
          <v-list-item
            v-for="(item, i) in datas"
            :key="i"
            :to="item.to"
          >
            <v-list-item-content>
              <v-list-item-title>
                {{item.date}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.title}}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>

      <br><br>

      <v-card color="#111">
        <v-toolbar color="#111">
          <v-toolbar-title>포토 갤러리</v-toolbar-title>
        </v-toolbar>

        <v-row dense class="mt-1 mb-6">
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="3"          
          >
            <v-card :to="card.to">            
              <v-img :src="card.src" class="white--text align-end" height="300px" />
              <v-card-title v-text="card.title" />
              <v-card-text> {{card.text}} </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      cards: [
        { title: '사진1', 
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', 
          text: '사진1 입니다.',
          to: '/photogallery'
        },
        { 
          title: '사진2', 
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', 
          text: '사진2 입니다.',
          to: '/photogallery' 
        },
        { 
          title: '사진3', 
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', 
          text: '사진3 입니다.',
          to: '/photogallery'
        },
        { 
          title: '사진4', 
          src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png', 
          text: '사진4 입니다.',
          to: '/photogallery'
        }
      ],
      datas: [
        {
          title: 'Github Merge',
          date: '2021-12-27',
          to: '/github/merge'
        },
        {
          title: '프록시 and 즉시로딩 and 지연로딩',
          date: '2021-12-22',
          to: '/jpa/loading'
        },
        {
          title: 'Vue Life Cycle, Vuex의 구조',
          date: '2021-12-20',
          to: '/vue/vueliftcycle'
        },
        {
          title: 'pageshow/pagehide event',
          date: '2021-12-20',
          to: '/js/pageevent'
        }
      ]
    }
  }
}
</script>
