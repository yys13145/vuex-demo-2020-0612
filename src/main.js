import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  }
})
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
