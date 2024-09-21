import {ResourceType} from "@/models/config/resources/resource_types.ts";
import {appConfig} from "@/models/config/appConfig.ts";
import {Node} from "@/api/grpc/matreshka-be_api.pb.ts";
import {resourceRedis} from "@/models/config/resources/resource.ts";
import {extractNumberValue, extractStringValue} from "@/models/config/common.ts";

export function mapRedis(cfg: appConfig, root: Node) {
    const rds: resourceRedis = {} as resourceRedis

    if (!root.name) {
        return
    }

    rds.resource_name = root.name.slice(root.name.indexOf('REDIS')).toLowerCase()
    rds.type = ResourceType.Redis

    root.innerNodes?.map(
        (n) => {
            if (!n.name || !root.name) {
                return
            }

            const fieldName = n.name.slice(root.name.length + 1)
            switch (fieldName) {
                case "HOST":
                    rds.host = extractStringValue(n)
                    break
                case "PORT":
                    rds.port = extractNumberValue(n)
                    break
                case "USER":
                    rds.user = extractStringValue(n)
                    break
                case "PWD":
                    rds.pwd = extractStringValue(n)
                    break
                case "DB":
                    rds.db = extractNumberValue(n)
            }
        }
    )
    cfg.data_sources.push(rds)
}
