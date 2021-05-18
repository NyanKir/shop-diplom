<template>
  <div class="carousel">
    <div class="carousel_head">
      <h3 class="h3 carousel_title">
        {{ title }}
      </h3>
      <div class="carousel_navig">
        <button class="carousel_navig-btn" @click="prev">
          <font-awesome-icon :icon="['fas', 'arrow-left']" size="lg" />
        </button>
        <button class="carousel_navig-btn" @click="next">
          <font-awesome-icon :icon="['fas', 'arrow-right']" size="lg" />
        </button>
      </div>
    </div>
    <div class="carousel_overflow">
      <div ref="line" class="carousel_line" :style="{transform: 'translate('+ -start+'px)'}">
        <Product
          v-for="product in products"
          :key="product._id"
          :product="product"
          class="carousel_el"
          :style="{minWidth: 'calc((100%/'+countInLine+') - 10px )'}"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product/Gallery/Product'

export default {
  name: 'Carousel',
  components: { Product },
  props: {
    title: String,
    productsId: Array,
    countInLine: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      products: [],
      start: 0,
      end: undefined,
      countEl: 0

    }
  },
  async mounted () {
    try {
      const res = await this.$axios({
        method: 'get',
        url: '/api/product',
        params: {
          id: this.productsId
        }
      })
      this.products = res.data
      this.end = this.$refs.line.offsetWidth
      this.countEl = res.data.length - this.countInLine
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    next () {
      if (this.countEl !== 0) {
        this.countEl -= 1
        this.start = this.start + this.$refs.line.firstChild.offsetWidth + 10
      }
    },
    prev () {
      if (this.products.length - this.countInLine !== this.countEl) {
        this.countEl += 1
        this.start = this.start - this.$refs.line.firstChild.offsetWidth - 10
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .carousel{
    margin: 25px 0;
  }
  .carousel_title{
    font-size: 18px;
  }

  .carousel_head{
    display: flex;
    justify-content: space-between;
  }

  .carousel_navig{
    display: flex;
  }

  .carousel_navig-btn{
    border: none;
    cursor: pointer;
    background: transparent;

    &:hover{
      color: $main;
    }
  }

  .carousel_overflow{
    width: 100%;
    overflow: hidden;
    margin-top: 10px;
  }

  .carousel_line{
    width: 100%;
    display: flex;
    transition: .3s;
  }

  .carousel_el{
    margin: 0 5px;
    &:first-child{
      margin: 0 5px 0 0;
    }
    &:last-child{
      margin: 0 0 0 5px;
    }
  }

  .carousel_el{
    //min-width: calc((100%/3) - 10px);
    height: auto;
  }
</style>
