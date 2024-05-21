<script setup lang="ts">

import {PropType} from "vue";
import {ResourceUnknown} from "@/api/grpc/matreshka-be_api.pb.ts";
import Inputer from "@/components/base/Inputer.vue";

const props = defineProps({
  environmentVariables: {
    type: Object as PropType<ResourceUnknown>,
    required: true,
  }
})

const environmentFlat: string[][] = []

for (const key in props.environmentVariables.environment) {
  environmentFlat.push([key, props.environmentVariables.environment[key]])
}
</script>

<template>
  <div
      class="Node"
      v-for="(_, idx) in environmentFlat" :key="environmentFlat[idx][0]">

    <div class="InfoTableRow">
      <div class="InfoTableColumn">
        <Inputer v-model="environmentFlat[idx][0]"/>
      </div>

      <div class="Separator">:</div>
      <div class="InfoTableColumn">
        <Inputer v-model="environmentFlat[idx][1]"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

.Separator {
  display: flex;
  align-items: center;
}

</style>
