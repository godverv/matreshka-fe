import {ConfigValue, keyMap} from "@/models/shared/common.ts";;
import {ResourceType} from "@/models/app_config/resources/resource_types.ts";

export type OneOfResource =  (UnknownResource |
    ResourcePostgres |
    ResourceRedis |
    ResourceSqlite |
    ResourceTelegram |
    ResourceGrpc);

type NamedResource = {
    resource_name: string
    type: ResourceType
}

export type UnknownResource = NamedResource & keyMap;

export type ResourcePostgres = NamedResource & {
    host: ConfigValue<string>
    name: ConfigValue<string>
    port: ConfigValue<number>
    user: ConfigValue<string>
    pwd: ConfigValue<string>
    ssl_mode: ConfigValue<string>
}

export type ResourceRedis = NamedResource & {
    host: ConfigValue<string>
    port: ConfigValue<number>
    user: ConfigValue<string>
    pwd: ConfigValue<string>
    db: ConfigValue<number>
}

export type ResourceSqlite = NamedResource & {
    path: ConfigValue<string>
}

export type ResourceTelegram = NamedResource & {
    api_key: ConfigValue<string>
}

export type ResourceGrpc = NamedResource & {
    connection_string: ConfigValue<string>
    module: ConfigValue<string>
}

export function NormalizeName(res: NamedResource): string {
    if (res.resource_name === res.type ) {
        return res.resource_name
    }


    let out = res.resource_name.slice(res.type.length)
    if (out[0] === '-') {
        out = out.slice(1)
    }

    return out
}
