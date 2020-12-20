<template>
  <nav class="menu">
    <ul class="menu_list">
      <Link v-for="(link,index) in links" :key="index" :link="link" />
    </ul>
  </nav>
</template>

<script>
import Link from '@/components/Header/Menu/DropDown'
export default {
  name: 'Menu',
  components: { Link },
  computed: {
    links () {
      return this.$store.state.menu.links
    }
  }
}
</script>

<style scoped>

</style>
