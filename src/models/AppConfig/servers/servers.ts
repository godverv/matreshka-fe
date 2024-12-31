import {ConfigValue, ConfigValueClass} from "@/models/shared/common.ts";

export type Server = {
    port:  ConfigValue<number>
    name: string
    grpc: grpcHandler[]
    fs: fsHandler[]
}

export class ServerClass {
    port:  ConfigValueClass<number> = new ConfigValueClass<number>("", 0)
    name: string
    grpc: grpcHandler[] = []
    fs: fsHandler[] = []

    constructor(name: string) {
        this.name = name
    }
}

export class GrpcHandler {
    module: ConfigValueClass<string> = new ConfigValueClass("", "")
    gateway: ConfigValueClass<string> = new ConfigValueClass("", "")
}

export class FsHandler {
    dist: ConfigValueClass<string> = new ConfigValueClass<string>("", "")
}

export type grpcHandler = {
    module: ConfigValue<string>
    gateway: ConfigValue<string>
}

export type fsHandler = {
    dist: ConfigValue<string>
}
