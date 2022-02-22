<template>
    <div class="custome-button" @click="clickButton" :style="buttonStyle">
        <div class="custome-button-text">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, watch, computed, ref } from 'vue'
import buttonProps from './props'
const active = ref(false)
const props = defineProps(buttonProps)
watch(props, (val) => {
    if (val.buttonType === "click") {
        active.value = props.active;
    }
}, {
    immediate: true,
})
const buttonStyle = computed(() => {
    if (active.value) {
        return {
            backgroundColor: props.buttonBackground,
            borderColor: props.buttonBorderColor
        }
    }
})
onMounted(() => { })
const clickButton = () => {
    active.value = !active.value
}
</script>

<style lang="less" scoped>
.custome-button {
    height: 24px;
    line-height: 24px;
    padding: 0 8px;
    color: #fff;
    background: #31343e;
    border: 1px solid #404349;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    border-radius: 2px;
    .custome-button-text {
        font-size: 12px;
        line-height: 22px;
    }
    &:hover {
        background: v-bind(buttonBackground);
        border-color: v-bind(buttonBorderColor);
    }
}
</style>
