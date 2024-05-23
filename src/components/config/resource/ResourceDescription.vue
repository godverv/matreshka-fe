<script setup lang="ts">

import OneOfResourceConfig from "./OneOfResource.vue";
import {fromProtoResourceName} from "@/models/resource_types.ts";
import {oneOfResource} from "@/models/resource.ts";

const resource = defineModel<oneOfResource>({required: true})

</script>

<template>
  <div v-if="!resource"> No information on resource</div>

  <div v-else class="Node ResourceBlock">
    <div class="NodeHeader">Resource type: {{ fromProtoResourceName(resource.resource_name) }}

    <!--     TODO ADD CONNECTION STRING -->
    </div>

    <OneOfResourceConfig
        v-model="resource"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

.ResourceBlock {
  width: 100%;
  padding: 0.25em;
}
</style>
