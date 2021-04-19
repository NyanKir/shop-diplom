<template>
  <div class="container">
    <BreadCrumbs />
    <div class="container">
      <Product :product="product" :current-image="currentImage" :change-image="changeImage" />
      <Tabs :description="product.description" :rating="product.review" details="nothing" />
    </div>
  </div>
</template>

<script>
import BreadCrumbs from '../../components/BreadCrumbs'
import Product from '../../components/Product/Product'
import Tabs from '../../components/Product/Tabs'
export default {
  name: 'Index',
  components: { Tabs, Product, BreadCrumbs },
  loading: {
    continuous: true
  },
  data () {
    return {
      product: [],
      currentImage: undefined
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
  },
  layout: 'sidebar'
}
</script>

<style scoped>

</style>
