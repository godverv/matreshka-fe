import {AppConfig} from "@/models/config/appConfig.ts";
import {Node} from "@/processes/api/api/grpc/matreshka-be_api.pb.ts";
import {ResourceTelegram} from "@/models/config/resources/resource.ts";
import {extractStringValue} from "@/models/config/common.ts";
import {ResourceType} from "@/models/config/resources/resource_types.ts";

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
