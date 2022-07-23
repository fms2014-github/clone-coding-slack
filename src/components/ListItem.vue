<template>
  <li>
    <span :class="listIcon"></span> {{listItem}}
  </li>
</template>

<script>
export default {
    props:{
        listItem: String,
        kind: String
    },
    computed:{
      listIcon:function(){
        let className;
        if(this.$props.kind === 'channel'){
          className = 'channel' 
        }else if(this.$props.kind === 'directMsg'){
          className = 'direct-msg'
        }else{
          className = '';
        }

        return className;
      }
    }
}
</script>

<style>
.channel::after{
  content:'#'
}

.direct-msg::after{
  content:'□'
}
</style>