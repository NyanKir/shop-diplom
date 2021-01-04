<template>
  <li class="menu_list-item">
    <NuxtLink to="/" class="menu_link">
      <span>{{ item.name }}</span>
    </NuxtLink>
    <font-awesome-icon v-if="(item.child)" :icon="['fas', 'chevron-down']" size="sm" class="right-side" @click="drop=!drop" />
    <transition name="dropDown">
      <ul v-if="(item.child && drop)" class="menu_list">
        <Link v-for="(link,index) in item.child" :key="index" :item="link" />
      </ul>
    </transition>
  </li>
</template>

<script>
import Link from '@/components/Header/MobileMenu/DropDownItem'
export default {
  name: 'Link',
  components: { Link },
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
  font-weight: 400;
}

.dropDown-enter-active,
.dropDown-leave-active {
  transition: all 0.4s ease;
}
.dropDown-enter-to,
.dropDown-leave {
  max-height: 500px;
}
.dropDown-enter,
.dropDown-leave-to {
  max-height: 0;
}

</style>
