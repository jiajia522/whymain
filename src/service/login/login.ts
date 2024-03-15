import http from '../index'

export function accoutLoginRequest(account:any){
  return http({
    url:'/login',
    method: 'post',
    data:account
  })
}

export function getUserInfoRequest(id:number){
  return http({
    url:`/users/${id}`,
    method: 'get'
  })
}

export function getUserMenusByRoleId(id:number) {
  return http({
    url:`/role/${id}/menu`,
    method: 'get'
  })
}