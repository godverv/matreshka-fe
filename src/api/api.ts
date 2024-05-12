import {
    MatreshkaBeAPI,
    Config,
    ListConfigsRequest,
    ConfigAppConfig
} from "./grpc/matreshka-be_api.pb";

const backendApi = import.meta.env.VITE_MATRESHKA_BACKEND_URL


const prefix = {pathPrefix: backendApi}

export async function ListServices(req: ListConfigsRequest): Promise<ConfigAppConfig[]> {
    return MatreshkaBeAPI.ListConfigs(req, prefix)
        .then((r) => {
            return r.services ?? []
        })
}

export async function GetConfig(serviceName: string): Promise<Config | undefined> {
    const req = {serviceName: serviceName}

    return MatreshkaBeAPI.GetConfig(req, prefix)
        .then((r) => {
            return r.config
        })
}
