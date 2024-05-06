import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import App from './App.vue'
// import CSS
import "./assets/styles/reset.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./assets/styles/index.css"
import "bootstrap/dist/js/bootstrap.min.js"
// import router
import router from "./router/index"
const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(pinia);
app.mount('#app')

