<template>
  <div id="main-view">
    <custom-header/>
    <side-bar />
    <custom-main/>
  </div>
</template>

<script>
import CustomHeader from '@/layout/Header.vue';
import CustomMain from '@/layout/Main.vue';
import SideBar from '@/layout/SideBar.vue';

export default {
    name: 'mainTest',
    components:{
        CustomHeader,
        CustomMain,
        SideBar
    }
}
</script>

<style lang="scss">
#main-view{
  display: inline-block;
  width: $root-width;
}
</style>