<script setup lang="ts">

import { PropType} from "vue";
import {AppInfo} from "@/models/config/info/appInfo.ts";

defineProps({
  servicesList: {
    type: Object as PropType<AppInfo[]>,
    required: true,
  }
})

const emit = defineEmits<{
  (event: 'clickService', mouseEvent: MouseEvent, name: string): void
}>()

</script>

<template>
  <div class="ListServices">
    <div
        v-for="service in servicesList"
        :key="service.name.value"
        class="ListItem"
        @click="(event: MouseEvent) => { emit('clickService', event, service.name.value) }"
    >
      {{ service.name.value }}
    </div>
  </div>
</template>

<style scoped>
.ListServices {
  width: 80vw;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  gap: 2em;

}

.ListItem {
  max-height: 6em;
  width: 100%;
  overflow: hidden;
  border: var(--border-color) solid;

  border-radius: 16px;

  padding: 1em 2em 1em 2em;

  display: flex;
  gap: 1em;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;
}

</style>
