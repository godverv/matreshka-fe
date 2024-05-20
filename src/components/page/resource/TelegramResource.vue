<script setup lang="ts">

import {PropType} from "vue";
import {ResourceTelegram} from "../../../api/grpc/matreshka-be_api.pb.ts";
import Inputer from "../../base/Inputer.vue";
import CopyButton from "../../base/CopyButton.vue";

defineProps({
  val: {
    type: Object as PropType<ResourceTelegram>,
    required: true,
  }
})
</script>

<template>
  <div class="Info">
    <a>Api Key:</a>
    <div class="InputAndCopy">
      <Inputer v-model="val.apiKey"/>
      <CopyButton v-model="val.apiKey"/>
    </div>

  </div>
</template>

<style scoped>
.Info {
  display: flex;
  flex-direction: column;
}
.InputAndCopy {
  display: flex;
  flex-direction: row;
}
</style>
