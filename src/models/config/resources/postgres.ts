import {PostgresResourceTypePrefix} from "@/models/config/resources/resource_types.ts";
import {appConfig} from "@/models/config/appConfig.ts";
import {Node} from "@/api/grpc/matreshka-be_api.pb.ts";
import {resourcePostgres} from "@/models/config/resources/resource.ts";
import {extractNumberValue, extractStringValue} from "@/models/config/common.ts";

export function mapPostgres(cfg: appConfig, root: Node) {
    const pg: resourcePostgres = {} as resourcePostgres

    if (!root.name) {
        return
    }

    pg.resource_name = root.name.slice(root.name.indexOf('POSTGRES')).toLowerCase()
    pg.resource_type = PostgresResourceTypePrefix

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
