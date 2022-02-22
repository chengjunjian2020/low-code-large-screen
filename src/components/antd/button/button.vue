<template>
    <a-button
        :type="buttonType"
        :style="{
            backgroundColor: buttonBackground,
            borderColor: buttonBackground,
            color: textColor,
        }"
        @click="clickButton"
    >
        <slot></slot>
    </a-button>
</template>

<script lang="ts" setup>
import { onMounted, computed, ref } from 'vue'
import buttonProps from './props'
const active = ref(false)
const props = defineProps(buttonProps)
const buttonType = computed(() => {
    const { buttonType, defaultActive } = props
    if (buttonType === 'hover') {
        return ''
    }
    // return defaultActive &&  ? 'primary' : ''
})
onMounted(() => {})
const clickButton = () => {}
</script>
