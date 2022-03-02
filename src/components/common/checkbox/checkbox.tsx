import { defineComponent, watch, ref, Ref } from "vue";
import { ElCheckbox } from "element-plus";
import "element-plus/theme-chalk/el-checkbox.css"
import checkboxProps from "./props";
import "./checkbox.less";
export default defineComponent({
    props: checkboxProps,
    emits: {
        'update:modelValue': (val?: boolean) => true
    },
    setup(props, context) {
        console.log(props.modelValue);
        const checkboxValue = ref(props.modelValue);
        // watch(checkboxValue, (val: boolean) => {
        //     context.emit("update:modelValue", val);
        // }, { immediate: true })
        console.log(props.modelValue);
        return () => <ElCheckbox class="low-code-checkbox" v-model={checkboxValue.value}></ElCheckbox>
    }
})