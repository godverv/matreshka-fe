import Home from "@/pages/Home.vue";
import NotFound from "@/pages/NotFound.vue";
import Config from "@/pages/Config.vue";

export const HomeUrl = "/"
export const NotFoundURl = "/:pathMatch(.*)*"
export const ConfigPage = "/:name"

export const routes = [
    {path: NotFoundURl, component: NotFound},
    {path: HomeUrl, component: Home},
    {path: ConfigPage, component: Config, props: true },
]

