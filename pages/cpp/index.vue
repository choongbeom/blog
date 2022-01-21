<template>
  <List :datas="datas" />
</template>

<script>
import List from "@/components/mdlist";

export default {
  components: { List },  
  async asyncData( {$content}) {
    const datas = await $content('/cpp').sortBy('createdAt', 'desc').fetch();
    return { datas };
  },
  methods: {
  }
};
</script>