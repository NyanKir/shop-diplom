<template>
  <ul class="menu_list">
    <DropDownItem v-for="(item,index) in links" :key="index" :item="item" />
  </ul>
</template>

<script>
import DropDownItem from '../Header/MobileMenu/DropDownItem'
export default {
  name: 'CategorySelector',
  components: { DropDownItem },
  props: ['links']
}
</script>

<style scoped>
  .menu_list{
    flex-direction: column;
  }
  .menu_list >>> .link{
    font-weight: 400;
  }

</style>
