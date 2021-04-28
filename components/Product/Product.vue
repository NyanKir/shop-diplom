<template>
  <div v-if="product.review !==undefined" class="product">
    <div v-if="currentImage!==undefined" class="product_slider">
      <img :src="currentImage" :alt="product.title" class="product_img">
      <Slider :gallery="product.gallery" @changeImage="changeImage" />
    </div>
    <Info :product="product" />
  </div>
</template>

<script>
import Slider from './Slider'
import Info from './Info'
export default {
  name: 'Product',
  components: { Info, Slider },
  props: ['product', 'currentImage', 'changeImage'],
  computed: {
    getRating () {
      const result = this.product.review.reduce((acc, el) => {
        return acc + el.rating
      }, 0)
      return (Math.round(result / this.product.review.length) > 5) ? 5 : Math.round(result / this.product.review.length)
    }
  }

}
</script>

<style scoped>
  .product{
    display: flex;
    width: 100%;
    margin-top: 20px;
  }
  .product_slider{
    min-width: 360px;
    height:auto;
  }
  .product_img{
    width: 100%;
    height:auto;
  }

  @media (max-width: 992px ) {
    .product_slider {
      min-width: 280px;
    }
  }
  @media (max-width: 602px ) {
    .product {
      flex-direction: column;
    }
    .product_slider{
      min-width: 0;
      max-width: 350px;
      width: 100%;
      margin: 0 auto 20px auto;
    }
    .info__indent{
      margin: 0;
    }
  }

</style>
