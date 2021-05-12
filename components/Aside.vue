<template>
  <aside class="aside">
    <WidgetWrap v-if="onPage" title="Category">
      <CategorySelector :links="links" />
    </WidgetWrap>
    <WidgetWrap v-if="onPage" title="Price">
      <PriceSlider />
    </WidgetWrap>
    <WidgetWrap v-if="onPage" title="Filters">
      <Filters :filters="WidgetFilters" />
    </WidgetWrap>
    <WidgetWrap>
      <Banner />
    </WidgetWrap>
    <WidgetWrap title="New Products">
      <NewProducts :products-id="productsId" />
    </WidgetWrap>
  </aside>
</template>

<script>
import CategorySelector from './Widgets/CategorySelector'
import PriceSlider from './Widgets/PriceSlider'
import WidgetWrap from './Widgets/WidgetWrap'
import Filters from './Widgets/Filters'
import Banner from './Widgets/Banner'
import NewProducts from './Widgets/NewProducts'

export default {
  name: 'Aside',
  components: { Banner, WidgetWrap, Filters, PriceSlider, CategorySelector, NewProducts },
  data () {
    return {
      links: this.$store.state.menu.links,
      WidgetFilters: undefined,
      productsId: [{ id: '6086f2768726b5308c730e30' }, { id: '6082b7fd107a1c189c4dd47e' }]
    }
  },
  computed: {
    onPage () {
      return this.$route.path.includes('category')
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
    const link = this.$store.state.menu.links
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
        if (this.$route.path.includes('category')) {
          const res = await this.$axios({
            method: 'get',
            url: '/api/categories',
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
                    myObj[name][childName].count = acc[name][childName].count + el[name][childName].count
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
            if (Object.keys(myObj).length === 0) {
              return acc
            }
            return { ...myObj }
          }, {})
        }
      } catch (e) {
        console.error(e)
      }
    }
  }

}
</script>

<style>

  .aside{
    margin-right: 20px;
    width: 100%;
    max-width: 250px;
    height: 100%;
  }
  .aside >>> .menu_list-item{
    margin: 0;
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
