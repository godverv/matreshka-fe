<script setup lang="ts">

import {Server} from "@/models/config/servers/servers.ts";

import ServerInfo from "@/components/config/server/ServerInfo.vue";

import Button from "primevue/button";

import {ref} from "vue";
import {ConfigValue} from "@/models/config/common.ts";

const servers = defineModel<Server[]>({default: []})

const newServer = ref<Server | undefined>();

function addServer() {
  if (newServer.value) {
    return
  }

  newServer.value = {
    port: {
      label: 'port',
      value: 8080,
      isNew: true,
    } as ConfigValue<number>,
    name: {
      label: 'name',
      value: '',
      isNew: true,
    } as ConfigValue<string>,
    grpc: [],
    fs: [],
  } as Server
}

</script>

<template>
  <div class="Node">
    <div class="NodeHeader">
      <div v-if="servers.length == 0 && !newServer">No servers defined</div>
      <div v-else>Servers:</div>
      <Button
          icon="pi pi-plus"
          severity="info"
          rounded
          @click="addServer"
      />
    </div>

    <div
        v-if="servers"
        class="Node"
        v-for="(s, i) in servers" :key="s.port.value"
    >
      <div class="NodeHeader"> :{{ s.port }}

        <!--     TODO ADD CONNECTION STRING -->
      </div>
      <ServerInfo
          v-model="servers[i]"/>
    </div>
    <ServerInfo
        v-if="newServer"
        v-model="newServer"/>
  </div>


</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
