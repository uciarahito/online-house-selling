// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Navbar from './components/Navbar'

import {
  store
} from './store'

Vue.use(Vuex)
Vue.use(require('vue-resource'));
Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.component('navbar', Navbar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})