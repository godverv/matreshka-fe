import {appConfig} from "@/models/config/appConfig.ts";
import {Node} from "@/api/grpc/matreshka-be_api.pb.ts";
import {extractStringValue} from "@/models/config/common.ts";

export function mapAppInfo(cfg: appConfig, root: Node) {
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
