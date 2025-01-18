import {
    MatreshkaBeAPI,
    ListConfigsRequest,
    GetConfigNodeRequest,
    Node, CreateConfigRequest, PatchConfigRequest
} from "@godverv/matreshka/dist/api/grpc/matreshka-be_api.pb";

import {parseAppConfigFromEnv} from "@/processes/Api/ModelMapping.ts";
import {AppInfoClass, ServicesList} from "@/models/AppConfig/Info/AppInfo.ts";
import {AppConfigClass} from "@/models/AppConfig/AppConfig.ts";
import {changes} from "@/app/store/opened_config.ts";
import {getBackendUrl} from "@/app/store/settings.ts";
import {ConfigValueClass} from "@/models/shared/common.ts";

const prefix = {pathPrefix: getBackendUrl()};

export function setBackendUrl(url: string) {
    prefix.pathPrefix = url
}

const fallbackErrorConverting = 'error during convertion'

export async function ListServices(req: ListConfigsRequest): Promise<ServicesList> {
    return MatreshkaBeAPI
        .ListConfigs(req, prefix)
        .then((r) => {
                const out: ServicesList = {} as ServicesList;
                if (r.services) {
                    out.servicesInfo = r.services
                        .map((v) => {


                            const name = new ConfigValueClass(
                                "Service name",
                                v.name || fallbackErrorConverting,
                            )

                            const version = new ConfigValueClass(
                                "Version",
                                v.version || fallbackErrorConverting,
                            )

                            const appInfo = new AppInfoClass(name, version)
                            if (v.updatedAtUtcTimestamp) {
                                appInfo.updated_at = new Date(Number(v.updatedAtUtcTimestamp) * 1000)
                            }

                            return appInfo
                        })
                }
                out.total = r.totalRecords || out.servicesInfo.length
                return out
            }
        )
}

export async function GetConfigNodes(serviceName: string): Promise<AppConfigClass> {
    const req = {
        serviceName: serviceName,
    } as GetConfigNodeRequest;

    return MatreshkaBeAPI.GetConfigNodes(req, prefix)
        .then((res) => {
            if (!res.root) {
                throw {message: "Empty env config root"}
            }

            return parseAppConfigFromEnv(res.root);
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
