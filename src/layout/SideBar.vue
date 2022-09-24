<template>
  <div id="sidebar">
    <div class="menuItem" @click="subMenuClick">
      Slack 만들기
    </div>
    <MenuPopup v-if="MenuPstn=true" class="MenuPstn"></MenuPopup>
  </div>  
</template>

<script>
import MenuPopup from '../components/MenuPopup.vue'

export default {
  components: {
    MenuPopup
  },
  methods: {
    subMenuClick() {
      console.log('fdsa');
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
}
.MenuPstn {
  position: relative;
  left: 463px;
}
</style>