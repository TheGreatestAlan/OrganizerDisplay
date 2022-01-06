<template>
  <div id="app">
  <p>{{ hello }}</p>
  <!--<button @click="hello++">THIS IS A BUTTON</button>
    <goalsHeader />
    <goals 
      :goalItems="goalItems"
    />-->
  </div>
</template>

<script>
//import goalsHeader from './components/goalsHeader.vue'
//import goals from './components/goals.vue'
import EventService from '@/services/EventService.js'

export default{
  name: 'app',
  components: {
    //goalsHeader,
    //goals
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.hello = response.data
      })
      .catch(error => {
        console.log("uh ohs:" + error)
      })
  },
  data() {
    return{
      /*goalItems: [
        {name:'goal1'}, 
        {name:'goal2'}
      ],*/
      hello:3
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
