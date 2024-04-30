import { createApp } from 'vue'
import App from './App.vue'
// import CSS
import "./assets/styles/reset.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./assets/styles/index.css"
import "bootstrap/dist/js/bootstrap.min.js"
// import router
import router from "./router/index"

const app = createApp(App);
app.use(router);
app.mount('#app')

