import {
    MatreshkaBeAPI,
    ListConfigsRequest,
    GetConfigNodeRequest
} from "./grpc/matreshka-be_api.pb";


import {appConfig, appInfo} from "@/models/appConfig.ts";
import {mapNodeToConfig} from "@/api/model.ts";

const backendApi = import.meta.env.VITE_MATRESHKA_BACKEND_URL

const prefix = {pathPrefix: backendApi}

export async function ListServices(req: ListConfigsRequest): Promise<appInfo[]> {
    return MatreshkaBeAPI.ListConfigs(req, prefix)
        .then((r) => {

            return r.services
                    ?.map((v) => {
                        return {
                            name: {
                                name: "",
                                value: v.name,
                            },
                            version: {
                                name: "",
                                value: v.version,
                            },
                        } as appInfo
                    }) ??
                []
        })
}


export async function GetConfigRaw(serviceName: string): Promise<appConfig> {
    const req = {
        serviceName: serviceName,
    } as GetConfigNodeRequest;

    return MatreshkaBeAPI.GetConfigNodes(req, prefix)
        .then((res) => {
            if (!res.root) {
                return {} as appConfig;
            }
            const cfg: appConfig = {} as appConfig;
            cfg.app_info = {} as appInfo;

            res.root.innerNodes?.map((n) => {
                mapNodeToConfig(cfg, n)
            })

            return cfg;
        })
}
