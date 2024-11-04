<script setup lang="ts">

import {GrpcHandler, Server} from "@/models/config/servers/servers.ts";

import ConfigField from "@/components/base/ConfigField.vue";
import GrpcHandlerInfo from "@/components/config/server/GrpcHandlerInfo.vue";
import FileServerHandlerInfo from "@/components/config/server/FileServerHandlerInfo.vue";

import SpeedDial from "primevue/speeddial";
import {MenuItem} from "primevue/menuitem";
import {ConfigValue} from "@/models/config/common.ts";

const cfg = defineModel<Server>({required: true})

defineProps({
  isNew: {
    type: Boolean,
    default: true,
  },
})

function addRestHandler(): void {
  // TODO
  alert("Rest configuration unavailable for now")
}

function addGrpcHandler(): void {
  cfg.value.grpc.push({
    path: {
      label: 'URI Path',
      value: '/api/{grpc}',
      isNew: true,
    } as ConfigValue<string>,
    gateway: {
      label: 'Gateway path',
      value: '/',
      isNew: true,
    } as ConfigValue<string>,
    module: {
      label: 'Module',
      value: '',
      isNew: true,
    } as ConfigValue<string>,
  } as GrpcHandler)
}

function addFileHandler(): void {
}

const newPathButtons: MenuItem[] = [
  {
    icon: 'pi pi-globe',
    label: 'Rest',
    command(_) {
      addRestHandler()
    },
  },
  {
    icon: 'pi pi-sitemap',
    label: 'GRPC',
    command(_) {
      addGrpcHandler()
    }
  },
  {
    icon: 'pi pi-folder-open',
    label: 'File Server',
    command(_) {
      addFileHandler()
    }
  },
]
</script>

<template>
  <div class="Node"
       :class="{isNew: isNew}"
  >
    <div class="NodeField">
      <ConfigField
          v-model="cfg.port"
          field-name="Port"
      />
    </div>
    <div class="NodeField">
      <ConfigField
          v-model="cfg.name"
          field-name="Name"
      />
    </div>
    <div class="NodeField">
      <GrpcHandlerInfo
          v-for="(_, idx) in cfg.grpc"
          v-model="cfg.grpc[idx]"
      />
    </div>
    <FileServerHandlerInfo
        v-for="(_, idx) in cfg.fs"
        v-model="cfg.fs[idx]"
    />


    <div class="Controls">
      <SpeedDial
          direction="right"
          :model="newPathButtons"
          :tooltipOptions="{ event: 'hover', position: 'bottom' }"
      />
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";


.Controls {
  display: flex;
  justify-content: start;
}

.isNew {
  border: gray solid 1px;
  border-radius: 16px;
}
</style>
