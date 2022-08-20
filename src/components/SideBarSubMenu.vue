<template>
  <div id="side-bar-sub-menu">
    <router-link class="sub-menu-item" v-if="notReadList" to="/notReadList">읽지 않은 항목</router-link>
    <router-link class="sub-menu-item" v-if="allDirectMsgList" to="/allDirectMsgList">다이렉트 메시지</router-link>
    <router-link class="sub-menu-item" v-if="mensionEmotionList" to="/mensionEmotionList">멘션 및 반응</router-link>
    <router-link class="sub-menu-item" v-if="saveList" to="/saveList">저장된 항목</router-link>
    <router-link class="sub-menu-item" v-if="slackConnect" to="/slackConnect">Slack Connect</router-link>
    <router-link class="sub-menu-item" v-if="allChannelList" to="/allChannelList">모든 채널</router-link>
    <router-link class="sub-menu-item" v-if="fileList" to="/fileList">파일</router-link>
    <router-link class="sub-menu-item" v-if="contactList" to="/contactList">사람 및 사용자 그룹</router-link>
    <router-link class="sub-menu-item" v-if="appList" to="/appList">앱</router-link>
  </div>
</template>

<script>
export default {
    data() {
        return {
            notReadList: true,
            allDirectMsgList: true,
            mensionEmotionList: true,
            saveList: true,
            slackConnect: true,
            allChannelList: true,
            fileList: true,
            contactList: true,
            appList: true,
        }
    },
    mounted(){
        
    }
}
</script>

<style lang="scss" scoped>
#side-bar-sub-menu{
    .sub-menu-item{
        display:block;
    }

    .sub-menu-item:hover, 
    .sub-menu-item:visited, 
    .sub-menu-item:link, 
    .sub-menu-item:active{
        text-decoration: none;
        color: black;
        background-color: none;
    }

    .sub-menu-item:hover{
        background-color: rgb(180, 180, 180);
        mix-blend-mode: multiply;
    }

}
</style>