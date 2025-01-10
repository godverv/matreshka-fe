import {AppInfoClass} from "@/models/AppConfig/Info/AppInfo.ts";
import {DataSourceClass} from "@/models/AppConfig/Resources/Resource.ts";
import {ServerClass} from "@/models/AppConfig/Servers/Servers.ts";

export class AppConfigClass {
    appInfo: AppInfoClass
    dataSources: DataSourceClass[]
    servers: ServerClass[]

    constructor(appInfo: AppInfoClass, dataSources: DataSourceClass[], servers: ServerClass[]) {
        this.appInfo = appInfo;
        this.dataSources = dataSources;
        this.servers = servers;
    }

    public isChanged(): boolean {
        return this.appInfo.isChanged()
    }

    public getChangedDataSources(): string[] {
        const changedDataSourceNames: string[] =[]
        this.dataSources.map(ds => {
            if (ds.isChanged()) {
                changedDataSourceNames.push(ds.resourceName)
            }
        })

        return changedDataSourceNames
    }

    public getChangedServers() : string[] {
        const changedServerNames: string[] = []
        this.servers.map(serv => {
            if (serv.isChanged()) {
                changedServerNames.push(serv.name)
            }
        })
        return changedServerNames
    }
}
