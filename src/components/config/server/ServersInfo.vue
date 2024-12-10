<script setup lang="ts">

import ServerInfo from "@/components/config/server/ServerInfo.vue";
import {Server} from "@/models/app_config/servers/servers.ts";

const servers = defineModel<Server[]>({default: []})

</script>

<template>
  <div class="Node">
    <div class="Node">
      <div v-if="servers.length == 0">No servers defined</div>
      <div v-else>Servers:</div>


      <div
          v-if="servers"
          class="Node"
          v-for="(s, i) in servers" :key="s.port"
      >
        <div class="Node"> :{{ s.port }}
          <!--     TODO ADD CONNECTION STRING -->
        </div>
        <ServerInfo v-model="servers[i]"/>
      </div>
    </div>
  </div>


</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
