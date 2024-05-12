<script setup lang="ts">
import {PropType} from "vue";
import {ResourceRedis} from "../../../api/grpc/matreshka-be_api.pb.ts";
import Inputer from "../../base/Inputer.vue";

defineProps({
  val: {
    type: Object as PropType<ResourceRedis>,
    required: true,
  }
})
</script>

<template>
  <div class="Info">
    <Inputer
        input-tittle="Host"
        v-model="val.host"
    />
    <Inputer
        input-tittle="Post"
        v-model="val.port"
    />
    <Inputer
        input-tittle="User"
        v-model="val.user"
    />
    <Inputer
        input-tittle="Password"
        v-model="val.pwd"
    />
    <Inputer
        input-tittle="Db number"
        v-model="val.db"
    />
  </div>
</template>

<style scoped>
.Info {
  display: flex;
  flex-direction: column;
}
</style>
