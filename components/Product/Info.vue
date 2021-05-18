<template>
  <div class="info info__indent">
    <h2 class="h2">
      {{ product.title }}
    </h2>
    <Rating :rating="getRating" />
    <Price :price="product.price" :discount="product.discountPrice" />
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
    <div class="info_options">
      <WidgetWrap title="Quantity">
        <Select
          :id="product._id"
          :start="cartProduct[0]=== undefined ? -1 : count"
          :options="options"
          @changeCountOption="changeCountOption"
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
import Price from './Price'
import FilterSelect from './ProductOptions/FilterSelect'
import Select from './ProductOptions/Select'

export default {
  name: 'Info',
  components: { WidgetWrap, Price, Rating, FilterSelect, Select },
  props: ['product'],
  data () {
    return {
      options: {},
      count: 1
    }
  },
  computed: {
    /* Здесь очень сильно напутано
    нужно будет убрать cartProduct и
    сделать код более читаемым */
    getRating () {
      const result = this.product.review.reduce((acc, el) => {
        return acc + el.rating
      }, 0)
      return (Math.round(result / this.product.review.length) > 5) ? 5 : Math.round(result / this.product.review.length)
    },
    cartProduct () {
      return this.$store.state.products.cart.cart.filter(el => el.id === this.product._id)
    },
    updateProduct () {
      return !Object.values(this.options).every(el => Object.values(this.cartProduct[0].options).includes(el))
    }
  },
  mounted () {
    const product = this.$store.state.products.cart.cart.filter(el => el.id === this.product._id)[0]
    this.options = product?.options || {}
    this.count = product?.count || 1
  },
  methods: {
    changeCountOption (count) {
      this.count = count
      if (this.cartProduct[0] !== undefined) {
        this.$store.commit('products/cart/update',
          { ...this.cartProduct[0], options: { ...this.cartProduct[0].options }, count })
      }
    },

    addToCartList (id) {
      if (Object.keys(this.options).length === 1 || !Object.keys(this.options).length) {
        this.$store.dispatch('user/showNotice', 'Choose something :)')
        return
      }
      const res = Object.keys(this.product.filters).every((el) => {
        return !!(this.options?.[el] || el === 'count')
      })
      if (!res) {
        this.$store.dispatch('user/showNotice', 'Choose all filters :)')
        return
      }
      this.$store.commit('products/cart/add', { id, options: this.options, count: this.count })
      this.$store.dispatch('user/showNotice', 'Success, your product was added! :)')
    },
    removeFromCartList (id) {
      this.options = {}
      this.$store.commit('products/cart/remove', id)
      this.$store.dispatch('user/showNotice', 'Success, your product was removed! :)')
    },
    updateCartList (id) {
      const options = this.options
      this.$store.commit('products/cart/update', { id, options, count: this.count })
      this.$store.dispatch('user/showNotice', 'Success, your product was updated! :)')
    },

    changeOptions (option, value) {
      this.options = { ...this.options, [option]: value }
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
  .info_options ::v-deep .widget_wrap{
    width: 250px;
    display: flex;
    justify-content: space-between;

  }
  .info_options ::v-deep .h4{
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
