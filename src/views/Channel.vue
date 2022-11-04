<template>
  <div class="channel-board">
    <div class="title">
        <button>#{{channelName}}</button>
        <div class="member-info-wrap">
            <button class="member-list">멤버보기</button>
            <button class="member-add">멤버추가</button>
        </div>
    </div>
    <div class="bookmark-wrap">
        <button class="bookmark">+ 책갈피 추가</button>
    </div>
    <div class="chat-log">

    </div>
    <div class="wysiwyg">
        <div class="wysiwyg-form">
            <button class="bold" @click="setBold">Bold</button>
            <button>Italic</button>
            <button>UnderLine</button>
            <button>Strikethrough</button>
        </div>
        <p class="inputText" contenteditable="true"></p>
        <button class="send">Send</button>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            channelName: "channel",
        }
    },
    mounted(){
        this.init();
    },
    methods: {
        init(){
            this.initInputTextArea();
        },
        initInputTextArea(){
            let inputText = document.querySelector(".inputText");

            inputText.addEventListener('keypress', function(ev){
                if(ev.key === 'Enter' && !ev.shiftKey){
                    ev.preventDefault();
                }else if(ev.key === 'Enter' && ev.shiftKey){
                    let selection = window.getSelection();
                    let range = selection.getRangeAt(0);
                    let brTag = document.createElement('br');
                    console.log('selection', selection.rangeCount)
                    range.deleteContents();
                    range.insertNode(brTag);
                    range.setStartAfter(brTag);
                    range.setEndAfter(brTag);
                    range.collapse(false);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            })
        },
        setBold(eventObj){
            let selection = window.getSelection();
            console.log('selection', selection.rangeCount)
            let range = selection.getRangeAt(0);
            let boldTag = document.createElement('strong');
            range.selectNode(boldTag);
            selection.removeAllRanges();
            selection.addRange(range);
        }

    }
}
</script>

<style lang="scss" scoped>
.channel-board{
    height: 100%;
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: solid 1px $gray-color-120;
        padding: 3px;
        &>button {
            font-size: 1.5rem;
            border-width: 0px;
            border-radius: 6px;
            background-color: unset;

            &:hover{
                background-color: $gray-color-190;
            }
        }

        .member-info-wrap{
            button{
                border: {
                    width: 1px;
                    radius: 3px;
                    color: $gray-color-210;
                    style: solid
                }
                background-color: unset;

                &:hover{
                    background-color: $gray-color-190;
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
                background-color: $gray-color-190;
                cursor: pointer;
            }
        }
    }

    .chat-log{
        height: calc(90% - 68px - 108px);
    }

    .wysiwyg{
        position: relative;
        height: calc(10% + 100px);
        padding: 3px;
        border: {
            style: solid;
            width: 1px;
            color: $gray-color-100;
            radius: 6px;
        }
        button{
            margin: 3px 2px 3px 2px;
        }
        .inputText{
            position:absolute;
            overflow: auto;
            bottom: 26px;
            top: 24px;
            left: 0px;
            right: 0px;
            strong{
                font-weight: 700;
            }
        }

        .send{
            position: absolute;
            bottom: 0px;
            right: 10px;
        }
    }
}
</style>