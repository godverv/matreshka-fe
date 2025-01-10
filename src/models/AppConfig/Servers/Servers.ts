import {ConfigValueClass} from "@/models/shared/common.ts";


export class ServerClass {
    port: ConfigValueClass<number> = new ConfigValueClass<number>("", 0)
    name: string
    grpc: GrpcHandler[] = []
    fs: FsHandler[] = []

    constructor(name: string) {
        this.name = name
    }

    public isChanged(): boolean {
        let grpcChanged : boolean = false
        this.grpc.map(s => grpcChanged = grpcChanged || s.isChanged())

        let fsChanged : boolean = false
        this.fs.map(s => fsChanged = fsChanged || s.isChanged())
        return this.port.isChanged() || grpcChanged || fsChanged
    }
}

export class GrpcHandler{
    module: ConfigValueClass<string> = new ConfigValueClass("", "")
    gateway: ConfigValueClass<string> = new ConfigValueClass("", "")

    isChanged() : boolean {
        return this.module.isChanged() || this.gateway.isChanged()
    }
}

export class FsHandler{
    dist: ConfigValueClass<string> = new ConfigValueClass<string>("", "")

    isChanged(): boolean {
        return this.dist.isChanged()
    }
}
