<template>
    <el-upload
        class="low-code-update flex content-center justify-center"
        :action="action"
        :headers="headers"
        :show-file-list="false"
        :on-success="handleUploadCuccess"
        :before-upload="beforeUpload"
    >
        <div class="show_img relative" v-if="imageUrl">
            <img :src="imageUrl" class="avatar" />
            <el-icon class="close-icon absolute">
                <Close />
            </el-icon>
        </div>
        <div v-else class="placeholder">
            <span>点击图片或者拖拽更换图片</span>
        </div>
    </el-upload>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { uploadProps } from "./props";
import { ResponseModel } from "/@/common/model/common";
import { Close } from "@element-plus/icons-vue";
defineProps(uploadProps);
const reg = /\.(png|jpg|gif|jpeg|webp)$/;
const imageUrl = ref("");
const handleUploadCuccess = (res: any) => {
    const { code, data } = res;
    if (code === 200) {
        imageUrl.value = data.url;
    }
}

const beforeUpload = (file: File) => {
    return reg.test(file.name);

}
</script>

<style lang="less" scoped>
.low-code-update {
    width: 165px;
    height: 100px;
    border: 1px #383a3f dashed;
    border-radius: 2px;
    text-align: center;
    background: #16171b;
    :deep(.el-upload) {
        width: 100%;
        height: 100%;
        .show_img {
            width: 100%;
            height: 100%;
            img {
                margin: auto;
                /* line-height: 100px; */
                transform: translateY(25%);
            }
            .close-icon {
                color: #e9e9e9;
                font-size: 18px;
                right: -41%;
                bottom: 68%;
                font-weight: 600;
                &:hover {
                    color: #3399ff;
                }
            }
        }
    }
    .placeholder {
        font-size: 12px;
        color: #fff;
        width: 100%;
        line-height: 90px;
    }
}
</style>