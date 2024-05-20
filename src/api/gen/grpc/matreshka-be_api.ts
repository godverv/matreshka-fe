import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { MatreshkaBeAPIClient as _matreshka_be_api_MatreshkaBeAPIClient, MatreshkaBeAPIDefinition as _matreshka_be_api_MatreshkaBeAPIDefinition } from './matreshka_be_api/MatreshkaBeAPI';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    api: {
      CustomHttpPattern: MessageTypeDefinition
      Http: MessageTypeDefinition
      HttpRule: MessageTypeDefinition
    }
    protobuf: {
      DescriptorProto: MessageTypeDefinition
      EnumDescriptorProto: MessageTypeDefinition
      EnumOptions: MessageTypeDefinition
      EnumValueDescriptorProto: MessageTypeDefinition
      EnumValueOptions: MessageTypeDefinition
      FieldDescriptorProto: MessageTypeDefinition
      FieldOptions: MessageTypeDefinition
      FileDescriptorProto: MessageTypeDefinition
      FileDescriptorSet: MessageTypeDefinition
      FileOptions: MessageTypeDefinition
      GeneratedCodeInfo: MessageTypeDefinition
      MessageOptions: MessageTypeDefinition
      MethodDescriptorProto: MessageTypeDefinition
      MethodOptions: MessageTypeDefinition
      OneofDescriptorProto: MessageTypeDefinition
      OneofOptions: MessageTypeDefinition
      ServiceDescriptorProto: MessageTypeDefinition
      ServiceOptions: MessageTypeDefinition
      SourceCodeInfo: MessageTypeDefinition
      UninterpretedOption: MessageTypeDefinition
    }
  }
  matreshka_be_api: {
    ApiVersion: MessageTypeDefinition
    Config: MessageTypeDefinition
    GetConfig: MessageTypeDefinition
    GetConfigRaw: MessageTypeDefinition
    ListConfigs: MessageTypeDefinition
    ListRequest: MessageTypeDefinition
    MatreshkaBeAPI: SubtypeConstructor<typeof grpc.Client, _matreshka_be_api_MatreshkaBeAPIClient> & { service: _matreshka_be_api_MatreshkaBeAPIDefinition }
    PatchConfig: MessageTypeDefinition
    PatchConfigRaw: MessageTypeDefinition
    Resource: MessageTypeDefinition
    Server: MessageTypeDefinition
  }
}

