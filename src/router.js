import { createRouter, createWebHistory } from 'vue-router'
import Main from '../src/views/Main.vue'
import Speed from '../src/views/Speed.vue'
import Si from '../src/views/Si.vue'

const router = createRouter({
  history: createWebHistory(),
  // mode: 'history',
  routes: [
    { path: '/dava_f/',
      // redirect: '/dava_f/si',
      component: Main, 
      children: [
        { path: 'speed', component: Speed },
        { path: 'si', component: Si },
      ]
    },
  ]
})

export default router