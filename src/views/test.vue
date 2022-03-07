<template>
  <Radio :radioList="radioList" v-model="modelValue" @update:modelValue="input"></Radio>
</template>

<script lang="ts" setup>
import { recursion } from "/@/common/utils/utils";
import option from "../../public/echarts-options";
import { Radio, Checkbox } from "/@/components/common";
import { ref } from "vue";
const modelValue = ref(true);
const radioList = [
  {
    name: "111",
    value: 1
  }
]
recursion(option, 'children', (dataItem: any) => {

})
const input = (e: any) => {
  console.log(e);
}
console.log(option);
</script>
  