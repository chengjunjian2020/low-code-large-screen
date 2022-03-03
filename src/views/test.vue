<template>
  <div class="container">
    <virtualTree :data="echartsOption" :height="208"></virtualTree>
  </div>
</template>
<script lang="ts" setup>
import echartsOption from "../../public/echarts-options";
import { virtualTree } from "/@/components/common/";
interface Tree {
  id: string
  label: string
  children?: Tree[]
}

const getKey = (prefix: string, id: number) => {
  return `${prefix}-${id}`
}

const createData = (
  maxDeep: number,
  maxChildren: number,
  minNodesNumber: number,
  deep = 1,
  key = 'node'
): Tree[] => {
  let id = 0
  return new Array(minNodesNumber).fill(deep).map(() => {
    const childrenNumber =
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
    const nodeKey = getKey(key, ++id)
    return {
      id: nodeKey,
      label: nodeKey,
      children: childrenNumber
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
        : undefined,
    }
  })
}
const props = {
  value: 'id',
  label: 'label',
  children: 'children',
}
const data = createData(4, 30, 40)
console.log(echartsOption);
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: #2e3134;
}
</style>