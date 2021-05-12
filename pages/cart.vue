<template>
  <div class="container">
    <BreadCrumbs>
      Shopping Cart
    </BreadCrumbs>
    <div class="container_body">
      <List v-if="data.length!==0 && cart.length" :data="data" :cart="cart" />
      <div v-else class="container_nothing">
        <span>
          There are no more items in your cart
        </span>
      </div>
      <Bill :bill="bill" :cart-items="cartItems" :shipping="shipping">
        <button class="btn aside_btn">
          <NuxtLink v-if="+bill" to="/checkout" class="link">
            Checkout
          </NuxtLink>
          <NuxtLink v-else to="/" class="link">
            Go to shop
          </NuxtLink>
        </button>
      </Bill>
    </div>
  </div>
</template>

<script>
import Bill from '@/components/Cart/Bill'
import List from '../components/Cart/List'
export default {
  name: 'Cart',
  components: { List, Bill },
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
      return this.cart.reduce((acc, el) => acc + el.count, 0)
    },
    bill () {
      return this.data.reduce((acc, el) => {
        const count = this.cart.reduce((acc, accEl) => (el._id === accEl.id) ? accEl.count : acc, 0)
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
  layout: 'sidebar',
  head () {
    return {
      title: 'Cart'
    }
  }
}
</script>

<style scoped lang="scss">
  .container_body{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .aside_btn{
    margin: 10px auto 0 auto;
  }
  .container_nothing{
    padding: 10px;
    border: 1px solid $gray-f2;
    margin: 0 0 auto 0;
    width: 100%;
    font-size: 13px;
  }
  .link{
    color: $white;
  }
</style>
