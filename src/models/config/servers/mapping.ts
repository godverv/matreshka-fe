import {appConfig} from "@/models/config/appConfig.ts";
import {Node} from "@/api/grpc/matreshka-be_api.pb.ts";

export const serversMapping = new Map<string, (cfg: appConfig, node: Node) => void>()
