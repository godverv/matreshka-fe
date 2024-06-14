import {keyMap} from "@/models/common.ts";

export type oneOfServer = (unknownServer)

export type unknownServer = namedServer & keyMap

export type namedServer = {
    name: string
    port: number
}
