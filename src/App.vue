<template>
  <div id="app">
    <goalsHeader />
    <goals 
      :goalItems="goalItems"
    />
  </div>
</template>

<script>
import goalsHeader from './components/goalsHeader.vue'
import goals from './components/goals.vue'

export default{
  name: 'app',
  components: {
    goalsHeader,
    goals
  },
  data() {
    return{
      goalItems: [
        {name:'goal1'}, 
        {name:'goal2'}
      ]
    }
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
