<template>
  <div class="gallery">
    <div v-if="products!=null">
      <div class="wrap">
        <button class="btn btn__filters " @click="showMenu=!showMenu">
          {{ showMenu?'Close':'Filters' }}
        </button>
        <Sorting />
      </div>
      <transition name="backInTop">
        <MobileFilters v-show="showMenu" class="mobile-filters" />
      </transition>
      <ActiveFilters v-if="haveQueries" />
      <div class="gallery_container">
        <Product v-for="product in productsOnPage" :key="product._id" :product="product" />
      </div>
      <Pagination :pages="countPages" />
    </div>
    <Error v-else :error="{statusCode:'404',message: 'Sorry, but there are no products on this page.'}" />
  </div>
</template>

<script>
import Error from '../../../layouts/error'
import MobileFilters from '../MobileFilters'
import Product from './GalleryProduct'
import Pagination from './Pagination'
import Sorting from './Sorting'
import ActiveFilters from './ActiveFilters'
export default {
  name: 'GalleryProducts',
  components: { MobileFilters, ActiveFilters, Error, Sorting, Pagination, Product },
  loading: {
    continuous: true
  },
  data () {
    return {
      products: [],
      maxProducts: 6,
      countPages: 0,
      forbiddenQueries: ['sort', 'page', 'price'],
      showMenu: false
    }
  },
  computed: {
    productsOnPage () {
      function paginate (array, pageSize, pageNumber) {
        return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
      }

      return paginate(this.products, this.maxProducts, this.$route.query.page)
    },
    haveQueries () {
      return Object.keys(this.$route.query).some(el => !this.forbiddenQueries.includes(el))
    }
  },
  watch: {
    $route () {
      this.fetchData()
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      try {
        const res = await this.$axios({
          method: 'get',
          url: '/api/products',
          params: {
            query: { ...this.$route.query, price: (this.$route.query.price) ? this.$route.query.price : 100000 },
            select: this.$route.path.split('/').slice(-1)[0]
          }
        })
        if (!res.data.length) {
          this.products = null
          return
        }
        this.products = res.data
        this.countPages = Math.ceil(res.data.length / this.maxProducts)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .gallery{
    width: 100%;
  }
  .gallery_container{
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
  .mobile-filters{
    display: none;
  }

  .btn__filters{
    margin: 0;
    display: none;
  }
  .wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  //.mobile-filters
  @media (max-width: 768px) {
    .mobile-filters{
      display: flex;
      flex-direction: column;
    }
    .btn__filters{
      display: block;
    }
  }
  @media (max-width: 580px) {
    .gallery_container {
      grid-template-columns: 1fr 1fr;
    }

  }

</style>
