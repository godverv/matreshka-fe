import {AppConfig} from "@/models/AppConfig/appConfig.ts";
import {Node} from "matreshka-api/api/grpc/matreshka-be_api.pb.ts";

import {mapPostgres} from "@/models/AppConfig/resources/postgres.ts";
import {mapRedis} from "@/models/AppConfig/resources/redis.ts";
import {mapSqlite} from "@/models/AppConfig/resources/sqlite.ts";
import {mapTelegram} from "@/models/AppConfig/resources/telegram.ts";
import {mapGrpc} from "@/models/AppConfig/resources/grpc.ts";
import {extractResourceType} from "@/models/shared/common.ts";;
import {ResourceType} from "@/models/AppConfig/resources/resource_types.ts";

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
