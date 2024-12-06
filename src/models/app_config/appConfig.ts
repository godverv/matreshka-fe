import {AppInfo} from "@/models/app_config/info/appInfo.ts";
import {OneOfResource} from "@/models/app_config/resources/resource.ts";
import {Server} from "@/models/app_config/servers/servers.ts";

export type AppConfig = {
    app_info: AppInfo
    data_sources: OneOfResource[]
    servers: Server[]
    environment: { [key: string]: string }
}


