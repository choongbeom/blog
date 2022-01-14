<template>
  <v-container id="banner">
    <v-carousel
      show-arrows-on-hover
      hide-delimiters
      height="400px"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item"
      />
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  name: 'Banner',
  layout: 'empty',
  data () {
    return {
      items: [
        'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
        'https://cdn.vuetifyjs.com/images/parallax/material2.jpg'
      ]
    }
  },
  mounted () {
    // Close modal with 'esc' key
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        this.$router.push('/')
      }
    })
  },
  methods: {
  }
}
</script>

<style>
  .container {
    padding: 0;
  }

  #banner {
    background-color: white;
    height: 400px;
  }
</style>
