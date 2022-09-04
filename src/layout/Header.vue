<template>
  <header>
    <div class="system-menu-btn-wrap"><span class="system-menu-btn">=</span></div>
    <div class="workspace-control-panel">
      <div class="prev"><span>&lt;-</span></div>
      <div class="next"><span>-&gt;</span></div>
      <div class="lastest"><span>최근</span></div>
      <input type="search" placeholder="새 워크스페이스 검색" />
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
    border: {
      width: 1px;
      color: black;
      style: solid;
    }
    flex-grow: 8;
    input{
      width: 40%;
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