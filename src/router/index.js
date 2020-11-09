import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
//import Login from '../views/auth/Login.vue'
import i18n from '../i18n'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {path: '/',name: 'home',component: () => import('../views/Home.vue')},
      {path: 'login',name: 'login',component: () => import(/* webpackChunkName: "contact" */ '../views/auth/Login.vue')},
      {path: 'register',name: 'register',component: () => import('../views/auth/Register.vue')},
      {path: 'booking',name: 'booking',component: () => import('../views/book/Booking.vue')},
      {path: 'hospital',name: 'hospital',component: () => import('../views/settings/Hospital.vue')},
      {path: 'users',name: 'users',component: () => import('../views/auth/Users.vue')},
<<<<<<< HEAD
      {path: 'machine',name: 'machine',component: () => import('../views/settings/Machine.vue')},
=======
      {path: 'booking-customer',name: 'booking-customer',component: () => import('../views/book/BookingCustomer.vue')}
>>>>>>> b971d57bf25c855fdbe7c2523b262fee9e7e0290
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  i18n,
})

export default router
