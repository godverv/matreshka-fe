
import {Node} from "@/api/grpc/matreshka-be_api.pb.ts";
import {appConfig} from "@/models/config/appConfig.ts";
import {mapResource} from "@/models/config/resources/mapping.ts";

import {mapAppInfo} from "@/models/config/info/mapping.ts";
import {mapServer} from "@/models/config/servers/mapping.ts";

const fromApiMapping = new Map<string, (cfg: appConfig, node: Node) => void>()
fromApiMapping.set('APP-INFO', mapAppInfo)
fromApiMapping.set('DATA-SOURCES', mapResource)
fromApiMapping.set('SERVERS', mapServer)
export function mapNodeToConfig(cfg: appConfig, node: Node) {
    if (!node.name) {
        return
    }
    const map = fromApiMapping.get(node.name)

    if (!map) {
        return
    }
    map(cfg, node)
}
