// Original file: src/api/proto/matreshka-be_api.proto

import type { Config as _matreshka_be_api_Config, Config__Output as _matreshka_be_api_Config__Output } from '../matreshka_be_api/Config';

export interface _matreshka_be_api_GetConfig_Request {
  'serviceName'?: (string);
}

export interface _matreshka_be_api_GetConfig_Request__Output {
  'serviceName': (string);
}

export interface _matreshka_be_api_GetConfig_Response {
  'config'?: (_matreshka_be_api_Config | null);
}

export interface _matreshka_be_api_GetConfig_Response__Output {
  'config': (_matreshka_be_api_Config__Output | null);
}

export interface GetConfig {
}

export interface GetConfig__Output {
}
