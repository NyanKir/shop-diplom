<template>
  <div v-if="review!==undefined" class="info info__indent">
    <h2 class="h2">
      {{ title }}
    </h2>
    <Rating :rating="rating" />
    <div class="info_price">
      <span v-if="!sale" class="info_current-price">{{ price.toFixed(2) }}</span>
      <div v-else>
        <span class="info_current-price">
          ${{ Math.round(price-price%20).toFixed(2) }}
        </span>

        <span class="info_discount-price">save {{ sale }}%</span>

        <span class="info_old-price">
          ${{ price.toFixed(2) }}
        </span>
      </div>
    </div>
    <p class="info_description">
      {{ description }}
    </p>

    <div class="info_options">
      <Quantity :quantity="quantity" @changeQuantity="quantityHandler" @quantityChanged="quantityChanged" />
    </div>
    <button type="submit" class="btn">
      Add to car
    </button>
  </div>
</template>

<script>
import Rating from './Rating'
import Quantity from './ProductOptions/Quantity'
export default {
  name: 'Info',
  components: { Quantity, Rating },
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
      this.quantity = parseInt(now)
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
  .info_current-price{
    font-size: 18px;
  }
  .info_old-price,.info_discount-price{
    font-size: 13px;
  }
  .info_old-price{
    text-decoration: line-through;
    color: $gray;
  }
  .info_discount-price{
    color:red;
  }
  .info_description{
    font-size: 13px;
    margin-bottom: 10px;
  }
  .info_price{
    margin-top: 5px;
  }

</style>
