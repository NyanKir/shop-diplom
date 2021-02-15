<template>
  <aside class="aside">
    <h4 class="h4">
      Shop By Category
    </h4>
    <ul class="menu_list">
      <DropDownItem v-for="(item,index) in links" :key="index" :item="item" />
    </ul>
  </aside>
</template>

<script>
import DropDownItem from '@/components/Header/MobileMenu/DropDownItem'
export default {
  name: 'Aside',
  components: { DropDownItem },
  computed: {
    links () {
      return this.$store.state.menu.links
    }
  }
}
</script>

<style scoped>
  .h4{
    padding: 15px 0;
    margin-left: 13px;
  }
  .menu_list{
    flex-direction: column;
  }
  .aside{
    margin-right: 10px;
    width: 25%;
    height: 100%;
  }
  @media (max-width:994px ) {
    .aside{
      width: 35%;
    }
  }
</style>
