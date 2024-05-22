export type oneOfResource = (unknownResource | resourcePostgres | resourceRedis);

type namedResource = {
    resource_name: string
}

export type unknownResource = namedResource & {
    content: { [key: string]: string }
}

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
