<script setup lang="ts">

import {NormalizeName, oneOfResource} from "@/models/config/resources/resource.ts";
import {GetImageForResource} from "@/models/config/resources/images.ts";
import IconButton from "@/components/base/IconButton.vue";

import {ref} from "vue";
import {ResourceType} from "@/models/config/resources/resource_types.ts";

const resources = defineModel<oneOfResource[]>({default: []})

const selectedIdx = ref<number>(0)

function setSelected(i: number) {
  selectedIdx.value = i
  console.log(Object.keys(resources.value[i]))
}

</script>

<template>
  <div
      v-if="resources.length > 0"
      class="ResourcesInfo"
      :style="{
          /* 22 for buttons row at the top
            1 for gap before separator
            1 for gap after
            8 for each field
           */
          height: 22+1+1+8*(Object.keys(resources[selectedIdx]).length-2)+'vh'
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
          class="Content">
          <component
              :is="ResourceType.GetComponent(resources[selectedIdx].type)"
              v-model="resources[selectedIdx]"/>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";
@import "@/assets/styles/boombox.css";

.ResourcesInfo {
  padding: 0;
}

.BoomBoxWrapper + .Content {
  border-top: 3px solid black;
}

.BoomBoxWrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 0 3vh 1vh 3vh;
}

.BoomBoxItem {
  background: var(--basic-gradient);
}

.BoomBoxItem:focus {
  background: var(--selected-gradient);
}

.Content {
  width: 100%;
  padding: 1vh;
  display: flex;
  flex-direction: column;
  gap: 1vh;
}

.Content > * {
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

.ResourcesInfo {
  transition: height 0.5s ease;
}

</style>
