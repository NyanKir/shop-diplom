<template>
  <li class="menu_list-item">
    <NuxtLink to="/" class="menu_link">
      <span>{{ item.name }}</span>
    </NuxtLink>
    <font-awesome-icon v-if="(item.child)" :icon="['fas', 'chevron-down']" size="sm" class="right-side" @click="drop=!drop" />
    <transition name="dropDown">
      <ul v-if="(item.child && drop)" class="menu_list">
        <DropDown v-for="link in item.child" :key="link.name" :link="link" />
      </ul>
    </transition>
  </li>
</template>

<script>
import DropDown from '@/components/Header/MobileMenu/DropDown'
export default {
  name: 'Link',
  components: { DropDown },
  props: ['item'],
  data () {
    return {
      drop: false
    }
  }
}
</script>

<style scoped>
.menu_link{
  font-weight: 600;
}

</style>
