<template>
  <div id="sidebar">
    <div class="menuItem" @click="subMenuClick">
      Slack 만들기
    </div>
    <list @addLisItem="addLisItem" :kind="'channel'">
      <list-item :kind="'channel'" :channelnMessageNo="listItem.channelnMessageNo" :listItem="listItem.name" v-for="listItem in listItems" :key="listItem.id" ></list-item>
    </list>
    <hr/>
    <list @addLisItem="addLisItem" :kind="'directMsg'">
      <list-item :kind="'directMsg'" :channelnMessageNo="listItem.channelnMessageNo" :listItem="listItem.name" v-for="listItem in listItems" :key="listItem.id" ></list-item>
    </list>
    <MenuPopup v-if="MenuPstn" class="MenuPstn"></MenuPopup>
  </div>  
</template>

<script>
import MenuPopup from '../components/MenuPopup.vue'
import List from '@/components/List.vue'
import ListItem from '@/components/ListItem.vue'

export default {
  data() {
    return {
      MenuPstn: false,
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
  components: {
    MenuPopup
  },
  methods: {
    subMenuClick() {
      console.log('fdsa');
      this.MenuPstn = !this.MenuPstn;
    },
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
        color: $main-background-color;
    }
    .menuItem {
      color: $main-font-color-white;
    }
    vertical-align: top;
}
.MenuPstn {
  position: relative;
  left: 20px;
}
</style>