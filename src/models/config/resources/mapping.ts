import {AppConfig} from "@/models/config/appConfig.ts";
import {Node} from "@/api/api/grpc/matreshka-be_api.pb.ts";

import {mapPostgres} from "@/models/config/resources/postgres.ts";
import {mapRedis} from "@/models/config/resources/redis.ts";
import {mapSqlite} from "@/models/config/resources/sqlite.ts";
import {mapTelegram} from "@/models/config/resources/telegram.ts";
import {mapGrpc} from "@/models/config/resources/grpc.ts";
import {extractResourceType} from "@/models/config/common.ts";
import {ResourceType} from "@/models/config/resources/resource_types.ts";

const resourceMapping = new Map<string, (cfg: AppConfig, node: Node) => void>()
resourceMapping.set(ResourceType.Postgres, mapPostgres)
resourceMapping.set(ResourceType.Redis, mapRedis)
resourceMapping.set(ResourceType.Sqlite, mapSqlite)
resourceMapping.set(ResourceType.Telegram, mapTelegram)
resourceMapping.set(ResourceType.Grpc, mapGrpc)

export function mapResource(cfg: AppConfig, root: Node) {
    root.innerNodes?.map((n)=> {
        const resType = extractResourceType(n, root)

        if (!resType) {
            return;
        }

        const mapper = resourceMapping.get(resType)

        if (!mapper) {
            return
        }

        mapper(cfg, n)

        return
    })
}
