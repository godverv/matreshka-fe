<script setup lang="ts">

import ResourceDescription from "@/components/config/resource/ResourceDescription.vue";
import {oneOfResource} from "@/models/config/resources/resource.ts";

const resources = defineModel<oneOfResource[]>()

</script>

<template>
  <div class="Node">
    <div class="NodeHeader">
      <div v-if="!resources"> No resources defined</div>
      <div v-else>Resources:</div>
    </div>

    <div
        v-if="resources"
        class="Node"
        v-for="(res, i) in resources"
        :key="res.resource_name">

      <ResourceDescription
          v-model="resources[i]"/>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
