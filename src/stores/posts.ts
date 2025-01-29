import {defineStore} from 'pinia'
import { ref } from 'vue'
import type { Post } from '../types/Posts/Post'
import { useStorage } from '@vueuse/core'

const URL = "https://jsonplaceholder.typicode.com/posts"
export const storage = useStorage("posts","{}")
console.log(storage.value)
const toPosts = (arr:[]) : Post[]=>{
    return arr.map(e=>{

      const {userId,id,title,body} = e
       return {userId,id,title,body} as Post
    })
}

export const usePostsStore = defineStore("posts",()=>{
    if(storage.value == "{}"){
        fetch(URL).then((r)=>r.json()
        .then(j=> storage.value = JSON.stringify(j)))
    }

    const posts = ref(storage.value == "{}" ? [] : toPosts(JSON.parse(storage.posts)))

    return {posts}
   
})