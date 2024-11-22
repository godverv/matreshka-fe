<script setup lang="ts">
import {onMounted, ref, Component, shallowRef} from "vue";

import SpeedDial from 'primevue/speeddial';
import {MenuItem} from "primevue/menuitem";

import {AppInfo} from "@/models/config/info/appInfo.ts";

import {ListServices} from "@/processes/api/api.ts";
import {handleGrpcError} from "@/processes/api/error_codes.ts";

import DisplayConfigWidget from "@/widget/DisplayConfigWidget.vue";
import CreateVervConfigWidget from "@/widget/CreateVervConfigWidget.vue";

import {Pages, router} from "@/app/routes/routes.ts";
import Dialog from "@/components/base/dialog/Dialog.vue"

import {useToast} from "primevue/usetoast";
import ProgressSpinner from 'primevue/progressspinner';
import Paginator from 'primevue/paginator';

import ServicesListWidget from "@/widget/ServiceList/ServicesListWidget.vue";
import ServiceListTopControlsWidget from "@/widget/ServiceList/ServiceListTopControlsWidget.vue";
import {ListServicesReq, Paging, Sort} from "@/models/search/search.ts";
// Dialog
const isDialogOpen = ref<boolean>(false);

const dialogHeader = ref<string>('');
const child = shallowRef<Component>(DisplayConfigWidget);
const childProps = ref<{
  serviceName: string
}>({
  serviceName: '',
});

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

const dialogPosition = ref<'center' | 'right'>('center')

// Service list
const servicesList = ref<AppInfo[] | undefined>(undefined)

const listRequest = ref<ListServicesReq>({} as ListServicesReq)

const paging = ref<Paging>({
  limit: 6,
  offset: 0,
} as Paging);

function openDisplayConfigDialog(serviceName: string) {
  child.value = DisplayConfigWidget
  dialogHeader.value = serviceName
  childProps.value.serviceName = serviceName
  isDialogOpen.value = true

  dialogStyle.width = '80vw'
  dialogStyle.height = '95vh'

  dialogPosition.value = 'center'
}

function openServiceInfo(event: MouseEvent, serviceName: string) {
  if (!(event.ctrlKey || event.metaKey)) {
    openDisplayConfigDialog(serviceName ?? '')
    return
  }

  window.open(
      router.resolve(
          {
            name: Pages.DisplayConfig,
            params: {name: serviceName},
          },
      )
          .href, '_blank')
}

function openCreateVervConfigWidget() {
  child.value = CreateVervConfigWidget
  dialogHeader.value = 'New verv config'
  isDialogOpen.value = true

  dialogStyle.width = '40vw'
  dialogStyle.height = '50vh'

  dialogPosition.value = 'right'
}

const pagingTotalRecords = ref<number>(0)

function updateList() {
  ListServices(listRequest.value)
      .then((resp) => {
        servicesList.value = resp.servicesInfo;
        pagingTotalRecords.value = resp.total;
      })
      .catch(handleGrpcError(useToast()))
}
onMounted(updateList)

function openPage(page: number) {
  listRequest.value.paging.offset = (listRequest.value.paging.limit || 10) * page;
  updateList()
}

function updateSearchReq(pattern: string, sort: Sort) {
  listRequest.value.searchPattern = pattern
  listRequest.value.sort = sort
  updateList()
}

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
    <div class="ListWrapper" v-if="servicesList && servicesList.length > 0">
      <div class="TopControls">
        <ServiceListTopControlsWidget
          @updateSearchRequest="updateSearchReq"
        />
      </div>
      <ServicesListWidget
          :services-list="servicesList"
          @click-service="openServiceInfo"
      />

      <div class="BottomControls" v-if="pagingTotalRecords > (paging.limit || 10)">
        <Paginator
            :rows="paging.limit"
            :totalRecords="pagingTotalRecords"
            @page="event => openPage(event.page)"
        />
      </div>
    </div>
    <div v-else-if="!servicesList">
      <ProgressSpinner/>
    </div>
    <div v-else>
      <p>No configs on this node</p>
    </div>
  </div>

  <Dialog
      v-model="isDialogOpen"
      :child="child"
      :child-props="childProps"
      :dialogHeader="dialogHeader"
      :dialogPt="dialogPt"
      :dialogStyle="dialogStyle"
      :dialogPosition="dialogPosition"
  />

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

.ListWrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.TopControls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  gap: 1em;
}
</style>
