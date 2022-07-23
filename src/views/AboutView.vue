<template>

  <div class="about">
    <MenuPopup v-for="memuPopup in memuPopups" :key="memuPopup.id">
   <!--   <MenuPopupList :memuPopup="memuPopup"></MenuPopupList>-->
    </MenuPopup>
  </div>

</template>

<script>
import MenuPopup from '@/components/MenuPopup.vue'
import MenuPopupList from '@/components/MenuPopupList.vue'

export default {
    components: {
      MenuPopup,
      MenuPopupList
   },

    data(){
    return{
      memuPopups:[
        'test1',
        'test2',
        'test3'
      ]
    }
  }

}
</script>