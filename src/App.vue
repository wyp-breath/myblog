<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  import rem from './assets/js/rem'
  import $ from 'jquery'
  export default {
    rem
  }
</script>
<style>
#app{position: relative;}
@import './assets/css/reset.css';
</style>
