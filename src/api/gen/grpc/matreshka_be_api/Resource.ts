// Original file: src/api/proto/matreshka-be_api.proto


export interface _matreshka_be_api_Resource_Config {
  'unknown'?: (_matreshka_be_api_Resource_Unknown | null);
  'postgres'?: (_matreshka_be_api_Resource_Postgres | null);
  'redis'?: (_matreshka_be_api_Resource_Redis | null);
  'sqlite'?: (_matreshka_be_api_Resource_Sqlite | null);
  'grpc'?: (_matreshka_be_api_Resource_Grpc | null);
  'telegram'?: (_matreshka_be_api_Resource_Telegram | null);
  'resource'?: "unknown"|"postgres"|"redis"|"sqlite"|"grpc"|"telegram";
}

export interface _matreshka_be_api_Resource_Config__Output {
  'unknown'?: (_matreshka_be_api_Resource_Unknown__Output | null);
  'postgres'?: (_matreshka_be_api_Resource_Postgres__Output | null);
  'redis'?: (_matreshka_be_api_Resource_Redis__Output | null);
  'sqlite'?: (_matreshka_be_api_Resource_Sqlite__Output | null);
  'grpc'?: (_matreshka_be_api_Resource_Grpc__Output | null);
  'telegram'?: (_matreshka_be_api_Resource_Telegram__Output | null);
}

export interface _matreshka_be_api_Resource_Connection {
  'connectionString'?: (string);
}

export interface _matreshka_be_api_Resource_Connection__Output {
  'connectionString': (string);
}

export interface _matreshka_be_api_Resource_Grpc {
  'connectionString'?: (string);
  'module'?: (string);
}

export interface _matreshka_be_api_Resource_Grpc__Output {
  'connectionString': (string);
  'module': (string);
}

export interface _matreshka_be_api_Resource_Postgres {
  'host'?: (string);
  'port'?: (number);
  'dbName'?: (string);
  'userName'?: (string);
  'pwd'?: (string);
}

export interface _matreshka_be_api_Resource_Postgres__Output {
  'host': (string);
  'port': (number);
  'dbName': (string);
  'userName': (string);
  'pwd': (string);
}

export interface _matreshka_be_api_Resource_Redis {
  'host'?: (string);
  'port'?: (number);
  'user'?: (string);
  'pwd'?: (string);
  'db'?: (number);
}

export interface _matreshka_be_api_Resource_Redis__Output {
  'host': (string);
  'port': (number);
  'user': (string);
  'pwd': (string);
  'db': (number);
}

export interface _matreshka_be_api_Resource_Sqlite {
  'path'?: (string);
}

export interface _matreshka_be_api_Resource_Sqlite__Output {
  'path': (string);
}

export interface _matreshka_be_api_Resource_Telegram {
  'apiKey'?: (string);
}

export interface _matreshka_be_api_Resource_Telegram__Output {
  'apiKey': (string);
}

// Original file: src/api/proto/matreshka-be_api.proto

export const _matreshka_be_api_Resource_Type = {
  UnknownResourceType: 0,
  PostgresResourceType: 1,
  RedisResourceType: 2,
  SqliteResourceType: 3,
  GrpcResourceType: 4,
  TelegramResourceType: 5,
} as const;

export type _matreshka_be_api_Resource_Type =
  | 'UnknownResourceType'
  | 0
  | 'PostgresResourceType'
  | 1
  | 'RedisResourceType'
  | 2
  | 'SqliteResourceType'
  | 3
  | 'GrpcResourceType'
  | 4
  | 'TelegramResourceType'
  | 5

export type _matreshka_be_api_Resource_Type__Output = typeof _matreshka_be_api_Resource_Type[keyof typeof _matreshka_be_api_Resource_Type]

export interface _matreshka_be_api_Resource_Unknown {
  'environment'?: ({[key: string]: string});
}

export interface _matreshka_be_api_Resource_Unknown__Output {
  'environment': ({[key: string]: string});
}

export interface Resource {
  'conn'?: (_matreshka_be_api_Resource_Connection | null);
  'name'?: (string);
  'resourceType'?: (_matreshka_be_api_Resource_Type);
  'resourceConfig'?: (_matreshka_be_api_Resource_Config | null);
}

export interface Resource__Output {
  'conn': (_matreshka_be_api_Resource_Connection__Output | null);
  'name': (string);
  'resourceType': (_matreshka_be_api_Resource_Type__Output);
  'resourceConfig': (_matreshka_be_api_Resource_Config__Output | null);
}
