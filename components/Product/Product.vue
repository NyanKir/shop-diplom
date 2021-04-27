<template>
  <div v-if="product.review !==undefined" class="product">
    <div v-if="currentImage!==undefined" class="product_slider">
      <img :src="currentImage" :alt="product.title" class="product_img">
      <Slider :gallery="product.gallery" @changeImage="changeImage" />
    </div>
    <Info
      :id="product._id"
      :rating="getRating"
      :title="product.title"
      :price="product.price"
      :description="product.description"
      :discount="product.discountPrice"
    />
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
