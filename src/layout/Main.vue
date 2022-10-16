<template>
    <div id="main">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#main{
    display: inline-block;
    width: calc(100% - 200px);
    height: calc(100vh - 48px);
    background: {
        color: rgb(180, 180, 180);
    }
}
</style>