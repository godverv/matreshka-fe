<script setup lang="ts">

import {NormalizeName, OneOfResource} from "@/models/app_config/resources/resource.ts";
import {GetImageForResource} from "@/models/app_config/resources/images.ts";
import IconButton from "@/components/base/IconButton.vue";

import {ref} from "vue";
import {ResourceType} from "@/models/app_config/resources/resource_types.ts";

const resources = defineModel<OneOfResource[]>({default: []})

const selectedIdx = ref<number>(0)

function setSelected(i: number) {
  selectedIdx.value = i
}

</script>

<template>
  <div
      v-if="resources.length > 0"
      class="ResourcesInfo"
      :style="{
          /*
            9 - Carousel
            2.85 - per field
            0.75 - per gap between fields
           */
          height: (9 + 2.85*((Object.keys(resources[selectedIdx]).length)-1) + 0.75*((Object.keys(resources[selectedIdx]).length)-3))+'em'
      }">
    <div class="BoomBoxWrapper">
      <div class="BoomBox">
        <div
            class="BoomBoxItem"
            v-for="(res, i) in resources"
            :key="res.resource_name"
            :style="{
              'background':  selectedIdx === i ? 'linear-gradient(#70f1f1, #05878c)': 'linear-gradient(#fff9f9, #AAA8A8)',
            } "
        >
          <IconButton
              :onclick="()=>setSelected(i)"
              :isSelected="selectedIdx === i"
              :iconPath="GetImageForResource(res.type)"
              :label="NormalizeName(res)"
          />
        </div>
      </div>

    </div>
    <Transition name="fade" mode="out-in">
      <div
          :key="resources[selectedIdx].resource_name"
          class="ResourceInfoContent">
          <component
              :is="ResourceType.GetComponent(resources[selectedIdx].type)"
              v-model="resources[selectedIdx]"/>
      </div>
    </Transition>

  </div>
  <div v-else>No resources defined</div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";
@import "@/assets/styles/boombox.css";

.ResourcesInfo {
  padding: 0;
}

.ResourcesInfo {
  transition: height 0.5s ease;
}

.BoomBoxWrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 0 3vh 0 3vh;
  height: 9em;
}

.BoomBoxItem {
  background: var(--basic-gradient);
}

.BoomBoxItem:focus {
  background: var(--selected-gradient);
}

.ResourceInfoContent {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75em;
}

.ResourceInfoContent > * {
  overflow: hidden;
  height: auto;
  transition: height 1s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


</style>
