<script setup lang="ts">
import {ServerUnknown} from "@/api/grpc/matreshka-be_api.pb.ts";

const info = defineModel<ServerUnknown | undefined>()

const infoFlat: string[][] = []

for (const key in info.value?.environment) {
  infoFlat.push([key, info.value?.environment[key]])
}
</script>

<template>
  <div class="Node">
    <div v-if="!info">no information</div>

    <div v-else
         class="NodeField"
         v-for="(f) in infoFlat">
      <div>{{ f[0] }}</div>
      <div>{{ f[1] }}</div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";
</style>
