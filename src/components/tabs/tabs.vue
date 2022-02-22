<template>
    <div class="lc-tabs-nav-list" :class="{ className }">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch, onUnmounted } from 'vue'
import emitter from '@/common/utils/mitt'
export default defineComponent({
    props: {
        className: String,
        modelValue: Number || String,
    },
    setup(props) {
        onMounted(() => {
            watch(
                () => props.modelValue,
                (value) => {
                    emitter.emit('tab-value', value)
                }
            )
        })
        onUnmounted(() => {
            emitter.off('tab-value', () => {})
        })
    },
})
</script>

<style lang="less" scoped>
</style>