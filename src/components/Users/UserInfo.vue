<script setup lang="ts">
import type { UserInfo } from '../../types/Users/Info';
const props = defineProps<{info:UserInfo}>()
const i : UserInfo = props.info

const {name,username,email,phone} = i

</script>

<template>
  <div class="flex flex-col border-solid border-black border-2">
    <span>{{username}}</span>
    <span>{{name}}</span>
    <span>{{email}}</span>
    <span>{{phone}}</span>
  </div>
</template>



