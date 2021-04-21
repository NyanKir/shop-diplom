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
        :max="maxValue"
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
      value: (this.$route.query.price) ? parseInt(this.$route.query.price) : 50,
      maxValue: 50
    }
  },
  methods: {
    changeValue () {
      this.$router.push({ path: this.$route.path, query: { ...this.$route.query, price: this.value } })
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
