<template>
  <div id="sidebar">
    <div class="menuItem">
      Slack 만들기
    </div>
    <MenuPopup class="MenuPstn"></MenuPopup>
  </div>  
</template>

<script>
import MenuPopup from '../components/MenuPopup.vue'

export default {
  components: {
    MenuPopup
  }

}
</script>

<style lang="scss" scoped>
#sidebar{
    margin: 0px;
    padding: 0px;
    border-width: 0px;
    width: 20vw;
    height: calc(100vh - 32px);
    background: {
        color: $main-background-color;
    }
    float: left;
    .menuItem {
     // font-color: $main-font-color-white;
    }
}
.MenuPstn {
  position: relative;
  left: 463px;
}
</style>