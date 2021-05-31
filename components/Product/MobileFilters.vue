<template>
  <div v-if="onPage">
    <WidgetWrap title="Price">
      <PriceSlider />
    </WidgetWrap>
    <WidgetWrap title="Filters">
      <Filters :filters="WidgetFilters" />
    </WidgetWrap>
  </div>
</template>

<script>
import WidgetWrap from '../Widgets/WidgetWrap'
import Filters from '../Widgets/Filters'
import PriceSlider from '../Widgets/PriceSlider'
export default {
  name: 'MobileFilters',
  components: { WidgetWrap, Filters, PriceSlider },
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

<style scoped>

</style>
