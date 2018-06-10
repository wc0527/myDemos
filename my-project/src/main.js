// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Utils from './common/utils'
import './common/global'

Vue.config.productionTip = false
Vue.prototype.$utils=Utils
Vue.prototype.bus=new Vue;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
  },
  router: router,
  render: h => h(App),
})
