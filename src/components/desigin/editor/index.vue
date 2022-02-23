<template>
    <div class="low-code-editor flex">
        <leftComponent></leftComponent>
        <div class="center-desigin"></div>
        <div class="setting-wrapper"></div>
    </div>
</template>

<script lang="ts" setup>
import leftComponent from "./component/left-component.vue";
</script>

<style lang="less" scoped>
.low-code-editor {
    position: absolute;
    left: 0;
    height: calc(100% - 40px);
}
</style>