import useWindowResize from "./useWindowResize";
const usePageScale = (el: Element) => {
    let width = 1920;
    let height = 1080;
    let zoomX = document.documentElement.offsetWidth / width;

    let zoomY = document.documentElement.offsetHeight / height;
    useScaleType(el, zoomX, zoomY);
    useWindowResize(() => {
        zoomX = document.documentElement.offsetWidth / width;
        zoomY = document.documentElement.offsetHeight / height;
        useScaleType(el, zoomX, zoomY);
    })
    // window.onresize = () => {
    //     zoomX = document.documentElement.offsetWidth / width;
    //     zoomY = document.documentElement.offsetHeight / height;
    //     useScaleType(zoomX, zoomY);
    // };
};
//缩放
const useScaleType = (el: Element, zoomX: number, zoomY: number) => {
    if (el) {
        el.setAttribute('style', `--page-scale-zoomX: ${zoomX}`);
        el.setAttribute('style', `--page-scale-zoomY: ${zoomY}`);
        // bigScreen.style.transform = "scale(" + zoomX + "," + zoomY + ")";
        // bigScreen.style.transformOrigin = "left top";

        // bigScreen.style.msTransform = "scale(" + zoomX + "," + zoomY + ")";
        // bigScreen.style.WebkitTransform = "scale(" + zoomX + "," + zoomY + ")";
        // bigScreen.style.MozTransform = "scale(" + zoomX + "," + zoomY + ")";
        // bigScreen.style.OTransform = "scale(" + zoomX + "," + zoomY + ")";
        // bigScreen.style.msTransformOrigin = "left top";
        // bigScreen.style.WebkitTransformOrigin = "left top";
        // bigScreen.style.MozTransformOrigin = "left top";
        // bigScreen.style.OTransformOrigin = "left top";
    }

};

export default
    usePageScale
