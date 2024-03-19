import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系: path => component
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/main/Main.vue'),
      children:[]
    }
    ,
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/NotFound.vue')
    }
  ]
})

router.beforeEach((to)=>{
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path.startsWith('/main') && !token) {
    return '/login'
  }
  if(to.path === '/main'){
    const firstMenu = localCache.getCache('firstMenu')
    return firstMenu?.url
  }
})
export default router