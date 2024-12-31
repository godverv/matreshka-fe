import {AppInfoClass} from "@/models/AppConfig/Info/AppInfo.ts";
import {DataSourceClass} from "@/models/AppConfig/Resources/Resource.ts";
import {ServerClass} from "@/models/AppConfig/servers/servers.ts";

export class AppConfigClass {
    appInfo: AppInfoClass
    dataSources: DataSourceClass[]
    servers: ServerClass[]

    constructor(appInfo: AppInfoClass, dataSources: DataSourceClass[], servers: ServerClass[]) {
        this.appInfo = appInfo;
        this.dataSources = dataSources;
        this.servers = servers;
    }
}
