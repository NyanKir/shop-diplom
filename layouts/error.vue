<template>
  <section class="error">
    <BreadCrumbs />
    <div>
      <h1 class="title">
        {{ error.statusCode }}
      </h1>
      <h2 class="info">
        {{ error.message }}
      </h2>
    </div>
  </section>
</template>
<script>
import BreadCrumbs from '../components/BreadCrumbs'
export default {
  components: { BreadCrumbs },
  props: ['error'],
  head () {
    console.log(this)
    return {
      title: this.error.statusCode + ' - ' + this.error.message
    }
  }
}
</script>

<style scoped>
.error{
  width: 100%;
}
.title {
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}
.info
{
  text-transform: none;
  font-weight: 300;
  margin: 0;
}

</style>
