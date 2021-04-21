<template>
  <div class="sorting">
    <label for="sort" class="sorting_label">
      <span>
        Sort by:
      </span>
      <select id="sort" v-model="selected" name="sort" @change="changeSorting">
        <option value="high">Low to High</option>
        <option value="low">High to Low</option>
        <option value="best">Best sellers</option>
        <option value="relevance">Relevance</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Sorting',
  data () {
    return {
      selected: 'relevance'
    }
  },
  mounted () {
    this.selected = (this.$route.query.sort) ? this.$route.query.sort : 'relevance'
  },
  methods: {
    changeSorting () {
      this.$router.push({ path: this.$route.path, query: { ...this.$route.query, sort: this.selected } })
    }
  }
}
</script>

<style scoped lang="scss">
  .sorting{
    width: 100%;
    padding: 5px 0;
    text-align: right;
  }
  .sorting_label{
    span{
      font-weight: 300;
    }

    select{
      font-family: 'Poppins', sans-serif;
      padding: 5px 6px;
      border: 1px solid $gray;
      width: 120px;
    }
  }

</style>
