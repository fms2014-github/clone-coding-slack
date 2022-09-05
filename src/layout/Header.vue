<template>
  <header>
    <div class="system-menu-btn-wrap"><span class="system-menu-btn">=</span></div>
    <div class="workspace-control-panel">
      <div class="prev"><span>&lt;-</span></div>
      <div class="next"><span>-&gt;</span></div>
      <div class="lastest"><span>최근</span></div>
      <div class="search-wrap">
        <span class="search-workspace">검색</span>
        <button class="fillter">fillter</button>
        <button id="search-workspace-btn">새 워크스페이스 검색</button>
      </div>
    </div>
    <div class="etc-panel">
      <div class="help-icon"><span>?</span></div>
      <div class="user-profile"><img src="https://via.placeholder.com/32x32" /></div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header{
  display: flex;
  justify-items: center;
  align-items: center;
  width: 100vw;
  height: 48px;
  background: {
      color: rgb(140, 140, 140);
  }
  .workspace-control-panel{
    display: flex;
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
      }
      .search-workspace{
        position: absolute;
        top: 50%;
        right: 0px;
        transform: translateY(-50%);
      }
      .fillter{
        position: absolute;
        top: 50%;
        right: 40px;
        transform: translateY(-50%);
        cursor: pointer;
      }
      #search-workspace-btn {
        width: 100%;
        height: 32px;
        margin-left: 12px;
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
  .system-menu-btn-wrap{
    flex-grow: 1;
    padding: 15px;
  }
  .etc-panel{
    flex-grow: 1;
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