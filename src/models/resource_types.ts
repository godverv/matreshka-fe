import {ResourceType} from "@/api/grpc/matreshka-be_api.pb.ts";

const unknownResourceName = 'Unknown';
const PostgresResourceName = 'Postgres';
const RedisResourceName = 'Redis';
const SqliteResourceName = 'Sqlite';
const GrpcServerResourceName = 'Grpc server';
const TelegramResourceName = 'Telegram Bot';

const
    resourceTypes =
        new Map<ResourceType, String>();

resourceTypes.set(ResourceType.PostgresResourceType, PostgresResourceName);
resourceTypes.set(ResourceType.RedisResourceType, RedisResourceName);
resourceTypes.set(ResourceType.SqliteResourceType, SqliteResourceName);
resourceTypes.set(ResourceType.GrpcResourceType, GrpcServerResourceName);
resourceTypes.set(ResourceType.TelegramResourceType, TelegramResourceName);


export function fromProtoResourceType(rt: ResourceType | undefined): String {
    if (!rt) {
        return unknownResourceName
    }

    const res = resourceTypes.get(rt)
    if (res) {
        return res
    }

    return unknownResourceName
}
