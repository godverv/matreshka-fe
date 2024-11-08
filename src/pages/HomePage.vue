<script setup lang="ts">
import {ref} from "vue";

import Dialog from "primevue/dialog";
import SpeedDial from 'primevue/speeddial';
import {MenuItem} from "primevue/menuitem";

import {ListServices} from "@/api/api.ts";
import {AppInfo} from "@/models/config/info/appInfo.ts";

import DisplayConfigWidget from "@/widget/DisplayConfigWidget.vue";
import CreateVervConfigWidget from "@/widget/CreateVervConfigWidget.vue";

import {Pages, router} from "@/routes/Routes.ts";
import {handleGrpcError} from "@/api/error_codes.ts";
import {useToast} from "primevue/usetoast";


// Dialog
const isDialogOpen = ref<boolean>(false);

const dialogHeader = ref<string>('');
const dialogWidgetName = ref<'displayConfig' | 'newConfig'>('displayConfig');

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

const dialogPosition = ref<"center" | "right">('center')

// Service list
const servicesList = ref<AppInfo[]>([])
const openedServiceName = ref<string>('')

const listReq = {
  listRequest: {
    limit: 10,
    offset: 0,
  }
}

function openDisplayConfigDialog(serviceName: string) {
  dialogWidgetName.value = 'displayConfig'
  dialogHeader.value = serviceName
  openedServiceName.value = serviceName

  isDialogOpen.value = true

  dialogStyle.width = '80vw'
  dialogStyle.height = '95vh'

  dialogPosition.value = 'center'
}

function serviceClicked(event: MouseEvent, serviceName: string) {
  if (event.ctrlKey || event.metaKey) {
    window
        .open(
            router.resolve(
                {
                  name: Pages.DisplayConfig,
                  params: {name: serviceName},
                },
            )
                .href, '_blank')
  } else {
    openDisplayConfigDialog(serviceName ?? '')
  }
}

function openCreateVervConfigWidget() {
  dialogWidgetName.value = 'newConfig'
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
      .catch(handleGrpcError(useToast()))
}

fetchServices()

const buttons: MenuItem[] = [
  {
    label: 'New Verv config',
    icon: 'pi pi-box',
    command(_) {
      openCreateVervConfigWidget()
    },
  },
  {
    visible: false,
    label: 'New environment config',
    icon: 'pi pi-file-plus',
    command(_) {
      // TODO
    },
  },
]

</script>

<template>
  <!--  List of services -->
  <div class="Home">
    <div class="list" v-if="servicesList.length > 0">
      <div
          v-for="service in servicesList"
          :key="service.name.value"
          class="listItem"
          @click="(event: MouseEvent) => { serviceClicked(event, service.name.value) }"
      >
        {{ service.name.value }}
      </div>
    </div>
    <div v-else>
      <p> No configs on this node</p>
    </div>
  </div>

  <!-- Dialog component. Static position -->
  <Dialog
      v-model:visible="isDialogOpen"
      modal
      :dismissableMask="true"
      :header="dialogHeader"
      :pt="dialogPt"
      :style="dialogStyle"
      :position="dialogPosition"
  >
    <CreateVervConfigWidget
        v-if="dialogWidgetName==='newConfig'"/>

    <DisplayConfigWidget
        v-else-if="dialogWidgetName==='displayConfig'"
        :serviceName="openedServiceName"
    />

  </Dialog>

  <!-- Help button at the bottom -->
  <SpeedDial
      :style="{ position: 'absolute', bottom: '2%', right: '2%' }"
      :tooltipOptions="{ event: 'hover', position: 'left' }"
      :model="buttons"
      direction="up"
      :radius="100"
  />
</template>

<style scoped>
.Home {
  padding: 2em;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1em;
  height: 100%;
}

.list {
  width: 80vw;


  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  gap: 2em;

}

.listItem {
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
