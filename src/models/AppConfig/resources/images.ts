import {ResourceType} from "@/models/AppConfig/resources/resource_types.ts";

import unknownImage from "@/assets/resource_icons/unknown.png";
import pgImage from "@/assets/resource_icons/pg.png";
import redisImage from "@/assets/resource_icons/redis.png"
import sqliteImage from "@/assets/resource_icons/sqlite.png"
import grpcImage from "@/assets/resource_icons/grpc.png"
import telegramImage from "@/assets/resource_icons/telegram.png"

const resourceTypeToImagePath = new Map<string, string>()

resourceTypeToImagePath.
    set(ResourceType.Postgres, pgImage).
    set(ResourceType.Redis, redisImage).
    set(ResourceType.Sqlite, sqliteImage).
    set(ResourceType.Grpc, grpcImage).
    set(ResourceType.Telegram, telegramImage)


export function GetImageForResource(rt :ResourceType): string {
    const imagePath = resourceTypeToImagePath.get(rt)
    if (imagePath) {
        return imagePath
    }

    return unknownImage;
}
