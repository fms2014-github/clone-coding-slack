<template>

  <div class="menu-test">
    <MenuPopup v-for="memuPopup in memuPopups" :key="memuPopup.id">

    </MenuPopup>
  </div>

</template>

<script>
import MenuPopup from '@/components/MenuPopup.vue'
import SubMenuPopup from '@/components/SubMenuPopup.vue'

export default {
  name: 'menuTest',
  components: {
    MenuPopup,
    SubMenuPopup
  },
  data(){
    return{
      memuPopups:[
        'test1'
      ]
    }
  },


}
</script>