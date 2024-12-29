import {AppInfo} from "@/models/AppConfig/info/appInfo.ts";
import {OneOfResource} from "@/models/AppConfig/resources/resource.ts";
import {Server} from "@/models/AppConfig/servers/servers.ts";

export type AppConfig = {
    app_info: AppInfo
    data_sources: OneOfResource[]
    servers: Server[]
    environment: { [key: string]: string }
}


