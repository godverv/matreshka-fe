<script setup lang="ts">

import {NormalizeName, oneOfResource} from "@/models/config/resources/resource.ts";
import {GetImageForResource} from "@/models/config/resources/images.ts";
import IconButton from "@/components/base/IconButton.vue";

import {ref} from "vue";
import {ResourceType} from "@/models/config/resources/resource_types.ts";

const resources = defineModel<oneOfResource[]>()

const selectedIdx = ref<number>(0)
const moveToLeft = ref<boolean>(false)
function setSelected(i: number) {
  moveToLeft.value = selectedIdx.value > i
  selectedIdx.value = i
}

</script>

<template>
  <div v-if="resources">
    <div class="BoomBoxButtonsWrapper">
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
    <div class="Content">
      <transition :name="moveToLeft ? 'slide-left':'slide-right'" mode="out-in">
        <component
            :is="ResourceType.GetComponent(resources[selectedIdx].type)"
            :key="resources[selectedIdx].resource_name"
            v-model="resources[selectedIdx]"/>
      </transition>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";
@import "@/assets/styles/boombox.css";

.BoomBoxButtonsWrapper {
  overflow-x: scroll;
  overflow-y: hidden;
}

.BoomBoxItem {
  background: var(--basic-gradient);
}

.BoomBoxItem:focus {
  background: var(--selected-gradient);
}

.Content {
  overflow: hidden;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.25s ease;
}
.slide-left-enter-from {
  transform: translateX(100%);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.25s ease;
}
.slide-right-enter-from {
  transform: translateX(-100%);
}
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
