<template>
  <div>
    <BreadCrumbs>
      Wishlist
    </BreadCrumbs>

    <List :data="data" />
    <aside class="aside">
      <div>Aside</div>
    </aside>
  </div>
</template>

<script>
import BreadCrumbs from '../components/BreadCrumbs'
import List from '../components/Cart/List'
export default {
  name: 'Wishlist',
  components: { List, BreadCrumbs },
  computed: {
    data () {
      return this.$store.state.products.wish.wishes
    }
  }
}
</script>

<style scoped>

</style>
