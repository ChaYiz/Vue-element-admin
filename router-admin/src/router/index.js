/* jshint esversion: 6 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import pathArr from '@/router/pathArr.js';

// 导入需要的组件
import Login from '@/components/MyLogin.vue';
import Home from '@/components/MyHome.vue';

// 导入子菜单
import Users from '@/components/menus/MyUsers.vue';
import Settings from '@/components/menus/MySettings.vue';
import Rights from '@/components/menus/MyRights.vue';
import Orders from '@/components/menus/MyOrders.vue';
import Goods from '@/components/menus/MyGoods.vue';

import UserDetail from '@/components/user/MyUserDetail.vue';


Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    // 哈希地址统一都是小写,不要出现大写的字母

    // 路由重定向（默认显示）
    {
      path: '/',
      redirect: 'login'
    },
    // 登录的路由规则
    {
      path: '/login',
      component: Login
    },
    // 后台主页的路由规则
    {
      path: '/home',
      component: Home,
      redirect: '/home/users',
      children: [
        // 子菜单路由 path需要省略 /
        {
          path: 'users',
          component: Users
        },
        {
          path: 'rights',
          component: Rights
        },
        {
          path: 'goods',
          component: Goods
        },
        {
          path: 'orders',
          component: Orders
        },
        {
          path: 'settings',
          component: Settings
        },
        // 用户详情页的路由规则
        {
          // ID 传值
          // 在路由规则里面才允许出现冒号
          path: 'userinfo/:id',
          component: UserDetail,
          props: true
        }
      ]
    }
  ]
});

// 全局前置守卫
router.beforeEach(function (to, from, next) {
  // 判断是否有 哈希地址的权限

  // 麻烦操作
  // if(to.path === '/home' || to.path === 'home/users' ||)

  // 数组操作
  // const pathArr = ['/home', '/home/users', '/home/rights']
  // if (pathArr.indexOf(to.path) !== -1)

  // 组件化操作
  if (pathArr.indexOf(to.path) !== -1) {
    const token = localStorage.getItem('token');
    if (token) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router;