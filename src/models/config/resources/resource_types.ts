import ResourcePostgres from "@/components/config/resource/types/ResourcePostgres.vue";
import ResourceGrpc from "@/components/config/resource/types/ResourceGrpc.vue";
import ResourceRedis from "@/components/config/resource/types/ResourceRedis.vue";
import ResourceSqlite from "@/components/config/resource/types/ResourceSqlite.vue";
import ResourceTelegram from "@/components/config/resource/types/ResourceTelegram.vue";
import KeyMapComponent from "@/components/base/KeyMapComponent.vue";
import {Component} from "vue";

export enum ResourceType {
    Postgres = "postgres",
    Redis = "redis",
    Sqlite = "sqlite",
    Grpc = "grpc",
    Telegram = "telegram"
}

export namespace ResourceType {
    export class ResourceDefinition {
        component: Component;
        displayName: string;

        constructor(component: Component, displayName: string) {
            this.component = component;
            this.displayName = displayName;
        }
    }

    const typeToDefinition = new Map<ResourceType, ResourceDefinition>()
    typeToDefinition.set(ResourceType.Postgres,
        new ResourceDefinition(ResourcePostgres, "Postgres"))

    typeToDefinition.set(ResourceType.Grpc,
        new ResourceDefinition(ResourceGrpc, "Grpc"))

    typeToDefinition.set(ResourceType.Redis,
        new ResourceDefinition(ResourceRedis, "Redis"))

    typeToDefinition.set(ResourceType.Sqlite,
        new ResourceDefinition(ResourceSqlite, "Sqlite"))

    typeToDefinition.set(ResourceType.Telegram,
        new ResourceDefinition(ResourceTelegram, "Telegram"))

    export function GetComponent(rt: ResourceType): Component {
        return typeToDefinition.get(rt)?.component || KeyMapComponent
    }

    export function DisplayName(rt: ResourceType): string {
        return typeToDefinition.get(rt)?.displayName || 'unknown'

    }
}
