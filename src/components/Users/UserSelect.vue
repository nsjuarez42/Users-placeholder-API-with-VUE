<script setup lang="ts">
import { Values } from '../../types/Option/Value';
console.log(Values)

for(const v in Values){
    console.log(`${v} is ${Values[v]}`)
}
const emit = defineEmits(['change'])

const onChange = (e)=>{
    emit('change',e)
}
</script>

<template>
<select @change="onChange">
    <option v-for="v in Object.keys(Values)" :key="v" :value="Values[v]">
        {{Values[v]}}
    </option>
</select>
</template>

