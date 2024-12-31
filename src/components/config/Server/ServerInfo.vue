<script setup lang="ts">

import {Server} from "@/models/AppConfig/servers/servers.ts";
import GrpcHandlerInfo from "@/components/config/Server/GrpcHandlerInfo.vue";
import FileServerHandlerInfo from "@/components/config/Server/FileServerHandlerInfo.vue";

const cfg = defineModel<Server>({required: true})

</script>

<template>
  <div v-if="!cfg">No information on server</div>

  <div v-else class="Node">
    <div v-for="(_, idx) in cfg.grpc"
         class="Node">
      <div class="NodeField">
        {{ 'Grpc' }}
      </div>
      <GrpcHandlerInfo v-model="cfg.grpc[idx]"/>
    </div>

    <div
        v-for="(_, idx) in cfg.fs"
        class="Node">
      <div class="NodeField">
        {{ 'File server' }}
      </div>
      <FileServerHandlerInfo v-model="cfg.fs[idx]"/>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
