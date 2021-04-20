<template>
  <div>
    <div class="container container__screen">
      <Header />
      <section class="container container__flex">
        <Aside />
        <Nuxt />
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer/Footer'
export default {
  name: 'Sidebar',
  components: { Footer }
}
</script>

<style lang="scss" scoped>
</style>
