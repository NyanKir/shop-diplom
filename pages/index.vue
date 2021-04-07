<template>
  <div>
    <h1>Home</h1>
    <form @submit.prevent="createProduct">
      <button type="submit">
        Create Product
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      home: 'Home'
    }
  },
  methods: {
    createProduct () {
      this.$axios.$post('/api/product', JSON.stringify({
        title: 'Curabitur Dolor Nunc',
        price: 23.40,
        sale: 19.12,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula.',
        size: ['sx', 's'],
        color: ['red', 'yellow'],
        categories: 'Silicon Carbide'
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
