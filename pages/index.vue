<template>
  <v-container>
    <div>

      <v-card style="margin:30px">
        <v-toolbar color="#111">
          <v-toolbar-title>최신 게시글</v-toolbar-title>
        </v-toolbar>

        <v-data-table 
          style="min-height:300px;"
          :headers="headers"
          :items="posts"
          :items-per-page="5"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
        >
          <template #item="{ item }">            
            <tr>             
              <td> {{ formatDate(item.date) }} </td>
              <td>
                <v-btn plain :to="{path: '_slug', query:{to:item.to}}" style="width: 100%;"> {{ item.title }} </v-btn>
              </td>              
            </tr>
          </template>
        </v-data-table>
      </v-card>

      <v-card color="#111" style="margin:30px">
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
  asyncData( {$content}) {
    
    // 특정 폴더의 파일들을 가져오는 방법
    const context = require.context("/content", true, /\.md$/)
    const posts = []    
    context.keys().forEach(async (fileName) => {      
      const name = fileName.replace('.md','')
      const content = await $content(name).sortBy('createdAt', 'desc').fetch();
      posts.push(
        {
          title: content.title,
          date: content.createdAt,
          to: content.to
        });      
    })

    // 포토 갤러리 부분 - 미구현
    const contextpoto = require.context("/content/photogallery", false, /\.md$/)
    const potos = []
    contextpoto.keys().forEach(async (fileName) => {      
      const name = fileName.replace('.md','')
      const content = await $content(name).sortBy('createdAt', 'desc').fetch();
      potos.push(
        {
          title: content.title,
          src: content.createdAt,
          text: content.text,
          to: content.to
        });      
    })

    return { posts, potos };
  },  
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
      headers: [
        {
          text: '날 짜',
          align: 'start',
          sortable: true,
          value: 'date', 
        },
        {
          text: '제 목',
          align: 'center',
          sortable: true,
          value: 'title', 
        }
      ],
      sortBy: 'date',
      sortDesc: true,
    }
  },
  methods: {
    formatDate(datetime){
      var day = new Date(datetime);
      return day.toISOString().substring(0, 10);
    }
  }
}
</script>