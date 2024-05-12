<script setup lang="ts">

import {PropType} from "vue";
import {ResourceTelegram} from "../../../api/grpc/matreshka-be_api.pb.ts";
import Inputer from "../../base/Inputer.vue";

defineProps({
  val: {
    type: Object as PropType<ResourceTelegram>,
    required: true,
  }
})
</script>

<template>
  <div class="Info">
    <Inputer
        input-tittle="Api Key"
        v-model="val.apiKey"
    />
  </div>
</template>

<style scoped>
.Info {
  display: flex;
  flex-direction: column;
}
</style>
