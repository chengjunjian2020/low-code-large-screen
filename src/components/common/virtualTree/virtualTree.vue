<template>
    <el-tree-v2 class="low-code-virtualTree" :data="datas" :height="208">
        <template class="1111" #default="{ node }">
            <div class="node-row">{{ node.data.label }}{{ getNode(node) }}</div>
            <div :class="nodeClass(node.data)"></div>
        </template>
    </el-tree-v2>
    <!-- <el-tree-v2 :data="datas" :height="208"></el-tree-v2> -->
</template>

<script lang="ts" setup>
import { ElTreeV2 as tree } from "element-plus";
import { computed } from "vue";
import { common } from "/@/type/component"
import datas from "../../../../public/echarts-options";
defineProps(tree.props);
const nodeClass = computed(() => {
    return function (data: common.treeItem) {
        return (data.children && Array.isArray(data.children)) ? 'node-title-bg absolute' : ''
    }
})
function getNode(node: any) {
    console.log(node);
}
</script>

<style lang="less" scoped>
.low-code-virtualTree {
    :deep(.el-tree-node__content) {
        background: #2e3134;
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