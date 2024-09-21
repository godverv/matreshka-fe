<script setup lang="ts">
import {ref} from "vue";

import Dialog from "primevue/dialog";
import {useToast} from "primevue/usetoast";

import {ListServices} from "@/api/api.ts";
import {appInfo} from "@/models/config/info/appInfo.ts";
import ConfigWidget from "@/widget/ConfigWidget.vue";

const isDialogOpen = ref<boolean>(false);
const toastApi = useToast();

const currentlyOpenService = ref<string>('');

function openDialog(serviceName: string) {
  currentlyOpenService.value = serviceName
  isDialogOpen.value = true
}

const servicesList = ref<appInfo[]>([])
const listReq = {
  listRequest: {
    limit: 10,
    offset: 0,
  }
}

ListServices(listReq)
    .then((resp) => {
      servicesList.value = resp
    })
    .catch((err) => {
      toastApi.add({
        severity: 'error',
        summary: `Unable to load list of service: ${err.message}.`,
        closable: false,
        life: 5000,
      })
      return
    })
</script>

<template>
  <div class="Home">
    <div class="list">
      <div v-if="servicesList.length != 0 ">
        <div
            v-for="service in servicesList"
            :key="service.name.value"
            class="listItem"
            @click="openDialog(service.name.value ?? '')"
        >
          {{ service.name.value }}
        </div>
      </div>
      <div v-else>
        No configs on this node
      </div>

    </div>

    <Dialog
        v-model:visible="isDialogOpen"
        modal
        :header="currentlyOpenService"
        :pt="{
          root: 'border-none',
          mask: {
              style: 'backdrop-filter: blur(2px)'
          }
        }"
        :style="{
          width: '80%',
          height: '95%',
          }"
    >
      <ConfigWidget :service-name="currentlyOpenService"/>
    </Dialog>
  </div>
</template>

<style scoped>
.Home {
  padding: 2em;
}

.list {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1em;
}

.listItem {
  width: 100%;

  height: 3em;
  max-height: 48px;

  border: var(--border-color) solid;

  border-radius: 2vh;

  padding: 0 1em 0 1em;

  display: flex;
  justify-content: left;
  align-items: center;

  cursor: pointer;
}
</style>
