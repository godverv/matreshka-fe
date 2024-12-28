import {ConfigValue} from "@/models/shared/common.ts";

export type Server = {
    port:  ConfigValue<number>
    name: ConfigValue<string> // TODO
    grpc: grpcHandler[]
    fs: fsHandler[]
}

export type grpcHandler = {
    module: ConfigValue<string>
    gateway: ConfigValue<string>
}

export type fsHandler = {
    dist: ConfigValue<string>
}
