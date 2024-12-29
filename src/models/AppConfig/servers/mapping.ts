import {AppConfig} from "@/models/AppConfig/appConfig.ts";
import {Node} from "matreshka-api/api/grpc/matreshka-be_api.pb.ts";
import {fsHandler, grpcHandler, Server} from "@/models/AppConfig/servers/servers.ts";
import {ConfigValue} from "@/models/shared/common.ts";

export function mapServer(cfg: AppConfig, root: Node) {
    if (!root.innerNodes) {
        return
    }

    root.innerNodes
        .map((n) => {
            if (!n.name) {
                return
            }

            const parts = n.name.split("_")

            const server: Server = {} as Server
            server.name = parts[1]
            server.grpc = []
            server.fs = []

            if (n.innerNodes) {
                n.innerNodes.map(
                    (subNod) => {
                        if (n.name) extractServerInfo(server, subNod, n.name)
                    })
            }

            cfg.servers.push(server)
        })
}


function extractServerInfo(trg: Server, node: Node, rootPrefix: string) {
    if (!node.innerNodes || !node.name) {
        return
    }

    const path = node.name.substring(rootPrefix.length + 1)
    switch (path) {
        case '/{GRPC}':
            trg.grpc.push(
                extractGrpcHandler(
                    node.innerNodes, node.name))
            break
        case '/{FS}':
            trg.fs.push(
                extractFsHandler(
                    node.innerNodes, node.name))

            break
        case 'PORT':
            trg.port = {
                envName: node.name,
                value: Number(node.value),
            } as ConfigValue<number>
            break
        default:
        // TODO http сервер
    }
}

function extractGrpcHandler(nodes: Node[], rootPrefix: string): grpcHandler {
    const gh = {} as grpcHandler
    nodes.map((n) => {
        if (!n.name) {
            return
        }

        const part = n.name.substring(rootPrefix.length + 1)
        switch (part) {
            case 'GATEWAY':
                gh.gateway = {
                    envName: n.name,
                    value: n.value,
                } as ConfigValue<string>
                break
            case 'MODULE':
                gh.module = {
                    envName: n.name,
                    value: n.value,
                } as ConfigValue<string>
                break
        }
    })

    return gh
}

function extractFsHandler(nodes: Node[], rootPrefix: string): fsHandler {
    const fsH = {} as fsHandler
    nodes.map((n) => {
        if (!n.name) {
            return
        }

        const part = n.name.substring(rootPrefix.length + 1)
        switch (part) {
            case 'DIST':
                fsH.dist = {
                    envName: n.name,
                    value: n.value,
                } as ConfigValue<string>
        }
    })

    return fsH
}
