import {createApp} from 'vue'
import './style.css'
import App from "./App.vue";

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import {router} from "@/app/routes/routes.ts";
import ToastService from 'primevue/toastservice';
import 'primeicons/primeicons.css';

import {createPinia} from "pinia";

createApp(App)
    .use(createPinia())
    .use(router)
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
