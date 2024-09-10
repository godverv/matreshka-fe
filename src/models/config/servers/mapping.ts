import {appConfig} from "@/models/config/appConfig.ts";
import {Node} from "@/api/grpc/matreshka-be_api.pb.ts";
import {fsHandler, grpcHandler, Server} from "@/models/config/servers/servers.ts";
import {configValue} from "@/models/config/common.ts";

export function mapServer(cfg: appConfig, root: Node) {
    if (!root.innerNodes) {
        return
    }

    root.innerNodes
        .map((n) => {
            const parts = n.name.split("_")

            const server: Server = {} as Server
            server.port = Number(parts[1])
            server.grpc = []
            server.fs = []

            if (n.innerNodes) {
                n.innerNodes.map(
                    (subNod) =>
                        extractServerInfo(server, subNod, n.name))
            }

            cfg.server.push(server)
        })
}


function extractServerInfo(trg: Server, node: Node, rootPrefix: string) {
    if (!node.innerNodes) {
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
        default:
        // TODO http сервер
    }
}

function extractGrpcHandler(nodes: Node[], rootPrefix: string): grpcHandler {
    const gh = {} as grpcHandler
    nodes.map((n) => {
        const part = n.name.substring(rootPrefix.length + 1)
        switch (part) {
            case 'GATEWAY':
                gh.gateway = {
                    name: n.name,
                    value: n.value,
                } as configValue<string>
                break
            case 'MODULE':
                gh.module = {
                    name: n.name,
                    value: n.value,
                } as configValue<string>
                break
        }
    })

    return gh
}

function extractFsHandler(nodes: Node[], rootPrefix: string): fsHandler {
    const fsH = {} as fsHandler
    nodes.map((n) => {
        const part = n.name.substring(rootPrefix.length + 1)
        switch (part) {
            case 'DIST':
                fsH.dist = {
                    name: n.name,
                    value: n.value,
                } as configValue<string>
        }
    })

    return fsH
}
