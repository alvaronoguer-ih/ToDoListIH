/* eslint-disable */

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import App from './App.vue';
import router from './router';

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(VueSweetalert2).mount('#app');
