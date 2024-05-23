<script setup lang="ts">

import {
  resourceGrpc,
  resourcePostgres,
  resourceRedis,
  resourceSqlite,
  resourceTelegram,
} from "@/models/resource.ts"

import PostgresResource from "@/components/config/resource/types/PostgresResource.vue";
import RedisResource from "@/components/config/resource/types/RedisResource.vue";
import SqliteResource from "@/components/config/resource/types/SqliteResource.vue";
import TelegramResource from "@/components/config/resource/types/TelegramResource.vue";
import GrpcResource from "@/components/config/resource/types/GrpcResource.vue";

import {oneOfResource} from "@/models/resource.ts";
import {
  GrpcResourceTypePrefix,
  PostgresResourceTypePrefix,
  RedisResourceTypePrefix,
  SqliteResourceTypePrefix, TelegramResourceTypePrefix
} from "@/models/resource_types.ts";
import {keyMap} from "@/models/common.ts";
import KeyMapComponent from "@/components/base/KeyMapComponent.vue";

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

    <KeyMapComponent
        v-else
        :val="model as keyMap"/>

  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";

</style>
