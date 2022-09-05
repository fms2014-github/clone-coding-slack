<template>
  <div id="app">
    <div>
      <router-link to="/menu-test">menuTest</router-link> |
      <router-link to="/list-test">listTest</router-link> |
      <router-link to="/main-view">mainTest</router-link> |
      <router-link to="/side-sub-menu-test">sideSubMenwTest</router-link>
    </div>
   <router-view/>
  </div>
  
</template>

<script>

</script>

<style lang="scss">
@import '@/assets/scss/reset.scss';
</style>
