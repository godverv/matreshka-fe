<script setup lang="ts">

import ConfigInput from "@/components/base/ConfigInput.vue"
import ServerInfo from "@/components/config/server/ServerInfo.vue";
import {Server} from "@/models/app_config/servers/servers.ts";
import ConfigField from "@/components/base/ConfigInput.vue";

const servers = defineModel<Server[]>({default: []})

</script>

<template>
  <div class="Node">
    <div v-if="servers.length == 0">No servers defined</div>
        <div v-else>Servers:</div>
    <div
        class="Node"
        v-for="(s, i) in servers" :key="s.port"
    >
      <div class="NodeField ShortField">
        <ConfigInput
            v-model="s.name"
        />
      </div>
      <div class="NodeField ShortField">
        <ConfigField
            v-model="s.port"
            field-name="Port"
            :is-disabled="true"
        />
      </div>
      <div class="Node">
        <ServerInfo v-model="servers[i]"/>
      </div>
    </div>
  </div>


</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
