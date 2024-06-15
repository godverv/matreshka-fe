import {appConfig} from "@/models/config/appConfig.ts";
import {Node} from "@/api/grpc/matreshka-be_api.pb.ts";
import {serverGrpc} from "@/models/config/servers/servers.ts";
import {extractNumberValue} from "@/models/config/common.ts";
import {RestServerTypePrefix} from "@/models/config/servers/server_types.ts";

export function mapRestServer(cfg: appConfig, root: Node) {
    if (!root.name) {
        return
    }

    const grpcSrv: serverGrpc = {} as serverGrpc

    grpcSrv.server_name = root.name.slice(root.name.indexOf('REST')).toLowerCase()
    grpcSrv.server_type = RestServerTypePrefix

    root.innerNodes?.map(
        (n) => {
            if (!n.name || !root.name) {
                return
            }

            const fieldName = n.name.slice(root.name.length + 1)
            switch (fieldName) {
                case 'PORT':
                    grpcSrv.port = extractNumberValue(n)
                    break
            }
        }
    )
    cfg.server.push(grpcSrv)
}
