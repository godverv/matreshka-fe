import {configValue, keyMap} from "@/models/config/common.ts";

export type oneOfServer = (unknownServer | serverGrpc)

export type unknownServer = namedServer & keyMap

export type namedServer = {
    server_name: string
    server_type: string
    port: configValue<number>
}

export type serverGrpc = namedServer

export type serverRest = namedServer
