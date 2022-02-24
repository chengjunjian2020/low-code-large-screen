import { createApp } from 'vue'
import * as ElIconModules from '@element-plus/icons-vue'
import App from './App.vue'
import 'virtual:svg-icons-register';
import './index.css'


// Router
import { Router } from './router';


const app = createApp(App);

app.use(Router);

//全局导入方式 类型兼容
// function isValidKey(key: string | number | symbol, object: object): key is keyof typeof object {
//     return key in object;
// }
// for (const iconName in ElIconModules) {
//     const valid = isValidKey(iconName, ElIconModules);
//     if (valid) {
//         app.component(iconName, ElIconModules[iconName])
//     }
// }
app.mount('#app');
