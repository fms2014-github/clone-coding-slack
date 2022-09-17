<!--미래의 기억 옆에 있는 버튼은 라우터로 구현 to을 사용해서 #을 넣어둬라-->
<template>
  <ul position:relative>
    <div
      ref="popoverDropdownRef"
      class="menu-component text font"
    >
      <span class="base bold w-full block">
        새워크스페이스
      </span>
      <div class="under-line" />
      <span class="menu-list-component">
        고객님의 워크스페이스에서는 현재 Slack무료
        버전을 사용하고 있습니다.
      </span>
      <span class="menu-list-component">
        새 워크 스페이스에 사용자 초대
      </span>
      <span class="menu-list-component outline">
        채널 생성
      </span>
      <div class="under-line" />
      <span class="menu-list-component outline">
        환경설정
      </span>
      <span data-detail="setting" v-on:mouseover="SubMenu($event)" v-on:mouseout="SubMenuClose($event)" class="menu-list-component outline">
        설정 및 관리
      </span>
      <div class="under-line" />
      <span data-detail="tool" v-on:mouseover="SubMenu($event)" v-on:mouseout="SubMenuClose($event)" class="menu-list-component outline">
        도구
      </span>
      <div class="under-line" />
      <span data-detail="add" v-on:mouseover="SubMenu($event)" v-on:mouseout="SubMenuClose($event)" class="menu-list-component outline">
        워크스페이스 추가
      </span>
      <div class="under-line" />
      <span class="menu-list-component outline">
        모바일 앱 받기
      </span>
      <div class="under-line" />
      <span class="menu-list-component outline">
        새 워크스페이스에서 로그아웃
      </span>
    </div>
  
    <SubMenuPopupVue v-bind:subMenu=subMenuIdx class="child"></SubMenuPopupVue>
  </ul>
</template>

<script>
import SubMenuPopupVue from './SubMenuPopup.vue'

export default {
  data() {
   return {
     subMenuIdx:""
   }
  },
  components: {
    SubMenuPopupVue
  },
  methods: {
    SubMenu(num) {
      console.log(num);
      let _target = num.target;
      let subMenuId = _target.getAttribute('data-detail');
      if (subMenuId === 'setting') {
        this.subMenuIdx='1';
        document.getElementsByClassName('child')[0].classList.add('subMenu1');
        // document.querySelectorAll('.child')[0]
        // document.querySelector('.child')
      } else if (subMenuId === 'tool'){
        this.subMenuIdx='2';
        document.getElementsByClassName('child')[0].classList.add('subMenu2');
      } else if (subMenuId === 'add'){
        this.subMenuIdx='3';
        document.getElementsByClassName('child')[0].classList.add('subMenu3');
      }
    },
    SubMenuClose(e) {
      this.subMenuIdx='';
      document.getElementsByClassName('child')[0].classList.remove('subMenu1');
      document.getElementsByClassName('child')[0].classList.remove('subMenu2');
      document.getElementsByClassName('child')[0].classList.remove('subMenu3');
    }
  }
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

.subMenu1 {
  position:absolute;
  left: 463px;
  top: 150px;
}

.subMenu2 {
  position:absolute;
  left: 463px;
  top: 187px;
}

.subMenu3 {
  position:absolute;
  left: 463px;
  top: 225px;
}

</style>