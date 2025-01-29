<script setup lang="ts">
import UserInfo from '../Users/UserInfo.vue';
import UserAddress from '../Users/UserAddress.vue';
import UserCompany from '../Users/UserCompany.vue';
import type { User } from '../../types/Users/User';

const props = defineProps<{user:User}>()
//const {info,address,company} = props.user
const u :User =props.user

const {info,address,company} = u

</script>

<template>
    <div class="flex border-solid border-black border-2">
        <div class="flex flex-col">
            <UserInfo :info="info"/>
            <UserAddress :address="address"/>
        </div>
        <div>
            <UserCompany :company="company"/>
        </div>
    </div>
</template>