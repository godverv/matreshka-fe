<script setup lang="ts">

import OneOfResourceConfig from "./OneOfResource.vue";
import {Resource} from "@/api/grpc/matreshka-be_api.pb.ts";
import CopyButton from "@/components/base/CopyButton.vue";
import {fromProtoResourceType} from "@/models/resource_types.ts";

const config = defineModel<Resource | undefined>()

</script>

<template>
  <div v-if="!config"> No information on resource</div>

  <div v-else class="Node ResourceBlock">
    <div class="NodeHeader">Resource type: {{ fromProtoResourceType(config.resourceType) }}

      <div v-if="config.conn">
        <CopyButton
            v-model="config.conn.connectionString"
        />
      </div>
    </div>

    <OneOfResourceConfig
        v-if=config.resourceConfig
        :config="config.resourceConfig"/>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

.ResourceBlock {
  border-top: blue solid;
  width: 100%;
  padding: 0.25em;
}
</style>
