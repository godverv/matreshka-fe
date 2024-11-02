<script setup lang="ts">

import SpeedDial from "primevue/speeddial";
import Button from "primevue/button";

import DisplayConfigDisplay from "@/widget/DisplayConfigWidget.vue";
import {ref} from "vue";
import {HomeUri, router} from "@/routes/Routes.ts";

defineProps({
  name: {
    type: String,
    required: true,
  },
})
const canGoBack = ref(window.history.back === null)
</script>

<template>
  <div class="DisplayConfigPage">
    <div class="topSection">
      <Button
          :icon="'pi ' + ( canGoBack ? 'pi-home': 'pi-arrow-left')"
          severity="contrast"
          rounded
          @click="()=>{canGoBack ? router.back() : router.push(HomeUri)}"
      />
      <SpeedDial
          :tooltipOptions="{ event: 'hover', position: 'left' }"
          :model="[{label: '13', icon: 'pi pi-hammer'}]"
          direction="left"
          :radius="100"
      />
    </div>
    <DisplayConfigDisplay
        :service-name="name"/>
  </div>
</template>

<style scoped>
.DisplayConfigPage {
  display: flex;
  flex-direction: column;
  gap: 2em;
}

.topSection {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
