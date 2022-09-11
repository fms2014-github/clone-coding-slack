<template>
  <div class="search-box" v-if="isEnable">
    <div class="search-workspace">
      <span class="search-icon">검색</span>
      <input type="text" placeholder="What do you want to search for today?"/>
      <button class="search-data-del-btn">지우기</button>
      <button class="fillter">fillter</button>
      <button class="search-box-close" @click="closeBox">X</button>
    </div>
    <hr/>
    <div class="search-support">
        <search-suggest-vue/>
    </div>
    <div class="help-info-message">
      <p>예상한 결과가 아니였나요? <a href="#">자세히 알아보기</a></p>
    </div>
  </div>
</template>

<script>
import SearchSuggestVue from './SearchSuggest.vue';
export default {
  components:{
      SearchSuggestVue
  },
  props:{
    isEnable: {
      type: Boolean,
      require: true
    }
  },
  methods:{
    closeBox(){
      this.$emit('closeBoxEvent')
    }
  }
  
}
</script>

<style lang="scss" scoped>
.search-box{
    width: calc(100% - 600px);
    max-width: 900px;
    background-color: white;
    border: {
        width: 1px;
        style: solid;
        color: black;
        radius: 10px;
    }

    button {
        background-color: rgba(255, 255, 255, 0);
        cursor: pointer;
        border: {
          width: 0px;
          style: solid;
        }
      }

    .search-workspace{
      margin: 10px;
      input[type="text"]{
        width: calc(100% - 157px);
        height: 100%;
        font-size: 1rem;
        border-width: 0px;
      }
      
      .search-data-del-btn{
        &::after{
          content: " | ";
          color: rgba(50,50,50, 0.4)
        }
      }
    }
    .search-support{
      margin: 10px 20px;
    }

    .help-info-message{
      padding: 10px;
      border-radius: 0px 0px 10px 10px;
      text-align: right;
      background-color: rgba(240, 240, 240, 0.6);
    }
}
</style>