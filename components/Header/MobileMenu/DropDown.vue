<template>
  <li class="menu_list-item">
    <NuxtLink to="/" class="menu_link">
      <span>
        {{ link.name }}
      </span>
    </NuxtLink>
    <font-awesome-icon v-if="link.child" :icon="['fas', 'chevron-down']" size="sm" class="right-side" @click="drop=!drop" />
    <transition name="dropDown">
      <Item v-if="link.child && drop" :child="link.child" />
    </transition>
  </li>
</template>

<script>
import Item from '@/components/Header/MobileMenu/Item'
export default {
  name: 'DropDown',
  components: { Item },
  props: ['link'],
  data () {
    return {
      drop: false
    }
  }
}
</script>
