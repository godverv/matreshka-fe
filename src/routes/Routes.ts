import Home from "@/pages/HomePage.vue";
import NotFound from "@/pages/NotFoundPage.vue";
import Config from "@/pages/ConfigPage.vue";

export const HomeUrl = "/"
export const NotFoundURl = "/:pathMatch(.*)*"
export const ConfigPage = "/:name"

export const routes = [
    {path: NotFoundURl, component: NotFound},
    {path: HomeUrl, component: Home},
    {path: ConfigPage, component: Config, props: true },
]

