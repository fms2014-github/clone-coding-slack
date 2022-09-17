<template>
  <ul class="popupList-component">
    <div v-if="subMenu==1">
      <div class="menu-component text font">
        <span class="menu-list-component">
          설정
        </span>
        <div class="under-line" />
        <span class="menu-list-component">
          워크스페이스 설정
        </span>
        <span class="menu-list-component">
          미래의기억 사용자 지정
        </span>
        <span class="menu-list-component">
          워크스페이스 세부정보 편집
        </span>
        <div class="under-line" />
        <span class="menu-list-component">
          멤버관리
        </span>
        <span class="menu-list-component">
          앱관리
        </span>
      </div>
    </div>
    <div v-if="subMenu==2">
      <div class="menu-component text font">
        <span class="menu-list-component">
          워크플로 빌더
        </span>
        <span class="menu-list-component">
          분석
        </span>
      </div>
    </div>
    <div v-if="subMenu==3">
      <div class="menu-component text font">
        <span class="menu-list-component">
          다른 워크스페이스에 로그인
        </span>
        <span class="menu-list-component">
          새 워크스페이스 개설
        </span>
        <span class="menu-list-component">
          워크스페이스 찾기
        </span>
      </div>
    </div>
  </ul>
</template>
<script>
export default {
  props: {
    subMenu: String
  },
}
</script>



<style scoped lang="scss">
.menu-component {
  z-index: 50;
  float: left;
  min-width: 12rem;
  .under-line {
    height: 0px;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-width: 1px;
    border-style: solid;
    --tw-border-opacity: 1;
    border-color: rgba(203, 213, 225, var(--tw-border-opacity));
  }
  .menu-list-component {
     font-size: 0.875rem;
     line-height: 1.25rem;
     width: 100%;
     display: block;
  }
  .outline:hover {
    background-color: blue;
    color: #f55;
  }
}
</style>