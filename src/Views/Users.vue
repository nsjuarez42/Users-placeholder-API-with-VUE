<script setup lang="ts">
import { Values } from "../types/Option/Value"
import {useCounterUsers} from "../stores/users"
import ListView from "./ListView.vue"
import UserSelect from "../components/Users/UserSelect.vue"
import { ref } from "vue"
import Posts from './Posts.vue'

const store = useCounterUsers()

const users = ref(store.users)



const onchange = (e)=>{
  console.log(e)
  const {target:{value}} = e

    switch(value){
        case Values.AlphabetAsc:{
            users.value = store.getUsersAlphaAsc
            break
        }
        case Values.AlphabetDesc:{
            users.value = store.getUsersAlphaDesc
            break
        }
        default:
           users.value = store.users
            break
        
    }
}

</script>

<template>
  <div v-if="users.length > 0">
    <UserSelect @change="onchange"/>
    <ListView :users="users"/>
    <Posts/>
  </div>
</template>