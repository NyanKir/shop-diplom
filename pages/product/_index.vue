<template>
  <div class="container">
    <BreadCrumbs />
    <div>
      <Product />
    </div>
  </div>
</template>

<script>
import BreadCrumbs from '../../components/BreadCrumbs'
import Product from '../../components/Product/Product'
export default {
  name: 'Index',
  components: { Product, BreadCrumbs },
  loading: {
    continuous: true
  },
  layout: 'sidebar'
}
</script>

<style scoped>

</style>
