<template>
  <ul>
    <li v-for="link in item" :key="link.name" class="menu_list-item">
      <NuxtLink to="/" class="menu_link">
        <span>
          {{ link.name }}
        </span>
      </NuxtLink>
      <font-awesome-icon v-if="link.child" :icon="['fas', 'chevron-down']" size="sm" class="right-side" @click="drop=!drop" />
      <transition name="dropDown">
        <ul v-show="link.child && drop" class="menu_list">
          <li v-for="el in link.child" :key="el.name" class="menu_list-item">
            <NuxtLink :to="el.href" class="menu_link">
              <span>
                {{ el.name }}
              </span>
            </NuxtLink>
          </li>
        </ul>
      </transition>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DropDown',
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

</style>
