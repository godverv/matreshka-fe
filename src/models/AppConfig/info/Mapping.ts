import {AppConfig} from "@/models/AppConfig/appConfig.ts";
import {Node} from "matreshka-api/api/grpc/matreshka-be_api.pb.ts";
import {extractStringValue} from "@/models/shared/common.ts";;

export function mapAppInfo(cfg: AppConfig, root: Node) {
    root.innerNodes?.map((n)=> {
        if (!n.name || !root.name) {
            return;
        }

        const name = n.name.slice(root.name.length+1)
        switch (name) {
            case "NAME":
                cfg.app_info.name = extractStringValue(n)
                break
            case "VERSION":
                cfg.app_info.version = extractStringValue(n)
                break
            case "STARTUP-DURATION":
                cfg.app_info.startup_duration = extractStringValue(n)
                break
        }

        return
    })
}
