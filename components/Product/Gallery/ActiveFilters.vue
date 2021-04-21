<template>
  <div class="active-filters">
    <ul class="active-filters_list">
      <h3 class="active-filters_title h3">
        Active Filters
      </h3>
      <li v-for="filter in getAllFilters" :key="filter.index" class="active-filters_item">
        <span class="active-filters_item-text">{{ filter.type }} : {{ filter.data }}</span>
        <button type="button" class="active-filters_item-btn">
          <font-awesome-icon :icon="['fas', 'times']" size="xs" @click="removeQuery(filter.type)" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ActiveFilters',
  data () {
    return {
      forbiddenValues: ['sort', 'page', 'price']
    }
  },
  computed: {
    getAllFilters () {
      const keys = Object.keys(this.$route.query).filter(r => !this.forbiddenValues.includes(r))
        .map((el, i) => {
          return {
            index: i,
            type: el,
            data: this.$route.query[el]
          }
        })
      return keys
    }
  },
  methods: {
    removeQuery (type) {
      const query = Object.assign({}, this.$route.query)
      delete query[type]
      this.$router.replace({ query })
    }
  }
}
</script>

<style scoped lang="scss">
  .active-filters{
    width: 100%;
    display: flex;
    background: $gray-f2;
    padding: 5px;
  }
  .active-filters_list{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .active-filters_item{
    display: flex;
    align-items: baseline;
    margin:  5px;
    background: $white;
    padding: 6px 10px;
    text-align: center;
  }
  .active-filters_item-text{
    font-size: 13px;
    font-weight: 300;
  }
  .active-filters_title{
    padding: 6px 10px;
    font-size: 15px;
    font-weight: 600;
  }
  .active-filters_item-btn{
    margin-left: 5px;
    background: transparent;
    border: none;
    text-align: center;
    width: 10px;
    height: auto;
    cursor: pointer;
    font-size: 15px;
  }
</style>
