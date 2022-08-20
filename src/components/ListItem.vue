<template>
  <li @click="routeToSection()">
    <span :class="listIcon" ></span> {{listItem}}
  </li>
</template>

<script>
export default {
    props:{
        listItem: String,
        kind: String,
        channelnMessageNo: String,
    },
    methods:{
      routeToSection(){
        let routeParam = {
          name: this.$props.kind, 
          [(this.$props.kind + "Id")]: this.$props.channelnMessageNo
        }
        console.log(routeParam)
        this.$router.push(routeParam);
      }
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