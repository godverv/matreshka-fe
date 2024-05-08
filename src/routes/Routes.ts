import Home from "../pages/Home.vue";
import NotFound from "../pages/NotFound.vue";

export const HomeUrl = "/"
export const NotFoundURl = "/:pathMatch(.*)*"

export const routes = [
    {path: NotFoundURl, component: NotFound},
    {path: HomeUrl, component: Home},
]

