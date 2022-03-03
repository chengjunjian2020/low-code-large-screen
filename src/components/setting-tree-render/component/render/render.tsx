import { defineComponent } from 'vue';
import props from "./props";
import "./render.less";
export default defineComponent({
    props,
    setup(props, context) {
        return () => (
            <div class="low-code-form-render"></div>
        )
    }
})

