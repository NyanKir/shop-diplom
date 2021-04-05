<template>
  <div class="container container__screen">
    <Header />
    <section class="shop">
      <Aside />
      <Nuxt />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss">
.login-form{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}
.form{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-form_label{
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 450px;
  margin-bottom: 20px;
}

.shop{
  display: flex;
}

</style>
