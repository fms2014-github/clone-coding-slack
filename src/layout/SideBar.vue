<template>
  <div id="sidebar">
    <list @addLisItem="addLisItem" :kind="'channel'">
      <list-item :kind="'channel'" :channelnMessageNo="listItem.channelnMessageNo" :listItem="listItem.name" v-for="listItem in listItems" :key="listItem.id" ></list-item>
    </list>
    <hr/>
    <list @addLisItem="addLisItem" :kind="'directMsg'">
      <list-item :kind="'directMsg'" :channelnMessageNo="listItem.channelnMessageNo" :listItem="listItem.name" v-for="listItem in listItems" :key="listItem.id" ></list-item>
    </list>
  </div>
</template>

<script>
import List from '@/components/List.vue'
import ListItem from '@/components/ListItem.vue'
export default {
  name: "sidebar",
  components: { List, ListItem },
  data(){
    return{
      listItems:[{
        name: "test1",
        channelnMessageNo: "4523"
      },
      {
        name: "test2",
        channelnMessageNo: "4334"
      },
      {
        name: "test3",
        channelnMessageNo: "5413"
      },
      ],
      
    }
  },
  methods:{
    addLisItem() {
      console.log("추가");
      let len = this.$data.listItems.length + 1;
      let roomData = {
        name: "test" + len,
        channelnMessageNo: "" + Math.ceil(Math.random() * 10000)
      }
      this.$data.listItems.push(roomData);
    }
  }
}
</script>

<style lang="scss" scoped>
#sidebar{
    display: inline-block;
    width: 200px;
    height: calc(100vh - 48px);
    background: {
        color: rgb(160, 160, 160);
    }
    vertical-align: top;
}
</style>