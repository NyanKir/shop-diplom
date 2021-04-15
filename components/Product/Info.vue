<template>
  <div v-if="review!==undefined" class="info info__indent">
    <h2 class="h2">
      {{ title }}
    </h2>
    <Rating :rating="rating" />
    <Price :price="price" :sale="sale" />
    <p class="info_description">
      {{ description }}
    </p>

    <div class="info_options">
      <Quantity :quantity="quantity" @changeQuantity="quantityHandler" @quantityChanged="quantityChanged" />
    </div>
    <button type="submit" class="btn">
      <font-awesome-icon :icon="['fas', 'cart-plus']" size="lg" />
      Add to car
    </button>
  </div>
</template>

<script>
import Rating from './Rating'
import Quantity from './ProductOptions/Quantity'
import Price from './Price'
export default {
  name: 'Info',
  components: { Price, Quantity, Rating },
  props: ['title', 'price', 'description', 'review', 'sale'],
  data () {
    return {
      quantity: 0
    }
  },
  computed: {
    rating () {
      return this.review[0].rating
    }
  },
  methods: {
    quantityHandler (whatToDo) {
      if (whatToDo) {
        this.quantity += 1
        return
      }
      this.quantity -= 1
    },
    quantityChanged (now) {
      if (+now) { this.quantity = parseInt(now) }
    }
  }
}
</script>

<style scoped lang="scss">
  .h2{
    font-size: 20px;
    font-weight: 400;
    margin: 0;
  }
  .info__indent{
    margin-left: 20px;
  }
  .info_description{
    font-size: 13px;
    margin-bottom: 10px;
  }

</style>
