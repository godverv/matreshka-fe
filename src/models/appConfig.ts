import {oneOfResource} from "@/models/resource.ts";
import {oneOfServer} from "@/models/servers.ts";

export type appConfig = {
    app_info: appInfo
    data_sources: oneOfResource[]
    server: oneOfServer[]
    environment: { [key: string]: string }
}

export type appInfo = {
    name: configValue
    version: configValue
    startup_duration: configValue
}

export type configValue = {
    name: string
    value: string
}
