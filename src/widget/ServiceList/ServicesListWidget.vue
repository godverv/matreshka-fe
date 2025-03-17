<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

import {AppInfoClass} from "@/models/AppConfig/Info/AppInfo.ts";
import {dateToString} from "@/models/AppConfig/converters/date.ts";
import ConfigName from "@/components/base/ConfigName.vue";

defineProps({
  servicesList: {
    type: Object as () => AppInfoClass[],
  }
})

const emit = defineEmits<{
  (event: 'clickService', mouseEvent: MouseEvent, name: string): void
}>()


const labelRef = ref(null); // Reference to the Label div

const checkOverflow = () => {
  nextTick(() => {
    if (!labelRef.value) return; // Skip if ref not found

    const text = labelRef.value.querySelector(".LabelText");
    if (text.scrollWidth > labelRef.value.clientWidth) {
      labelRef.value.classList.add("hover-scroll");
    } else {
      labelRef.value.classList.remove("hover-scroll");
    }
  });
};

onMounted(checkOverflow);

</script>

<template>
  <div class="Wrapper">
    <div class="ListServices">
      <div
          v-for="service in servicesList"
          v-tooltip.bottom="`updated at ${service.updated_at ? dateToString(service.updated_at) : 'NO DATA'}`"
          :key="service.name.value"
          class="ListItem"
          @click="(event: MouseEvent) => { emit('clickService', event, service.name.value) }"
      >
        <ConfigName :label="service.name.value"/>
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
  border: var(--good) solid;

  border-radius: 16px;

  padding: 1em 0.75em 1em 0.75em;

  display: flex;
  gap: 1em;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;
}

</style>
