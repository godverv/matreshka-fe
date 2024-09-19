import {configValue, keyMap} from "@/models/config/common.ts";
import {ResourceType} from "@/models/config/resources/resource_types.ts";

export type oneOfResource = (unknownResource |
    resourcePostgres |
    resourceRedis |
    resourceSqlite |
    resourceTelegram |
    resourceGrpc);

type namedResource = {
    resource_name: string
    resource_type: ResourceType
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
    path: configValue<string>
}

export type resourceTelegram = namedResource & {
    api_key: configValue<string>
}

export type resourceGrpc = namedResource & {
    connection_string: configValue<string>
    module: configValue<string>
}


export function NormalizeName(res: namedResource): string {
    if (res.resource_name === res.resource_type ) {
        return res.resource_name
    }


    let out = res.resource_name.slice(res.resource_type.length)
    if (out[0] === '-') {
        out = out.slice(1)
    }

    return out
}
