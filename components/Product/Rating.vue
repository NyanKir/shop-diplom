<template>
  <div class="rating">
    <span
      v-for="[index,star] of getStarts(rating).entries()"
      :key="'star'+index"
      :class=" {rating_star__checked:star}"
      class="rating_star"
    >
      <font-awesome-icon :icon="['fa', 'star']" size="xs" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: ['rating'],
  methods: {
    getStarts (rating) {
      const arr = Array.from({ length: 5 }, i => false).fill(true, 0, rating)
      return arr
    }
  }
}
</script>

<style scoped lang="scss">
.rating_star{
  color:$gray;
  margin: 0 1px;
}
.rating_star__checked{
  color: #FFC43B;
}
</style>
