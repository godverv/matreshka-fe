import {appInfo} from "@/models/config/info/appInfo.ts";
import {oneOfResource} from "@/models/config/resources/resource.ts";
import {Server} from "@/models/config/servers/servers.ts";

export type appConfig = {
    app_info: appInfo
    data_sources: oneOfResource[]
    server: Server[]
    environment: { [key: string]: string }
}



