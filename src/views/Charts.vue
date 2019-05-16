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
        <bar-chart :chart-data="chartBar" :options="options"></bar-chart>
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

// Диапазон
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
      options: {maintainAspectRatio: false}, // отключить автоматическое соотношение сторон
      // первые два графика совместимы между собой по формату данных
      chartLine: {},
      chartBar: {},

      // третий график (круг) требует преобразования
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

        // i - объект валюты
        for (let i of response.data.datasets) {
          // интерполированная строка со случаный цветом для каждой валюты
          // например rgba(150, 120, 200, 0.5), 0.5 - полупрозрачность
          let color = `rgba(${randrange(0, 200)}, ${randrange(0, 200)}, ${randrange(0, 200)}, 0.5)`

          // добавление объект dataset
          this.chartLine.datasets.push({backgroundColor: color, fill: true, ...i})

          // средняя стоимость (average) валюты для Pie (круговой диаграммы)
          let avg = i.data.reduce((a, b) => a+b, 0) / i.data.length

          pieLabels.push(i.label)
          pieData.push(avg)
          pieColors.push(color)
        }

        this.chartBar = this.chartLine // они совместимы

        // круговая диагармма
        this.chartPie = {
          labels: pieLabels, // вместо годов должны быть названия валют
          datasets: [ // вместо множества - всегда один элемент
          {
            backgroundColor: pieColors, // цвета для каждой валюты
            data: pieData // средняя стоимость каждой валюты
          }
          ]
        }
      })
    }
  },
  watch: {
    '$route': {
      // перерисовка графиков при заходе на страницу
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
