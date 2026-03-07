<script setup>
import { ref, computed, watch, nextTick } from "vue";

import { useProjectStore } from "../store-management/useProjectStore";

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

const projectStore = useProjectStore();

const arrowUpDownRef = ref();

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

const isBtnJoystickTrigerred = computed(() => {
  return projectStore.$state.isBtnJoystickTrigerred;
});

const isBoxMaterialExpanded = computed(() => {
  return projectStore.$state.isBoxMaterialExpanded;
});

const quotationTypeSelect = computed(() => {
  return projectStore.$state.quotationTypeSelect;
});

watch(
  quotationTypeSelect,
  async (newQuotationTypeSelect, oldQuotationTypeSelect) => {
    // watch react naturalle before component mount It is why we add **nextTick**
    await nextTick();

    oldQuotationTypeSelect = await oldQuotationTypeSelect;
    newQuotationTypeSelect = await newQuotationTypeSelect;

    const arrowUpDown = arrowUpDownRef.value;

    if (arrowUpDown.getAttribute("quotation-type") === oldQuotationTypeSelect) {
      arrowUpDown.classList.remove("anim__rotate-z");
    }

    if (arrowUpDown.getAttribute("quotation-type") === newQuotationTypeSelect) {
      arrowUpDown.classList.add("anim__rotate-z");
    }
  },
);

watch(
  [isBtnJoystickTrigerred, isBoxMaterialExpanded],
  async (
    [newBtnJoystickTrigerred, newBoxMaterialExpanded],
    [oldBtnJoystickTrigerred, oldBoxMaterialExpanded],
  ) => {
    // watch react naturalle before component mount It is why we add **nextTick**
    await nextTick();

    newBtnJoystickTrigerred = await newBtnJoystickTrigerred;

    newBoxMaterialExpanded = await newBoxMaterialExpanded;

    const arrowUpDown = arrowUpDownRef.value;

    if (!newBtnJoystickTrigerred && !newBoxMaterialExpanded) {
      arrowUpDown?.classList.remove("anim__rotate-z");
    }
  },
);
</script>
<template>
  <!-- foundation resume quotation -->
  <div
    v-if="quotationType === 'foundation'"
    class="resume__quotation-container w-full px-2 flex flex-row justify-between"
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
            id="arrow__up-downwrap"
            class="cta__work button__circle grid place-items-center cursor-pointer"
            :quotation-type="props.dataResumeQuotation.quotationType"
            ref="arrowUpDownRef"
          >
            <span
              id="arrow__up-down"
              class="basis--icon simple-line-icons--arrow-down"
            ></span>
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
            id="arrow__up-downwrap"
            class="cta__work button__circle grid place-items-center cursor-pointer"
            :quotation-type="props.dataResumeQuotation.quotationType"
            ref="arrowUpDownRef"
          >
            <span
              id="arrow__up-down"
              class="basis--icon simple-line-icons--arrow-down"
            ></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!-- roof resume quotation -->
  <div
    v-else-if="quotationType === 'roofing'"
    class="resume__quotation-container w-full px-2 flex flex-row justify-between"
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
            id="arrow__up-downwrap"
            class="cta__work button__circle grid place-items-center cursor-pointer"
            :quotation-type="props.dataResumeQuotation.quotationType"
            ref="arrowUpDownRef"
          >
            <span
              id="arrow__up-down"
              class="basis--icon simple-line-icons--arrow-down"
            ></span>
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
            id="arrow__up-downwrap"
            class="cta__work button__circle grid place-items-center cursor-pointer"
            :quotation-type="props.dataResumeQuotation.quotationType"
            ref="arrowUpDownRef"
          >
            <span
              id="arrow__up-down"
              class="basis--icon simple-line-icons--arrow-down"
            ></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!-- plumbing or electricity quotation -->
  <div
    v-else
    class="resume__quotation-container w-full px-2 flex flex-row justify-between"
  >
    <ul class="resume__quotation-content w-full flex flex-row justify-between">
      <li><p>Materials + labor</p></li>
      <li class="w-max h-full flex flex-row items-center gap-4">
        <div>
          <p>{{ totalCost }}</p>
        </div>
        <div class="cta__expand-details grid place-items-center">
          <div
            id="arrow__up-downwrap"
            class="cta__work button__circle grid place-items-center cursor-pointer"
            :quotation-type="props.dataResumeQuotation.quotationType"
            ref="arrowUpDownRef"
          >
            <span
              id="arrow__up-down"
              class="basis--icon simple-line-icons--arrow-down"
            ></span>
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

/* icon toggle  material anim  */
.button__circle {
  width: 1rem;
  height: 1rem;
  padding: 0.25rem;
  color: var(--text-paragraph);
  background-color: transparent;
  background-color: var(--accent-color-1);
  opacity: 0.86;
  transform: rotateZ(0deg) scale(1);
  outline: 2px solid var(--link--external-btn);
  outline-offset: -1px;
  border-radius: 100%;

  transition: all 850ms ease;
}

.button__circle.anim__rotate-z {
  color: var(--background-secondary);
  background-color: var(--link--external-btn);
  opacity: 0.98;
  transform: rotateZ(180deg) scale(1.15);
  outline: 0 solid var(--background-secondary);
  outline-offset: 0;

  transition: all 1.5s ease;
}

.resume__quotation-content li {
  animation: anim-appearance 0.85s ease forwards;
}

@keyframes anim-appearance {
  0% {
    opacity: 0;
  }

  40% {
    opacity: 0.45;
  }

  100% {
    opacity: 1;
  }
}
</style>
