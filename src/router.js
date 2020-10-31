import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/home/Home.vue')
const Cart = () => import('@/views/cart/Cart.vue')
const More = () => import('@/views/more/More.vue')
const Profile = () => import('@/views/profile/Profile.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',

      component: Cart
    },
    {
      path: '/more',
      name: 'more',

      component: More
    },
    {
      path: '/profile',
      name: 'profile',

      component: Profile
    }
  ]
})
