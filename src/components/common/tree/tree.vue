<template>
    <el-tree class="low-code-virtualTree" :props="props.props" :data="props.data" :dte="$slots">
        <template #default="{ node }">
            <slot :node="node"></slot>
            <div :class="nodeClass(node.data)"></div>
        </template>
    </el-tree>
</template>

<script lang="ts" setup>
import treeProps from "./props";
import { computed } from "vue";
import { common } from "/@/type/component"
const props = defineProps(treeProps);
const nodeClass = computed(() => {
    return function (data: common.treeItem) {
        return (data.children && Array.isArray(data.children)) ? 'node-title-bg absolute' : ''
    }
})
</script>

<style lang="less" scoped>
.low-code-virtualTree {
    :deep(.el-tree-node__content) {
        min-height: 33px;
        padding: 0px 8px;
        box-sizing: border-box;
        .node-title-bg {
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: #2e3134;
            z-index: -1;
        }
        .node-row {
            color: #fff;
            font-size: 12px;
        }
        .el-tree-node__expand-icon {
            color: #fff;
        }
        .el-tree-node__expand-icon.is-leaf {
            color: transparent;
        }
    }
}
</style>