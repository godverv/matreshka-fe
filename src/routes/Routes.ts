import Home from "@/pages/HomePage.vue";
import NotFound from "@/pages/NotFoundPage.vue";
import DisplayConfigPage from "@/pages/DisplayConfigPage.vue";

import {createRouter, createWebHistory} from "vue-router";
import NewConfigPage from "@/pages/NewConfigPage.vue";

export const HomeUri = "/"
export const NotFoundUri = "/:pathMatch(.*)*"
export const ConfigPageUri = "/:name"
export const NewConfigPageUri = "/new"

export const routes = [
    {path: NotFoundUri, component: NotFound},
    {path: HomeUri, component: Home},
    {path: ConfigPageUri, component: DisplayConfigPage, props: true },
    {path: NewConfigPageUri, component: NewConfigPage}
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
