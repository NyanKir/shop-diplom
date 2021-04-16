<template>
  <div class="container container__flex product">
    <div v-if="currentImage!==undefined" class="product_slider">
      <img :src="currentImage" :alt="product.title" class="product_img">
      <Slider :gallery="product.gallery" @changeImage="changeImage" />
    </div>
    <Info
      :review="product.review"
      :title="product.title"
      :price="product.price"
      :description="product.description"
      :sale="product.sale"
    />
  </div>
</template>

<script>
import Slider from './Slider'
import Info from './Info'
export default {
  name: 'Product',
  components: { Info, Slider },
  data () {
    return {
      currentImage: undefined,
      product: []
    }
  },
  async mounted () {
    try {
      const res = await this.$axios({
        method: 'get',
        url: '/api/product',
        params: {
          id: this.$route.query.id
        }
      })
      this.product = res.data[0]
      this.currentImage = res.data[0].gallery[0]
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    changeImage (img) {
      this.currentImage = img.path[0].currentSrc
    }
  }
}
</script>

<style scoped>
  .product{
    margin-top: 20px;
  }
  .product_slider{
    min-width: 360px;
    height:auto;
  }
  .product_img{
    max-width:100%;
    width: 100%;
    height:auto;
  }

  @media (max-width: 992px ) {
    .product_slider {
      min-width: 280px;
    }
  }

</style>
