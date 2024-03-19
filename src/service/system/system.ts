import http from '../index'

export function postUsersListData(){
  return http({
    url:'/user/list',
    method: 'post',
    data:{
      offset:0,
      size:10
    }
  })
}