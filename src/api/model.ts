import {appConfig} from "@/models/appConfig.ts";

import {Node} from "@/api/grpc/matreshka-be_api.pb.ts";
import {resourcePostgres} from "@/models/resource.ts";
import {configValue} from "@/models/common.ts";

const fromApiMapping = new Map<string, (cfg: appConfig, node: Node) => void>()
fromApiMapping.set('APP-INFO', (cfg: appConfig, root: Node)=>{
    root.innerNodes?.map((n)=> {
        if (!n.name || !root.name) {
            return;
        }

        const name = n.name.slice(root.name.length+1)
        switch (name) {
            case "NAME":
                cfg.app_info.name = extractStringValue(n)
                break
            case "VERSION":
                cfg.app_info.version = extractStringValue(n)
                break
            case "STARTUP-DURATION":
                cfg.app_info.startup_duration = extractStringValue(n)
                break
        }

        return
    })
})
fromApiMapping.set('DATA-SOURCES', (cfg: appConfig, root: Node)=>{
    root.innerNodes?.map((n)=> {
        if (!n.name || !root.name) {
            return;
        }

        const name = n.name.slice(root.name.length+1)
        const mapper = resourceMapping.get(name)

        if (!mapper) {
            return
        }

        mapper(cfg, n)

        return
    })
})

const resourceMapping = new Map<string, (cfg: appConfig, node: Node) => void>()
resourceMapping.set('POSTGRES', (cfg: appConfig, root: Node)=>{
    const pg : resourcePostgres  = {} as resourcePostgres
    if (!root.name) {
        return
    }

    pg.resource_name = root.name.slice(root.name.indexOf('POSTGRES')).toLowerCase()
    root.innerNodes?.map(
        (n)=>{
            if (!n.name || !root.name) {
                return
            }

            const fieldName = n.name.slice(root.name.length+1)
            switch (fieldName) {
                case "HOST":
                    pg.host = extractStringValue(n)
                    break
                case "PORT":
                    pg.port = extractNumberValue(n)
                    break
                case "USER":
                    pg.user = extractStringValue(n)
                    break
                case "PWD":
                    pg.pwd = extractStringValue(n)
                    break
                case "DB-NAME":
                    pg.name = extractStringValue(n)
                    break
                case "SSL-MODE":
                    pg.ssl_mode = extractStringValue(n)
                    break
            }
        }
    )
    cfg.data_sources.push(pg)
})

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

function extractStringValue(n: Node) : configValue<string> {
    return {
        name: n.name ?? "",
        value: n.value ?? ""
    }
}
function extractNumberValue(n: Node) : configValue<number> {
    return {
        name: n.name ?? "",
        value: Number(n.value) ?? 0
    }
}
