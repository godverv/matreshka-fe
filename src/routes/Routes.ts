import Home from "@/pages/HomePage.vue";
import NotFound from "@/pages/NotFoundPage.vue";
import DisplayConfigPage from "@/pages/DisplayConfigPage.vue";

import {createRouter, createWebHistory} from "vue-router";
import NewConfigPage from "@/pages/NewConfigPage.vue";

export const HomeUri = "/"
export const DisplayConfigPageUri = "/config/"
export const NewConfigPageUri = "/new/"

export const routes = [
    {path: "/:pathMatch(.*)*", component: NotFound},
    {path: HomeUri, component: Home},

    {path: NewConfigPageUri, component: NewConfigPage},
    {path: DisplayConfigPageUri+":name/", component: DisplayConfigPage, props: true}
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})



export function RouteToConfigDisplay(serviceName: string) {
    router.
    push(DisplayConfigPageUri+serviceName).
    then()
}
