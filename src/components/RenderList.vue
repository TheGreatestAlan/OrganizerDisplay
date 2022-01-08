<template>
  <div v-show=showList>
    <ul id="example-1">
      <li v-for="item in items" :key="item.message">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>

export default{
  props:['items', 'showList'],
  data() {
    return{
      show: false
  }
}
  /*props:{
    //items: Object,
    //showList: Boolean,
    testText: String
  }*/
}
</script>