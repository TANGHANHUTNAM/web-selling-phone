import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import { format } from 'date-fns';
import 'primevue/resources/themes/aura-light-green/theme.css'
import App from './App.vue'
// import CSS
import "./assets/styles/reset.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./assets/styles/index.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Swal from "sweetalert2";

window.Swal = Swal;
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

window.Toast = Toast;
// import router
import router from "./router/index"
const pinia = createPinia()
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(PrimeVue);
app.config.globalProperties.$formatDate = function(date) {
  if (!date) return '';
  return format(new Date(date), 'dd/MM/yyyy HH:mm');
};
app.mount('#app')

