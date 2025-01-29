<script setup lang="ts">
import UserComponent from '../components/Users/User.vue'

import type { User } from '../types/Users/User';

defineProps<{users:Array<User>}>()
</script>

<template>
    <div v-for="user in users" :key="user.id">
        <UserComponent :user="user"/>
    </div>
</template>