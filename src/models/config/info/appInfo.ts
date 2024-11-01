import {ConfigValue} from "@/models/config/common.ts";

export type AppInfo = {
    name: ConfigValue<string>
    version: ConfigValue<string>
    startup_duration: ConfigValue<string>
}
