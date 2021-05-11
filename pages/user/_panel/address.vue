<template>
  <section class="container">
    <BreadCrumbs>
      My Address
    </BreadCrumbs>
    <FormAddress />
  </section>
</template>

<script>
import FormAddress from '@/components/User/FormAddress'

export default {
  name: 'Address',
  layout: 'sidebar',
  components: { FormAddress },
  head () {
    return {
      title: 'My address'

    }
  }
}
</script>

<style scoped>

</style>
