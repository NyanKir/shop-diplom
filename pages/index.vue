<template>
  <div>
    <Slider />
    <ServiceBlock />
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab_button', { active: currentTab === tab }]"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>
      <Carousel :products-id="productsId" :count-in-line="4" class="carousel__margin-0" />
    </div>
    <Collage />
    <Carousel title="Special Products" :products-id="productsId" :count-in-line="4" />
    <Carousel title="From the Blog" :count-in-line="3" blog />
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
      home: 'Home',
      productsId: [
        { id: '6086f2768726b5308c730e30' },
        { id: '6082b7fd107a1c189c4dd47e' },
        { id: '6082b7fb107a1c189c4dd47a' },
        { id: '6082bdc7107a1c189c4dd480' },
        { id: '6082b7fc107a1c189c4dd47c' }],
      currentTab: 'Featured',
      tabs: ['Featured', 'New Arrivals', 'Bestseller']
    }
  },
  computed: {
    currentTabComponent () {
      return 'Tab' + this.currentTab
    },
    getCurrentTabProps () {
      return this.$props[this.currentTab.toLowerCase()]
    }
  },
  head () {
    return {
      title: 'Home'

    }
  }
}
</script>

<style scoped lang="scss">
  .tabs{
    margin: 30px 0 0 0;
  }
  .carousel__margin-0{
    margin: 0;
  }
  .tab_button{
    background: transparent;
    border: none;
    margin: 0 10px;
    color: $b-22;
    font-size: 19px;
    font-weight: 600;
    cursor: pointer;
  }

  .active{
    color:$main
  }
</style>
