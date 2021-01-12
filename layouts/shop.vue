<template>
  <div class="container">
    <Header />
    <section>
      <Aside />
      <Nuxt />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Shop'
}
</script>

<style scoped>
section{
  display: flex;
}
</style>
