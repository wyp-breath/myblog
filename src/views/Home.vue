<template>
  <div class="home">
    <Header />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Public/Header.vue';

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
<style>
  .home{width: 1200px;margin: 0 auto;}
</style>
