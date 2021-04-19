<template>
  <div class="product">
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
  props: ['product', 'currentImage', 'changeImage']

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
