// Original file: src/api/proto/matreshka-be_api.proto


export interface _matreshka_be_api_Server_Config {
  'unknown'?: (_matreshka_be_api_Server_Unknown | null);
  'grpc'?: (_matreshka_be_api_Server_Grpc | null);
  'rest'?: (_matreshka_be_api_Server_Rest | null);
  'server'?: "unknown"|"grpc"|"rest";
}

export interface _matreshka_be_api_Server_Config__Output {
  'unknown'?: (_matreshka_be_api_Server_Unknown__Output | null);
  'grpc'?: (_matreshka_be_api_Server_Grpc__Output | null);
  'rest'?: (_matreshka_be_api_Server_Rest__Output | null);
}

export interface _matreshka_be_api_Server_Grpc {
  'port'?: (number);
}

export interface _matreshka_be_api_Server_Grpc__Output {
  'port': (number);
}

export interface _matreshka_be_api_Server_Rest {
  'port'?: (number);
}

export interface _matreshka_be_api_Server_Rest__Output {
  'port': (number);
}

// Original file: src/api/proto/matreshka-be_api.proto

export const _matreshka_be_api_Server_Type = {
  UnknownServerType: 0,
  GrpcServerType: 1,
  RestServerType: 2,
} as const;

export type _matreshka_be_api_Server_Type =
  | 'UnknownServerType'
  | 0
  | 'GrpcServerType'
  | 1
  | 'RestServerType'
  | 2

export type _matreshka_be_api_Server_Type__Output = typeof _matreshka_be_api_Server_Type[keyof typeof _matreshka_be_api_Server_Type]

export interface _matreshka_be_api_Server_Unknown {
  'environment'?: ({[key: string]: string});
}

export interface _matreshka_be_api_Server_Unknown__Output {
  'environment': ({[key: string]: string});
}

export interface Server {
  'swaggerLink'?: (string);
  'makoshName'?: (string);
  'config'?: (_matreshka_be_api_Server_Config | null);
  'type'?: (_matreshka_be_api_Server_Type);
}

export interface Server__Output {
  'swaggerLink': (string);
  'makoshName': (string);
  'config': (_matreshka_be_api_Server_Config__Output | null);
  'type': (_matreshka_be_api_Server_Type__Output);
}
