<script setup lang="ts">

import ServerInfo from "@/components/config/server/ServerInfo.vue";
import {oneOfServer} from "@/models/config/servers/servers.ts";

const servers = defineModel<oneOfServer[]>()

</script>

<template>
  <div class="Node">
    <div class="NodeHeader">
      <div v-if="!servers">No servers defined</div>
      <div v-else>Servers:</div>
    </div>

    <div
        v-if="servers"
        class="Node"
        v-for="(s, i) in servers" :key="s.name"
    >
      <div class="NodeHeader">Server type: {{ s.server_type }}

        <!--     TODO ADD CONNECTION STRING -->
      </div>
      <ServerInfo v-model="servers[i]"/>
    </div>
  </div>


</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
