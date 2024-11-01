import {AppInfo} from "@/models/config/info/appInfo.ts";
import {OneOfResource} from "@/models/config/resources/resource.ts";
import {Server} from "@/models/config/servers/servers.ts";

export type AppConfig = {
    app_info: AppInfo
    data_sources: OneOfResource[]
    servers: Server[]
    environment: { [key: string]: string }
}


