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
  data () {
    return {
      productsId: [{ id: '6086f2768726b5308c730e30' }, { id: '6082b7fd107a1c189c4dd47e' }],
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
    .new-products /deep/ .product{
      display: flex;
      justify-content: space-between;
      align-content: center;
      margin: 5px 0;
    }

    .new-products /deep/ .product_img-panel{
      display: none
    }

    .new-products /deep/ .product_img:nth-child(2){
      display: none
    }

    .new-products /deep/ .rating{
      display: none
    }

    .new-products /deep/ .product_discount{
      display: none
    }

    .new-products /deep/ .product_info{
      display: flex;
      flex-direction: column;

    }

    .new-products /deep/ .product_img{
      width: 100%;
      height: auto;
    }
    .new-products /deep/ .product_img-wrapper{
      margin-right: 5px;
      width: 80px;
      min-width: 60px;
    }
</style>
