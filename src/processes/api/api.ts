import {
    MatreshkaBeAPI,
    ListConfigsRequest,
    GetConfigNodeRequest,
    Node, CreateConfigRequest,
} from "./api/grpc/matreshka-be_api.pb";

import {mapNodeToConfig} from "@/processes/api/model_mapping.ts";
import {AppInfo, ServicesList} from "@/models/config/info/appInfo.ts";
import {AppConfig} from "@/models/config/appConfig.ts";
import {PatchConfigRequest} from "./api/grpc/matreshka-be_api.pb";
import {changes} from "@/app/store/opened_config.ts";
import {getBackendUrl} from "@/app/store/settings.ts";

const prefix = {pathPrefix: getBackendUrl()};

export function setBackendUrl(url: string) {
    prefix.pathPrefix = url
}

export async function ListServices(req: ListConfigsRequest): Promise<ServicesList> {
    return MatreshkaBeAPI
        .ListConfigs(req, prefix)
        .then((r) => {
            const out: ServicesList = {} as ServicesList;
            out.servicesInfo = r.services
                    ?.map((v) => {
                        return {
                            name: {
                                label: "Service name",
                                value: v.name,
                            },
                            version: {
                                label: "Version",
                                value: v.version,
                            },
                        } as AppInfo
                    }) ??
                []
            out.total = r.totalRecords || out.servicesInfo.length
            return out
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
        serviceName: encodeURIComponent(name)
    } as CreateConfigRequest

    return MatreshkaBeAPI.CreateConfig(newCfg, prefix)
}