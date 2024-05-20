<script setup lang="ts">
import {PropType} from "vue";
import {ResourceConfig} from "../../../api/grpc/matreshka-be_api.pb.ts";
import UnknownResource from "./UnknownResource.vue";
import PostgresResource from "./PostgresResource.vue";
import RedisResource from "./RedisResource.vue";
import SqliteResource from "./SqliteResource.vue";
import GrpcResource from "./GrpcResource.vue";
import TelegramResource from "./TelegramResource.vue";

defineProps(
    {
      config: {
        type: Object as PropType<ResourceConfig>,
        required: true,
      }
    }
)

</script>

<template>
  <div class="ResourceInfo">
    <UnknownResource
        v-if="config.unknown"
        :environmentVariables="config.unknown"/>

    <PostgresResource
        v-else-if="config.postgres"
        :val="config.postgres"/>

    <RedisResource
        v-else-if="config.redis"
        :val="config.redis"/>

    <SqliteResource
        v-else-if="config.sqlite"
        :val="config.sqlite"/>

    <GrpcResource
        v-else-if="config.grpc"
        :val="config.grpc"/>

    <TelegramResource
        v-else-if="config.telegram"
        :val="config.telegram"/>
  </div>
</template>

<style scoped>
.ResourceInfo {
  box-sizing: border-box;
}
</style>
