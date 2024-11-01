import {
    MatreshkaBeAPI,
    ListConfigsRequest,
    GetConfigNodeRequest,
    Node, CreateConfigRequest,
} from "./grpc/matreshka-be_api.pb";

import {mapNodeToConfig} from "@/api/model.ts";
import {AppInfo} from "@/models/config/info/appInfo.ts";
import {AppConfig} from "@/models/config/appConfig.ts";
import {PatchConfigRequest} from "./grpc/matreshka-be_api.pb";
import {changes} from "@/state/opened_config.ts";

const backendApiURL = import.meta.env.VITE_MATRESHKA_BACKEND_URL

const prefix = {pathPrefix: backendApiURL}

export async function ListServices(req: ListConfigsRequest): Promise<AppInfo[]> {
    return MatreshkaBeAPI
        .ListConfigs(req, prefix)
        .then((r) => {
            return r.services
                    ?.map((v) => {
                        return {
                            name: {
                                label: "",
                                value: v.name,
                            },
                            version: {
                                label: "",
                                value: v.version,
                            },
                        } as AppInfo
                    }) ??
                []
        })
}

export async function GetConfigNodes(serviceName: string): Promise<AppConfig> {
    const req = {
        serviceName: serviceName,
    } as GetConfigNodeRequest;

    return MatreshkaBeAPI.GetConfigNodes(req, prefix)
        .then((res) => {
            if (!res.root) {
                return {} as AppConfig;
            }

            const cfg: AppConfig = {} as AppConfig;
            cfg.app_info = {} as AppInfo;
            cfg.data_sources = []
            cfg.servers = []

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
        .then(() => GetConfigNodes(serviceName))
}

export async function CreateConfig(name: string) {
    const newCfg = {
        serviceName: name
    } as CreateConfigRequest

    return MatreshkaBeAPI.CreateConfig(newCfg, prefix)
}
