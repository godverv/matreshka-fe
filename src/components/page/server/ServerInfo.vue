<script setup lang="ts">

import {Server} from "@/api/grpc/matreshka-be_api.pb.ts";
import ServerOneOf from "@/components/page/server/ServerOneOf.vue";

const server = defineModel<Server | undefined>()

</script>

<template>
  <div v-if="server" class="Node">
    <div class="NodeHeader"> {{ server.makoshName }}:</div>

    <div class="NodeField">Swagger: {{ server.swaggerLink }} </div>
    <div class="NodeField"> Type: {{ server.type }} </div>
    <div class="Node">
      <ServerOneOf v-model="server.config"/>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";
</style>
