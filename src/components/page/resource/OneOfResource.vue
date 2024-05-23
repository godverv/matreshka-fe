<script setup lang="ts">

import {
  resourceGrpc,
  resourcePostgres,
  resourceRedis,
  resourceSqlite,
  resourceTelegram,
  unknownResource
} from "@/models/resource.ts"

import UnknownResource from "@/components/page/resource/UnknownResource.vue";
import PostgresResource from "@/components/page/resource/types/PostgresResource.vue";
import RedisResource from "@/components/page/resource/types/RedisResource.vue";
import SqliteResource from "@/components/page/resource/types/SqliteResource.vue";
import TelegramResource from "@/components/page/resource/types/TelegramResource.vue";
import GrpcResource from "@/components/page/resource/types/GrpcResource.vue";

import {oneOfResource} from "@/models/resource.ts";
import {
  GrpcResourceTypePrefix,
  PostgresResourceTypePrefix,
  RedisResourceTypePrefix,
  SqliteResourceTypePrefix, TelegramResourceTypePrefix
} from "@/models/resource_types.ts";

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

    <SqliteResource
        v-else-if="model.resource_name.startsWith(SqliteResourceTypePrefix)"
        :val="model as resourceSqlite"/>

    <TelegramResource
        v-else-if="model.resource_name.startsWith(TelegramResourceTypePrefix)"
        :val="model as resourceTelegram"/>

    <GrpcResource
        v-else-if="model.resource_name.startsWith(GrpcResourceTypePrefix)"
        :val="model as resourceGrpc"/>

    <UnknownResource
        v-else
        :val="model as unknownResource"/>

  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
