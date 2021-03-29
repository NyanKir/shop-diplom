<template>
  <transition name="backInLeft">
    <nav v-show="showMenu" class="mobile_menu mobile_menu__inner">
      <font-awesome-icon :icon="['fas', 'times']" size="lg" class="indent" @click="$emit('handler')" />
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

<style scoped>

  .indent{
    margin: 15px;
  }
  .backInLeft-enter-active,
  .backInLeft-leave-active {
    transition: all .3s ease-out;
  }
  .backInLeft-leave-to,
  .backInLeft-enter{
    transform: translateX(-300px);
  }

  .backInLeft-enter-to{
    transform: translateX(0);
  }
</style>
