<script setup>
import {onMounted} from "vue"
import {useCounterUsers} from "./stores/users.js"
import ListView from "./Views/ListView.vue"

const store = useCounterUsers()

const {users,loadUsers,getUsersAlpha} = store

onMounted(()=>{
  loadUsers()
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">
    Hello world!
      </h1>
      <ListView :users="users"/>
  </div>
  
</template>

<style scoped>

</style>
