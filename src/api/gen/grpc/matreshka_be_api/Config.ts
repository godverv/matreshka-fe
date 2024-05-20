// Original file: src/api/proto/matreshka-be_api.proto

import type { Resource as _matreshka_be_api_Resource, Resource__Output as _matreshka_be_api_Resource__Output } from '../matreshka_be_api/Resource';
import type { Server as _matreshka_be_api_Server, Server__Output as _matreshka_be_api_Server__Output } from '../matreshka_be_api/Server';

export interface _matreshka_be_api_Config_AppConfig {
  'name'?: (string);
  'version'?: (string);
  'startupDurationSec'?: (number);
}

export interface _matreshka_be_api_Config_AppConfig__Output {
  'name': (string);
  'version': (string);
  'startupDurationSec': (number);
}

export interface Config {
  'appConfig'?: (_matreshka_be_api_Config_AppConfig | null);
  'resources'?: (_matreshka_be_api_Resource)[];
  'servers'?: (_matreshka_be_api_Server)[];
  'environment'?: ({[key: string]: string});
}

export interface Config__Output {
  'appConfig': (_matreshka_be_api_Config_AppConfig__Output | null);
  'resources': (_matreshka_be_api_Resource__Output)[];
  'servers': (_matreshka_be_api_Server__Output)[];
  'environment': ({[key: string]: string});
}
