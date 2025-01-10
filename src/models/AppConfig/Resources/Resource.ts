import {ConfigValueClass} from "@/models/shared/common.ts";
import {ResourceType} from "@/models/AppConfig/Resources/ResourceTypes.ts";
import {Component} from "vue";

import unknownImage from "@/assets/resource_icons/unknown.png";
import pgImage from "@/assets/resource_icons/pg.png";
import redisImage from "@/assets/resource_icons/redis.png"
import sqliteImage from "@/assets/resource_icons/sqlite.png"
import grpcImage from "@/assets/resource_icons/grpc.png"
import telegramImage from "@/assets/resource_icons/telegram.png"

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


export abstract class DataSourceClass {
    resourceName: string
    readonly type: ResourceType

    private readonly resourceTypeToImagePath = new Map<string, string>()
        .set(ResourceType.Postgres, pgImage)
        .set(ResourceType.Redis, redisImage)
        .set(ResourceType.Sqlite, sqliteImage)
        .set(ResourceType.Grpc, grpcImage)
        .set(ResourceType.Telegram, telegramImage)

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

    getIcon(): string {
        const imagePath = this.resourceTypeToImagePath.get(this.type)
        if (imagePath) {
            return imagePath
        }

        return unknownImage;
    }

    abstract isChanged(): boolean
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

    isChanged(): boolean {
        return this.host.isChanged() ||
            this.name.isChanged() ||
            this.port.isChanged() ||
            this.user.isChanged() ||
            this.pwd.isChanged() ||
            this.ssl_mode.isChanged();
    }
}

export class Sqlite extends DataSourceClass {
    path: ConfigValueClass<string> = new ConfigValueClass("", "")

    constructor(resourceName: string) {
        super(resourceName, ResourceType.Sqlite);
    }

    isChanged(): boolean {
        return this.path.isChanged()
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

    isChanged(): boolean {
        return this.host.isChanged() ||
            this.port.isChanged() ||
            this.user.isChanged() ||
            this.pwd.isChanged() ||
            this.db.isChanged();
    }
}

export class Telegram extends DataSourceClass {
    apiKey: ConfigValueClass<string> = new ConfigValueClass("", "")

    constructor(resourceName: string) {
        super(resourceName, ResourceType.Telegram);
    }

    isChanged(): boolean {
        return this.apiKey.isChanged()
    }
}

export class GrpcClient extends DataSourceClass {
    connectionString: ConfigValueClass<string> = new ConfigValueClass("", "")
    module: ConfigValueClass<string> = new ConfigValueClass("", "")

    constructor(resourceName: string) {
        super(resourceName, ResourceType.Grpc);
    }

    isChanged(): boolean {
        return this.connectionString.isChanged() ||
            this.module.isChanged()
    }
}


