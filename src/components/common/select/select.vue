<template>
    <el-select
        v-model="selectValue"
        @change="changeSelect"
        class="low-code-select"
        :filterable="filterable"
        :allow-create="allowCreate"
        placeholder="请选择"
        size="small"
        popper-class="low-code-popper"
    >
        <el-option
            class="low-code-option"
            v-for="item in selectList"
            :key="item.value"
            :label="item.name"
            :value="item.value"
        ></el-option>
    </el-select>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { selectProps } from "./props";
const props = defineProps(selectProps);
//todo
const selectValue: string = ref(props.modelValue);
const emit = defineEmits(["update:modelValue", 'onUpdate:modelValue']);

const changeSelect = (val: string | number) => {
    selectValue.value = val as string;
    emit("update:modelValue", val);
    emit("onUpdate:modelValue", val);
}
</script>

<style lang="less" scoped>
.low-code-select {
    :deep(.select-trigger) {
        .el-input {
            border-color: #3399ff;
        }
        .el-input__inner {
            background: #16171b;
            border: none;
            color: #fff;
        }
    }
}
</style>
<style lang="less">
.low-code-popper {
    &.el-popper {
        border: none !important;
    }
}
.low-code-popper {
    background: #16171b;
    border: none;
    border: 1px solid #3399ff !important;
    .el-select-dropdown__list {
        padding: 0;
        .el-select-dropdown__item {
            padding: 0px 10px;
            line-height: 30px;
            height: 30px;
            &:hover {
                background-color: #3399ff;
                color: #fff;
            }
        }
    }
}
.low-code-option {
    span {
        color: #fff;
    }
    &.hover {
        background-color: #3399ff;
    }
}
</style>