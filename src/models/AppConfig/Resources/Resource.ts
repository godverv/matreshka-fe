import {ConfigValueClass} from "@/models/shared/common.ts";
import {ResourceType} from "@/models/AppConfig/Resources/ResourceTypes.ts";
import {Component} from "vue";


type NamedResource = {
    resource_name: string
    type: ResourceType
}

export type ResourceSqlite = NamedResource & {
    path: ConfigValueClass<string>
}

export type ResourceTelegram = NamedResource & {
    api_key: ConfigValueClass<string>
}

export type ResourceGrpc = NamedResource & {
    connection_string: ConfigValueClass<string>
    module: ConfigValueClass<string>
}

export function NormalizeName(res: NamedResource): string {
    if (res.resource_name === res.type) {
        return res.resource_name
    }


    let out = res.resource_name.slice(res.type.length)
    if (out[0] === '-') {
        out = out.slice(1)
    }

    return out
}


export class DataSourceClass {
    resourceName: string
    private readonly type: ResourceType

    constructor(resourceName: string, resType: ResourceType) {
        this.resourceName = resourceName;
        this.type = resType;
    }

    normalizeName() {
        if (this.resourceName === this.type) {
            return this.resourceName
        }


        let out = this.resourceName.slice(this.type.length)
        if (out[0] === '-') {
            out = out.slice(1)
        }

        return out
    }

    getComponent(): Component {
        return ResourceType.GetComponent(this.type)
    }
}

export class Postgres extends DataSourceClass {
    host: ConfigValueClass<string> = new ConfigValueClass("", "")
    name: ConfigValueClass<string> = new ConfigValueClass("", "")
    port: ConfigValueClass<number> = new ConfigValueClass("", 0)
    user: ConfigValueClass<string> = new ConfigValueClass("", "")
    pwd: ConfigValueClass<string> = new ConfigValueClass("", "")
    ssl_mode: ConfigValueClass<string> = new ConfigValueClass("", "")

    constructor(resourceName: string) {
        super(resourceName, ResourceType.Postgres);
    }
}


export class Sqlite extends DataSourceClass {
    path: ConfigValueClass<string> = new ConfigValueClass("", "")

    constructor(resourceName: string) {
        super(resourceName, ResourceType.Sqlite);
    }
}

export class Redis extends DataSourceClass {
    host: ConfigValueClass<string> = new ConfigValueClass<string>("", "")
    port: ConfigValueClass<number> = new ConfigValueClass<number>("", 0)
    user: ConfigValueClass<string> = new ConfigValueClass<string>("", "")
    pwd: ConfigValueClass<string> = new ConfigValueClass<string>("", "")
    db: ConfigValueClass<number> = new ConfigValueClass<number>("", 0)

    constructor(resourceName: string) {
        super(resourceName, ResourceType.Redis);
    }
}

export class Telegram extends DataSourceClass {
    apiKey: ConfigValueClass<string> = new ConfigValueClass("", "")

    constructor(resourceName: string) {
        super(resourceName, ResourceType.Telegram);
    }
}

export class GrpcClient extends DataSourceClass {
    connectionString: ConfigValueClass<string> = new ConfigValueClass("", "")
    module: ConfigValueClass<string> = new ConfigValueClass("", "")

    constructor(resourceName: string) {
        super(resourceName, ResourceType.Grpc);
    }
}


