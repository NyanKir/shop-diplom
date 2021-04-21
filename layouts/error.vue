<template>
  <section class="error">
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
export default {
  props: ['error'],
  head () {
    return {
      title: this.error.statusCode + ' - ' + this.error.message
    }
  }
}
</script>

<style scoped>
.error{
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 20px 0;
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
