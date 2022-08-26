<template>
  <div id="main-view">
    <Header />
    <SideBar />
    <Main />
  </div>
</template>

<script>
import Header from '@/layout/Header.vue';
import Main from '@/layout/Main.vue';
import SideBar from '@/layout/SideBar.vue';

export default {
    name: 'mainTest',
    components:{
        Header,
        Main,
        SideBar
    }
}
</script>

<style lang="scss" scoped>
</style>