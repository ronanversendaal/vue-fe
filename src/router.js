import Vue from 'vue'
import Router from 'vue-router'

import PressDetail from '@/views/Press/Detail';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
      path: '/press',
      name: 'press',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Press/Press.vue'),
      children : [
        {
          path: '/',
          name: 'press-index',
          component: ()  => import(/* webpackChunkName: "home" */ '@/views/Press/Index.vue'),
        },
        {
          path: '/press/:id',
          name: 'press-detail',
          component: PressDetail
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // meta: {layout: 'not-default'}, // Sets the layout template
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
