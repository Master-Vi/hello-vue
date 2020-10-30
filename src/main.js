import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.prototype.axios = axios;

// 类似于后端的拦截器
router.beforeEach((to, from, next) => {
  let isLogin = sessionStorage.getItem("isLogin");
  if (to.path === '/logout') {
    sessionStorage.clear();
    next({path: '/login'});
  } else if (to.path === '/login') {
    if (isLogin != null) {
      next({path: '/main'});
    }
  } else if (isLogin === null) {
    next({path: '/login'});
  }
  next();
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
