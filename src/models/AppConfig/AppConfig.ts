import {AppInfoClass} from "@/models/AppConfig/Info/AppInfo.ts";
import {DataSourceClass} from "@/models/AppConfig/Resources/Resource.ts";
import {Server} from "@/models/AppConfig/servers/servers.ts";

export type AppConfig = {
    app_info: AppInfoClass
    data_sources: DataSourceClass[]
    servers: Server[]
    environment: { [key: string]: string }
}


export class AppConfigClass {
    appInfo: AppInfoClass
    dataSources: DataSourceClass[]

    constructor(appInfo: AppInfoClass, dataSources: DataSourceClass[]) {
        this.appInfo = appInfo;
        this.dataSources = dataSources;
    }
}
