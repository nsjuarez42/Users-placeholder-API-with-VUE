import {ref,computed} from "vue"
import {defineStore} from 'pinia'

export const useCounterUsers = defineStore('users',()=>{
    const users = ref([])
    const loadUsers = async()=>{
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/users")
          const json = await response.json()
          users.value = json
         console.log(users.value)
          
        } catch (error) {
          console.log(error)
        }
      }

    const getUsersAlpha = computed(()=>{
        return users.value.toSorted((a,b)=>{
         return a.name.localeCompare(b.name)  
        })
    })
      return {users,loadUsers,getUsersAlpha}
})