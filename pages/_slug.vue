<template>
  <div>
    <Content :document="document" />
  </div>
</template>

<script>
import Content from "@/components/mdcontent";

export default {  
  components: { Content },
  async asyncData( {$content, query}) {
    const document = await $content(query.to).fetch();
    return { document };
  },
  data() { 
    return  {  
    } 
  },
  mounted() { 
  }
};
</script>