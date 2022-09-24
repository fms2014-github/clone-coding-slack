<template>
  <header>
    <div class="system-menu-btn-wrap" @click="menuOpen"><span class="system-menu-btn">=</span></div>
    <div class="workspace-control-panel">
      <div class="prev" @click="prev"><span>&lt;-</span></div>
      <div class="next" @click="next"><span>-&gt;</span></div>
      <div class="lastest" @click="lastest"><span>최근</span></div>
      <div class="search-wrap">
        <span class="search-workspace">검색</span>
        <button class="fillter" @click="fillter">fillter</button>
        <button id="search-workspace-btn" @click="toggle">{{searchText}}</button>
      </div>
    </div>
    <div class="etc-panel">
      <div class="help-icon"><span>?</span></div>
      <div class="user-profile"><img src="https://via.placeholder.com/32x32" /></div>
    </div>
    <search-box-vue :isEnable="doSearch" @close-box-event="toggle"></search-box-vue>
  </header>
</template>

<script>
import SearchBoxVue from '@/components/SearchBox.vue';

export default {
  data(){
    return {
      doSearch: false,
      searchText: '새 워크스페이크 검색'
    }
  },
  components:{
    SearchBoxVue
  },
  methods:{
    toggle(inputText){
      console.log(this.doSearch);
      this.doSearch = this.doSearch ? false : true;
      if(this._StringEmpty(inputText)){
         this.searchText = '새 워크스페이크 검색';
      }else{
        this.searchText = '검색: ' + inputText;
      }
    },
    _StringEmpty(str){
      return str === '' || str === undefined || str === null;
    },
    menuOpen() {
      alert("메뉴");
    },
    prev() {
      alert("이전");
    },
    next() {
      alert("다음");
    },
    lastest() {
      alert("최근 내역");
    },
    fillter() {
      alert("필터링");
    }
  }

}
</script>

<style lang="scss" scoped>
header{
  display: flex;
  justify-items: center;
  align-items: center;
  width: calc(100% - 20px);
  padding: 0px 10px;
  height: 48px;
  position: relative;
  background-color: $main-background-color;
  color: $main-font-color-white;
  .system-menu-btn-wrap{
    cursor: pointer;
  }
  .search-box{
    position: absolute;
    top: 0px;
    left: calc(50% + 120px);
    transform: translateX(-50%);
  }

  .workspace-control-panel{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-grow: 8;
    .prev,.next, .lastest{
      margin: 12px;
      cursor: pointer;
    }
    .search-wrap{
      position: relative;
      flex-basis: 40%;

      button{
        cursor: pointer;
        color: $main-font-color-white;
        background-color: rgba(255, 255, 255, 0.2);
        border-width: 0px;
      }
      .search-workspace{
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
      }
      .fillter{
        position: absolute;
        top: 50%;
        right: 50px;
        transform: translateY(-50%);
        cursor: pointer;
        background-color: unset;
      }
      #search-workspace-btn {
        width: 100%;
        height: 32px;
        text-align: left;
        line-height: 32px;
        padding: 0px 0px 0px 4px;
        font: {
          size: 14px;
          weight: 700; 
        }
        border: {
          width: 1px;
          color: black;
          style: solid;
          radius: 8px;
        }
      }
    }
  }
  .etc-panel{
    display: flex;
    flex-direction: row-reverse;
    gap: 0px 10px;
    align-items: center;
    .help-icon{
      order: 2;
    }
  }
}
</style>