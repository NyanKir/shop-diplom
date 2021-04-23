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
  async fetch () {
    try {
      const res = await this.$axios({
        method: 'get',
        url: '/api/getMaxPrice',
        params: {
          select: this.$route.path.split('/').slice(-1)[0]
        }
      })
      if (!this.$route.path.price) {
        await this.$router.push({ path: this.$route.path, query: { ...this.$route.query, price: res.data.price } })
        this.value = res.data.price
        return
      }
      this.maxValue = res.data.price
      this.value = this.$route.query.price
    } catch (e) {
      console.error(e)
    }
  },
  data () {
    return {
      maxValue: null,
      value: null
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
