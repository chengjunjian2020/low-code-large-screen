<template>
    <el-form
        class="setting-form"
        ref="formRef"
        :model="globalStyleForm"
        label-width="80px"
        label-position="left"
        size="small"
    >
        <el-form-item label="图表尺寸">
            <div class="flex">
                <div class="_item flex items-center">
                    <span class="label-text">宽</span>
                    <input-number :controls="true" v-model="globalStyleForm.width"></input-number>
                </div>
                <div class="_item flex items-center">
                    <span class="label-text">高</span>
                    <input-number :controls="true" v-model="globalStyleForm.height"></input-number>
                </div>
            </div>
        </el-form-item>
        <el-form-item label="图表位置">
            <input-number :controls="true" v-model="globalStyleForm.top" style="width:100%"></input-number>
        </el-form-item>
        <el-form-item label>
            <input-number :controls="true" v-model="globalStyleForm.left" style="width:100%"></input-number>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { inputNumber } from "/@/components/common"
const globalStyleForm = reactive({
    width: 100,
    height: 100,
    top: 0,
    left: 0
})
</script>

<style lang="less" scoped>
@import url("/@/common/less/setting-form.less");
.setting-form {
    padding: 0 5%;
}
</style>