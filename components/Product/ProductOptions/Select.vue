<template>
  <div class="quantity">
    <select
      id="quantity"
      :value="getDefaultCount.options.count"
      name="quantity"
      class="quantity_select"
      @change="selectHandle($event.target.value)"
    >
      <option v-for="i in 9" :key="i" :value="i">
        {{ i }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Quantity',
  props: ['id'],
  computed: {
    getDefaultCount () {
      return this.$store.state.products.cart.cart.filter(el => el.id === this.id)[0]
    }
  },
  methods: {
    selectHandle (v) {
      const product = this.getDefaultCount
      this.$store.commit('products/cart/update', { ...product, options: { ...product.options, count: +v } })
    }
  }
}
</script>

<style scoped lang="scss">
.quantity{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.quantity_select{
  width: 50px;
}

</style>
