const unknownResourceName = 'Unknown';
const PostgresResourceName = 'Postgres';
const RedisResourceName = 'Redis';
const SqliteResourceName = 'Sqlite';
const GrpcClientResourceName = 'Grpc client';
const TelegramResourceName = 'Telegram Bot';

export enum ResourceType {
    Postgres = "postgres",
    Redis = "redis",
    Sqlite = "sqlite",
    Grpc = "grpc",
    Telegram = "telegram"
}

export const PostgresResourceTypePrefix = "postgres";
export const RedisResourceTypePrefix = "redis";
export const SqliteResourceTypePrefix = "sqlite";
export const GrpcResourceTypePrefix = "grpc";
export const TelegramResourceTypePrefix = "telegram";

const resourceTypes =
        new Map<string, String>();

resourceTypes.
    set(PostgresResourceTypePrefix, PostgresResourceName).
    set(RedisResourceTypePrefix, RedisResourceName).
    set(SqliteResourceTypePrefix, SqliteResourceName).
    set(GrpcResourceTypePrefix, GrpcClientResourceName).
    set(TelegramResourceTypePrefix, TelegramResourceName);


export function GetResourceName(resourceFullName: string): String {
    resourceFullName = resourceFullName.split("-")[0]

    const res = resourceTypes.get(resourceFullName)
    if (res) {
        return res
    }

    return unknownResourceName
}
