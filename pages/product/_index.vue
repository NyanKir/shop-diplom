<template>
  <div class="container">
    <BreadCrumbs />
    <div>
      <Product :product="product" />
    </div>
  </div>
</template>

<script>
import BreadCrumbs from '../../components/BreadCrumbs'
import Product from '../../components/Product/Product'
export default {
  name: 'Index',
  components: { Product, BreadCrumbs },
  data () {
    return {
      product: {}
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
    } catch (e) {
      console.error(e)
    }
  },
  loading: {
    continuous: true
  },

  layout: 'sidebar'

}
</script>

<style scoped>

</style>
