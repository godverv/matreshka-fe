<script setup lang="ts">
import Toast from "primevue/toast";
import Dialog from "primevue/dialog";
import {ref} from "vue";
import SettingsWidget from "@/widget/SettingsWidget.vue";

// Open Settings
document.addEventListener('keydown', function(event) {
  if ((event.ctrlKey || event.metaKey) && event.key === '.') {
    event.preventDefault();
    isDialogOpen.value = true;
  }
});

const isDialogOpen = ref<boolean>(false)
const dialogHeader = ref<string>("Settings")
const dialogStyle = {
  width: '60vw',
  height: '60vh',
}

</script>

<template >
  <div class="root">
    <Toast/>
    <RouterView />
    <Dialog
        v-model:visible="isDialogOpen"
        modal
        :dismissableMask="true"
        :header="dialogHeader"
        :style="dialogStyle"
    >
      <SettingsWidget/>
    </Dialog>
  </div>
</template>

<style scoped>

.root {
  padding: 2em;
  width: 100%;
  height: 100%;
}

</style>
