
import {Node} from "@/processes/api/api/grpc/matreshka-be_api.pb.ts";
import {AppConfig} from "@/models/config/appConfig.ts";
import {mapResource} from "@/models/config/resources/mapping.ts";

import {mapAppInfo} from "@/models/config/info/mapping.ts";
import {mapServer} from "@/models/config/servers/mapping.ts";

const fromApiMapping = new Map<string, (cfg: AppConfig, node: Node) => void>()
fromApiMapping.set('APP-INFO', mapAppInfo)
fromApiMapping.set('DATA-SOURCES', mapResource)
fromApiMapping.set('SERVERS', mapServer)

export function mapNodeToConfig(cfg: AppConfig, node: Node) {
    if (!node.name) {
        return
    }
    const doMap = fromApiMapping.get(node.name)

    if (!doMap) {
        return
    }

    doMap(cfg, node)
}