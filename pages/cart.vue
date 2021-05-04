<template>
  <div class="container">
    <BreadCrumbs>
      Shopping Cart
    </BreadCrumbs>
    <div class="container_body">
      <List v-if="data.length!==0" :data="data" :cart="cart" />
      <div v-else class="container_nothing">
        <span>
          There are no more items in your cart
        </span>
      </div>
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
        <button class="btn aside_btn">
          Checkout
        </button>
      </aside>
    </div>
  </div>
</template>

<script>
import List from '../components/Cart/List'
export default {
  name: 'Cart',
  components: { List },
  data () {
    return {
      data: [],
      shipping: 7.00
    }
  },
  computed: {
    cart () {
      return this.$store.state.products.cart.cart
    },
    cartItems () {
      return this.cart.reduce((acc, el) => acc + el.options.count, 0)
    },
    bill () {
      return this.data.reduce((acc, el) => {
        const count = this.cart.reduce((acc, accEl) => (el._id === accEl.id) ? accEl.options.count : acc, 0)
        if (el.discountPrice) {
          return acc + el.discountPrice * count
        }
        return acc + el.price * count
      }, 0)
    }
  },
  watch: {
    cart (newC, oldC) {
      this.fetchData()
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      try {
        const res = await this.$axios({
          method: 'get',
          url: '/api/product',
          params: {
            id: this.$store.state.products.cart.cart
          }
        })

        this.data = res.data
      } catch (e) {
        console.error(e)
      }
    }
  },
  layout: 'sidebar'
}
</script>

<style scoped lang="scss">
  .container_body{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .aside{
    padding: 15px;
    margin: 0 0 0 10px;
    border: 1px solid $gray-f2;
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
  .aside_btn{
    width: 100%;
  }
  .container_nothing{
    padding: 10px;
    border: 1px solid $gray-f2;
    margin: 0 0 auto 0;
    width: 100%;
    font-size: 13px;
  }
</style>
