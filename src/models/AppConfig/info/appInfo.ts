import {ConfigValue} from "@/models/shared/common.ts";

export type ServicesList = {
    servicesInfo: AppInfo[]
    total: number
}

export type AppInfo = {
    name: ConfigValue<string>
    version: ConfigValue<string>
    startup_duration: ConfigValue<string>
    updated_at?: ConfigValue<Date>
}

export enum SourceCodeSystem {
    unknown = 0,
    github = 1,
}

export function ExtractSourceCodeSystemFromServiceName(name: string): SourceCodeSystem | undefined {
    if (name.includes("github")) {
        return SourceCodeSystem.github
    }
}

const scsToPiIcon = new Map<SourceCodeSystem, string>()
scsToPiIcon.set(SourceCodeSystem.github, 'pi-github')

export function PiIconFromSourceCodeSystem(sourceCodeSystem: SourceCodeSystem | undefined): string | undefined {
    if (!sourceCodeSystem) {
        return
    }

    return scsToPiIcon.get(sourceCodeSystem)
}

