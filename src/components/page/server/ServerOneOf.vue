<script setup lang="ts">
import {ServerConfig} from "@/api/grpc/matreshka-be_api.pb.ts";

const server = defineModel<ServerConfig | undefined>()
</script>

<template>
  <div v-if="server">
      <div></div>
  </div>
</template>

<style scoped>

</style>
