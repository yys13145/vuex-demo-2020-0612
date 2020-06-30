<template>
  <div id="app">
    <h1>count: {{count}}</h1>
    <button @click="countIncrease">自增</button>
    <HelloWorld msg="hello VueX!"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    count(){
      return this.$store.state.count;
    }
  },
  methods:{
    countIncrease(){
      this.$store.commit('countIncrease')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
