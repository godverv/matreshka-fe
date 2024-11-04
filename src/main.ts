import {createApp} from 'vue'
import './style.css'
import App from "./App.vue";

import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import {router} from "@/routes/Routes.ts";
import ToastService from 'primevue/toastservice';
import 'primeicons/primeicons.css';

createApp(App)
    .use(router)
    .use(createPinia())
    .use(PrimeVue, {
        theme: {
            preset: Aura,
            options: {
                prefix: 'p',
                darkModeSelector: 'system',
                cssLayer: false
            }
        }
    })
    .use(ToastService)
    .mount('#app')
