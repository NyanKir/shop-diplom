<template>
  <div class="container container__flex product">
    <div v-if="product.gallery!==undefined" class="product_slider">
      <img :src="product.gallery[0]" :alt="product.title" class="product_slider-img">
      <Slider :gallery="product.gallery" />
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
  props: ['product']
}
</script>

<style scoped>
  .product_slider{
    min-width: 350px;

  }
  .product_slider-img{
    width: 100%;
    height: 100%;
  }
  @media (max-width: 992px ) {
    .product_slider {
      min-width: 260px;
    }
  }

</style>
