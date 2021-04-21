<template>
  <aside class="aside">
    <WidgetWrap title="Category">
      <CategorySelector :links="links" />
    </WidgetWrap>
    <WidgetWrap title="Price">
      <PriceSlider />
    </WidgetWrap>
  </aside>
</template>

<script>
import CategorySelector from './Widgets/CategorySelector'
import PriceSlider from './Widgets/PriceSlider'
import WidgetWrap from './Widgets/WidgetWrap'
export default {
  name: 'Aside',
  components: { WidgetWrap, PriceSlider, CategorySelector },
  data () {
    return {
      links: this.$store.state.modules.menu.links
    }
  },
  // исправьить
  created () {
    const link = this.$store.state.modules.menu.links
    for (const index in link) {
      if (this.$route.path.includes(link[index].href)) {
        this.links = { 0: Object.entries(link).splice(index, 1)[0][1] }
        return
      }
    }
  }

}
</script>

<style scoped>

  .aside{
    margin-right: 20px;
    width: 100%;
    max-width: 250px;
    height: 100%;
  }

  @media (max-width: 992px ) {
    .aside {
      max-width: 180px;
    }
  }
  @media (max-width: 768px) {
    .aside {
      display: none;
    }
  }
</style>
