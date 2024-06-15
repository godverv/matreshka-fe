import {SqliteResourceTypePrefix} from "@/models/config/resources/resource_types.ts";
import {appConfig} from "@/models/config/appConfig.ts";
import {Node} from "@/api/grpc/matreshka-be_api.pb.ts";
import {resourceSqlite} from "@/models/config/resources/resource.ts";
import {extractStringValue} from "@/models/config/common.ts";

export function mapSqlite(cfg: appConfig, root: Node) {
    const sqlite: resourceSqlite = {} as resourceSqlite

    if (!root.name) {
        return
    }

    sqlite.resource_name = root.name.slice(root.name.indexOf('SQLITE')).toLowerCase()
    sqlite.resource_type = SqliteResourceTypePrefix

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
