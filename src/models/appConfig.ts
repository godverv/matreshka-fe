import {oneOfResource} from "@/models/resource.ts";
import {oneOfServer} from "@/models/servers.ts";
import {configValue} from "@/models/common.ts";

export type appConfig = {
    app_info: appInfo
    data_sources: oneOfResource[]
    server: oneOfServer[]
    environment: { [key: string]: string }
}

export type appInfo = {
    name: configValue<string>
    version: configValue<string>
    startup_duration: configValue<string>
}

