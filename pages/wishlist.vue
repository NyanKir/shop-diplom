<template>
  <div class="container">
    <BreadCrumbs>
      My Wishlist
    </BreadCrumbs>
    <div v-if="data" class="gallery_container">
      <Product v-for="product in data" :key="product._id" :product="product" />
    </div>
    <div v-else class="container_nothing">
      <span>
        There are no more items in your wishlist
      </span>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product/Gallery/Product'
import BreadCrumbs from '../components/BreadCrumbs'
export default {
  name: 'Wishlist',
  layout: 'sidebar',
  components: { Product, BreadCrumbs },
  data () {
    return {
      data: undefined
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      try {
        const res = await this.$axios({
          method: 'get',
          url: '/api/product',
          params: {
            id: this.$store.state.products.wish.wishes
          }
        })

        this.data = res.data
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .container_nothing{
    padding: 10px;
    border: 1px solid $gray-f2;
    margin: 0 0 auto 0;
    width: 100%;
    font-size: 13px;
  }

  .gallery_container{
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  @media (max-width: 580px) {
    .gallery_container {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
