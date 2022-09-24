<template>
  <div id="app">
    <div>
      <router-link to="/side-test">sideBar</router-link> 
      <router-link to="/menu-test">menuTest</router-link> |
      <router-link to="/list-test">listTest</router-link> |
      <router-link to="/main-view">mainTest</router-link>
    </div>
   <router-view/>
  </div>
  
</template>

<script>

</script>

<style lang="scss" scoped>
  @import "@/assets/scss/reset.scss";
  @import "@/assets/scss/variables.scss";
</style>
