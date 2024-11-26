<script setup lang="ts">

import {PropType} from "vue";
import {AppInfo} from "@/models/config/info/appInfo.ts";
import {dateToString} from "@/models/config/converters/date.ts";

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
  <div class="Wrapper">
    <div class="ListServices">
      <div
          v-for="service in servicesList"
          v-tooltip.bottom="`updated at ${service.updated_at ? dateToString(service.updated_at.value) : 'NO DATA'}`"
          :key="service.name.value"
          class="ListItem"
          @click="(event: MouseEvent) => { emit('clickService', event, service.name.value) }"
      >
        <div>
          {{ service.name.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Wrapper {
  display: flex;
  justify-content: center;
}

.ListServices {
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  gap: 2em;
  place-self: center;
}

.ListItem {
  max-height: 6em;
  width: 100%;
  overflow: hidden;
  border: var(--border-color) solid;

  border-radius: 16px;

  padding: 1em 0.75em 1em 0.75em;

  display: flex;
  gap: 1em;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;
}

</style>
