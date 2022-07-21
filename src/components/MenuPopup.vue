<template>
    <ul class="popupList-component">
      <slot></slot>     
      <li>읽지않은 항목</li>
    </ul>
</template>

<script>
export default {
  name: 'MenuPopupList',
  props: {
    msg: String
  },
  mounted(){
    
  }
}
</script>

<style scoped lang="scss">
</style>