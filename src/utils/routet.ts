 const routerList = [
  {
    path:'/main/analysis',
    name:'analysis',
    redirect: '/main/analysis/overview'
  },
  {
    path:'/main/analysis/overview',
    name:'overview',
    component: ()=> import('@/views/main/analysis/overview/overview.vue')
  },
  {
    path:'/main/analysis/dashboard',
    name:'dashboard',
    component: ()=> import('@/views/main/analysis/dashboard/dashboard.vue')
  },
  {
    path:'/main/system',
    name:'system',
    redirect: '/main/system/user'
  },
  {
    path:'/main/system/user',
    name:'user',
    component: ()=> import('@/views/main/system/user/user.vue')
  },
  {
    path:'/main/system/department',
    name:'department',
    component: ()=> import('@/views/main/system/department/department.vue')
  },
  {
    path:'/main/system/menu',
    name:'menu',
    component: ()=> import('@/views/main/system/menu/menu.vue')
  },
  {
    path:'/main/system/role',
    name:'role',
    component: ()=> import('@/views/main/system/role/role.vue')
  },
  {
    path:'/main/product',
    name:'product',
    redirect: '/main/product/categor' 
  },
  {
    path:'/main/product/category',
    name:'category',
    component: ()=> import('@/views/main/product/category/category.vue')
  },
  {
    path:'/main/product/goods',
    name:'goods',
    component: ()=> import('@/views/main/product/goods/goods.vue')
  },
  {
    path:'/main/story',
    name:'story',
    redirect: '/main/story/chat' 
  },
  {
    path:'/main/story/chat',
    name:'chat',
    component: ()=> import('@/views/main/story/chat/chat.vue')
  },
  {
    path:'/main/story/list',
    name:'list',
    component: ()=> import('@/views/main/story/list/list.vue')
  },
]

export default routerList