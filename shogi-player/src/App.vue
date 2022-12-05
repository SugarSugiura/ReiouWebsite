<template>
  <div id="app-shogi-player">
    <AppShogiPlayer msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import AppShogiPlayer from './components/AppShogiPlayer.vue'

export default {
  name: 'App',
  components: {
    AppShogiPlayer
  }
}
</script>

<style>
#app-shogi-player {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
