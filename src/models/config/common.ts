import {Node} from "@/api/grpc/matreshka-be_api.pb.ts";

export type keyMap = {
    [key: string]: any
}

export type configValue<T> = {
    name: string
    value: T
}

export function extractStringValue(n: Node) : configValue<string> {
    return {
        name: n.name ?? "",
        value: n.value ?? ""
    }
}
export function extractNumberValue(n: Node) : configValue<number> {
    return {
        name: n.name ?? "",
        value: Number(n.value) ?? 0
    }
}
