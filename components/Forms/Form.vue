<template>
  <form @submit.prevent="$emit('updateAddress')">
    <slot />
  </form>
</template>

<script>
export default {
  name: 'Form'
}
</script>

<style scoped>

</style>
