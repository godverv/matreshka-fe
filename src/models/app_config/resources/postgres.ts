import {AppConfig} from "@/models/app_config/appConfig.ts";
import {Node} from "matreshka-api/api/grpc/matreshka-be_api.pb.ts";
import {ResourcePostgres} from "@/models/app_config/resources/resource.ts";
import {extractNumberValue, extractStringValue} from "@/models/shared/common.ts";;
import {ResourceType} from "@/models/app_config/resources/resource_types.ts";

export function mapPostgres(cfg: AppConfig, root: Node) {
    const pg: ResourcePostgres = {} as ResourcePostgres

    if (!root.name) {
        return
    }

    pg.resource_name = root.name.slice(root.name.indexOf('POSTGRES')).toLowerCase()
    pg.type = ResourceType.Postgres

    root.innerNodes?.map(
        (n) => {
            if (!n.name || !root.name) {
                return
            }

            const fieldName = n.name.slice(root.name.length + 1)
            switch (fieldName) {
                case "HOST":
                    pg.host = extractStringValue(n)
                    break
                case "PORT":
                    pg.port = extractNumberValue(n)
                    break
                case "USER":
                    pg.user = extractStringValue(n)
                    break
                case "PWD":
                    pg.pwd = extractStringValue(n)
                    break
                case "DB-NAME":
                    pg.name = extractStringValue(n)
                    break
                case "SSL-MODE":
                    pg.ssl_mode = extractStringValue(n)
                    break
            }
        }
    )
    cfg.data_sources.push(pg)
}
