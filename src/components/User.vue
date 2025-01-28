<script setup>
const props = defineProps({
    user:Object
})
</script>

<template>
    <div>
        <span>
            {{user.name}}
        </span>
        <span>
            {{user.username}}
        </span>
        <span>
            {{user.email}}
        </span>
    </div>
</template>