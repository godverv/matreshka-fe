import {appConfig, configValue} from "@/models/appConfig.ts";

import {Node} from "@/api/grpc/matreshka-be_api.pb.ts";

const fromApiMapping = new Map<string, (cfg: appConfig, node: Node) => void>()

fromApiMapping.set('APP-INFO', (cfg: appConfig, root: Node)=>{
    root.innerNodes?.map((n)=> {
        if (!n.name || !root.name) {
            return;
        }

        const name = n.name.slice(root.name.length+1)
        switch (name) {
            case "NAME":
                cfg.app_info.name = extractValue(n)
                break
            case "VERSION":
                cfg.app_info.version = extractValue(n)
                break
            case "STARTUP-DURATION":
                cfg.app_info.startup_duration = extractValue(n)
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
        // TODO
        cfg = cfg
        const name = n.name.slice(root.name.length+1)
        switch (name) {
            default:
                console.log(n)
        }

        return
    })
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

function extractValue(n: Node) : configValue {
    return {
        name: n.name ?? "",
        value: n.value ?? ""
    }
}
