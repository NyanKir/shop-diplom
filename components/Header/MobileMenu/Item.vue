<template>
  <ul class="menu_list">
    <li v-for="el in child" :key="el.name" class="menu_list-item">
      <NuxtLink :to="el.href" class="menu_link">
        <span>
          {{ el.name }}
        </span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Item',
  props: ['child']
}
</script>

<style scoped>
.menu_link{
  font-weight: 400;
}

</style>
