<script setup lang="ts">

import PostgresResource from "@/components/config/resource/types/PostgresResource.vue";
import RedisResource from "@/components/config/resource/types/RedisResource.vue";
import SqliteResource from "@/components/config/resource/types/SqliteResource.vue";
import TelegramResource from "@/components/config/resource/types/TelegramResource.vue";
import GrpcResource from "@/components/config/resource/types/GrpcResource.vue";
import KeyMapComponent from "@/components/base/KeyMapComponent.vue";

import {
  oneOfResource, resourceGrpc,
  resourcePostgres,
  resourceRedis,
  resourceSqlite,
  resourceTelegram
} from "@/models/config/resources/resource.ts";
import {
  GrpcResourceTypePrefix,
  PostgresResourceTypePrefix,
  RedisResourceTypePrefix,
  SqliteResourceTypePrefix, TelegramResourceTypePrefix
} from "@/models/config/resources/resource_types.ts";
import {keyMap} from "@/models/config/common.ts";

const model = defineModel<oneOfResource>(
    {
      required: true,
    }
)

</script>

<template>
  <div class="Node">
    <PostgresResource
        v-if="model.resource_type == PostgresResourceTypePrefix"
        v-model="model as resourcePostgres"/>

    <RedisResource
        v-else-if="model.resource_type == RedisResourceTypePrefix"
        :val="model as resourceRedis"/>

    <SqliteResource
        v-else-if="model.resource_type == SqliteResourceTypePrefix"
        :val="model as resourceSqlite"/>

    <TelegramResource
        v-else-if="model.resource_type == TelegramResourceTypePrefix"
        :val="model as resourceTelegram"/>

    <GrpcResource
        v-else-if="model.resource_type == GrpcResourceTypePrefix"
        :val="model as resourceGrpc"/>

    <KeyMapComponent
        v-else
        :val="model as keyMap"/>

  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
