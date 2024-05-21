<script setup lang="ts">
import {Resource} from "@/api/grpc/matreshka-be_api.pb.ts";
import ResourceDescription from "@/components/page/resource/ResourceDescription.vue";

const resources = defineModel<Resource[]>()

</script>

<template>
  <div v-if="!resources"> No resources defined</div>

  <div v-else class="Node">
    <div class="NodeHeader">Resources:</div>
    <div
        class="NodeField"
        v-for="(res, i) in resources"
        :key="res.name">

      <ResourceDescription
          v-model="resources[i]"/>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
