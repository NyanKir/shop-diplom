<template>
  <div>
    <Slider />
    <ServiceBlock />
    <Collage />
  </div>
</template>
<script>
import Slider from '@/components/Home/Slider'
import ServiceBlock from '@/components/Home/ServiceBlock'
import Collage from '@/components/Home/Collage'
export default {
  components: { Slider, ServiceBlock, Collage },
  data () {
    return {
      home: 'Home'
    }
  }
}
</script>

<style scoped>

</style>
