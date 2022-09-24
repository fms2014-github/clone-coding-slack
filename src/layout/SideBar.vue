<template>
  <div id="sidebar">
    <div class="menuItem" @click="subMenuClick">
      Slack 만들기
    </div>
    <MenuPopup v-if="MenuPstn" class="MenuPstn"></MenuPopup>
  </div>  
</template>

<script>
import MenuPopup from '../components/MenuPopup.vue'

export default {
  data() {
    return {
      MenuPstn: false
    }
  },
  components: {
    MenuPopup
  },
  methods: {
    subMenuClick() {
      console.log('fdsa');
      this.MenuPstn = !this.MenuPstn;
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
  left: 20px;
}
</style>