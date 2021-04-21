<template>
  <div v-if="pages " class="pagination">
    <ul class="pagination_elements">
      <NuxtLink :to="{query:{...this.$route.query,page: parseInt(this.$route.query.page)-1 }}">
        <li v-if="parseInt(this.$route.query.page) !== 1" class="pagination_element">
          <font-awesome-icon :icon="['fas', 'chevron-left']" size="xs" />
        </li>
      </NuxtLink>

      <NuxtLink v-for="page in pages" :key="page" :to="getNormalPath(page)" class="link">
        <li class="pagination_element" :class="setDisabledPage(page)">
          {{ page }}
        </li>
      </NuxtLink>
      <NuxtLink :to="{query:{...this.$route.query,page: parseInt(this.$route.query.page)+1 }}">
        <li v-if="parseInt(this.$route.query.page)!==pages" class="pagination_element">
          <font-awesome-icon :icon="['fas', 'chevron-right']" size="xs" />
        </li>
      </NuxtLink>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['pages'],
  methods: {
    setDisabledPage (page) {
      if (this.$route.query.page === undefined && page === 1) {
        return { pagination_element__disabled: true }
      }
      return { pagination_element__disabled: page === parseInt(this.$route.query.page) }
    },
    getNormalPath (page) {
      return { query: { ...this.$route.query, page } }
    }

  }
}
</script>

<style scoped lang="scss">
.link{
  color: $white;
}
  .pagination{
    display: flex;
    margin: 10px 10px 10px 0;
  }
  .pagination_elements{
    display: flex;
    list-style: none;
    padding: 0;
  }
  .pagination_element{
    cursor: pointer;
    font-size: 13px;
    color: $white;
    width: 35px;
    height: 35px;
    background: $main;
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
      background: $black;
    }
  }

  .pagination_element__disabled{
    background: $black;
    cursor: not-allowed;

    .link{
      cursor: not-allowed;
    }
  }
</style>
