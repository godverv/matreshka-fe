import {ConfigValueClass} from "@/models/shared/common.ts";


export class ServerClass {
    port: ConfigValueClass<number> = new ConfigValueClass<number>("", 0)
    name: string
    grpc: GrpcHandler[] = []
    fs: FsHandler[] = []

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
