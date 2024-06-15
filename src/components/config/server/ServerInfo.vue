<script setup lang="ts">

import ServerOneOf from "@/components/config/server/ServerOneOf.vue";
import {oneOfServer} from "@/models/config/servers/servers.ts";

const cfg = defineModel<oneOfServer | undefined>()

</script>

<template>
  <div v-if="!cfg">No information on server</div>

  <div
      v-else
      class="Node"
  >
    <div class="NodeHeader">{{cfg.name}} </div>
    <ServerOneOf
        v-model="cfg"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";
</style>
