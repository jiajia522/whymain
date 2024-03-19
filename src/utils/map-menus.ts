import { localCache } from './cache';
import routerList from './routet';
import type { RouteRecordRaw } from 'vue-router'
export let firstMenu: any = null
export function mapMenusToRoutes(userMenus:any){
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = routerList.find((item) => item.path === submenu.url)
      console.log(route)
      if (route) {
        // 2.将二级菜单对应的路径
        routes.push(route)
      }
      // 记录第一个被匹配到的菜单
      if (!firstMenu && route){
        firstMenu = submenu
        localCache.setCache('firstMenu',firstMenu)
      } 
    }
  }
  return routes

}

/**
 * 根据路径去匹配需要显示的菜单
 * @param path 需要匹配的路径
 * @param userMenus 所有的菜单
 */
export function mapPathToMenu(path:string,userMenus:any){
  for(const item of userMenus){
    for(const subItem of item.children){
      if(subItem.url === path){
        // const
        return subItem
      }
    }
  }
}

/**
 * 定义面包屑
 * @param path 需要匹配的路径
 * @param userMenus 所有的菜单
 */


export function mapPathToBreadCrumb(path:string,userMenus:any){
  const breadCrumbList = []
  for(const item of userMenus){
    for(const subitem of item.children){
      if(subitem.url === path){
        breadCrumbList.push({name:item.name,path:item.url})
        breadCrumbList.push({name:subitem.name,path:subitem.url})
        
      }
    }
  }
  return breadCrumbList
}