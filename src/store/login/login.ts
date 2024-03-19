import { defineStore } from 'pinia'
import { accoutLoginRequest,getUserInfoRequest ,getUserMenusByRoleId} from '@/service/login/login'
import router from '@/router'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constants'
import routerList from '@/utils/routet'
import { mapMenusToRoutes } from '@/utils/map-menus'
// import { useRouter } from 'vue-router'
interface ILoginState {
  token: string,
  userInfo: any,
  userMenus: any
}
const useLoginStore = defineStore('login', {
  state:():ILoginState=> ({
    token: '',
    userInfo: ''  ,
    userMenus:  []
  }),
  actions:{
    async loginAccountAction(account:any) {
      const loginResult = await accoutLoginRequest(account)
      const id = loginResult.data.data.id
      this.token = loginResult.data.data.token
      localCache.setCache(LOGIN_TOKEN,this.token)
      

      // 获取角色信息
      const userInfoResult= await getUserInfoRequest(id)
      const userInfo = userInfoResult.data.data
      this.userInfo = userInfo

      // 获取权限信息
      const userMenusResult = await getUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data.data
      this.userMenus = userMenus

      const routes:any[] = mapMenusToRoutes(userMenus)
      for(const item of routes){
        if(item) router.addRoute('main',item)
      }
      // 动态添加路由，刷新之后会没有
      // for( const item of userMenus){
      //   for (const subitem of item.children){
      //     const route = routerList.find(item => item.path === subitem.url)
      //     if(route) router.addRoute('main',route)
      //   }
      // }
      
      localCache.setCache('userInfo',userInfo)
      localCache.setCache('userMenus',userMenus)

      router.push('/main')
    },
    loadLocalCacheAction(){
      const token = localCache.getCache(LOGIN_TOKEN) || ''
      const userInfo = localCache.getCache('userInfo') || ''
      const userMenus = localCache.getCache('userMenus') || []
      if(token && userInfo && userMenus) {
        this.token = token;
        this.userInfo = userInfo;
        this.userMenus = userMenus;
      }
      
      // 动态添加路由，刷新之后会没有
      for( const item of userMenus){
        // console.log(item)
        for (const subitem of item.children){
          const route = routerList.find(item => item.path === subitem.url)
          if(route) router.addRoute('main',route)
        }
      }     
    }
  }
})
export default useLoginStore