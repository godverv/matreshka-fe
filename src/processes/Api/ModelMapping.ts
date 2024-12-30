import {Node} from "matreshka-api/api/grpc/matreshka-be_api.pb.ts";
import {AppConfig, AppConfigClass} from "@/models/AppConfig/AppConfig.ts";
import {mapResource} from "@/models/AppConfig/resources/mapping.ts";

import {mapAppInfo} from "@/models/AppConfig/Info/Mapping.ts";
import {mapServer} from "@/models/AppConfig/servers/mapping.ts";
import {AppInfoClass} from "@/models/AppConfig/Info/AppInfo.ts";

const fromApiMapping = new Map<string, (cfg: AppConfig, node: Node) => void>()
fromApiMapping.set('DATA-SOURCES', mapResource)
fromApiMapping.set('SERVERS', mapServer)

export function mapNodeToConfig(cfg: AppConfig, node: Node) {
    if (!node.name) {
        return
    }
    const doMap = fromApiMapping.get(node.name)

    let appInfo: AppInfoClass | undefined;

    if (!doMap) {
        switch (node.name) {
            case 'APP-INFO':
                appInfo = mapAppInfo(node)
        }
    } else {
        doMap(cfg, node)
        return
    }

    const out = {
        app_info: appInfo
    } as AppConfig

    console.log(out)
}


export function parseAppConfigFromEnv(root: Node): AppConfigClass {
    let appInfo: AppInfoClass | undefined;

    root.innerNodes?.map((node: Node) => {
        switch (node.name) {
            case 'APP-INFO':
                appInfo = mapAppInfo(node)
        }
    })

    if (!appInfo) {
        throw {message: "No app info found in env"}
    }

    return new AppConfigClass(appInfo)
}
