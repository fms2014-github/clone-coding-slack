<template>
  <div id="sidebar">
    <div class="menuItem" @click="subMenuClick">
      Slack 만들기
    </div>
    <side-sub-menu-vue />
    <list @addLisItem="addChannel" :kind="'channel'">
      <list-item :kind="'channel'" :channelnMessageNo="listItem.channelnMessageNo" :listItem="listItem.name" v-for="listItem in channel" :key="listItem.id" ></list-item>
    </list>
    <hr/>
    <list @addLisItem="addDireceMessage" :kind="'directMsg'">
      <list-item :kind="'directMsg'" :channelnMessageNo="listItem.channelnMessageNo" :listItem="listItem.name" v-for="listItem in directMessage" :key="listItem.id" ></list-item>
    </list>
    <MenuPopup v-if="MenuPstn" class="MenuPstn"></MenuPopup>
  </div>  
</template>

<script>
import MenuPopup from '../components/MenuPopup.vue'
import List from '@/components/List.vue'
import ListItem from '@/components/ListItem.vue'
import SideSubMenuVue from "@/components/SideBarSubMenu.vue";

export default {
  data() {
    return {
      MenuPstn: false,
      channel:[
        {
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
      directMessage:[
        {
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
    MenuPopup,
    List,
    ListItem,
    SideSubMenuVue
  },
  methods: {
    subMenuClick() {
      console.log('fdsa');
      this.MenuPstn = !this.MenuPstn;
    },
    addChannel() {
      console.log("추가");
      let len = this.$data.channel.length + 1;
      let roomData = {
        name: "test" + len,
        channelnMessageNo: "" + Math.ceil(Math.random() * 10000)
      }
      this.$data.channel.push(roomData);
    },
    addDireceMessage() {
      console.log("추가");
      let len = this.$data.directMessage.length + 1;
      let roomData = {
        name: "test" + len,
        channelnMessageNo: "" + Math.ceil(Math.random() * 10000)
      }
      this.$data.directMessage.push(roomData);
    }
  }
}
</script>

<style lang="scss" scoped>
#sidebar{
    display: inline-block;
    width: 200px;
    height: calc(100vh - 48px);
    color: $gray-color-190;
    font-weight: 500;
    background: {
        color: $main-background-color;
    }
    .menuItem {
      color: $main-font-color-white;
    }
    vertical-align: top;

   MenuPstn {
    position: relative;
    left: 20px;
  }
}

</style>