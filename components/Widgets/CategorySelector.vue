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
  computed: {
    links () {
      return this.$store.state.menu.links
    }
  }
}
</script>

<style scoped>

</style>
