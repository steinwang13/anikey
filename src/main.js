// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
"use strict";
import Vue from 'vue';
import App from './App';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from 'vue-router';
import VueCarousel from '@chenfengyuan/vue-carousel';
import Axios from 'axios';

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueCarousel);
Vue.prototype.$http = Axios;
// Axios.defaults.baseURL = "http://localhost:3000/";

import Home from './components/Home';
import Thread from './components/Thread';
import Write from './components/Write';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/home/',
      component: Home
    },
    {
      path: '/thread/',
      component: Thread
    },
    {
      path: '/write/',
      component: Write
    },
    {
      path: '*',
      redirect: '/home/'
    }
  ]
});

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
