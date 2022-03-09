import { nextTick, onUnmounted, ref } from "vue";
import { useDebounceFn } from '@vueuse/core'
function useWindowResize(callback: CallableFunction) {
    const width = ref(0);
    const height = ref(0);

    function onResize() {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
    }

    nextTick(() => {
        const debouncedFn = useDebounceFn(() => {
            onResize();
            callback(width, height);
        })
        window.addEventListener("resize", debouncedFn);
    });

    onUnmounted(() => {
        window.removeEventListener("resize", () => {
            onResize();
        });
    });

    // return {
    //     width,
    //     height
    // };
}

export default useWindowResize;