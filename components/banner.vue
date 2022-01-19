<template>
  <v-container id="banner">
    <v-carousel
      show-arrows-on-hover
      hide-delimiters
      height="400px"
      :cycle="true" 
      :interval="5000"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.scr"
        :href="item.href"
        target='_blank'
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
        {
          scr: 'https://github.com/choongbeom/blog/blob/master/static/banner.jpg',
          href: 'https://github.com/choongbeom/'
        },
        {
          scr: 'https://github.com/choongbeom/blog/blob/master/static/banner.jpg',
          href: 'https://github.com/choongbeom/'
        }       
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
    max-width: 100%;
  }

  #banner {
    background-color: white;
    height: 400px;
  }
</style>
