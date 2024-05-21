<script setup lang="ts">
import {PropType} from "vue";
import {ResourceConfig} from "@/api/grpc/matreshka-be_api.pb.ts";
import UnknownResource from "@/components/page/resource/UnknownResource.vue";
import PostgresResource from "@/components/page/resource/PostgresResource.vue";
import RedisResource from "@/components/page/resource/RedisResource.vue";
import SqliteResource from "@/components/page/resource/SqliteResource.vue";
import GrpcResource from "@/components/page/resource/GrpcResource.vue";
import TelegramResource from "@/components/page/resource/TelegramResource.vue";

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
  <div class="Node">
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
@import "@/assets/styles/config_display.css";

</style>
