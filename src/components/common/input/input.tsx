

import { ref, Ref, defineComponent, watch } from "vue";
import { ElInput } from "element-plus";
import { inputProps } from "element-plus/lib/components/input/index";
import 'element-plus/es/components/input/style/css'
import "./input.less";
export default defineComponent({
    name: "color",
    props: inputProps,
    emits: {
        'update:modelValue': (val?: string) => true
    },
    setup(props, context) {
        const inputValue: Ref<string> = ref(props.modelValue);
        watch(inputValue, (val) => {
            context.emit("update:modelValue", val);
        })
        return () => <ElInput class={"low-code-input"} v-model={inputValue.value} />
    },


})
