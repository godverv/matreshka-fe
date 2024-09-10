import {appConfig} from "@/models/config/appConfig.ts";
import {Node} from "@/api/grpc/matreshka-be_api.pb.ts";

import {
    GrpcResourceTypePrefix,
    PostgresResourceTypePrefix,
    RedisResourceTypePrefix,
    SqliteResourceTypePrefix, TelegramResourceTypePrefix
} from "@/models/config/resources/resource_types.ts";

import {mapPostgres} from "@/models/config/resources/postgres.ts";
import {mapRedis} from "@/models/config/resources/redis.ts";
import {mapSqlite} from "@/models/config/resources/sqlite.ts";
import {mapTelegram} from "@/models/config/resources/telegram.ts";
import {mapGrpc} from "@/models/config/resources/grpc.ts";
import {extractResourceType} from "@/models/config/common.ts";

const resourceMapping = new Map<string, (cfg: appConfig, node: Node) => void>()
resourceMapping.set(PostgresResourceTypePrefix, mapPostgres)
resourceMapping.set(RedisResourceTypePrefix, mapRedis)
resourceMapping.set(SqliteResourceTypePrefix, mapSqlite)
resourceMapping.set(TelegramResourceTypePrefix, mapTelegram)
resourceMapping.set(GrpcResourceTypePrefix, mapGrpc)

export function mapResource(cfg: appConfig, root: Node) {
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
