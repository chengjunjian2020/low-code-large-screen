<template>
    <el-input-number
        v-model="numberValue"
        :min="min"
        :max="max"
        class="low-code-input-number"
        :size="size"
        :controls="controls"
        controls-position="right"
    ></el-input-number>
</template>

<script lang="ts" setup>
import inputNumberProps from "./props";
import { ref, watch } from "vue";
defineProps(inputNumberProps);
const numberValue = ref(0);
const emit = defineEmits(["update:modelValue", 'onUpdate:modelValue']);
// watch(() => props.modelValue, (val) => {
//     numberValue.value = val;
// }, {
//     immediate: true,
// })
watch(numberValue, (val) => {
    emit('update:modelValue', val)
    emit("onUpdate:modelValue", val);
})
</script>

<style lang="less" scoped>
.low-code-input-number {
    :deep(span) {
        background-color: transparent;
        border: none !important;
        &.el-input-number__increase {
            &:hover {
                color: #00baff;
            }
        }
        .el-icon {
            color: #fff;
        }
    }
    :deep(.el-input) {
        .el-input__inner {
            background-color: #16171b;
            border-color: #16171b;
            transition: none;
            color: #fff;
            text-align: left;
            &:active {
                border-color: #00baff;
            }
            &:focus {
                border-color: #00baff;
                box-shadow: none;
            }
            &:hover {
                border-color: #00baff;
            }
            &:focus:not(:focus-visible) {
                outline: 0 !important;
            }
        }
    }
}
</style>