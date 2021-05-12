<template>
  <div class="w100">
    <BreadCrumbs />
    <div>
      <Product :product="product" :current-image="currentImage" :change-image="changeImage" />
      <Tabs :description="product.description" :rating="product.review" />
      <Carousel title="You Might Also Like" :products-id="productsId" />
      <Carousel title="Other products in the same category" :products-id="productsId" />
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import BreadCrumbs from '../../components/BreadCrumbs'
import Product from '../../components/Product/Product'
import Tabs from '../../components/Product/Tabs'

export default {
  name: 'Index',
  components: { Tabs, Product, BreadCrumbs, Carousel },
  layout: 'sidebar',
  data () {
    return {
      product: [],
      currentImage: undefined,
      productsId: [{ id: '6086f2768726b5308c730e30' },
        { id: '6082b7fd107a1c189c4dd47e' },
        { id: '6082b7fb107a1c189c4dd47a' }, { id: '6082bdc7107a1c189c4dd480' },
        { id: '6082b7fc107a1c189c4dd47c' }]
    }
  },
  loading: {
    continuous: true
  },
  watch: {
    $route () {
      this.fetchData()
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    changeImage (img) {
      this.currentImage = img.path[0].currentSrc
    },
    async fetchData () {
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
    }
  },
  head () {
    return {
      title: this.$route.params.index
    }
  }
}
</script>

<style scoped lang="scss">
  .w100{
    width: 100% ;
  }
</style>
