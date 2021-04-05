<template>
  <BreadCrumbs>
    {{ this.$route.params.category }}
  </Breadcrumbs>
</template>

<script>
import BreadCrumbs from '../../components/BreadCrumbs'
export default {
  name: 'Index',
  components: { BreadCrumbs },
  layout: 'sidebar'
}
</script>

<style scoped>

</style>
