<template>
  <div id="app">
    <custom-header />
    <side-bar class="test1"/>
    <custom-main  class="test2"/>
  </div>
</template>

<script>
import CustomHeader from '@/layout/Header.vue';
import CustomMain from '@/layout/Main.vue';
import SideBar from '@/layout/SideBar.vue';

export default {
    components:{
        CustomHeader,
        CustomMain,
        SideBar
    }
}
</script>

<style lang="scss" scoped>
</style>
