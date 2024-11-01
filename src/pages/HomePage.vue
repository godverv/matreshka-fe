<script setup lang="ts">
import {ref, Component as VueComponent, shallowRef} from "vue";

import {useToast} from "primevue/usetoast";
import Dialog from "primevue/dialog";
import SpeedDial from 'primevue/speeddial';
import {MenuItem} from "primevue/menuitem";

import {ListServices} from "@/api/api.ts";
import {AppInfo} from "@/models/config/info/appInfo.ts";

import DisplayConfigWidget from "@/widget/DisplayConfigWidget.vue";
import CreateVervConfigWidget from "@/widget/CreateVervConfigWidget.vue";


const isDialogOpen = ref<boolean>(false);
const toastApi = useToast();

const dialogHeader = ref<string>('');
const widgetForDialog = shallowRef<VueComponent>();

// Dialog
const dialogStyle = {
  width: '80vw',
  height: '95vh',
}

const dialogPt = {
  root: 'border-none',
  mask: {
    style: 'backdrop-filter: blur(2px)'
  }
}

const dialogPosition = ref<string>('')

// Service list
const servicesList = ref<AppInfo[]>([])

const listReq = {
  listRequest: {
    limit: 10,
    offset: 0,
  }
}

function openDisplayConfigDialog(serviceName: string) {
  widgetForDialog.value = DisplayConfigWidget
  dialogHeader.value = serviceName
  isDialogOpen.value = true

  dialogStyle.width = '80vw'
  dialogStyle.height = '95vh'

  dialogPosition.value = ''
}

function openCreateVervConfigWidget() {
  widgetForDialog.value = CreateVervConfigWidget
  dialogHeader.value = 'New verv config'
  isDialogOpen.value = true

  dialogStyle.width = '40vw'
  dialogStyle.height = '50vh'

  dialogPosition.value = 'right'
}

function fetchServices() {
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
}

fetchServices()

const buttons: MenuItem[] = [
  {
    label: 'Verv config',
    icon: 'pi pi-box',
    command(_) {
      openCreateVervConfigWidget()
    },
  },
  {
    label: 'Environment config',
    icon: 'pi pi-file-plus',
    command(_) {
      console.log('Env config')
    },
  },
]

</script>

<template>
  <div class="Home">
    <div v-if="servicesList.length > 0">
      <div
          v-for="service in servicesList"
          :key="service.name.value"
          class="listItem"
          @click="openDisplayConfigDialog(service.name.value ?? '')"
      >
        {{ service.name.value }}
        <!--        TODO Подумать внести за пределы этого списка-->
      </div>
    </div>
    <div v-else>
      <p> No configs on this node</p>
      <SpeedDial
          :style="{ position: 'absolute',  bottom: '2%', right: '2%' }"
          :tooltipOptions="{ position: 'left' }"
          :model="buttons"
          direction="up"
          :radius="100"
      />
    </div>
  </div>


  <Dialog
      v-model:visible="isDialogOpen"
      modal
      :dismissableMask="true"
      :header="dialogHeader"
      :pt="dialogPt"
      :style="dialogStyle"
      :position="dialogPosition"
  >
    <component :is="widgetForDialog"/>
    <!--    <DisplayConfigWidget-->
    <!--        :service-name="currentlyOpenService"/>-->
  </Dialog>
</template>

<style scoped>
.Home {
  padding: 2em;

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
