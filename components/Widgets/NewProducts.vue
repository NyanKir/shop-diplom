<template>
  <div class="new-products">
    <Product v-for="product in products" :key="product._id" :product="product" />
  </div>
</template>

<script>
import Product from '~/components/Product/Gallery/Product'

export default {
  name: 'NewProducts',
  components: { Product },
  props: ['productsId'],
  data () {
    return {
      products: []
    }
  },
  async mounted () {
    try {
      const res = await this.$axios({
        method: 'get',
        url: '/api/product',
        params: {
          id: this.productsId
        }
      })
      this.products = res.data
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped lang="scss">
    .new-products ::v-deep .product{
      display: flex;
      justify-content: space-between;
      align-content: center;
      margin: 5px 0;
    }

    .new-products ::v-deep .product_img-panel{
      display: none
    }

    .new-products ::v-deep .product_img:nth-child(2){
      display: none
    }

    .new-products ::v-deep .rating{
      display: none
    }

    .new-products ::v-deep .product_discount{
      display: none
    }

    .new-products ::v-deep .product_info{
      display: flex;
      flex-direction: column;

    }

    .new-products ::v-deep .product_img{
      width: 100%;
      height: auto;
    }
    .new-products ::v-deep .product_img-wrapper{
      margin-right: 5px;
      width: 80px;
      min-width: 60px;
    }
</style>
