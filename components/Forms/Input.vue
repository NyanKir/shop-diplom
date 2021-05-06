<template>
  <div class="login-form_field">
    <input
      :id="item.id"
      v-model="item.value"
      v-mask="item.id==='code'?mask:''"
      type="text"
      class="input"
      :placeholder="item.placeholder"
      :class="{'input__invalid':error.param===item.id}"
      :disabled="item.id==='country'"
    >
    <span v-show="error.param===item.id" class="login-form_field-error">{{ error.msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: ['item', 'error', 'mask']
}
</script>

<style scoped>

</style>
