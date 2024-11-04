import {ConfigValue} from "@/models/config/common.ts";

export type Server = {
    port: ConfigValue<number>
    name: ConfigValue<string> // TODO
    grpc: GrpcHandler[]
    fs: FsHandler[]
}

export type GrpcHandler = {
    path: ConfigValue<string>
    module: ConfigValue<string>
    gateway: ConfigValue<string>
}

export type FsHandler = {
    dist: ConfigValue<string>
}
