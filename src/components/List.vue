<template>
    <ul class="list-component">
      <slot></slot>
      <li v-once class="add-list" v-on:click="$emit('clickEvent')"><span class="add-icon">+</span> 채널 추가</li>
    </ul>
</template>

<script>
export default {
  name: 'ListComponent',
  props: {
    msg: String
  },
  mounted(){
    const li = document.querySelector(".add-list");
    li.addEventListener('click', ()=>{});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list-component{
  padding: 0px;
  margin: 0px;
  list-style-type: none;
  .add-list{
    display: inline-block;
    cursor: pointer;
    .add-icon{
      display: inline-block;
      width: 24px;
      height: 24px;
      background-color: rgb(230,230,230);
      border: {
        radius: 2px;
      }
      text-align: center;
      line-height: 20px;
    }
  }
}
</style>
