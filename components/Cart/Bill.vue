<template>
  <aside class="aside">
    <div class="aside_item">
      <span>{{ cartItems }} items</span>
      <span>${{ (+bill).toFixed(2) }}</span>
    </div>
    <div class="aside_item">
      <span>Shipping</span>
      <span v-if="+bill">${{ shipping.toFixed(2) }}</span>
      <span v-else>Free</span>
    </div>
    <div class="aside_item aside_item__total">
      <span>Total <br> (tax excl.)</span>
      <span v-if="+bill">${{ ((+bill)+shipping).toFixed(2) }}</span>
      <span v-else>$0.00</span>
    </div>
    <slot />
  </aside>
</template>

<script>
export default {
  name: 'Bill',
  props: ['bill', 'shipping', 'cartItems']
}
</script>

<style scoped lang="scss">
  .aside{
    padding: 15px;
    margin: 0 0 0 10px;
    border: 1px solid $gray-f2;
    display: flex;
    flex-direction: column;
  }
  .aside_item{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    margin: 2px 0;

    span:first-child{
      margin-right: 10px;
    }
  }
  .aside_item__total{
    margin-top: 20px;
  }

</style>
