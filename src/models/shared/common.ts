import {Node} from "matreshka-api/api/grpc/matreshka-be_api.pb.ts";

export type keyMap = {
    [key: string]: any
}

export type ConfigValue<T> = {
    envName: string
    value: T
}

export function extractStringValue(n: Node) : ConfigValue<string> {
    return {
        envName: n.name ?? "",
        value: n.value ?? ""
    }
}
export function extractNumberValue(n: Node) : ConfigValue<number> {
    return {
        envName: n.name ?? "",
        value: Number(n.value) ?? 0
    }
}

export function extractResourceType(node: Node, root: Node): string | undefined {
    if (!node.name || !root.name) {
        return
    }

    let name = node.name.slice(root.name.length+1)

    const resourceNameEndIdx = name.indexOf("_")
    if (resourceNameEndIdx > 0) {
        name = name.slice(resourceNameEndIdx)
    }
    name = name.toLowerCase()

    let resType = name
    const resourceTypeNameEndIdx = resType.indexOf("-")
    if (resourceTypeNameEndIdx > 0 ) {
        resType = name.slice(0, resourceTypeNameEndIdx)
    }

    return resType
}
