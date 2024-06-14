import {configValue} from "@/models/config/common.ts";

export type appInfo = {
    name: configValue<string>
    version: configValue<string>
    startup_duration: configValue<string>
}
