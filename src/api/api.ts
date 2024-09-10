import {
    MatreshkaBeAPI,
    ListConfigsRequest,
    GetConfigNodeRequest,
    Node,
} from "./grpc/matreshka-be_api.pb";


import {mapNodeToConfig} from "@/api/model.ts";
import {appInfo} from "@/models/config/info/appInfo.ts";
import {appConfig} from "@/models/config/appConfig.ts";
import {PatchConfigRequest} from "./grpc/matreshka-be_api.pb";
import {changes} from "@/state/opened_config.ts";

const backendApi = import.meta.env.VITE_MATRESHKA_BACKEND_URL

const prefix = {pathPrefix: backendApi}

export async function ListServices(req: ListConfigsRequest): Promise<appInfo[]> {
    return MatreshkaBeAPI
        .ListConfigs(req, prefix)
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

export async function GetConfigNodes(serviceName: string): Promise<appConfig> {
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
            cfg.data_sources = []
            cfg.server = []

            res.root.innerNodes?.map((n) => {
                mapNodeToConfig(cfg, n)
            })

            return cfg;
        })
}

export async function PatchConfig(serviceName: string, changeList: changes[]) {
    const req: PatchConfigRequest = {
        serviceName: serviceName,
        changes: changeList.map((n) => {
            return {
                name: n.fieldName,
                value: n.fieldValue,
            } as Node
        }),
    } as PatchConfigRequest;

    return MatreshkaBeAPI.PatchConfig(req, prefix)
        .then(()=>GetConfigNodes(serviceName))
}
