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
      links: this.$store.state.menu.links
    }
  },
  watch: {
    $route () {
      const link = this.$store.state.menu.links
      for (const index in link) {
        if (this.$route.path.includes(link[index].href)) {
          this.links = { 0: Object.entries(link).splice(index, 1)[0][1] }
          return
        }
      }
    }
  }

}
</script>

<style scoped>
  .menu_list{
    flex-direction: column;
  }
  .aside{
    margin-right: 20px;
    width: 25%;
    height: 100%;
  }
  @media (max-width:994px ) {
    .aside{
      width: 35%;
    }
  }
</style>
