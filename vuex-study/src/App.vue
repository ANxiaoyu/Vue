<template>
  <div id="app">
    <Counter></Counter>
    <Amount></Amount>
  </div>
</template>

<script>
import Counter from '@/components/counter.vue'
import Amount from './components/amount.vue'
export default {
  name: 'App',
  components:{
    Counter,
    Amount
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
