// Original file: src/api/proto/matreshka-be_api.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { _matreshka_be_api_ApiVersion_Request, _matreshka_be_api_ApiVersion_Request__Output } from '../matreshka_be_api/ApiVersion';
import type { _matreshka_be_api_PatchConfig_Request, _matreshka_be_api_PatchConfig_Request__Output } from '../matreshka_be_api/PatchConfig';
import type { _matreshka_be_api_GetConfig_Request, _matreshka_be_api_GetConfig_Request__Output } from '../matreshka_be_api/GetConfig';
import type { _matreshka_be_api_GetConfigRaw_Request, _matreshka_be_api_GetConfigRaw_Request__Output } from '../matreshka_be_api/GetConfigRaw';
import type { _matreshka_be_api_PatchConfigRaw_Request, _matreshka_be_api_PatchConfigRaw_Request__Output } from '../matreshka_be_api/PatchConfigRaw';
import type { _matreshka_be_api_ListConfigs_Request, _matreshka_be_api_ListConfigs_Request__Output } from '../matreshka_be_api/ListConfigs';
import type { _matreshka_be_api_ApiVersion_Response, _matreshka_be_api_ApiVersion_Response__Output } from '../matreshka_be_api/ApiVersion';
import type { _matreshka_be_api_PatchConfig_Response, _matreshka_be_api_PatchConfig_Response__Output } from '../matreshka_be_api/PatchConfig';
import type { _matreshka_be_api_GetConfig_Response, _matreshka_be_api_GetConfig_Response__Output } from '../matreshka_be_api/GetConfig';
import type { _matreshka_be_api_GetConfigRaw_Response, _matreshka_be_api_GetConfigRaw_Response__Output } from '../matreshka_be_api/GetConfigRaw';
import type { _matreshka_be_api_PatchConfigRaw_Response, _matreshka_be_api_PatchConfigRaw_Response__Output } from '../matreshka_be_api/PatchConfigRaw';
import type { _matreshka_be_api_ListConfigs_Response, _matreshka_be_api_ListConfigs_Response__Output } from '../matreshka_be_api/ListConfigs';

export interface MatreshkaBeAPIClient extends grpc.Client {
  ApiVersion(argument: _matreshka_be_api_ApiVersion_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_ApiVersion_Response__Output>): grpc.ClientUnaryCall;
  ApiVersion(argument: _matreshka_be_api_ApiVersion_Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_matreshka_be_api_ApiVersion_Response__Output>): grpc.ClientUnaryCall;
  ApiVersion(argument: _matreshka_be_api_ApiVersion_Request, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_ApiVersion_Response__Output>): grpc.ClientUnaryCall;
  ApiVersion(argument: _matreshka_be_api_ApiVersion_Request, callback: grpc.requestCallback<_matreshka_be_api_ApiVersion_Response__Output>): grpc.ClientUnaryCall;
  apiVersion(argument: _matreshka_be_api_ApiVersion_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_ApiVersion_Response__Output>): grpc.ClientUnaryCall;
  apiVersion(argument: _matreshka_be_api_ApiVersion_Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_matreshka_be_api_ApiVersion_Response__Output>): grpc.ClientUnaryCall;
  apiVersion(argument: _matreshka_be_api_ApiVersion_Request, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_ApiVersion_Response__Output>): grpc.ClientUnaryCall;
  apiVersion(argument: _matreshka_be_api_ApiVersion_Request, callback: grpc.requestCallback<_matreshka_be_api_ApiVersion_Response__Output>): grpc.ClientUnaryCall;
  
  GetConfig(argument: _matreshka_be_api_GetConfig_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_GetConfig_Response__Output>): grpc.ClientUnaryCall;
  GetConfig(argument: _matreshka_be_api_GetConfig_Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_matreshka_be_api_GetConfig_Response__Output>): grpc.ClientUnaryCall;
  GetConfig(argument: _matreshka_be_api_GetConfig_Request, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_GetConfig_Response__Output>): grpc.ClientUnaryCall;
  GetConfig(argument: _matreshka_be_api_GetConfig_Request, callback: grpc.requestCallback<_matreshka_be_api_GetConfig_Response__Output>): grpc.ClientUnaryCall;
  getConfig(argument: _matreshka_be_api_GetConfig_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_GetConfig_Response__Output>): grpc.ClientUnaryCall;
  getConfig(argument: _matreshka_be_api_GetConfig_Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_matreshka_be_api_GetConfig_Response__Output>): grpc.ClientUnaryCall;
  getConfig(argument: _matreshka_be_api_GetConfig_Request, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_GetConfig_Response__Output>): grpc.ClientUnaryCall;
  getConfig(argument: _matreshka_be_api_GetConfig_Request, callback: grpc.requestCallback<_matreshka_be_api_GetConfig_Response__Output>): grpc.ClientUnaryCall;
  
