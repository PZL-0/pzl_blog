import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import BlogList from './views/BlogList.vue'
import BlogPost from './views/BlogPost.vue'
import About from './views/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/blog', name: 'BlogList', component: BlogList },
  { path: '/blog/:id', name: 'BlogPost', component: BlogPost },
  { path: '/about', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router