<script setup lang="ts">

import {Server} from "@/models/app_config/servers/servers.ts";
import GrpcHandlerInfo from "@/components/config/server/GrpcHandlerInfo.vue";
import FileServerHandlerInfo from "@/components/config/server/FileServerHandlerInfo.vue";
import ConfigField from "@/components/base/ConfigInput.vue";

const cfg = defineModel<Server>({required: true})
</script>

<template>
  <div v-if="!cfg">No information on server</div>

  <div v-else class="Node">
    <div v-for="(_, idx) in cfg.grpc"
         class="Node">
      <GrpcHandlerInfo v-model="cfg.grpc[idx]"/>
    </div>

    <div
        v-for="(_, idx) in cfg.fs"
        class="Node">
      <FileServerHandlerInfo v-model="cfg.fs[idx]"/>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
