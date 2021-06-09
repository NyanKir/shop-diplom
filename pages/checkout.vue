<template>
  <div class="checkout">
    <BreadCrumbs>
      Checkout
    </BreadCrumbs>
    <div class="checkout_body">
      <div class="checkout_steps">
        <CheckoutStep
          title="Personal Information"
          :completed="true"
          :edit="false"
        />
        <CheckoutStep
          title="Address"
          :completed="address.completed"
          :edit="!address.completed"
          @editHandler="redirectToAddress"
        />
        <CheckoutStep
          title="Shipping Method"
          :completed="shippingMethod.completed"
          :disabled="!address.completed"
          :edit="address.completed"
          @editHandler="showShipping"
        >
          <div class="checkout_shipping">
            <label class="checkout_ship-label">
              <input type="radio" class="radiobutton" :checked="true">
              <span class="checkout_ship-label-span">
                <font-awesome-icon :icon="['fas', 'truck']" size="lg" />
                Delivery ${{ shipping }} tax excl.
              </span>
            </label>
            <label for="text">
              <p class="checkout_p">
                If you would like to add a comment about your order, please write it in the field below.
              </p>
              <textarea
                id="text"
                v-model="shippingMethod.description"
                class="checkout_textarea"
                cols="30"
                rows="4"
                placeholder="Comment for your order"
              />
            </label>

            <button class="btn" @click="shippingMethod.completed=true">
              Continue
            </button>
          </div>
        </CheckoutStep>
        <CheckoutStep
          title="Payment"
          :completed="payment"
          :disabled="!shippingMethod.completed"
        >
          <button class="btn" @click="fetchOrdering()">
            Pay
          </button>
        </CheckoutStep>
      </div>
      <Bill :bill="bill" :cart-items="cartItems" :shipping="shipping" />
    </div>
  </div>
</template>

<script>
import Bill from '@/components/Cart/Bill'
import CheckoutStep from '@/components/Cart/CheckoutStep'

export default {
  name: 'Checkout',
  layout: 'sidebar',
  components: { Bill, CheckoutStep },
  data () {
    return {
      data: [],
      shipping: 7.00,
      address: {
        completed: false,
        address: {

        }
      },
      shippingMethod: {
        completed: false,
        description: '',
        show: false
      },
      payment: false
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
  async mounted () {
    await this.fetchData()
    const result = await this.$axios.$get('api/address', { params: { id: this.$store.state.user.userId } })
    this.address.completed = !Object.values(result.address).some(el => el === '')
    this.address.address = result.address
  },
  created () {
    const cart = this.$store.state.products.cart.cart
    if (!cart.length) {
      this.$router.push('/')
    }
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
    },
    redirectToAddress () {
      this.$router.push('/user/panel/address')
    },
    showShipping () {
      this.shippingMethod.completed = false
    },
    async fetchOrdering () {
      try {
        const address = await this.$axios.$get('api/address', { params: { id: this.$store.state.user.userId } })

        const res = await this.$axios({
          method: 'post',
          url: '/api/order',
          data: {
            cart: this.$store.state.products.cart.cart,
            description: this.shippingMethod.description,
            address,
            price: this.bill
          }
        })
        if (res.status === 200) {
          await this.$store.dispatch('user/showNotice', 'Success, your _order was accept!')
          await this.$router.push('/user/order')
          this.$store.commit('products/cart/clear')
        }
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .checkout{
    width: 100%;
  }
  .checkout_ship-label{
    padding: 5px;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .checkout_ship-label-span{
    font-size: 13px;
    font-weight: 300;
    margin-left: 10px;
  }

  .checkout_body{
    display: flex;
  }
  .checkout_steps{
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .checkout_p{
    font-size: 13px;
    font-weight: 300;
    margin-top: 10px;
  }
  .checkout_textarea{
    font-family: 'Poppins', sans-serif;
    padding: 4px;
    font-size: 13px;
    resize: vertical;
    width: 100%;
  }

  @media (max-width: 767px){
    .checkout_body{
      flex-direction: column;

      .checkout_steps{
        order: 2;
      }
      .aside{
        width: 100%;
        min-width: 100%;
        order: 1;
        margin: 0 0 10px 0;
      }
    }
  }
</style>
