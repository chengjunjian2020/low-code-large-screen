<template>
    <div ref="currentEchartsDom" :style="getStyle"></div>
</template>

<script lang="ts" setup>
import { ref, watch, nextTick, computed } from "vue";
import * as echarts from 'echarts';
import echartsProps from "./props";
const props = defineProps(echartsProps);
let currentChart = null;
const currentEchartsDom = ref();

watch(() => props.option, (options) => {
    if (!options) {
        return;
    }
    nextTick(() => {
        currentChart = echarts.init(currentEchartsDom.value as HTMLElement, undefined, { devicePixelRatio: 2.5 });
        currentChart.setOption((options as any), true);
    })
}, {
    immediate: true
})
const getStyle = computed(() => {
    const { width, height } = props;
    return `width: ${width}px;height: ${height}px`
})
</script>