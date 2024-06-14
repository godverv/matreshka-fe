import {GrpcResourceTypePrefix} from "@/models/config/resources/resource_types.ts";
import {appConfig} from "@/models/config/appConfig.ts";
import {Node} from "@/api/grpc/matreshka-be_api.pb.ts";
import {resourceGrpc} from "@/models/config/resources/resource.ts";
import {extractStringValue} from "@/models/config/common.ts";

export function mapGrpc(cfg: appConfig, root: Node) {
    const grpcClient: resourceGrpc = {} as resourceGrpc

    if (!root.name) {
        return
    }

    grpcClient.resource_name = root.name.slice(root.name.indexOf('POSTGRES')).toLowerCase()
    grpcClient.resource_type = GrpcResourceTypePrefix

    root.innerNodes?.map(
        (n) => {
            if (!n.name || !root.name) {
                return
            }

            const fieldName = n.name.slice(root.name.length + 1)

            switch (fieldName) {
                case 'CONNECTION-STRING':
                    grpcClient.connection_string = extractStringValue(n)
                    break
                case 'MODULE':
                    grpcClient.module = extractStringValue(n)
                    break
            }
        }
    )
    cfg.data_sources.push(grpcClient)
}
