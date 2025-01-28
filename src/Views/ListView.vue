<script setup>
import User from '../components/User.vue'
    const props = defineProps({
        users:Array
    })
</script>

<template>
    <div v-for="user in users" :key="user.id">
        <User :user="user"/>
    </div>
</template>