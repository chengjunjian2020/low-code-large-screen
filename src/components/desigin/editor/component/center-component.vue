<template>
    <div class="workspacerk flex justify-center items-center">
        <div ref="workspacerkView" class="workspacerk-view"></div>
    </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import { useAppStore } from "/@/store/modules/app";
const workspacerkView = ref(null);
nextTick(() => {
    const appStore = useAppStore();
    appStore.setWorkspace(workspacerkView.value);
})
</script>

<style lang="less" scoped>
.workspacerk {
    background: url("/@/assets/workspacerk-bg.png");
    width: 100%;
    height: 100%;
    .workspacerk-view {
        box-shadow: 0 0 8px 3px rgb(0 0 0 / 16%);
        width: 95%;
        height: 95%;
    }
}
</style>