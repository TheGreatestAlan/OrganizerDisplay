<template>
  <div id="app">
    <input v-model="itemName" placeholder="item name" @keyup.enter="searchInventory">
    <button @click="searchInventory">SEARCH INVENTORY</button>
    <RenderList :items='itemSearchList' :showList='showItemSearchList' ></RenderList>
    <p></p>
    <input v-model="containerId" placeholder="container ID" @keyup.enter="searchContainerLocation">
    <button @click="searchContainerLocation">CONTAINER LOCATION</button>
    <RenderList :items='containerSearchList' :showList='showContainerSearchList' ></RenderList>
    <p></p>
    <button @click="getInventory">SHOW INVENTORY</button>
    <RenderList :items='objectList' :showList='showList' ></RenderList>
  </div>
</template>

<script>
//import goalsHeader from './components/goalsHeader.vue'
//import goals from './components/goals.vue'
import RenderList from './components/RenderList.vue'
import EventService from '@/services/EventService.js'

export default{
  name: 'app',
  components: {
    RenderList
    //goalsHeader,
    //goals
  },
  data() {
    return{
      objectList: null,
      showList: false,
      showItemSearchList: false,
      itemSearchList: null,
      containerSearchList: null,
      showContainerSearchList: false,
      itemName: null,
      containerId: null
      /*goalItems: [
        {name:'goal1'}, 
        {name:'goal2'}
      ],*/
    }
  },

  methods: {
    searchInventory() {
      EventService.getItemLocation(this.itemName)
      .then(response => {
        this.itemSearchList = response.data
      })
      .catch(error => {
        console.log("uh ohs:" + error)
      })
      this.showItemSearchList = true
      this.showList = false
      this.showContainerList = false
    },
    searchContainerLocation() {
      EventService.getContainerLocation(this.containerId)
      .then(response => {
        this.containerSearchList = response.data
      })
      .catch(error => {
        console.log("uh ohs:" + error)
      })
      this.showContainerSearchList = true
      this.showItemList = false
      this.showList = false
    },
    getInventory(){
      EventService.getEvents()
      .then(response => {
        this.objectList = response.data
      })
      .catch(error => {
        console.log("uh ohs:" + error)
      })
      this.showItemSearchList = false
      this.showContainerSearchList = false
      this.showList = true
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
