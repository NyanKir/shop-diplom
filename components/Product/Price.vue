<template>
  <div class="price">
    <span v-if="!discount" class="price_regular">${{ price.toFixed(2) }}</span>
    <div v-else>
      <span class="price_regular">
        ${{ discount.toFixed(2) }}
      </span>
      <span class="price_discount">save {{ Math.trunc(((price-discount)/price)*100) }}%</span>

      <span class="price_old">
        ${{ price.toFixed(2) }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Price',
  props: ['discount', 'price']
}
</script>

<style scoped lang="scss">
.price_regular{
  font-size: 18px;
}
.price_old,.price_discount{
  font-size: 13px;
}
.price_old{
  text-decoration: line-through;
  color: $gray;
}
.price_discount{
  color:$red;
}
.price{
  margin-top: 5px;
}
</style>
