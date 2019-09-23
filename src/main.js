import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Default from './layouts/Default';

Vue.config.productionTip = false

Vue.filter('truncate', function (value, length = 150) {
  if (!value) return value;
  value = value.toString()
  return value.substring(0, length) + '...'
})

Vue.component('default-layout', Default);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
