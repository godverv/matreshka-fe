<script setup lang="ts">

import OneOfResourceConfig from "./OneOfResource.vue";
import {oneOfResource} from "@/models/config/resources/resource.ts";

import {GetResourceName} from "@/models/config/resources/resource_types.ts";
import {GetImageForResource} from "@/models/config/resources/images.ts";

const resource = defineModel<oneOfResource>({required: true})

</script>

<template>
  <div v-if="!resource"> No information on resource</div>

  <div v-else class="Node">
    <div class="NodeHeader">
      <img :src="GetImageForResource(resource.resource_type)" alt="؟"/>
      <label>{{ GetResourceName(resource.resource_type) }}</label>/
    </div>

    <!--     TODO ADD CONNECTION STRING -->

    <OneOfResourceConfig
        v-model="resource"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

img {
  box-sizing: border-box;
  max-width: 1em;
  max-height: 1em;
}
</style>
