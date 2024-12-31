import {Node} from "matreshka-api/api/grpc/matreshka-be_api.pb.ts";

export type keyMap = {
    [key: string]: any
}

export type ConfigValue<T> = {
    envName: string
    value: T
}

export class ConfigValueClass<T> {
    envName: string
    value: T

    private readonly originalValue: T

    constructor(envName: string, value: T) {
        this.envName = envName
        this.value = value

        this.originalValue = value
    }

    isChanged() : boolean{
        return this.value != this.originalValue
    }

    getOriginalValue() : T {
        return this.originalValue
    }
}

export function extractStringValue(n: Node): ConfigValueClass<string> {
    return new ConfigValueClass<string>(n.name ?? "", n.value ?? "")
}

export function extractNumberValue(n: Node): ConfigValueClass<number> {
    return new ConfigValueClass(n.name ?? "", Number(n.value) ?? 0)
}

export function extractResourceType(node: Node, root: Node): string | undefined {
    if (!node.name || !root.name) {
        return
    }

    let name = node.name.slice(root.name.length + 1)

    const resourceNameEndIdx = name.indexOf("_")
    if (resourceNameEndIdx > 0) {
        name = name.slice(resourceNameEndIdx)
    }
    name = name.toLowerCase()

    let resType = name
    const resourceTypeNameEndIdx = resType.indexOf("-")
    if (resourceTypeNameEndIdx > 0) {
        resType = name.slice(0, resourceTypeNameEndIdx)
    }

    return resType
}
