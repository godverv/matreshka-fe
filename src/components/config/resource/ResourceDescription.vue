<script setup lang="ts">

import OneOfResourceConfig from "./OneOfResource.vue";
import {oneOfResource} from "@/models/config/resources/resource.ts";

const resource = defineModel<oneOfResource>({required: true})

</script>

<template>
  <div v-if="!resource"> No information on resource</div>

  <div v-else class="Node">
    <div class="NodeHeader">Resource type: {{ resource.resource_type }}

    <!--     TODO ADD CONNECTION STRING -->
    </div>

    <OneOfResourceConfig
        v-model="resource"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
