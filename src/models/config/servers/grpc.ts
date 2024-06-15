import {GrpcResourceTypePrefix} from "@/models/config/resources/resource_types.ts";
import {appConfig} from "@/models/config/appConfig.ts";
import {Node} from "@/api/grpc/matreshka-be_api.pb.ts";
import {grpcServer} from "@/models/config/servers/servers.ts";

export function mapGrpcServer(cfg: appConfig, root: Node) {
    const grpcSrv: grpcServer = {} as grpcServer

    if (!root.name) {
        return
    }

    grpcSrv.server_name = root.name.slice(root.name.indexOf('GRPC')).toLowerCase()
    grpcSrv.server_type = GrpcResourceTypePrefix

    root.innerNodes?.map(
        (n) => {
            if (!n.name || !root.name) {
                return
            }

            const fieldName = n.name.slice(root.name.length + 1)

            switch (fieldName) {
                default:
                    console.log(fieldName)
            }
        }
    )
    cfg.server.push(grpcSrv)
}
