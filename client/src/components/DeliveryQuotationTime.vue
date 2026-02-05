<script setup>
import { computed } from "vue";

const props = defineProps({
  dataDelivery: {
    userLanguage: String,
    quotationType: String,
    delayToExecute: { fr: String, en: String } || {
      part1: { fr: String, en: String },
      part2: { fr: String, en: String },
    },
    activeLayer: {
      foundation: Number,
      roof: Number,
    },
  },
});

const indexLang = computed(() => {
  return props.dataDelivery.userLanguage === "FR" ? 0 : 1;
});

const quotationType = computed(() => {
  return props.dataDelivery.quotationType;
});

const delayToExecute = computed(() => {
  return props.dataDelivery.delayToExecute;
});

const activeLayerFoundation = computed(() => {
  return props.dataDelivery.activeLayer.foundation;
});

const activeLayerRoof = computed(() => {
  return props.dataDelivery.activeLayer.roof;
});
</script>
<template>
  <!-- foundation delivery -->
  <div v-if="quotationType === 'foundation'" class="record__block-delivery">
    <div v-if="activeLayerFoundation === 0">
      <div
        class="record__delivery w-full h-12 mt-0 px-2 flex flex-row justify-between"
      >
        <p class="stick__cater-size opacity-60">Delivery Times</p>
        <p
          v-if="!indexLang"
          class="stick__cater-size opacity-80 text-[var(--link--external-btn)]"
        >
          {{ delayToExecute.part1.fr }}
        </p>
        <p
          v-else
          class="stick__cater-size opacity-80 text-[var(--link--external-btn)]"
        >
          {{ delayToExecute.part1.en }}
        </p>
      </div>
    </div>
    <div v-else>
      <div
        class="record__delivery w-full h-12 mt-0 px-2 flex flex-row justify-between"
      >
        <p class="stick__cater-size opacity-60">Delivery Times</p>
        <p
          v-if="!indexLang"
          class="stick__cater-size opacity-80 text-[var(--link--external-btn)]"
        >
          {{ delayToExecute.part2.fr }}
        </p>
        <p
          v-else
          class="stick__cater-size opacity-80 text-[var(--link--external-btn)]"
        >
          {{ delayToExecute.part2.en }}
        </p>
      </div>
    </div>
  </div>
  <!-- roofing delivery -->
  <div v-else-if="quotationType === 'roofing'" class="record__block-delivery">
    <div v-if="activeLayerRoof === 0">
      <div
        class="record__delivery w-full h-12 mt-0 px-2 flex flex-row justify-between"
      >
        <p class="stick__cater-size opacity-60">Delivery Times</p>
        <p
          v-if="!indexLang"
          class="stick__cater-size opacity-80 text-[var(--link--external-btn)]"
        >
          {{ delayToExecute.part1.fr }}
        </p>
        <p
          v-else
          class="stick__cater-size opacity-80 text-[var(--link--external-btn)]"
        >
          {{ delayToExecute.part1.en }}
        </p>
      </div>
    </div>
    <div v-else>
      <div
        class="record__delivery w-full h-12 mt-0 px-2 flex flex-row justify-between"
      >
        <p class="stick__cater-size opacity-60">Delivery Times</p>
        <p
          v-if="!indexLang"
          class="stick__cater-size opacity-80 text-[var(--link--external-btn)]"
        >
          {{ delayToExecute.part2.fr }}
        </p>
        <p
          v-else
          class="stick__cater-size opacity-80 text-[var(--link--external-btn)]"
        >
          {{ delayToExecute.part2.en }}
        </p>
      </div>
    </div>
  </div>
  <!-- plumbing or electricity delivery -->
  <div v-else class="record__block-delivery">
    <!-- v-else !*foundation* or *roofing*  -->
    <div class="record__delivery">
      <div class="w-full h-16 mt-6 px-2 flex flex-row justify-between">
        <p>Delivery Times</p>
        <p
          v-if="!indexLang"
          class="opacity-80 text-[var(--link--external-btn)]"
        >
          {{ delayToExecute.fr }}
        </p>
        <p v-else class="opacity-80 text-[var(--link--external-btn)]">
          {{ delayToExecute.en }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
p {
  font-size: var(--mid-size);
}

.stick__cater-size {
  font-size: var(--cater-size);
}
</style>
