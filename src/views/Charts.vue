<template>
  <div>
    <navbar></navbar>
    <myheader></myheader>
    <navsec></navsec>
    <div class="container">
      <div class="chart">
        Linear dynamic
        <line-chart :chart-data="chartLine" :options="options"></line-chart>
      </div>
      <div class="chart">
        Bar
        <bar-chart :chart-data="chartLine" :options="options"></bar-chart>
      </div>
      <div class="chart">
        Average cost
        <pie-chart :chart-data="chartPie" :options="options"></pie-chart>
      </div>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import axios from 'axios'

function randrange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


export default {
  name: 'Charts',
  created () {
    this.render()
  },
  data () {
    return {
      options: {maintainAspectRatio: false},
      chartLine: null,
      chartPie: {}
    }
  },
  methods: {
    render () {
      axios.get('currency.json').then(response => {
        this.chartLine = {
          labels: response.data.labels,
          datasets: []
        }
        
        let pieLabels = []
        let pieData = []
        let pieColors = []

        for (let i of response.data.datasets) {
          let color = `rgba(${randrange(0, 200)}, ${randrange(0, 200)}, ${randrange(0, 200)}, 0.5)`
          let avg = i.data.reduce((a, b) => a+b, 0) / i.data.length

          pieLabels.push(i.label)
          pieData.push(avg)
          pieColors.push(color)
          this.chartLine.datasets.push({backgroundColor: color, fill: true, ...i})
        }
        console.log(pieLabels)
        this.chartPie = {
          labels: pieLabels,
          datasets: [
          {
            backgroundColor: pieColors,
            data: pieData
          }
          ]
        }
      })
    }
  },
  watch: {
    '$route': {
      handler () {
        this.render()
      },
      immediate: true
    }
  }
}
</script>

<style>
  .chart {
    max-width: 600px; 
    margin: 150px auto;
  }
</style>
