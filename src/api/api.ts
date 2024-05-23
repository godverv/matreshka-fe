import {
    MatreshkaBeAPI,
    ListConfigsRequest,
    GetConfigRawRequest
} from "./grpc/matreshka-be_api.pb";

import *as yaml from "js-yaml";
import {Config, ConfigAppConfig} from "@/models/config.ts";

const backendApi = import.meta.env.VITE_MATRESHKA_BACKEND_URL

const prefix = {pathPrefix: backendApi}

export async function ListServices(req: ListConfigsRequest): Promise<ConfigAppConfig[]> {
    return MatreshkaBeAPI.ListConfigs(req, prefix)
        .then((r) => {
            return r.services ?? []
        })
}

export async function GetConfigRaw(serviceName: string): Promise<Config> {
    const req = {
        serviceName: serviceName,
    } as GetConfigRawRequest;

    return MatreshkaBeAPI.GetConfigRaw(req, prefix)
        .then((res) => {
            if (!res.config) {
                return {} as Config;
            }

            const configRaw = atob(res.config.toString());

            return yaml.load(configRaw) as Config;
        })
}
