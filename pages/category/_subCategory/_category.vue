<template>
  <div class="container">
    <BreadCrumbs>
      {{ this.$route.params.category }}
    </Breadcrumbs>
    <GalleryProducts />
  </div>
</template>

<script>
import BreadCrumbs from '../../../components/BreadCrumbs'
import GalleryProducts from '../../../components/Product/GalleryProducts'

export default {
  name: 'Index',
  components: { BreadCrumbs, GalleryProducts },
  layout: 'sidebar'
}
</script>

<style scoped>

</style>
