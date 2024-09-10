import {configValue} from "@/models/config/common.ts";

export type Server = {
    port: number
    grpc: grpcHandler[]
    fs: fsHandler[]
}

export type grpcHandler = {
    module: configValue<string>
    gateway: configValue<string>
}

export type fsHandler = {
    dist: configValue<string>
}
