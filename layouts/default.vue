<template>
  <div class="container">
    <Header />
    <Nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.container{
  margin: 0 auto;
  max-width: $pc-size;
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container{
    max-width: 940px;
  }
}
@media (min-width: 1250px){
  .container {
    max-width: $pc-size;
  }
}

@media (max-width: 767px){
  .container {
    max-width: 100%;
    margin: 0 10px;
  }
}

</style>
<script>
import Header from '@/components/Header/Header'

export default {
  components: { Header }
}
</script>
