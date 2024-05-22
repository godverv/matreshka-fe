<script setup lang="ts">
import {Server} from "@/api/grpc/matreshka-be_api.pb.ts";
import ServerInfo from "@/components/page/server/ServerInfo.vue";

const servers = defineModel<Server[]>()

</script>

<template>
  <div class="Node">
    <div class="NodeHeader">
      <div v-if="!servers">No servers defined</div>
      <div v-else>Servers:</div>
    </div>

    <div
        v-if="servers"
        v-for="(s, i) in servers"
        :key="s.makoshName"
        class="Node"
    >
      <ServerInfo v-model="servers[i]"/>

    </div>
  </div>


</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
