import {configValue, keyMap} from "@/models/config/common.ts";

export type oneOfResource = (unknownResource |
    resourcePostgres |
    resourceRedis |
    resourceSqlite |
    resourceTelegram |
    resourceGrpc);

type namedResource = {
    resource_name: string
    resource_type: string
}

export type unknownResource = namedResource & keyMap;

export type resourcePostgres = namedResource & {
    host: configValue<string>
    name: configValue<string>
    port: configValue<number>
    user: configValue<string>
    pwd: configValue<string>
    ssl_mode: configValue<string>
}

export type resourceRedis = namedResource & {
    host: configValue<string>
    port: configValue<number>
    user: configValue<string>
    pwd: configValue<string>
    db: configValue<number>
}

export type resourceSqlite = namedResource & {
    path: string
}

export type resourceTelegram = namedResource & {
    api_key: configValue<string>
}

export type resourceGrpc = namedResource & {
    connection_string: configValue<string>
    module: configValue<string>
}
