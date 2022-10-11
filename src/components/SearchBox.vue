<template>
  <div class="search-box" v-if="isEnable">
    <div class="search-workspace">
      <span class="search-icon">검색</span>
      <input v-model="inputText" type="text" placeholder="What do you want to search for today?"/>
      <button class="search-data-del-btn" @click="delText">지우기</button>
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
  data(){
    return {
      inputText: '',
    }
  },
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
      this.$emit('close-box-event', this.inputText)
    },
    delText(){
      this.inputText = '';
    }
  }
  
}
</script>

<style lang="scss" scoped>
.search-box{
    width: calc(100% - 500px);
    max-width: 1000px;
    min-width: 400px;
    background-color: white;
    border: {
        width: 1px;
        style: solid;
        color: $gray-color-180;
        radius: 10px;
    }
    box-shadow: 0px 0px 16px -4px $gray-color-100;

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
      height: 32px;
      input[type="text"]{
        width: calc(100% - 157px);
        height: 100%;
        font-size: 0.9rem;
        border-width: 0px;
      }
      .search-icon{
        color: $main-background-color;
      }
      .search-data-del-btn{
        &::after{
          content: " | ";
          color: rgba(50,50,50, 0.4)
        }
      }
    }

    hr {
      background-color: $gray-color-220;
      height: 1px;
      border-width: 0px;
    }

    .search-support{
      margin: 10px 20px;
    }

    .help-info-message{
      padding: 10px;
      border-radius: 0px 0px 10px 10px;
      text-align: right;
      background-color: rgba(240, 240, 240, 0.6);
      p {
        padding: 4px 12px;
        font: {
          size: 0.75rem;
          weight: 700;
        }
        color: $gray-color-110;
      }

      a {
        text-decoration: none;
        color: $link-color-type1;

        &:hover{
          text-decoration: underline;
        }
      }
    }
}
</style>