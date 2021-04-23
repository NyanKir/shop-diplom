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
  layout: 'sidebar',
  watch: {
    $route () {
      if (this.$route.query.page === undefined) {
        this.$router.push({ path: this.$route.path, query: { ...this.$route.query, page: '1' } })
      }
    }
  },
  created () {
    if (this.$route.query.page === undefined) {
      this.$router.push({ path: this.$route.path, query: { ...this.$route.query, page: '1' } })
    }
  },
  head () {
    return {
      title: this.$route.params.category.charAt(0).toUpperCase() + this.$route.params.category.slice(1)
    }
  }
}
</script>

<style scoped>

</style>
