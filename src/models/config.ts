import {oneOfResource} from "@/models/resource.ts";
import {Server} from "@/api/grpc/matreshka-be_api.pb.ts";

export type Config = {
    app_info: ConfigAppConfig
    data_sources: oneOfResource[]
    server?: Server[]
    environment?: { [key: string]: string }
}

export type ConfigAppConfig = {
    name?: string
    version?: string
    startup_duration?: number
}
