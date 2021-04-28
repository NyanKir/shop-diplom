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
      </div>
      <Select :id="product._id" />
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
  props: ['data'],
  methods: {
    removeFromCart (id) {
      this.$store.commit('products/cart/remove', id)
    },
    quantityHandler (whatToDo) {
      if (whatToDo) {
        this.quantity += 1
        return
      }
      if (this.quantity !== 1) {
        this.quantity -= 1
      }
    }
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
    }

    .list /deep/ .quantity_option{
      margin: 0;
    }

    .list /deep/ .price_regular{
      font-size: 14px;
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
</style>
