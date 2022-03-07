import { defineComponent, watch, ref, Ref } from "vue";
import { ElCheckbox } from "element-plus";
import "element-plus/theme-chalk/el-checkbox.css"
import checkboxProps from "./props";
import "./checkbox.less";
export default defineComponent({
    props: checkboxProps,
    emits: {
        'update:modelValue': (val?: string) => true, //自定义model父组件值事件
        'onUpdate:modelValue': (val?: string) => true, //用于在jsx中通知触发对应事件
    },
    setup(props, context) {
        const checkboxValue = ref(props.modelValue);
        watch(checkboxValue, (val: string) => {
            context.emit("update:modelValue", val);
            context.emit("onUpdate:modelValue", val);
        }, { immediate: true })
        return () => <ElCheckbox class="low-code-checkbox" v-model={checkboxValue.value}></ElCheckbox>
    }
})