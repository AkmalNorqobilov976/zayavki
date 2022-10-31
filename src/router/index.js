import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import OrderView from "@/views/OrderView";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: OrderView,
    children: [
      {
        path: '/',
        name: "new",
        component: () => import('@/views/newOnes/index.vue')
      },
      {
        path: '/create',
        name: "create_new_one",
        component: () => import('@/views/newOnes/create.vue')
      },
      {
        path: '/update',
        name: "update_one",
        component: () => import('@/views/newOnes/update.vue')
      },
      // others
      {
        path: "/all",
        name: "all_item",
        component: () => import('@/views/all/index.vue')
      },
      {
        path: "/archived",
        name: "archived",
        component: () => import('@/views/archive/index.vue')
      },
      {
        path: "/accepted",
        name: "accepted",
        component: () => import('@/views/accepted/index.vue')
      },
      {
        path: "/cancelled",
        name: "cancelled",
        component: () => import('@/views/cancelled/index.vue')
      },
      {
        path: "/delivered",
        name: "delivered",
        component: () => import('@/views/delivered/index.vue')
      },
      {
        path: "/hold",
        name: "hold",
        component: () => import('@/views/hold/index.vue')
      },
      {
        path: "/sent",
        name: "sent",
        component: () => import('@/views/inWay/index.vue')
      },
      {
        path: "/pending",
        name: "pending",
        component: () => import('@/views/recall/index.vue')
      },
      {
        path: "/spam",
        name: "spam",
        component: () => import('@/views/spam/index.vue')
      },
      // userss

      {
        path: "/profile_account",
        name: "profile_account",
        component: () => import('@/views/users/myProfile.vue')
      },
      {
        path: "/profile_settings",
        name: "profile_settings",
        component: () => import('@/views/users/profileSettings.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import('@/views/register/signin.vue')
  },
  // users

  {
    path: '/:pathMatch(.*)*',
    name: "PageNotFound",
    component: () => import('@/views/PageNotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
