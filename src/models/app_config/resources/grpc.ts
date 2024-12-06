import {ResourceType} from "@/models/app_config/resources/resource_types.ts";
import {AppConfig} from "@/models/app_config/appConfig.ts";
import {Node} from "matreshka-api/api/grpc/matreshka-be_api.pb.ts";
import {ResourceGrpc} from "@/models/app_config/resources/resource.ts";
import {extractStringValue} from "@/models/app_config/common.ts";

export function mapGrpc(cfg: AppConfig, root: Node) {
    if (!root.name) {
        return
    }

    const grpcClient: ResourceGrpc = {} as ResourceGrpc

    grpcClient.resource_name = root.name.slice(root.name.indexOf('GRPC')).toLowerCase()
    grpcClient.type = ResourceType.Grpc

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
