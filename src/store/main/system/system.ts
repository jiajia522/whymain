import { defineStore } from 'pinia';
import { postUsersListData } from '@/service/system/system';
interface IsystemStore {
  usersList:any[]
}
const useSystemStore = defineStore('system',{
  state:():IsystemStore => ({
    usersList: []
  }),
  actions: {
    async postUsersListAction(){
      // const 
      const usersListResult = await postUsersListData()
    }
  }
})

export default useSystemStore