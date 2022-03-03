<template>
    <div class="desigin-container">
        <Header />
        <Editor />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Header, Editor } from "/@/components/desigin";
export default defineComponent({
    name: 'Home',
    components: {
        Header,
        Editor
    },
})
</script>
<style lang="less" scoped>
.desigin-container {
    background-color: #2e3134;
    min-width: 100vw;
    min-height: 100vh;
}
</style>
