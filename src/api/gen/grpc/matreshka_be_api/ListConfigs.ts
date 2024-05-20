// Original file: src/api/proto/matreshka-be_api.proto

import type { ListRequest as _matreshka_be_api_ListRequest, ListRequest__Output as _matreshka_be_api_ListRequest__Output } from '../matreshka_be_api/ListRequest';
import type { _matreshka_be_api_Config_AppConfig, _matreshka_be_api_Config_AppConfig__Output } from '../matreshka_be_api/Config';

export interface _matreshka_be_api_ListConfigs_Request {
  'listRequest'?: (_matreshka_be_api_ListRequest | null);
  'serviceName'?: (string);
}

export interface _matreshka_be_api_ListConfigs_Request__Output {
  'listRequest': (_matreshka_be_api_ListRequest__Output | null);
  'serviceName': (string);
}

export interface _matreshka_be_api_ListConfigs_Response {
  'services'?: (_matreshka_be_api_Config_AppConfig)[];
}

export interface _matreshka_be_api_ListConfigs_Response__Output {
  'services': (_matreshka_be_api_Config_AppConfig__Output)[];
}

export interface ListConfigs {
}

export interface ListConfigs__Output {
}
