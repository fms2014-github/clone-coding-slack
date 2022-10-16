<template>
  <div class="chennal-board">
    <div class="title">
        <span>#{{chennalName}}</span>
        <div class="member-info-wrap">
            <button class="member-list">멤버보기</button>
            <button class="member-add">멤버추가</button>
        </div>
    </div>
    <div class="bookmark-wrap">
        <button class="bookmark">+ 책갈피 추가</button>
    </div>
    <div class="wysiwyg">
        <div class="wysiwyg-form">

        </div>
        <p class="inputText" contenteditable="true"></p>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            chennalName: "chennal",
        }
    },
    mounted(){
    }
}
</script>

<style lang="scss" scoped>
.chennal-board{
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: solid 1px $gray-color-120;
        padding: 3px;

        .member-info-wrap{
            button{
                border: {
                    width: 1px;
                    radius: 3px;
                    color: $gray-color-190;
                    style: solid
                }
                background-color: $gray-color-160;

                &:hover{
                    cursor: pointer;
                }
            }
        }
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