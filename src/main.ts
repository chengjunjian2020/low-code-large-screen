import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:svg-icons-register';
import './index.css'


// Router
import { Router } from './router';


const app = createApp(App);

app.use(Router);

app.mount('#app');
