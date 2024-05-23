export type oneOfResource = (unknownResource | resourcePostgres | resourceRedis);

type namedResource = {
    resource_name: string
}

export type keyMap = {
    [key: string]: any
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
