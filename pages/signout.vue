<template>
  <v-container />
</template>

<script>
export default {
  layout: 'blank',
  async mounted () {
    await this.$store.dispatch('auth/doSignout')
    this.$router.push('/signin')
  }
}
</script>

<style lang="scss" >
</style>
