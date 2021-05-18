<template>
  <div>
    <div class="container">
      <Header />
      <Notice />
      <section class="container_section">
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
  components: { Footer },
  loading: true
}
</script>

<style scoped>
.container_section{
  display: flex;
}
</style>
