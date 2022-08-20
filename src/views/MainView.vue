<template>
  <div id="main-view">
    <header>
        상단 타이틀
    </header>
    <div id="sidebar">
        사이드바
    </div>
    <section>
        메인컨텐츠
    </section>
  </div>
</template>

<script>
export default {
    name: 'mainView'
}
</script>

<style lang="scss" scoped>
#main-view{
    header{
        margin: 0px;
        padding: 0px;
        border-width: 0px;
        width: 100vw;
        height: 32px;
        background: {
            color: rgb(140, 140, 140);
        }
    }

    #sidebar{
        margin: 0px;
        padding: 0px;
        border-width: 0px;
        width: 20vw;
        height: calc(100vh - 32px);
        background: {
            color: rgb(160, 160, 160);
        }
        float: left;
    }

    section{
        margin: 0px;
        padding: 0px;
        border-width: 0px;
        height: calc(100vh - 32px);
        background: {
            color: rgb(180, 180, 180);
        }
    }
}
</style>