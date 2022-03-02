<template>
    <ElTreeV2 :data="data" :props="props" :height="208" class="low-code-treev2">
        <template #default="{ node }">
            <div class="node-row">
                <span>{{ node.label }}</span>
            </div>
        </template>
    </ElTreeV2>
</template>

<script lang="ts" setup>
import { ElTreeV2 as treeV2 } from "element-plus/lib/components/tree-v2/index"
defineProps(treeV2.props);

</script>

<style lang="less" scoped>
.low-code-treev2 {
    background: transparent;
    ::deep(.el-tree-node__content) {
    }
}
</style>