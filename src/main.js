import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.axios=axios;
axios.defaults.baseURL = 'http://www.weiypself.top:3000/';

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
