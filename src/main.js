// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import VueCarousel from '@chenfengyuan/vue-carousel'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueCarousel)

import Home from './components/Home'
import Threads from './components/Threads'
import Write from './components/Write'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/threads',
      component: Threads
    },
    {
      path: '/write',
      component: Write
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
