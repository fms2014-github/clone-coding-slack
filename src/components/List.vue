<template>
    <ul class="list-component">
      <slot></slot>
      <li class="add-list" v-on:click="$emit('clickEvent')"><span class="add-icon">+</span> {{ btnContent }}</li>
    </ul>
</template>

<script>
export default {
  name: 'ListComponent',
  props: {
    msg: String,
    kind: String
  },
  computed:{
    btnContent: function(){
      let btnContent;
      if(this.$props.kind === 'channel'){
          btnContent = '채널 추가' 
      }else if(this.$props.kind === 'directMsg'){
          btnContent = '팀원 추가'
      }else{
          btnContent = '';
      }
      return btnContent;
    }
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
