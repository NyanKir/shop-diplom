<template>
  <div class="container container__screen">
    <Header />
    <Nuxt />
  </div>
</template>

<style lang="scss" >
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container__screen{
  margin: 0 auto;
  max-width: $pc-size;
}

@media (min-width: 768px) {
  .container__screen {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container__screen{
    max-width: 940px;
  }
}
@media (min-width: 1250px){
  .container__screen {
    max-width: $pc-size;
  }
}

@media (max-width: 767px){
  .container__screen {
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
