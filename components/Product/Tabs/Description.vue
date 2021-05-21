<template>
  <p class="tabs_description-tab">
    {{ data }}
  </p>
</template>

<script>
export default {
  name: 'TabDescription',
  props: ['data']
}
</script>

<style scoped>
  .tabs_description-tab{
    white-space: break-spaces;
  }
</style>
