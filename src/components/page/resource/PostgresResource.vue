<script setup lang="ts">
import {PropType} from "vue";
import {ResourcePostgres} from "../../../api/grpc/matreshka-be_api.pb.ts";
import Inputer from "../../base/Inputer.vue";

defineProps({
  val: {
    type: Object as PropType<ResourcePostgres>,
    required: true,
  }
})
</script>

<template>
  <div class="Info">
    <Inputer
        input-tittle="Database name"
        v-model="val.dbName"
    />
    <Inputer
        input-tittle="Host"
        v-model="val.host"
    />
    <Inputer
        input-tittle="Port"
        v-model="val.port"
    />
    <Inputer
        input-tittle="Username"
        v-model="val.userName"
    />
    <Inputer
        input-tittle="Password"
        v-model="val.pwd"
    />
  </div>
</template>

<style scoped>
.Info {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

</style>
