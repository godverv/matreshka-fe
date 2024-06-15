import {createApp} from 'vue'
import './style.css'
import App from "./App.vue";

import { createPinia } from 'pinia'

import {createRouter, createWebHistory} from 'vue-router'
import {routes} from "./routes/Routes.ts";

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .use(createPinia())
    .use(PrimeVue)
    .mount('#app')
