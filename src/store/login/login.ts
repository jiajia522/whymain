import { defineStore } from 'pinia'
import { accoutLoginRequest,getUserInfoRequest ,getUserMenusByRoleId} from '@/service/login/login'
import router from '@/router'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constants'
import routerList from '@/utils/routet'
// import { useRouter } from 'vue-router'
interface ILoginState {
  token: string,
  userInfo: any,
  userMenus: any
}
const useLoginStore = defineStore('login', {
  state:():ILoginState=> ({
    token: localCache.getCache('token') ?? '',
    userInfo: localCache.getCache('userInfo') ?? ''  ,
    userMenus: localCache.getCache('userMenus') ?? []
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
      console.log(this.userInfo)

      // 获取权限信息
      const userMenusResult = await getUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data.data
      this.userMenus = userMenus

      // woconst router = useRouter()
      for( const item of userMenus){
        for (const subitem of item.children){
          // console.log(subitem)
          // subitem.url 
          const route = routerList.find(item => item.path === subitem.url)
          // console.log(route)
          if(route) router.addRoute('main',route)
        }
      }
      
      localCache.setCache('userInfo',userInfo)
      localCache.setCache('userMenus',userMenus)

      router.push('/main')
    }
  }
})
export default useLoginStore