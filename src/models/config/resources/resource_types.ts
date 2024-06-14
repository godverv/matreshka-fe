
const unknownResourceName = 'Unknown';
const PostgresResourceName = 'Postgres';
const RedisResourceName = 'Redis';
const SqliteResourceName = 'Sqlite';
const GrpcServerResourceName = 'Grpc server';
const TelegramResourceName = 'Telegram Bot';

export const PostgresResourceTypePrefix = "postgres";
export const RedisResourceTypePrefix = "redis";
export const SqliteResourceTypePrefix = "sqlite";
export const GrpcResourceTypePrefix = "grpc";
export const TelegramResourceTypePrefix = "telegram";

const
    resourceTypes =
        new Map<string, String>();

resourceTypes.set(PostgresResourceTypePrefix, PostgresResourceName);
resourceTypes.set(RedisResourceTypePrefix, RedisResourceName);
resourceTypes.set(SqliteResourceTypePrefix, SqliteResourceName);
resourceTypes.set(GrpcResourceTypePrefix, GrpcServerResourceName);
resourceTypes.set(TelegramResourceTypePrefix, TelegramResourceName);


export function getResourceName(resourceFullName: string): String {
    resourceFullName = resourceFullName.split("-")[0]

    const res = resourceTypes.get(resourceFullName)
    if (res) {
        return res
    }

    return unknownResourceName
}
