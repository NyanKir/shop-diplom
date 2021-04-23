<template>
  <aside class="aside">
    <WidgetWrap title="Category">
      <CategorySelector :links="links" />
    </WidgetWrap>
    <WidgetWrap title="Price">
      <PriceSlider />
    </WidgetWrap>
    <WidgetWrap title="Filters">
      <Filters :filters="WidgetFilters" />
    </WidgetWrap>
  </aside>
</template>

<script>
import CategorySelector from './Widgets/CategorySelector'
import PriceSlider from './Widgets/PriceSlider'
import WidgetWrap from './Widgets/WidgetWrap'
import Filters from './Widgets/Filters'
export default {
  name: 'Aside',
  components: { Filters, WidgetWrap, PriceSlider, CategorySelector },
  data () {
    return {
      links: this.$store.state.modules.menu.links,
      WidgetFilters: undefined
    }
  },
  watch: {
    $route () {
      this.fetchData()
    }
  },
  mounted () {
    this.fetchData()
  },
  // исправить
  created () {
    const link = this.$store.state.modules.menu.links
    for (const index in link) {
      if (this.$route.path.includes(link[index].href)) {
        this.links = { 0: Object.entries(link).splice(index, 1)[0][1] }
        return
      }
    }
  },
  methods: {
    async fetchData () {
      try {
        const res = await this.$axios({
          method: 'get',
          url: '/api/getCategories',
          params: {
            select: this.$route.path.split('/').slice(-1)[0]
          }
        })

        this.WidgetFilters = res.data.allFilters.reduce((acc, el, i) => {
          let myObj = {}

          for (const name in el) {
            if (Object.prototype.hasOwnProperty.call(acc, name)) {
              for (const childName in el[name]) {
                if (Object.prototype.hasOwnProperty.call(acc[name], childName)) {
                  if (!myObj[name]) {
                    myObj = { ...myObj, [name]: acc[name] }
                  }
                  myObj[name][childName] = acc[name][childName] + el[name][childName]
                } else {
                  if (!myObj[name]) {
                    myObj = { ...myObj, [name]: acc[name] }
                  }

                  myObj[name][childName] = el[name][childName]
                }
              }
            } else {
              myObj[name] = el[name]
            }
          }
          return { ...myObj }
        }, {})
      } catch (e) {
        console.error(e)
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
