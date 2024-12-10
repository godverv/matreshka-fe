import {ConfigValue} from "@/models/shared/common.ts";;

export type Server = {
    port: number
    name: string // TODO
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