  GetConfigRaw(argument: _matreshka_be_api_GetConfigRaw_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_GetConfigRaw_Response__Output>): grpc.ClientUnaryCall;
  GetConfigRaw(argument: _matreshka_be_api_GetConfigRaw_Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_matreshka_be_api_GetConfigRaw_Response__Output>): grpc.ClientUnaryCall;
  GetConfigRaw(argument: _matreshka_be_api_GetConfigRaw_Request, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_GetConfigRaw_Response__Output>): grpc.ClientUnaryCall;
  GetConfigRaw(argument: _matreshka_be_api_GetConfigRaw_Request, callback: grpc.requestCallback<_matreshka_be_api_GetConfigRaw_Response__Output>): grpc.ClientUnaryCall;
  getConfigRaw(argument: _matreshka_be_api_GetConfigRaw_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_GetConfigRaw_Response__Output>): grpc.ClientUnaryCall;
  getConfigRaw(argument: _matreshka_be_api_GetConfigRaw_Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_matreshka_be_api_GetConfigRaw_Response__Output>): grpc.ClientUnaryCall;
  getConfigRaw(argument: _matreshka_be_api_GetConfigRaw_Request, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_GetConfigRaw_Response__Output>): grpc.ClientUnaryCall;
  getConfigRaw(argument: _matreshka_be_api_GetConfigRaw_Request, callback: grpc.requestCallback<_matreshka_be_api_GetConfigRaw_Response__Output>): grpc.ClientUnaryCall;
  
  ListConfigs(argument: _matreshka_be_api_ListConfigs_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_ListConfigs_Response__Output>): grpc.ClientUnaryCall;
  ListConfigs(argument: _matreshka_be_api_ListConfigs_Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_matreshka_be_api_ListConfigs_Response__Output>): grpc.ClientUnaryCall;
  ListConfigs(argument: _matreshka_be_api_ListConfigs_Request, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_ListConfigs_Response__Output>): grpc.ClientUnaryCall;
  ListConfigs(argument: _matreshka_be_api_ListConfigs_Request, callback: grpc.requestCallback<_matreshka_be_api_ListConfigs_Response__Output>): grpc.ClientUnaryCall;
  listConfigs(argument: _matreshka_be_api_ListConfigs_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_ListConfigs_Response__Output>): grpc.ClientUnaryCall;
  listConfigs(argument: _matreshka_be_api_ListConfigs_Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_matreshka_be_api_ListConfigs_Response__Output>): grpc.ClientUnaryCall;
  listConfigs(argument: _matreshka_be_api_ListConfigs_Request, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_ListConfigs_Response__Output>): grpc.ClientUnaryCall;
  listConfigs(argument: _matreshka_be_api_ListConfigs_Request, callback: grpc.requestCallback<_matreshka_be_api_ListConfigs_Response__Output>): grpc.ClientUnaryCall;
  
  PatchConfigRaw(argument: _matreshka_be_api_PatchConfigRaw_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_PatchConfigRaw_Response__Output>): grpc.ClientUnaryCall;
  PatchConfigRaw(argument: _matreshka_be_api_PatchConfigRaw_Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_matreshka_be_api_PatchConfigRaw_Response__Output>): grpc.ClientUnaryCall;
  PatchConfigRaw(argument: _matreshka_be_api_PatchConfigRaw_Request, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_PatchConfigRaw_Response__Output>): grpc.ClientUnaryCall;
  PatchConfigRaw(argument: _matreshka_be_api_PatchConfigRaw_Request, callback: grpc.requestCallback<_matreshka_be_api_PatchConfigRaw_Response__Output>): grpc.ClientUnaryCall;
  patchConfigRaw(argument: _matreshka_be_api_PatchConfigRaw_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_PatchConfigRaw_Response__Output>): grpc.ClientUnaryCall;
  patchConfigRaw(argument: _matreshka_be_api_PatchConfigRaw_Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_matreshka_be_api_PatchConfigRaw_Response__Output>): grpc.ClientUnaryCall;
  patchConfigRaw(argument: _matreshka_be_api_PatchConfigRaw_Request, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_PatchConfigRaw_Response__Output>): grpc.ClientUnaryCall;
  patchConfigRaw(argument: _matreshka_be_api_PatchConfigRaw_Request, callback: grpc.requestCallback<_matreshka_be_api_PatchConfigRaw_Response__Output>): grpc.ClientUnaryCall;
  
