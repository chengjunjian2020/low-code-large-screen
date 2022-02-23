<template>
    <div class="left-wrapper">
        <div class="left-componet-content">
            <div class="left-title">组件</div>
            <div class="left-component-panel flex">
                <div class="left-component-nav">
                    <Nav />
                </div>
                <div class="flex-1">
                    <ComponentMenu />
                </div>
            </div>
        </div>
        <Layer></Layer>
    </div>
</template>

<script lang="ts" setup>
import { Nav, ComponentMenu, Layer } from "./component/index.ts";
</script>

<style lang="less" scoped>
.left-wrapper {
    position: absolute;
    left: 0;
    height: 100%;
    .left-componet-content {
        height: 100%;
        width: 220px;
    }
    .left-component-panel {
        background: #22242a;
    }
}
</style>