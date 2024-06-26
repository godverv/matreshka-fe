import {appConfig} from "@/models/config/appConfig.ts";
import {Node} from "@/api/grpc/matreshka-be_api.pb.ts";
import {serverGrpc} from "@/models/config/servers/servers.ts";
import {extractNumberValue} from "@/models/config/common.ts";
import {GrpcServerTypePrefix} from "@/models/config/servers/server_types.ts";

export function mapGrpcServer(cfg: appConfig, root: Node) {
    if (!root.name) {
        return
    }

    const grpcSrv: serverGrpc = {} as serverGrpc

    grpcSrv.server_name = root.name.slice(root.name.indexOf('GRPC')).toLowerCase()
    grpcSrv.server_type = GrpcServerTypePrefix

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
