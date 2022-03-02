<template>
    <el-tree-v2 class="low-code-virtualTree" :data="data" :props="props" :height="208">
        <template #default="{ node }">
            <span class="prefix" :class="{ 'is-leaf': node.isLeaf }">[ElementPlus]</span>
            <span>{{ node.label }}</span>
        </template>
    </el-tree-v2>
</template>

<script lang="ts" setup>
import { ElTreeV2 } from "element-plus";
defineProps(ElTreeV2.props);
</script>

<style lang="less" scoped>
</style>