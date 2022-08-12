<template>
  <div class="list-test">
    <list @addLisItem="addLisItem" :kind="'directMsg'">
      <list-item :kind="'directMsg'" :listItem="listItem" v-for="listItem in listItems" :key="listItem.id" ></list-item>
    </list>
  </div>
</template>

<script>
import List from '@/components/List.vue'
import ListItem from '@/components/ListItem.vue'

export default {
  name: 'listTest',
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
    addLisItem() {
      console.log("추가");
      let len = this.$data.listItems.length + 1;
      this.$data.listItems.push("test" + len);
    }
  }
}
</script>
