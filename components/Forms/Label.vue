<template>
  <label :for="item.id" class="login-form_label">
    <span>{{ item.label }}</span>
    <slot />
  </label>
</template>

<script>
export default {
  name: 'Label',
  props: ['item']
}
</script>

<style scoped>

</style>
