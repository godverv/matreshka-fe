<script setup lang="ts">
import {ConfigAppConfig} from "../../../api/grpc/matreshka-be_api.pb.ts";
import Inputer from "../../base/Inputer.vue";

const appConfig = defineModel<ConfigAppConfig>()

</script>

<template>
  <div v-if="!appConfig">No app info</div>
  <div v-else class="AppInfo">
    <div class="InfoHeader">
      AppInfo:
    </div>

    <div class="InfoBody">
      <div class="InfoBlock">
        <div>Service name:</div>
        <Inputer v-model="appConfig.name"/>
      </div>

      <div class="InfoBlock">
        <div>Version:</div>
        <Inputer v-model="appConfig.version"/>
      </div>

      <div class="InfoBlock">
        <div>Startup duration:</div>
        <div class="InfoRow">
          <Inputer v-model="appConfig.startupDurationSec"/>
          <div>seconds</div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.AppInfo {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 0.5em;
}

.InfoHeader {

}

.InfoBlock {
  display: flex;
  flex-direction: row
}

.InfoRow {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25em;
}

.InfoBody {
  padding-left: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
</style>
