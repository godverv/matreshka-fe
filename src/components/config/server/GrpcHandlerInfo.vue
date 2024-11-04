<script setup lang="ts">

import ConfigField from "@/components/base/ConfigField.vue";
import {GrpcHandler} from "@/models/config/servers/servers.ts";

const grpcInfo = defineModel<GrpcHandler>({required: true})

</script>

<template>
  <div class="Node">
    <div class="NodeHeader">
      <ConfigField
          v-model="grpcInfo.path"
          field-name="Path"
      />
    </div>

    <div class="NodeField">
      <ConfigField
          v-model="grpcInfo.module"
          field-name="Module"
      />
    </div>
    <div class="NodeField">
      <ConfigField
          v-model="grpcInfo.gateway"
          field-name="Gateway"
      />
    </div>
  </div>

</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
