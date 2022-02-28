import { ref, Ref, defineComponent, watch } from "vue";
import { ElRadioGroup, ElRadio } from "element-plus";
import { props } from "./radio.d";
import 'element-plus/es/components/radio-group/style/css';
import 'element-plus/es/components/radio/style/css';
import "./radio.less";
export default defineComponent({
    name: "color",
    props: props,
    emits: {
        'update:modelValue': (val?: string) => true
    },
    setup(props, context) {
        const radioValue: Ref<string> = ref("");
        watch(radioValue, (val) => {
            context.emit("update:modelValue", val);
        }, { immediate: true })
        const { size, radioList } = props;
        console.log(size);
        return () => <ElRadioGroup class={"low-code-group-radio"} size={size} v-model={radioValue.value}>
            {
                radioList.map((item, index) => <ElRadio class={"low-code-radio"} key={index} label={item.value}>{item.name}</ElRadio>)
            }
        </ElRadioGroup>
    },
})
