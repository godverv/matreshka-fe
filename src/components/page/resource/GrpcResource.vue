<script setup lang="ts">
import {PropType} from "vue";
import {ResourceGrpc} from "../../../api/grpc/matreshka-be_api.pb.ts";
import Inputer from "../../base/Inputer.vue";

defineProps({
  val: {
    type: Object as PropType<ResourceGrpc>,
    required: true,
  }
})
</script>

<template>
  <div class="Info">
    <Inputer
      input-tittle="Service url"
      v-model="val.connectionString"
    />
    <Inputer
        input-tittle="Module"
        v-model="val.module"
    />
  </div>
</template>

<style scoped>
.Info {
  display: flex;
  flex-direction: column;
  gap: 0.5em
}
</style>
