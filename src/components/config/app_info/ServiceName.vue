<script setup lang="ts">

import {ConfigValue} from "@/models/shared/common.ts";
import ConfigField from "@/components/base/ConfigField/ConfigInput.vue";

const model = defineModel<ConfigValue<string>>({required: true})

</script>

<template>
  <div class="ServiceName">
    <ConfigField
        v-model="model"
        fieldName="Service name"
        :pre-addons="[]"
    />
  </div>
</template>

<style scoped>
.ServiceName {
  display: flex;
  flex-direction: row;
}
</style>
