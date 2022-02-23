<template>
    <div class="home">
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
