<template>
  <div class="search-popup">
    <div class="search-workspace">
      <span class="search-icon">검색</span>
      <input type="text" placeholder="What do you want to search for today?"/>
      <button class="fillter">fillter</button>
      <button class="search-popup-close">X</button>
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
    }

}
</script>

<style lang="scss" scoped>
.search-popup{
    width: 60%;
    border: {
        width: 1px;
        style: solid;
        color: black;
    }
}
</style>