<template>
  <section class="list">
    <div v-for="product in data" :key="product._id" class="list_item">
      <div class="list_img">
        <img :src="product.gallery[0]" :alt="product.title">
      </div>
      <div class="list_description">
        <NuxtLink class="link" :to="'/product/'+product.title+'?id='+product._id">
          <span class="list_title">
            {{ product.title }}
          </span>
        </NuxtLink>
        <Price :price="product.price" :discount="product.discountPrice" />
        <!--        <ul class="list_options">-->
        <!--          <li-->
        <!--            v-for="(name,value) in getOptionsWithOutCount(product._id)"-->
        <!--            :key="value"-->
        <!--            class="list_options-item"-->
        <!--          >-->
        <!--            {{ value.charAt(0).toUpperCase()+value.slice(1) }}:-->
        <!--            {{ name.charAt(0).toUpperCase()+name.slice(1) }}-->
        <!--          </li>-->
        <!--        </ul>-->
      </div>
      <Select
        :id="product._id"
        :start="cart.filter(el => el.id === product._id)[0].options.count"
        :options="cart.filter(el => el.id === product._id)[0].options"
        @changeCountOption="changeCountOption"
      />
      <span class="list_price">${{ (product.discountPrice||product.price).toFixed(2) }}</span>
      <button class="list_trash" @click="removeFromCart(product._id)">
        <font-awesome-icon :icon="['fas', 'trash']" size="lg" />
      </button>
    </div>
  </section>
</template>
<script>
import Price from '../Product/Price'
import Select from '../Product/ProductOptions/Select'
export default {
  name: 'List',
  components: { Select, Price },
  props: ['data', 'cart'],
  methods: {
    changeCountOption (count, options, id) {
      this.$store.commit('products/cart/update', { id, options: { ...options, count } })
    },
    removeFromCart (id) {
      this.$store.commit('products/cart/remove', id)
    }
    // getOptionsWithOutCount (id) {
    //   const keys = this.cart.filter(el => el.id === id)[0]
    //   if (keys?.options) {
    //     return []
    //   }
    //   return Object.keys(keys).filter(el => el !== 'count')
    //     .map((el) => { return { [el]: this.cart.filter(el => el.id === id)[0].options[el] } }).reduce((obj, el) => Object.assign(obj, el), {})
    // }
  }
}
</script>

<style scoped lang="scss">

    .list{
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 15px;
      border: 1px solid $gray-f2;
      margin: 0 0 auto;
    }

    .list /deep/ .quantity_option{
      margin: 0;
    }

    .list /deep/ .price_regular{
      font-size: 14px;
    }
    .list /deep/ .price{
      margin: 0;
    }
    .list_item /deep/ .select{
      width: 50px;
    }
    .list_item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 7.5px;
    }

    .list_img{
      width: 70px;
      margin-right: 20px;

      img{
        width: 100%;
        height: 100%;
      }
    }
    .list_description{
      width: 120px;
      margin-right: 10px;
      display: flex;
      flex-direction: column;
    }
    .list_title{
      font-size: 14px;
      font-weight: 300;
    }
    .list_trash{
      cursor: pointer;
      min-width: 20px;
      background: transparent;
      border: none;
      color: $black;
      &:hover{
        color: $red;
      }
    }
    .list_price{
      margin: 0 8px;
    }

    .list_options{
      list-style: none;
      padding: 0;
    }
    .list_options-item{
      font-size: 13px;
    }
</style>
