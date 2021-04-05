<template>
  <aside class="aside">
    <h4 class="h4">
      Shop By Category
    </h4>
    <CategorySelector />
  </aside>
</template>

<script>
import CategorySelector from './Widgets/CategorySelector'
export default {
  name: 'Aside',
  components: { CategorySelector }

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
