<template>
  <div class="container">
    <BreadCrumbs>
      {{ this.$route.params.category }}
    </Breadcrumbs>
    <GalleryProducts />
  </div>
</template>

<script>
import BreadCrumbs from '../../components/BreadCrumbs'
import GalleryProducts from '../../components/Product/Gallery/GalleryProducts'
export default {
  name: 'Category',
  components: { GalleryProducts, BreadCrumbs },
  layout: 'sidebar'
}
</script>

<style scoped>

</style>
