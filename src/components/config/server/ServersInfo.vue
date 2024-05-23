<script setup lang="ts">

import ServerInfo from "@/components/config/server/ServerInfo.vue";
import {oneOfServer} from "@/models/servers.ts";

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
      <ServerInfo v-model="servers[i]"/>
    </div>
  </div>


</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
