<template>
  <BreadCrumbs>
    {{ this.$route.params.element }}
  </Breadcrumbs>
</template>

<script>
import BreadCrumbs from '../../../../components/BreadCrumbs'
export default {
  name: 'Element',
  components: { BreadCrumbs },
  layout: 'sidebar'
}
</script>

<style scoped>

</style>
