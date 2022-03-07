<template>
    <div class="low-code-editor flex">
        <div class="left-wrapper">
            <leftComponent></leftComponent>
        </div>
        <div class="center-desigin"></div>
        <div class="setting-wrapper">
            <settingPanel></settingPanel>
        </div>
    </div>
</template>

<script lang="ts" setup>
import leftComponent from "./component/left-component.vue";
import settingPanel from "./component/rightComponent.vue";
</script>

<style lang="less" scoped>
.low-code-editor {
    position: absolute;
    left: 0;
    height: calc(100% - 40px);
    .left-wrapper {
        width: 410px;
    }
    .center-desigin {
        width: calc(100vw - 410px - 410px);
    }
    .setting-wrapper {
        width: 410px;
    }
}
</style>