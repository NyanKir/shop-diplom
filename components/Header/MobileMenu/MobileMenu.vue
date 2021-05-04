<template>
  <transition name="backInLeft">
    <nav v-show="showMenu" class="mobile_menu">
      <font-awesome-icon
        :icon="['fas', 'times']"
        size="lg"
        class="indent"
        @click="$emit('handler')"
      />
      <ul class="menu_list">
        <DropDownItem v-for="(item,index) in links" :key="index" :item="item" />
      </ul>
    </nav>
  </transition>
</template>

<script>
import DropDownItem from './DropDownItem'
export default {
  name: 'MobileMenu',
  components: { DropDownItem },
  props: ['showMenu'],
  data () {
    return {
      drop: false
    }
  },
  computed: {
    links () {
      return this.$store.state.menu.links
    }
  },
  emits: ['handler']
}
</script>

<style scoped lang="scss">
  .indent{
    margin: 15px;
  }

</style>
