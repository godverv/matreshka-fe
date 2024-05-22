<script setup lang="ts">
import {PropType} from "vue";

import {resourcePostgres, resourceRedis, unknownResource} from "@/models/resource.ts"

import UnknownResource from "@/components/page/resource/UnknownResource.vue";
import PostgresResource from "@/components/page/resource/PostgresResource.vue";
import RedisResource from "@/components/page/resource/RedisResource.vue";
// import SqliteResource from "@/components/page/resource/SqliteResource.vue";
// import GrpcResource from "@/components/page/resource/GrpcResource.vue";
// import TelegramResource from "@/components/page/resource/TelegramResource.vue";

import {oneOfResource} from "@/models/resource.ts";
import {PostgresResourceTypePrefix, RedisResourceTypePrefix} from "@/models/resource_types.ts";

const model = defineModel<oneOfResource>(
    {
      required: true,
    }
)


</script>

<template>
  <div class="Node">
    <PostgresResource
        v-if="model.resource_name.startsWith(PostgresResourceTypePrefix)"
        v-model="model as resourcePostgres"/>

    <RedisResource
        v-else-if="model.resource_name.startsWith(RedisResourceTypePrefix)"
        :val="model as resourceRedis"/>

    <UnknownResource
        v-else
        :environmentVariables="model as unknownResource"/>


    <!--    <SqliteResource-->
    <!--        v-else-if="config.sqlite"-->
    <!--        :val="config.sqlite"/>-->

    <!--    <GrpcResource-->
    <!--        v-else-if="config.grpc"-->
    <!--        :val="config.grpc"/>-->

    <!--    <TelegramResource-->
    <!--        v-else-if="config.telegram"-->
    <!--        :val="config.telegram"/>-->
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
