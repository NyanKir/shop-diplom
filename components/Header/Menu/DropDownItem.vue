<template>
  <ul class="dropdown rm-indents">
    <li v-for="item in child" :key="item.name" class="dropdown__index">
      <NuxtLink :to="item.href" class="link dropdown_header">
        <span>{{ item.name }}</span>
      </NuxtLink>
      <ul class="dropdown_item rm-indents ">
        <li v-for="link in item.child" :key="link.name">
          <NuxtLink :to="link.href" class="link fnt-weg-400">
            <span>
              {{ link.name }}
            </span>
          </NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DropDownItem',
  props: ['child']
}
</script>

<style scoped lang="scss">
  .dropdown{
    z-index: 1;
    border: 1px solid $gray;
    padding: 15px;
  }

</style>
