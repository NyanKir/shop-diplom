<template>
  <li class="menu_list-item" @mouseover="hover=true" @mouseleave="hover=false">
    <NuxtLink :to="link.href" class="menu_link">
      <span>{{ link.name }}</span>
    </NuxtLink>
    <transition name="backInTop">
      <DropDownItem v-show="hover && link.child" :child="link.child" />
    </transition>
  </li>
</template>

<script>
import DropDownItem from './DropDownItem'
export default {
  name: 'DropDown',
  components: { DropDownItem },
  props: ['link'],
  data () {
    return {
      hover: false
    }
  }
}
</script>

<style scoped>

</style>
