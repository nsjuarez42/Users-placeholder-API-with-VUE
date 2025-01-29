import {ref,computed} from "vue"
import {useStorage} from '@vueuse/core'
import {defineStore} from 'pinia'
import type { User } from "../types/Users/User"
//if i update store i want to update storage
const storage = useStorage("users",'{}')


export const useCounterUsers = defineStore('users',
  {state:()=>{

    const toUsers = (arr:Array<any>) : User[]=>{
      return arr.map(u=>{
        const {id,name,username,email,address,phone,website,company} = u
        return {id,info:{name,username,email,website,phone},
        address,company} as User
      })
    }
    

  
  if(Object.keys(JSON.parse(storage.value)).length == 0){
    console.log("Storage value is",storage.value)
    fetch("https://jsonplaceholder.typicode.com/users")
          .then(r=>r.json()
          .then(j=>storage.value = JSON.stringify(j)))
  }
  
  const users = ref(storage.value == "{}" ? [] : toUsers(JSON.parse(storage.value)))
    
  return {users}
},getters:{

  getUsersAlphaAsc:(state)=>{
    if(state.users.length != 0){
      return state.users.toSorted((a,b)=>{
       return a.info.name.localeCompare(b.info.name)  
      })
    }
  },
  getUsersAlphaDesc:(state)=>{
    if(state.users.length != 0){
      return state.users.toSorted((a,b)=>{
       return b.info.name.localeCompare(a.info.name)  
      })
    }
  }
},
actions:{
  setUsers(users : User[]){
    this.users = users
  }
}})