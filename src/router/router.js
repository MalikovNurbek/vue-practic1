import { createRouter, createWebHistory } from 'vue-router'
import SinglePost from '@/pages/SinglePost.vue'
import PostsWithStore from '@/pages/PostsWithStore.vue'
import PostsCompositionApi from '@/pages/PostsCompositionApi.vue'
import PostsPage from '@/pages/Posts.vue'
import About from '../pages/About.vue'
import Main from '@/pages/Main.vue'

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostsPage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/posts/:id',
    component: SinglePost,
  },
  {
    path: '/store',
    component: PostsWithStore,
  },
  {
    path: '/composition',
    component: PostsCompositionApi,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router