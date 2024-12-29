import {ConfigValue} from "@/models/shared/common.ts";;

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


export type ServiceName = {
    name: ConfigValue<string>
    link?: ServiceLink
}


export type ServiceLink = {
    type: 'github' | 'gitlab' |'unknown'
    link: string
}


