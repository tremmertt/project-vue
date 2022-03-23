<template>
  <div class="">DetailView - {{ productId }}</div>
</template>

<script lang="js">

export default {
  name: 'DetailView',
  computed:{
    productId(){
      return this.$route.params.id
    }
  },
  components: {
  },
};
</script>
