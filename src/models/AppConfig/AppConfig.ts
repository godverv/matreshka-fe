import {AppInfoClass} from "@/models/AppConfig/Info/AppInfo.ts";
import {OneOfResource} from "@/models/AppConfig/resources/resource.ts";
import {Server} from "@/models/AppConfig/servers/servers.ts";

export type AppConfig = {
    app_info: AppInfoClass
    data_sources: OneOfResource[]
    servers: Server[]
    environment: { [key: string]: string }
}


export class AppConfigClass {
    appInfo: AppInfoClass

    constructor(appInfo: AppInfoClass) {
        this.appInfo = appInfo
    }
}
