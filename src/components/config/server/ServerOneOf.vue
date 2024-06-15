<script setup lang="ts">

import {serverGrpc, oneOfServer, serverRest} from "@/models/config/servers/servers.ts";
import {keyMap} from "@/models/config/common.ts";
import {GrpcServerTypePrefix, RestServerTypePrefix} from "@/models/config/servers/server_types.ts";

import KeyMapComponent from "@/components/base/KeyMapComponent.vue";
import GrpcServer from "@/components/config/server/types/GrpcServer.vue";
import RestServer from "@/components/config/server/types/RestServer.vue";

const model = defineModel<oneOfServer>(
    {
      required: true
    })
</script>

<template>

  <GrpcServer
      v-if="model.server_type == GrpcServerTypePrefix"
      v-model="model as serverGrpc"
  />

  <RestServer
      v-else-if="model.server_type == RestServerTypePrefix"
      v-model="model as serverRest"
  />

  <KeyMapComponent
      v-else
      :val="model as keyMap"/>
</template>

<style scoped>

</style>
