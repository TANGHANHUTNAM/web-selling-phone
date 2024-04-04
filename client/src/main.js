import { createApp } from 'vue'
import App from './App.vue'
// import store from "./stores"
// import CSS
import "./assets/styles/reset.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./assets/styles/index.css"
// import router
import router from "./router/index"

import {registerGlobalComponent} from "./utils/import"

const app = createApp(App);

registerGlobalComponent(app);

app.use(router);
// app.use(store);
app.mount('#app')
