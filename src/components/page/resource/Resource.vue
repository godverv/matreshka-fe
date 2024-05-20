<script setup lang="ts">

import OneOfResourceConfig from "./OneOfResource.vue";
import {Resource} from "../../../api/grpc/matreshka-be_api.pb.ts";
import CopyButton from "../../base/CopyButton.vue";
import {fromProtoResourceType} from "../../../models/resource_types.ts";

const config = defineModel<Resource | undefined>()

</script>

<template>
  <div v-if="!config"> No information on resource</div>

  <div v-else class="Resource">

    <div class="ResourceType">Resource type: {{ fromProtoResourceType(config.resourceType)}}</div>

    <div v-if="config.conn" class="NoConStr">
      <CopyButton
          input-tittle="Connection string:"
          v-model="config.conn.connectionString"
          :read-only="true"
      />
    </div>


    <div>
      <OneOfResourceConfig
          v-if=config.resourceConfig
          :config="config.resourceConfig"/>

    </div>
  </div>
</template>

<style scoped>
.Resource {
  display: flex;
  border-bottom: blue solid;
  flex-direction: column;
  gap: 1em;

  padding: 0.5em;
}

.NoConStr {
  text-decoration: underline;
}

</style>
