<template>
  <ul>
    <li># {{memuPopup}} </li>
  </ul>
</template>

<script>
export default {
  name: 'MenuPopup',
  props: {
    memuPopup: String
  }
}
</script>

<style scoped lang="scss">
ul{
   list-style:none;
   }

</style>