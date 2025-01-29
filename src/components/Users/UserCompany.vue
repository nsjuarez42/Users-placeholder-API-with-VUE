<script setup lang="ts">
import type { Company } from '../../types/Users/Company';

const props=defineProps<{company:Company}>()

const {company:{name,catchPhrase,bs}} = props

</script>

<template>
    <div class="flex flex-col border-black border-solid border-2">
        <span>
            {{name}}
        </span>
        <span>
            {{catchPhrase}}
        </span>
        <span>
            {{bs}}
        </span>
    </div>

</template>