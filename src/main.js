import Vue from 'vue'
import Paginate from 'vuejs-paginate'
import App from './App.vue'
import router from './router'

import Navbar from './components/Navbar'
import Header from './components/Header'
import Navsec from './components/Navsec'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import LineChart from './components/charts/LineChart'
import BarChart from './components/charts/BarChart'
import PieChart from './components/charts/PieChart'

Vue.component('paginate', Paginate)
Vue.component('navbar', Navbar)
Vue.component('myheader', Header)
Vue.component('navsec', Navsec)
Vue.component('productcard', ProductCard)
Vue.component('myfooter', Footer)
Vue.component('line-chart', LineChart)
Vue.component('bar-chart', BarChart)
Vue.component('pie-chart', PieChart)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
