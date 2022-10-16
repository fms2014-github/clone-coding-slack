<template>
  <div class="member-board">
    <div class="title">
        <span>#{{memberName}}</span>
    </div>
    <div class="bookmark-wrap">
        <button class="bookmark">+ 책갈피 추가</button>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
          memberName: "Member",
        }
    },
    mounted(){
    }
}
</script>

<style lang="scss" scoped>
.member-board{
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: solid 1px $gray-color-120;
        padding: 6px 3px;
    }

    .bookmark-wrap{
        padding: 3px 0px;
        border-bottom: solid 1px $gray-color-120;
        .bookmark{
            background-color: unset;
            border: unset;
            border-radius: 6px;
            padding: 3px;
            margin-left: 10px;
            
            &:hover{
                background-color: $gray-color-200;
                cursor: pointer;
            }
        }
    }
}
</style>