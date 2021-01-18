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
      const respone = await this.$axios.$post('api/user', JSON.stringify({
        gender: 'Mr',
        fname: 'Kirill',
        lname: 'Sytnyanskiy',
        bdate: '21.10.2001',
        email: 'm@gmail.com',
        password: '123321'

      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log(respone)
    }
  }
}
</script>

<style scoped>
h1 {
  color: gray;

}

</style>
