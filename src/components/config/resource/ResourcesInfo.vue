<script setup lang="ts">

import {NormalizeName, oneOfResource} from "@/models/config/resources/resource.ts";
import {GetImageForResource} from "@/models/config/resources/images.ts";
import IconButton from "@/components/base/IconButton.vue";
import {ref} from "vue";

const resources = defineModel<oneOfResource[]>()

const selected = ref<number>(0)

function setSelected(i: number) {
  selected.value = i
}
</script>

<template>
  <div class="InfoBlock">
    <div class="CarouselWrapper">
      <div class="Carousel">
        <div
            class="CarouselItem"
            v-for="(res, i) in resources"
            :key="res.resource_name"
            :style="{
            background: selected === i ? 'linear-gradient(#70f1f1, #05878c)': 'linear-gradient(#fff9f9, #AAA8A8)',
          }"
        >
          <IconButton
              :onclick="()=>setSelected(i)"
              :isSelected="selected === i"
              :iconPath="GetImageForResource(res.resource_type)"
              :label="NormalizeName(res)"
          />
        </div>
      </div>
    </div>
    <div class="Content">
      тут контент
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/config_display.css";
@import "@/assets/styles/carousel.css";

.CarouselWrapper {
  overflow-x: scroll;
  overflow-y: hidden;
}
</style>
