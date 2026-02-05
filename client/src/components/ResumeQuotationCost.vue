<script setup>
import { computed } from "vue";

const props = defineProps({
  dataResumeQuotation: {
    quotationType: String,
    totalCost: String || { part1: String, part2: String },
    activeLayer: {
      foundation: Number,
      roof: Number,
    },
  },
});

const quotationType = computed(() => {
  return props.dataResumeQuotation.quotationType;
});

const activeLayerFoundation = computed(() => {
  return props.dataResumeQuotation.activeLayer.foundation;
});

const activeLayerRoof = computed(() => {
  return props.dataResumeQuotation.activeLayer.roof;
});

const totalCost = computed(() => {
  return props.dataResumeQuotation.totalCost;
});
</script>
<template>
  <!-- foundation resume quotation -->
  <div
    v-if="quotationType === 'foundation'"
    class="resume__quotation-container w-full px-2 flex flex-row justify-between bg-[var(--background-secondary)]"
  >
    <ul
      v-if="activeLayerFoundation === 0"
      class="resume__quotation-content w-full flex flex-row justify-between"
    >
      <li><p>Materials + labor</p></li>
      <li class="w-max h-full flex flex-row items-center gap-4">
        <div>
          <p>{{ totalCost.part1 }}</p>
        </div>
        <div class="cta__expand-details grid place-items-center">
          <div
            class="cta__work button__circle grid place-items-center cursor-pointer"
          >
            <span class="basis--icon simple-line-icons--arrow-down"></span>
          </div>
        </div>
      </li>
    </ul>
    <ul
      v-else-if="activeLayerFoundation === 1"
      class="resume__quotation-content w-full flex flex-row justify-between"
    >
      <li><p>Materials + labor</p></li>
      <li class="w-max h-full flex flex-row items-center gap-4">
        <div>
          <p>{{ totalCost.part2 }}</p>
        </div>
        <div class="cta__expand-details grid place-items-center">
          <div
            class="cta__work button__circle grid place-items-center cursor-pointer"
          >
            <span class="basis--icon simple-line-icons--arrow-down"></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!-- roof resume quotation -->
  <div
    v-else-if="quotationType === 'roofing'"
    class="resume__quotation-container w-full px-2 flex flex-row justify-between bg-[var(--background-secondary)]"
  >
    <ul
      v-if="activeLayerRoof === 0"
      class="resume__quotation-content w-full flex flex-row justify-between"
    >
      <li><p>Materials + labor</p></li>
      <li class="w-max h-full flex flex-row items-center gap-4">
        <div>
          <p>{{ totalCost.part1 }}</p>
        </div>
        <div class="cta__expand-details grid place-items-center">
          <div
            class="cta__work button__circle grid place-items-center cursor-pointer"
          >
            <span class="basis--icon simple-line-icons--arrow-down"></span>
          </div>
        </div>
      </li>
    </ul>
    <ul
      v-else-if="activeLayerRoof === 1"
      class="resume__quotation-content w-full flex flex-row justify-between"
    >
      <li><p>Materials + labor</p></li>
      <li class="w-max h-full flex flex-row items-center gap-4">
        <div>
          <p>{{ totalCost.part2 }}</p>
        </div>
        <div class="cta__expand-details grid place-items-center">
          <div
            class="cta__work button__circle grid place-items-center cursor-pointer"
          >
            <span class="basis--icon simple-line-icons--arrow-down"></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!-- plumbing or electricity quotation -->
  <div
    v-else
    class="resume__quotation-container w-full px-2 flex flex-row justify-between bg-[var(--background-secondary)]"
  >
    <ul class="resume__quotation-content w-full flex flex-row justify-between">
      <li><p>Materials + labor</p></li>
      <li class="w-max h-full flex flex-row items-center gap-4">
        <div>
          <p>{{ totalCost }}</p>
        </div>
        <div class="cta__expand-details grid place-items-center">
          <div
            class="cta__work button__circle grid place-items-center cursor-pointer"
          >
            <span class="basis--icon simple-line-icons--arrow-down"></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
p {
  font-size: var(--mid-size);
}

.button__circle {
  width: 1rem;
  height: 1rem;
  padding: 0.25rem;
  color: var(--text-paragraph);
  /* border: 1px solid var(--link--external-btn); */
  border-radius: 100%;
  opacity: 0.98;
  outline: 2px solid var(--link--external-btn);
  outline-offset: -1px;
}
</style>
