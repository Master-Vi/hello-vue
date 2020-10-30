import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/Login'
import Main from '../view/Main'
import UserInfo from '../view/user/UserInfo'
import UserList from '../view/user/UserList'
import NotFound from '../view/error/404'

Vue.use(Router);

export default new Router({
  mode: 'history',// 取消#
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: Login
    },
    {
      // 不用props的方式
      path: '/main/:username',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/user/info/:id',
          name: 'UserInfo',
          component: UserInfo,
          // 建议使用用props的方式
          props: true
        },
        {
          path: '/user/list',
          name: 'UserList',
          component: UserList
        }
      ]
    },
    {
      path: '/goMain/:username',
      name: 'goMain',
      redirect: '/main/:username'
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
