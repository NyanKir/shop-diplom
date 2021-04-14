<template>
  <div class="container__gallery">
    <Product v-for="product in products" :key="product._id" :product="product" />
  </div>
</template>

<script>
import Product from './Product'
export default {
  name: 'GalleryProducts',
  components: { Product },
  loading: {
    continuous: true
  },
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
          query: this.$route.query,
          select: this.$route.path.split('/').slice(-1)[0]
        }
      })
      this.products = res.data
    }

  }
}
</script>

<style scoped lang="scss">
  .container__gallery{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }

</style>
