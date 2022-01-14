<template>
  <v-container>
    <div class="main">
      <h1> 홈 화면 입니다. </h1>

      <p>홈 화면으로 오셨습니다. 이제 집으로 가세요. 어서!!</p>
      <br>
    
      <h2> 1번 항목입니다. </h2>
      <v-row dense class="mt-1 mb-6">
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-card-title v-text="card.title" />

            <v-img
              :src="card.src"
              class="white--text align-end"
              height="200px"
            />
          </v-card>
        </v-col>
      </v-row>

      <h2> 2번 항목 입니다. </h2>
      <v-row dense class="mt-1 mb-6">
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title" />
            </v-img>

            <v-card-text v-text="card.text" />
          </v-card>
        </v-col>
      </v-row>

      <h2> 3번 항목 입니다. </h2>
      <v-row dense class="mt-1 mb-6">
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title" />
            </v-img>

            <v-card-actions>
              <v-spacer />

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    cards: [
      { title: 'house', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4, text: '안녕하세요.' },
      { title: 'road', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4, text: '반갑습니다.' },
      { title: 'plane', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4, text: '어서오세요.' }
    ]
  })
}
</script>
