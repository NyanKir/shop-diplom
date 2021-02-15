<template>
  <div class="container">
    <Header />
    <Nuxt />
  </div>
</template>

<style lang="scss">
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
