<template>
  <div id="search-popup-test">
    <search-box-vue></search-box-vue>
  </div>
</template>

<script>
import SearchBoxVue from '@/components/SearchBox.vue';
export default {
    name: 'mainTest',
    components:{
      SearchBoxVue
    }
}
</script>

<style lang="scss">
#main-view{
  display: inline-block;
  width: 100vw;
}
</style>