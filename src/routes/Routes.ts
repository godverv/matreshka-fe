import Home from "@/pages/HomePage.vue";
import NotFound from "@/pages/NotFoundPage.vue";
import Config from "@/pages/ConfigPage.vue";

import {createRouter, createWebHistory} from "vue-router";

export const HomeUri = "/"
export const NotFoundUri = "/:pathMatch(.*)*"
export const ConfigPageUri = "/:name"

export const routes = [
    {path: NotFoundUri, component: NotFound},
    {path: HomeUri, component: Home},
    {path: ConfigPageUri, component: Config, props: true },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
