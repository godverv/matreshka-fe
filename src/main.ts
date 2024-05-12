import {createApp} from 'vue'
import './style.css'
import App from "./App.vue";

import {createRouter, createWebHistory} from 'vue-router'

import {routes} from "./routes/Routes.ts";
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/aura-light-green/theme.css'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).
    use(router).
    use(PrimeVue).
    mount('#app')
