<template>
  <div class="info info__indent">
    <h2 class="h2">
      {{ title }}
    </h2>
    <Rating :rating="rating" />
    <Price :price="price" :discount="discount" />
    <p class="info_description">
      {{ description }}
    </p>
    <!--    <div class="info_options">-->
    <!--      <Quantity-->
    <!--        :show="true"-->
    <!--        :quantity="quantity"-->
    <!--        @changeQuantity="quantityHandler"-->
    <!--        @quantityChanged="quantityChanged"-->
    <!--      />-->
    <!--    </div>-->
    <button v-if="product.length===0" type="button" class="btn" @click="addToCartList(product[0].id)">
      <font-awesome-icon :icon="['fas', 'cart-plus']" size="lg" />
      Add to cart
    </button>
    <button v-else type="button" class="btn" @click="removeFromCartList(product[0].id)">
      <font-awesome-icon :icon="['fas', 'trash']" size="lg" />
      Remove from cart
    </button>
  </div>
</template>

<script>
import Rating from './Rating'
// import Quantity from './ProductOptions/Quantity'
import Price from './Price'

export default {
  name: 'Info',
  components: { Price, Rating },
  props: ['title', 'price', 'description', 'rating', 'discount', 'id'],
  data () {
    return {
      quantity: 0
    }
  },
  computed: {
    product () {
      return this.$store.state.products.cart.cart.filter(el => el.id === this.id)
    }
  },
  methods: {
    addToCartList (id) {
      this.$store.commit('products/cart/add', id)
    },
    removeFromCartList (id) {
      this.$store.commit('products/cart/remove', id)
    },
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
