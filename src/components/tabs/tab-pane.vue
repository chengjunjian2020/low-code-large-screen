<template>
    <div class="lc-tabs-tab"></div>
</template>

<script lang="ts">
import emitter from '@/common/utils/mitt'
import { computed, defineComponent, reactive } from 'vue'

export default defineComponent({
    props: {
        tab: String,
        key: Number || String,
        className: String,
    },
    setup() {
        const activeKey = reactive({
            // val:computed({
            //     get: () =>
            // })
        })
        emitter.on('tab-value', (value) => {})
    },
})
</script>

