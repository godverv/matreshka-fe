<script setup lang="ts">

import {PropType} from "vue";
import {ResourceTelegram} from "../../../api/grpc/matreshka-be_api.pb.ts";

defineProps({
  val: {
    type: Object as PropType<ResourceTelegram>,
    required: true,
  }
})
</script>

<template>
  <div class="Info">
    <div>{{val.apiKey}}</div>
  </div>
</template>

<style scoped>
.Info {
  display: flex;
  flex-direction: column;
}
</style>
