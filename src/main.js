/* eslint-disable */

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import App from './App.vue';
import router from './router';

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app');
