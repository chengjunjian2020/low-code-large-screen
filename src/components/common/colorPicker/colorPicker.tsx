import { ref, Ref, defineComponent, watch } from "vue";
import { ElColorPicker } from "element-plus";
import { colorPickerProps } from "./prop";
import 'element-plus/es/components/color-picker/style/css'
import "./colorPicker.less";
export default defineComponent({
    name: "color",
    props: colorPickerProps,
    emits: {
        'update:modelValue': (val?: string) => true,
        'onUpdate:modelValue': (val?: string) => true, //用于在jsx中通知触发对应事件
    },
    setup(props, context) {
        console.log(props)
        const colorValue: Ref<string> = ref("");
        watch(colorValue, (val) => {
            context.emit("update:modelValue", val);
            context.emit("onUpdate:modelValue", val);
        }, { immediate: true })
        return () => <div class="low-code-color-picker-container flex items-center">
            <ElColorPicker v-model={colorValue.value} {...props} />
            <div class="color-opener" style={{ backgroundColor: props.modelValue }}></div>
            <span class="color-text">{props.modelValue}</span>
        </div>
    },


})
