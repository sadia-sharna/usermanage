import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery/dist/jquery.min.js';
import Popper from '@popperjs/core/dist/umd/popper.min.js';
import Bootstrap from 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import VueLocalStorage from 'vue-localstorage';
Vue.use(VueLocalStorage);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
