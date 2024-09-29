<script setup lang="ts">

import {NormalizeName, oneOfResource} from "@/models/config/resources/resource.ts";
import {GetImageForResource} from "@/models/config/resources/images.ts";
import IconButton from "@/components/base/IconButton.vue";

import {ref} from "vue";
import {ResourceType} from "@/models/config/resources/resource_types.ts";

const resources = defineModel<oneOfResource[]>()

const selectedIdx = ref<number>(0)

function setSelected(i: number) {
  selectedIdx.value = i
  setTimeout( () => {
    const elem = document.getElementById('ResourceView')
    if (!elem) {
      return
    }

    elem.scrollIntoView({
      block: "center",
      behavior: "smooth"
    });
  }, 250)
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
      <div id="ResourceView">
        <transition name="fade" mode="out-in">
          <component
              :is="ResourceType.GetComponent(resources[selectedIdx].type)"
              :key="resources[selectedIdx].resource_name"
              v-model="resources[selectedIdx]"/>
        </transition>
      </div>
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

</style>
