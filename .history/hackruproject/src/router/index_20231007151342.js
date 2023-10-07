import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */'../views/RegisterView.vue')
  },
  {
    path: '/genomeupload',
    name: 'genomeupload',
    component: () => import(/* webpackChunkName: "genomeupload" */'../views/GenomeUploadView.vue')
  },
  {
    path: '/genomevisualization',
    name: 'genomevisualization',
    
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
