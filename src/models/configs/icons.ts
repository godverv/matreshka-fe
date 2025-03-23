import unknown from "@/assets/svg/errorconfig.svg";
import matreshka from "@/assets/svg/matreshka.svg";

import {ConfigType} from "@/models/configs/types.ts";

const configIconMap = new Map<ConfigType, string>([
    [ConfigType.AppConfig, matreshka]
])

export function getConfigIcon(configType: ConfigType) {
    const icon = configIconMap.get(configType)
    if (icon) {
        console.log(icon)
        return icon
    }

    return unknown
}
