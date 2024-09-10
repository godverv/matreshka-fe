import {createApp} from 'vue'
import './style.css'
import App from "./App.vue";

import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import {router} from "@/routes/Routes.ts";


createApp(App)
    .use(router)
    .use(createPinia())
    .use(PrimeVue)
    .mount('#app')
