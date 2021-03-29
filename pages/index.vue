<template>
  <form action="" method="post" @submit.prevent="fetchData">
    <button type="submit">
      Go
    </button>
  </form>
</template>
<script>
export default {
  data () {
    return {
      home: 'Home'
    }
  },
  methods: {
    async fetchData () {
      try {
        const respone = await this.$axios.$post('api/signin', JSON.stringify({

          email: 'mAr@gmail.com',
          password: 'Aa12331'

        }), {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        localStorage.setItem('token', respone.token)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
