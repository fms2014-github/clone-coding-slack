<template>
    <ul class="popupList-component">
      <div
        ref="popoverDropdownRef"
        class="text font bg-white z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        v-bind:class="{
          hidden: !dropdownPopoverShow,
          block: dropdownPopoverShow,
        }"
      >
        <span class="base bold w-full block">
          새워크스페이스
        </span>
        <div class="h-0 mx-4 my-2 border border-solid border-blueGray-300" />
        <span class="sm w-full block">
          고객님의 워크스페이스에서는 현재 Slack무료
          버전을 사용하고 있습니다.
        </span>
        <span class="sm w-full block">
          새 워크 스페이스에 사용자 초대
        </span>
        <span class="sm w-full block">
          채널 생성
        </span>
        <div class="h-0 mx-4 my-2 border border-solid border-blueGray-300" />
        <span class="sm w-full block">
          환경설정
        </span>
        <span class="sm w-full block">
          설정 및 관리
        </span>
        <div class="h-0 mx-4 my-2 border border-solid border-blueGray-300" />
        <span class="sm w-full block">
          도구
        </span>
        <div class="h-0 mx-4 my-2 border border-solid border-blueGray-300" />
        <span class="sm w-full block">
          워크스페이스 추가
        </span>
        <div class="h-0 mx-4 my-2 border border-solid border-blueGray-300" />
        <span class="sm w-full block">
          모바일 앱 받기
        </span>
        <div class="h-0 mx-4 my-2 border border-solid border-blueGray-300" />
        <span class="sm w-full block">
          새 워크스페이스에서 로그아웃
        </span>
    </div>
      <!-- <slot></slot>     
      <li>읽지않은 항목</li> -->
    </ul>
</template>

<script>
export default {
  name: 'MenuPopupList',
  props: {
    msg: String
  },
  mounted(){
    
  }
}
</script>

<style scoped lang="scss">
.text {
  .sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .base {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  
  .xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
}

.font {
  .bold {
    font-weight: 700;
  }
}

.whitespace-nowrap {
  white-space: nowrap;
}

.w-full {
  width: 100%;
}

.block {
  display: block;
}

.h-0 {
  height: 0px;
}

.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.border {
  border-width: 1px;
}

.border-solid {
  border-style: solid;
}

.border-blueGray-100 {
  --tw-border-opacity: 1;
  border-color: rgba(241, 245, 249, var(--tw-border-opacity));
}

.z-50 {
  z-index: 50;
}

.float-left {
  float: left;
}

.min-w-48 {
  min-width: 12rem;
}

.border-blueGray-300 {
  --tw-border-opacity: 1;
  border-color: rgba(203, 213, 225, var(--tw-border-opacity));
}
</style>