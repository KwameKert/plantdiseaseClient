import Vue from 'vue'
import App from './App.vue'
import {routes} from './routes';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


const router = new VueRouter({
  routes,
  mode:'history'
  });
  
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//using vuerouter
Vue.use(VueRouter)

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
