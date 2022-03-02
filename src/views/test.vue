<template>
  <div>
    <el-form ref="formRef" label-width="30px" label-position="left">
      <el-form-item label="宽">
        <input-number v-model="modelValue" style="width:100px" />
      </el-form-item>
      <el-form-item label="颜色">
        <color-picker v-model="colorValue" />
      </el-form-item>
      <el-form-item label="图片">
        <upload
          action="https://www.fastmock.site/mock/d9951708e0aba5f81b6d8ea609ce3196/low-code/upload"
        />
      </el-form-item>
      <el-form-item label="字体">
        <Select v-model="selectValue" :selectList="selectList"></Select>
      </el-form-item>
      <el-form-item label="字体xx">
        <Input v-model="selectValue"></Input>
      </el-form-item>
      <el-form-item label="字体xx">
        <Radio v-model="selectValue" :radioList="selectList"></Radio>
      </el-form-item>
      <!-- action="https://www.fastmock.site/mock/d9951708e0aba5f81b6d8ea609ce3196/low-code/upload" -->
    </el-form>
    <tree :data="echartsOptions" :props="props" :height="208"></tree>
  </div>
</template>

<script lang="ts" setup>
import { inputNumber, colorPicker, upload, Select, Input, Radio, tree } from '/@/components/common';
import { reactive, ref } from "vue";
import echartsOptions from "../../public/echarts-options";
// import { v4 as uuidv4 } from 'uuid';
const modelValue = ref(0);
const colorValue = ref("");
const selectValue = ref();
const selectList = reactive([
  {
    name: "微软雅黑",
    value: "微软雅黑",
  },
  {
    name: "宋体",
    value: "宋体",
  }
]);
const getKey = (prefix: string, id: number) => {
  return `${prefix}-${id}`
}


const props = {
  value: 'id',
  label: 'label',
  children: 'children',
}
// import docOptions from "../../public/doc-options.json";
// let count = 0;
// function recursion(list: Array<any>) {
//   list.forEach((item: any) => {
//     count++;
//     console.log(item)
//     if (item && item.children && item.children.length > 0) {
//       recursion(item.children);
//     }
//   })
// }
// recursion(docOptions.children)
// console.log(count);
</script>

<style lang="less">
.label-text {
  font-size: 12px;
  color: #fff;
  margin-right: 12px;
}
</style>