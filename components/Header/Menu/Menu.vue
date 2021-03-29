<template>
  <nav class="menu">
    <ul class="menu_list">
      <DropDown v-for="(link,index) in links" :key="index" :link="link" />
    </ul>
  </nav>
</template>

<script>
import DropDown from './DropDown'
export default {
  name: 'Menu',
  components: { DropDown },
  computed: {
    links () {
      return this.$store.state.menu.links
    }
  }
}
</script>

<style scoped>

</style>
