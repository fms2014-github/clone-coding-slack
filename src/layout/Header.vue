<template>
  <header class="custom-header">
    <div class="system-menu-btn-wrap" @click="menuOpen"><span class="system-menu-btn">=</span></div>
    <div class="workspace-control-panel">
      <div class="prev" @click="prev"><span>&lt;-</span></div>
      <div class="next" @click="next"><span>-&gt;</span></div>
      <div class="lastest" @click="lastest"><span>최근</span></div>
      <div class="search-wrap">
        <span class="search-workspace" @click="toggle">검색</span>
        <button class="fillter" @click="fillter">fillter</button>
        <button class="search-workspace-btn" @click="toggle">{{searchText}}</button>
      </div>
    </div>
    <div class="etc-panel">
      <div class="help-icon"><span>?</span></div>
      <div class="user-profile"><img src="https://via.placeholder.com/32x32" /></div>
    </div>
    <search-box-vue :isEnable="doSearch" @close-box-event="toggle"></search-box-vue>
    <Filltering v-if="doFillter"/>
  </header>
</template>

<script>
import SearchBoxVue from '@/components/SearchBox.vue';
import Filltering from '@/components/Filltering.vue';

export default {
  data(){
    return {
      doSearch: false,
      searchText: '새 워크스페이크 검색',
      doFillter: false
    }
  },
  components:{
    SearchBoxVue,
    Filltering
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
      this.doFillter = !this.doFillter;
    }
  }

}
</script>

<style lang="scss" scoped>
.custom-header {
  display: flex;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: $main-background-color;
  color: $main-font-color-white;
  .system-menu-btn-wrap{
    cursor: pointer;
    margin-left: 10px;
  }
  .search-box{
    position: absolute;
    top: 0px;
    left: calc(50% + 100px);
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
      flex-basis: 35%;

      button{
        cursor: pointer;
        color: $main-font-color-white;
        background-color: rgba(255, 255, 255, 0.2);
        border-width: 0px;
      }
      .search-workspace{
        cursor: pointer;
        color: $main-font-color-white;
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
      .search-workspace-btn {
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
    margin-right: 10px;
    .help-icon{
      order: 2;
    }
  }
}
</style>