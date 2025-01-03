import {ResourceType} from "@/models/app_config/resources/resource_types.ts";
import {AppConfig} from "@/models/app_config/appConfig.ts";
import {Node} from "matreshka-api/api/grpc/matreshka-be_api.pb.ts";
import {ResourceSqlite} from "@/models/app_config/resources/resource.ts";
import {extractStringValue} from "@/models/shared/common.ts";;

export function mapSqlite(cfg: AppConfig, root: Node) {
    const sqlite: ResourceSqlite = {} as ResourceSqlite

    if (!root.name) {
        return
    }

    sqlite.resource_name = root.name.slice(root.name.indexOf('SQLITE')).toLowerCase()
    sqlite.type = ResourceType.Sqlite

    root.innerNodes?.map(
        (n) => {
            if (!n.name || !root.name) {
                return
            }

            const fieldName = n.name.slice(root.name.length + 1)
            switch (fieldName) {
                case 'PATH':
                    sqlite.path = extractStringValue(n)
            }
        }
    )
    cfg.data_sources.push(sqlite)
}
