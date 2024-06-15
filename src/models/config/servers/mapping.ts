import {appConfig} from "@/models/config/appConfig.ts";
import {Node} from "@/api/grpc/matreshka-be_api.pb.ts";
import {extractType} from "@/models/config/common.ts";
import {GrpcServerTypePrefix, RestServerTypePrefix} from "@/models/config/servers/server_types.ts";
import {mapGrpcServer} from "@/models/config/servers/grpc.ts";
import {mapRestServer} from "@/models/config/servers/rest.ts";

const serversMapping = new Map<string, (cfg: appConfig, node: Node) => void>()
serversMapping.set(GrpcServerTypePrefix, mapGrpcServer)
serversMapping.set(RestServerTypePrefix,mapRestServer)

export function mapServer(cfg: appConfig, root: Node) {
    root.innerNodes?.map((n)=> {
        const resType = extractType(n, root)
        if (!resType) {
            return;
        }

        const mapper = serversMapping.get(resType)
        if (!mapper) {
            return
        }

        mapper(cfg, n)

        return
    })
}
