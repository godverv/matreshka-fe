import {ConfigValue} from "@/models/app_config/common.ts";

export type ServicesList = {
    servicesInfo: AppInfo[]
    total: number
}

export type AppInfo = {
    name: ConfigValue<string>
    version: ConfigValue<string>
    startup_duration?: ConfigValue<string>
    updated_at?: ConfigValue<Date>
}
