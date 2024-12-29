import {AppConfig} from "@/models/AppConfig/appConfig.ts";
import {Node} from "matreshka-api/api/grpc/matreshka-be_api.pb.ts";
import {ResourceTelegram} from "@/models/AppConfig/resources/resource.ts";
import {extractStringValue} from "@/models/shared/common.ts";;
import {ResourceType} from "@/models/AppConfig/resources/resource_types.ts";

export function mapTelegram(cfg: AppConfig, root: Node) {
    const tg: ResourceTelegram = {} as ResourceTelegram

    if (!root.name) {
        return
    }

    tg.resource_name = root.name.slice(root.name.indexOf('TELEGRAM')).toLowerCase()
    tg.type = ResourceType.Telegram

    root.innerNodes?.map(
        (n) => {
            if (!n.name || !root.name) {
                return
            }

            const fieldName = n.name.slice(root.name.length + 1)
            switch (fieldName) {
                case 'API-KEY':
                    tg.api_key = extractStringValue(n)
            }
        }
    )
    cfg.data_sources.push(tg)
}
