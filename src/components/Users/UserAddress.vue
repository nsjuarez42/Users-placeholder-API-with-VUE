<script setup lang="ts">
import type { Address } from '../../types/Users/Address';

const props = defineProps<{address:Address}>()

const {address:{street,suite,city,zipcode}} = props
</script>

<template>
<div class="flex flex-col border-solid border-black border-2">
    <div class="flex ">
        <span>{{street}}</span>
        <span>{{suite}}</span>
    </div>
    <div class="flex ">
        <span>{{city}}</span>
        <span>{{zipcode}}</span>
    </div>
</div>
</template>