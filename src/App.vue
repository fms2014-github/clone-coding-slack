<template>
  <div id="app">
    <list v-for="listItem in listItems" :key="listItem.id" v-on:clickEvent="test">
      <list-item :listItem="listItem"></list-item>
    </list>

    
    <div>
      <router-link to="/">ListItem</router-link> |
      <router-link to="/about">MenuPopup</router-link>
    </div>
   <router-view/>
  </div>
  
</template>

<script>
import List from '@/components/List.vue'
import ListItem from '@/components/ListItem.vue'
export default {
  components: { List, ListItem },
  data(){
    return{
      listItems:[
        'test1',
        'test2',
        'test3'
      ]
    }
  },
  methods:{
    test: () => {
      console.log("채널 추가");
      let len = this.$data.listItems.length;
      this.$data.listItems.push("test" + len);
    }
  }
}
</script>

<style lang="scss">

</style>
