<template>
    <header class="flex space-x-4 p-4">
        <div class="header-logo flex-1">
            <img src="~@/assets/logo.svg" />
        </div>
        <div class="flex-2">
            <a-button class="m-4">保存</a-button>
            <a-button type="primary">发布</a-button>
        </div>
    </header>
</template>

<style lang="less" scoped>
.header-logo {
    img {
        width: 30px;
        height: 30px;
    }
}
</style>