  UpsertConfig(argument: _matreshka_be_api_PatchConfig_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_PatchConfig_Response__Output>): grpc.ClientUnaryCall;
  UpsertConfig(argument: _matreshka_be_api_PatchConfig_Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_matreshka_be_api_PatchConfig_Response__Output>): grpc.ClientUnaryCall;
  UpsertConfig(argument: _matreshka_be_api_PatchConfig_Request, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_PatchConfig_Response__Output>): grpc.ClientUnaryCall;
  UpsertConfig(argument: _matreshka_be_api_PatchConfig_Request, callback: grpc.requestCallback<_matreshka_be_api_PatchConfig_Response__Output>): grpc.ClientUnaryCall;
  upsertConfig(argument: _matreshka_be_api_PatchConfig_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_PatchConfig_Response__Output>): grpc.ClientUnaryCall;
  upsertConfig(argument: _matreshka_be_api_PatchConfig_Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_matreshka_be_api_PatchConfig_Response__Output>): grpc.ClientUnaryCall;
  upsertConfig(argument: _matreshka_be_api_PatchConfig_Request, options: grpc.CallOptions, callback: grpc.requestCallback<_matreshka_be_api_PatchConfig_Response__Output>): grpc.ClientUnaryCall;
  upsertConfig(argument: _matreshka_be_api_PatchConfig_Request, callback: grpc.requestCallback<_matreshka_be_api_PatchConfig_Response__Output>): grpc.ClientUnaryCall;
  
}

export interface MatreshkaBeAPIHandlers extends grpc.UntypedServiceImplementation {
  ApiVersion: grpc.handleUnaryCall<_matreshka_be_api_ApiVersion_Request__Output, _matreshka_be_api_ApiVersion_Response>;
  
  GetConfig: grpc.handleUnaryCall<_matreshka_be_api_GetConfig_Request__Output, _matreshka_be_api_GetConfig_Response>;
  
  GetConfigRaw: grpc.handleUnaryCall<_matreshka_be_api_GetConfigRaw_Request__Output, _matreshka_be_api_GetConfigRaw_Response>;
  
  ListConfigs: grpc.handleUnaryCall<_matreshka_be_api_ListConfigs_Request__Output, _matreshka_be_api_ListConfigs_Response>;
  
  PatchConfigRaw: grpc.handleUnaryCall<_matreshka_be_api_PatchConfigRaw_Request__Output, _matreshka_be_api_PatchConfigRaw_Response>;
  
  UpsertConfig: grpc.handleUnaryCall<_matreshka_be_api_PatchConfig_Request__Output, _matreshka_be_api_PatchConfig_Response>;
  
}

export interface MatreshkaBeAPIDefinition extends grpc.ServiceDefinition {
  ApiVersion: MethodDefinition<_matreshka_be_api_ApiVersion_Request, _matreshka_be_api_ApiVersion_Response, _matreshka_be_api_ApiVersion_Request__Output, _matreshka_be_api_ApiVersion_Response__Output>
  GetConfig: MethodDefinition<_matreshka_be_api_GetConfig_Request, _matreshka_be_api_GetConfig_Response, _matreshka_be_api_GetConfig_Request__Output, _matreshka_be_api_GetConfig_Response__Output>
  GetConfigRaw: MethodDefinition<_matreshka_be_api_GetConfigRaw_Request, _matreshka_be_api_GetConfigRaw_Response, _matreshka_be_api_GetConfigRaw_Request__Output, _matreshka_be_api_GetConfigRaw_Response__Output>
  ListConfigs: MethodDefinition<_matreshka_be_api_ListConfigs_Request, _matreshka_be_api_ListConfigs_Response, _matreshka_be_api_ListConfigs_Request__Output, _matreshka_be_api_ListConfigs_Response__Output>
  PatchConfigRaw: MethodDefinition<_matreshka_be_api_PatchConfigRaw_Request, _matreshka_be_api_PatchConfigRaw_Response, _matreshka_be_api_PatchConfigRaw_Request__Output, _matreshka_be_api_PatchConfigRaw_Response__Output>
  UpsertConfig: MethodDefinition<_matreshka_be_api_PatchConfig_Request, _matreshka_be_api_PatchConfig_Response, _matreshka_be_api_PatchConfig_Request__Output, _matreshka_be_api_PatchConfig_Response__Output>
}
