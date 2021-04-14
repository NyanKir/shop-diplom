<template>
  <form class="form">
    <label for="vol">
      <slot />
      <span>$0</span> - <span>${{ value }}</span>
      <input
        id="vol"
        v-model="value"
        type="range"
        name="vol"
        min="0"
        max="50"
        @change="changeValue"
      >
    </label>
  </form>
</template>

<script>
export default {
  name: 'PriceSlider',
  data () {
    return {
      value: (this.$route.query.price) ? this.$route.query.price : 0
    }
  },
  methods: {
    changeValue () {
      this.$router.push({ path: this.$route.path, query: { price: this.value } })
    }
  }
}
</script>

<style scoped>
  .form{
    align-items: flex-start;
    margin-left: 13px;
  }
</style>
