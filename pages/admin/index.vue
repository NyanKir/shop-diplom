<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="grey darken-3">
        <h3>Dashboard</h3>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <line-chart :data="data" :options="options" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Index',

  layout: 'admin',
  loading: false,
  data: () => ({
    data: null,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }),

  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      const res = await this.$axios.$get('/api/sales')
      const data = {
        labels: [0, ...res.data.map(el => el.price)],
        datasets: [{
          label: 'Sales',
          data: [0, ...res.data.map(el => el.price)],
          fill: false,
          borderColor: 'rgb(75,192,91)',
          tension: 0.1
        }]

      }
      console.log(data)

      this.data = data
    }
  }
}
</script>

<style scoped>
  .container{
    max-width: 100%;
  }
</style>
