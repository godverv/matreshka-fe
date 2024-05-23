<script setup lang="ts">

import KeyMapComponent from "@/components/base/KeyMapComponent.vue";

import {oneOfServer} from "@/models/servers.ts";
import {keyMap} from "@/models/common.ts";

const cfg = defineModel<oneOfServer>()
</script>

<template>
  <KeyMapComponent
      :val="cfg as keyMap"/>
</template>

<style scoped>

</style>
