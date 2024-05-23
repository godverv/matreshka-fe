import {keyMap} from "@/models/common.ts";

export type oneOfResource = (unknownResource |
    resourcePostgres |
    resourceRedis |
    resourceSqlite |
    resourceTelegram |
    resourceGrpc);

type namedResource = {
    resource_name: string
}

export type unknownResource = namedResource & keyMap;

export type resourcePostgres = namedResource & {
    host: string
    name: string
    port: number
    user: string
    pwd: string
    ssl_mode: string
}

export type resourceRedis = namedResource & {
    host: string
    port: number
    user: string
    pwd: string
    db: number
}

export type resourceSqlite = namedResource & {
    path: string
}

export type resourceTelegram = namedResource & {
    api_key: string
}

export type resourceGrpc = namedResource & {
    connection_string: string
    module: string
}
