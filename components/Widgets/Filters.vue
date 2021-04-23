<template>
  <div class="filters">
    <section v-for="(filter, name) in filters" :key="name" class="filters_filter">
      <p class="filters_filter-text filters_filter-text__weight-500">
        {{ name.charAt(0).toUpperCase()+name.slice(1) }}
      </p>
      <ul class="filters_filter-list">
        <ListFilter
          v-for="(item, filterVar) in filter"
          :key="filterVar"
          :what="name"
          :name="filterVar"
          class="filters_filter-item filters_filter-text filters_filter-text__weight-400"
        >
          <span>({{ item }})</span>
        </ListFilter>
      </ul>
    </section>
  </div>
</template>

<script>
import ListFilter from './ListFilter'
export default {
  name: 'Filters',
  components: { ListFilter },
  props: ['filters']
}
</script>

<style  lang="scss">
  .filters_filter-text{
    font-size: 14px;
    line-height: 20px;
  }
  .filters_filter-text__weight-500{
    font-weight: 500;
  }
  .filters_filter-text__weight-400{
    font-weight: 400;
  }

  .filters_filter-list{
    width: 100%;
    list-style: none;
    padding: 0 0 0 13px;
  }
  .filters_filter-item{
    display: flex;
    justify-content: space-between;

  }

</style>
