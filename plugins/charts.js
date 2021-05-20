import Vue from 'vue'
import { Line } from 'vue-chartjs'

Vue.component('line-chart', {
  extends: Line,
  props: ['data', 'options'],
  watch: {
    data () {
      this.renderChart(this.data, this.options)
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
})
