<template>
  <div class="container__gallery">
    <div v-for="product in products" :key="product.title" class="product">
      <div class="product_img-wrapper">
        <NuxtLink to="/product/he">
          <img :src="product.image" :alt="product.title" class="product_img">
        </NuxtLink>
      </div>
      <div class="product_info">
        <div class="product_rating">
          <span
            v-for="[index,star] of getStarts(product.rating).entries()"
            :key="'star'+index"
            :class=" {product_star__checked:star}"
            class="product_star"
          >
            <font-awesome-icon :icon="['fa', 'star']" size="xs" />
          </span>
        </div>
        <h3 class="h3">
          <NuxtLink to="/product/he" class="link">
            <span>{{ product.title }}</span>
          </NuxtLink>
        </h3>
        <p>${{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryProducts',
  data () {
    return {
      products: []
    }
  },
  watch: {
    $route () {
      this.fetchData()
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      const res = await this.$axios({
        method: 'get',
        url: '/api/products',
        params: {
          query: this.$route.query
        }
      })
      this.products = res.data
    },
    getStarts (rating) {
      const arr = Array.from({ length: 5 }, i => false).fill(true, 0, rating)
      return arr
    }
  }
}
</script>

<style scoped lang="scss">
  .container__gallery{
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-around;
  }
  .product{
    margin: 10px;
  }
  .product_img{
    width: 100%;
    max-width: 245px;
  }
  .product_img-wrapper{
    margin-bottom: 5px;
  }
  .product_star{
    color:$gray;
    margin: 0 1px;
  }
  .product_star__checked{
    color: #FFC43B;
  }
  .link{
    font-weight: 400;
  }

</style>
