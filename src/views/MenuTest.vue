<template>

  <div class="menu-test">
    <MenuPopup v-for="memuPopup in memuPopups" :key="memuPopup.id">
   <!--   <MenuPopupList :memuPopup="memuPopup"></MenuPopupList>-->
    </MenuPopup>
  </div>

</template>

<script>
import MenuPopup from '@/components/MenuPopup.vue'
import MenuPopupList from '@/components/MenuPopupList.vue'

export default {
    name: 'menuTest',
    components: {
      MenuPopup,
      MenuPopupList
   },

    data(){
    return{
      memuPopups:[
        'test1'
      ]
    }
  }

}
</script>