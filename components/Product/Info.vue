<template>
  <div class="info info__indent">
    <h2 class="h2">
      {{ product.title }}
    </h2>
    <Rating :rating="product.rating" />
    <Price :price="product.price" :discount="product.discount" />
    <p class="info_description">
      {{ product.description }}
    </p>
    <div v-for="(data,filter) in product.filters" :key="filter" class="info_options">
      <WidgetWrap :title="filter">
        <FilterSelect
          :name="filter"
          :data="data"
          :options="options"
          @changeOptions="changeOptions"
        />
      </WidgetWrap>
    </div>
    <button v-if="cartProduct.length===0" type="button" class="btn" @click="addToCartList(product._id)">
      <font-awesome-icon :icon="['fas', 'cart-plus']" size="lg" />
      Add to cart
    </button>

    <button v-else-if="updateProduct" type="button" class="btn" @click="updateCartList(product._id)">
      <font-awesome-icon :icon="['fas', 'sync-alt']" size="lg" />
      Update
    </button>
    <button v-else type="button" class="btn" @click="removeFromCartList(product._id)">
      <font-awesome-icon :icon="['fas', 'trash']" size="lg" />
      Remove from cart
    </button>
  </div>
</template>

<script>
import WidgetWrap from '../Widgets/WidgetWrap'
import Rating from './Rating'
// import Quantity from './ProductOptions/Quantity'
import Price from './Price'
import FilterSelect from './ProductOptions/FilterSelect'

export default {
  name: 'Info',
  components: { WidgetWrap, Price, Rating, FilterSelect },
  props: ['product'],
  data () {
    return {
      quantity: 0,
      options: { count: 1 }
    }
  },
  computed: {
    cartProduct () {
      const product = this.$store.state.products.cart.cart.filter(el => el.id === this.product._id)
      if (product.length !== 0) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.options = product[0].options
      }
      return product
    },
    updateProduct () {
      return !Object.values(this.options).every(el => Object.values(this.cartProduct[0].options).includes(el))
    }
  },
  methods: {
    addToCartList (id) {
      if (Object.keys(this.options).length === 1) {
        alert('Choose something')
        return
      }
      const options = this.options
      this.$store.commit('products/cart/add', { id, options })
    },
    removeFromCartList (id) {
      this.$store.commit('products/cart/remove', id)
    },
    updateCartList (id) {
      const options = this.options
      this.$store.commit('products/cart/update', { id, options })
    },

    changeOptions (option, value) {
      this.options = { ...this.options, [option]: value }
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
  .info_options{
    margin: 15px 0;

  }
  .info_options /deep/ .widget_wrap{
    width: 250px;
    display: flex;
    justify-content: space-between;

  }
  .info_options /deep/ .h4{
    width: 75px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 400;
    background: transparent;
    padding: 0;
    margin: 0;
  }

  //@media (max-width: 992px ) {
  //
  //}
</style>
