<template>
  <div class="product">
    <div class="product_img-wrapper">
      <NuxtLink :to="'/product/'+product.title+'?id='+product._id">
        <img :src="product.gallery[0]" :alt="product.title" class="product_img">
        <img :src="product.gallery[1]" :alt="product.title+'2'" class="product_img">
      </NuxtLink>
      <div class="product_img-panel">
        <button class="product_img-panel-element">
          <font-awesome-icon :icon="['fas', 'cart-plus']" size="lg" />
        </button>
        <button class="product_img-panel-element">
          <font-awesome-icon :icon="['fas', 'heart']" size="lg" />
        </button>
      </div>
    </div>
    <div class="product_info">
      <Rating :rating="product.rating" />

      <NuxtLink :to="'/product/'+product.title+'?id='+product._id" class="link fnt-weg-400">
        <span>{{ product.title }}</span>
      </NuxtLink>
      <p class="product_price">
        ${{ product.price }}
      </p>
    </div>
  </div>
</template>

<script>
import Rating from '../Rating'
export default {
  name: 'Product',
  components: { Rating },
  props: ['product']
}
</script>

<style scoped lang="scss">
  .product_img-wrapper{
    overflow: hidden;
    position: relative;
    width: 100%;
    max-width: 245px;
    height: 100%;
    max-height: 300px;

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
    flex: 1 1 30%;
    margin: 10px;
  }

  .product_img{
    width: 100%;
    height: 100%;

    &:nth-child(2){
      background: red;
      right: 0;
      top: 0;
      bottom: 0;
      left: 0;
      position: absolute;
      opacity: 0;
      transition: .3s;
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
      background: $main;
    }

    &:active{
      transition: 10ms;
      background: black;
    }
  }
  .product_price{
    font-size: 14px;
  }
</style>
