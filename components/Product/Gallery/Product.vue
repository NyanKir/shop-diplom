<template>
  <div class="product">
    <div class="product_img-wrapper">
      <div v-if="product.discountPrice" class="product_discount">
        <span>{{ Math.trunc(((product.price-product.discountPrice)/product.price)*100) }}%</span>
      </div>
      <NuxtLink :to="{ path: '/product/'+product.title, query: { id: product._id }}">
        <img :src="product.gallery[0]" :alt="product.title" class="product_img">
        <img :src="product.gallery[1]" :alt="product.title+'2'" class="product_img">
      </NuxtLink>
      <!--      <div class="product_img-_panel">-->
      <!--        <button-->
      <!--          class="product_img-_panel-element"-->
      <!--          :class="{'product_img-_panel-element__active':arrayOfCart.includes(product._id)}"-->
      <!--          @click="arrayOfCart.includes(product._id)?removeFromCartList(product._id):addToCartList(product._id)"-->
      <!--        >-->
      <!--          <font-awesome-icon :icon="['fas', 'cart-plus']" size="lg" />-->
      <!--        </button>-->
      <!--        <button-->
      <!--          class="product_img-_panel-element"-->
      <!--          :class="{'product_img-_panel-element__active': arrayOfWish.includes(product._id)}"-->
      <!--          @click="arrayOfWish.includes(product._id)?-->
      <!--            removeFromWishList(product._id):-->
      <!--            addToWishList(product._id)"-->
      <!--        >-->
      <!--          <font-awesome-icon :icon="['fas', 'heart']" size="lg" />-->
      <!--        </button>-->
      <!--      </div>-->
    </div>
    <div class="product_info">
      <Rating :rating="getRating" />
      <NuxtLink :to="'/product/'+product.title+'?id='+product._id" class="link fnt-weg-400">
        <span>{{ product.title }}</span>
      </NuxtLink>
      <Price :price="product.price" :discount="product.discountPrice" />
    </div>
  </div>
</template>

<script>
import Rating from '../Rating'
import Price from '../Price'
export default {
  name: 'Product',
  components: { Price, Rating },
  props: ['product'],
  computed: {
    getRating () {
      const result = this.product.review.reduce((acc, el) => {
        return acc + el.rating
      }, 0)

      return (Math.round(result / this.product.review.length) > 5) ? 5 : Math.round(result / this.product.review.length)
    },
    wishList () {
      return this.$store.state.products.wish.wishes
    },
    cartList () {
      return this.$store.state.products.cart.cart
    },
    arrayOfCart () {
      return this.$store.state.products.cart.cart.map(el => el.id)
    },
    arrayOfWish () {
      return this.$store.state.products.wish.wishes.map(el => el.id)
    }

  },
  methods: {
    addToWishList (id) {
      this.$store.commit('products/wish/add', id)
    },
    removeFromWishList (id) {
      this.$store.commit('products/wish/remove', id)
    },
    addToCartList (id) {
      this.$store.commit('products/cart/add', id)
    },
    removeFromCartList (id) {
      this.$store.commit('products/cart/remove', id)
    }
  }
}
</script>

<style scoped lang="scss">
  .product_info /deep/ .price_regular{
    font-size: 14px;

  }
  .product_info /deep/ .price_discount{
    display: none;
  }
  .product_img-wrapper{
    overflow: hidden;
    position: relative;
    width: 100%;
    height: auto;

    &:hover .product_img:nth-child(2){
      transform: rotateX(0deg);
      transition: .3s;
      opacity: 1;
    }
    &:hover .product_img-panel{
      right: 5px;
      transition: .3s;
    }
  }
  .product{
    width: 100%;
    height: 100%;
  }
  .product_img{
    width: 100%;
    height: 100%;

    &:nth-child(2){
      right: 0;
      top: 0;
      bottom: 0;
      left: 0;
      position: absolute;
      opacity: 0;
      transition: .3s;
      height: auto;
      transform: rotateX(90deg);
    }
  }
  .product_img-panel{
    right: -50px;
    top: 0;
    position: absolute;
    transition: .3s;
  }
  .product_img-panel-element{
    width: 35px;
    height: 35px;
    background: $white;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    cursor: pointer;
    transition: .3s;
    border: none;
    outline: none;

    &:hover {
      color: $white;
      transition: .3s;
      background: $black;
    }
  }
  .product_img-panel-element__active{
    color: $white;
    background: $black;
  }
  .product_discount{
    z-index: 1;
    position: absolute;
    top: 5px;
    left: 5px;
    background: $main;
    color: $white;
    padding: 0 5px;
    font-size: 13px;
  }
  @media (max-width: 992px) {
    .product_img-wrapper{
      max-width: 100%;
    }
  }
</style>
