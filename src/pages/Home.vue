<script setup lang="ts">
import {ref} from "vue";

import Dialog from "primevue/dialog";

import {ListServices} from "@/api/api.ts";
import {ConfigAppConfig} from "@/api/grpc/matreshka-be_api.pb.ts";
import Header from "@/components/page/Header.vue";
import ConfigDialog from "@/widget/ConfigDialog.vue";

const visible = ref(false);

const currentlyOpenService = ref('');

function openDialog(serviceName: string) {
  currentlyOpenService.value = serviceName
  visible.value = true
}

const servicesList = ref<ConfigAppConfig[]>([])
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
</script>

<template>
  <Header/>
  <div class="Home">
    <div class="list">
      <div
          v-for="service in servicesList"
          :key="service.name"
          class="listItem"
          @click="openDialog(service.name ?? '')"
      >
        {{ service.name }}
      </div>
    </div>

    <Dialog
        v-model:visible="visible"
        modal
        :header="currentlyOpenService"
        :pt="{
          root: 'border-none',
          mask: {
              style: 'backdrop-filter: blur(2px)'
          }
        }"
    >
      <ConfigDialog
          :service-name="currentlyOpenService"
      />
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
  min-width: 40%;
  max-width: 80%;

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
