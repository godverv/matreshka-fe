import {keyMap} from "@/models/config/common.ts";

export type oneOfServer = (unknownServer)

export type unknownServer = namedServer & keyMap

export type namedServer = {
    server_name: string
    server_type: string
    port: number
}

export type grpcServer = namedServer

export type restServer = namedServer
