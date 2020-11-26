import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/Home'
    // component: () => import('../views/home/Home')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/home/Home')
  },
  {
    path: '/Category',
    name: 'Category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/category/Category')
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: () => import('../views/cart/Cart')
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: () => import('../views/profile/Profile')
  },
  {
    path: '/Detail/:iid',
    name: 'Detail',
    component: () => import('../views/detail/Detail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
