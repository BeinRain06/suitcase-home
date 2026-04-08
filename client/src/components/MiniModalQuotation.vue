<script setup>
import { ref, computed, watch } from "vue";

import {
  quotationFoundations,
  quotationPlumbing,
  quotationElectricity,
  quotationRoofing,
} from "../api-data/particular-data-center-project";

import { useProjectStore } from "../store-management/useProjectStore";

import TitleMiniQuotation from "./TitleMiniQuotation.vue";
import ResumeQuotationCost from "./ResumeQuotationCost.vue";
import DeliveryQuotationTime from "./DeliveryQuotationTime.vue";
import MaterialQuotation from "./MaterialQuotation.vue";

const props = defineProps({
  quotationInfo: {
    projectId: String,
    quotationType: String,
    indexToSelect: Number,
  },
  userLanguage: String,
});

/* const indexLang = reactive({ val: 0 }); */

const projectStore = useProjectStore();

const indexLang = computed(() => {
  return props.userLanguage === "FR" ? 0 : 1;
});

const extraBoxInfo = computed(() => {
  if (
    props.quotationInfo.quotationType === "foundation" ||
    props.quotationInfo.quotationType === "roofing"
  ) {
    return true;
  } else {
    return false;
  }
});

const activeLayer = ref({ foundation: 0, roof: 0 }); // foundation or roof materials weren't all stacking in our designed card (html &css). We create an object boolean: 0 or 1 to display th entire materials.

const dataFetched = ref(null);

const dataTitle = ref({
  userLanguage: props.userLanguage,
  quotationType: "",
  title: { fr: "", en: "" } || {
    part1: { fr: "", en: "" },
    part2: { fr: "", en: "" },
  },
  activeLayer: activeLayer.value, // object binary 0 0r 1 to display foundation material (part 1 or 2) or roofing material (part 1 or 2)
});

const dataResumeQuotation = ref({
  quotationType: "",
  totalCost: "" || {
    part1: "",
    part2: "",
  },
  activeLayer: activeLayer.value,
});

const dataDelivery = ref({
  userLanguage: props.userLanguage,
  quotationType: "",
  delayToExecute: { fr: "", en: "" } || {
    part1: { fr: "", en: "" },
    part2: { fr: "", en: "" },
  },
  activeLayer: activeLayer.value,
});

const dataMaterials = ref({
  userLanguage: props.userLanguage,
  quotationType: "",
  materialTemplate: {
    needOne: {
      fr: "",
      en: "",
    },
    needTwo: {
      fr: "",
      en: "",
    },
    needThree: {
      fr: "",
      en: "",
    },
  } || {
    part1: {
      needOne: {
        fr: "",
        en: "",
      } || { qty: { fr: "", en: "" }, dimensions: "", units: "" },
      needTwo: {
        fr: "",
        en: "",
      } || { qty: { fr: "", en: "" }, dimensions: "", units: "" },
      needThree: "" || {
          fr: "",
          en: "",
        } || { qty: { fr: "", en: "" }, dimensions: "", units: "" },
    },
    part2: {
      needOne: {
        fr: "",
        en: "",
      },
      needTwo: {
        fr: "",
        en: "",
      },
    },
  },
  cost: {
    materials: "",
    labor: "",
    total: "",
  } || {
    part1: { materials: "", labor: "", total: "" },
    part2: { materials: "", labor: "", total: "" },
  },
  surface: "",
  volume: { part1: "", part2: "" },
  activeFloor: projectStore.isFloor_0,
  activeLayer: activeLayer.value,
});

const dataToComponents = (dataSource, quotationType) => {
  const activeFloorIn = projectStore.isFloor_0;

  // Create a helper to point to the correct floor level in the data
  // If it's floor 0, use 'floor_1' data. If it's floor 1, use 'floor_2' data.
  const floorKey = activeFloorIn === "0" ? "floor_1" : "floor_2";

  // Now, instead of two huge IF/ELSE blocks,
  // we use a single switch and dynamic keys.

  let catchCost = {};
  let catchVolume = {};

  dataTitle.value.quotationType = quotationType;
  dataResumeQuotation.value.quotationType = quotationType;
  dataDelivery.value.quotationType = quotationType;
  dataMaterials.value.quotationType = quotationType;

  switch (quotationType) {
    case "foundation":
      // Use optional chaining (?.) and the floorKey variable
      const part1 = dataSource.part_1 || dataSource[floorKey]?.part_1;
      const part2 = dataSource.part_2 || dataSource[floorKey]?.part_2;

      dataTitle.value.title.part1 = part1?.title;
      dataTitle.value.title.part2 = part2?.title;

      dataResumeQuotation.value.totalCost.part1 = part1?.total;
      dataResumeQuotation.value.totalCost.part2 = part2?.total;

      dataDelivery.value.delayToExecute.part1 = part1?.delivery;
      dataDelivery.value.delayToExecute.part2 = part2?.delivery;

      dataMaterials.value.materialTemplate.part1 = part1?.materials;
      dataMaterials.value.materialTemplate.part2 = part2?.materials;

      catchCost = {
        part1: {
          materials: part1?.material_cost,
          labor: part1?.labor,
          total: part1?.total,
        },
        part2: {
          materials: part2?.material_cost,
          labor: part2?.labor,
          total: part2?.total,
        },
      };
      dataMaterials.value.cost = catchCost;

      catchVolume = {
        part1: part1?.volume,
        part2: part2?.volume,
      };

      dataMaterials.value.volume = catchVolume;
      break;
    case "plumbing":
      // dataTitle first fetch
      dataTitle.value.title = dataSource.title;
      // dataResumeQuotation first fetch
      dataResumeQuotation.value.totalCost = dataSource.total;
      // dataDelivery first fetch
      dataDelivery.value.delayToExecute = dataSource.delivery;
      dataDelivery.value.delayToExecute = dataSource.delivery;
      // dataMaterials first fetch
      dataMaterials.value.materialTemplate = dataSource.materials;
      dataMaterials.value.materialTemplate = dataSource.materials;

      catchCost = {
        materials: dataSource.material_cost,
        labor: dataSource.labor,
        total: dataSource.total,
      };
      dataMaterials.value.cost = catchCost;
      break;
    case "electricity":
      // dataTitle first fetch
      dataTitle.value.title = dataSource.title;
      // dataResumeQuotation first fetch
      dataResumeQuotation.value.totalCost = dataSource.total;
      // dataDelivery first fetch
      dataDelivery.value.delayToExecute = dataSource.delivery;
      dataDelivery.value.delayToExecute = dataSource.delivery;
      // dataMaterials first fetch
      dataMaterials.value.materialTemplate = dataSource.materials;
      dataMaterials.value.materialTemplate = dataSource.materials;
      catchCost = {
        materials: dataSource.material_cost,
        labor: dataSource.labor,
        total: dataSource.total,
      };
      dataMaterials.value.cost = catchCost;
      break;
    case "roofing":
      // Define these first so the code below knows what 'part1' is
      const rPart1 = dataSource.part_1;
      const rPart2 = dataSource.part_2;
      // dataTitle first fetch
      dataTitle.value.title.part1 = rPart1?.title;
      dataTitle.value.title.part2 = rPart2?.title;
      // dataResumeQuotation first fetch
      dataResumeQuotation.value.totalCost.part1 = rPart1?.total;
      dataResumeQuotation.value.totalCost.part2 = rPart2?.total;
      //  dataDelivery first fetch
      dataDelivery.value.delayToExecute.part1 = rPart1?.delivery;
      dataDelivery.value.delayToExecute.part2 = rPart2?.delivery;
      // dataMaterials first fetch
      dataMaterials.value.materialTemplate.part1 = rPart1?.materials;
      dataMaterials.value.materialTemplate.part2 = rPart2?.materials;

      catchCost = {
        part1: {
          materials: rPart1?.material_cost,
          labor: rPart1?.labor,
          total: rPart1?.total,
        },
        part2: {
          materials: rPart2?.material_cost,
          labor: rPart2?.labor,
          total: rPart2?.total,
        },
      };
      dataMaterials.value.cost = catchCost;

      // data roof surface
      dataMaterials.value.surface = dataSource.surface;
      break;
    default:
      throw new Error(
        "Error Fn *dataToComponents* --ELSE --MiniQuotation component-- ",
      );
  }
};

const dataToFetch = () => {
  let dataSource = null;

  /* console.log(
    "props quotationInfo --dataFetch Fn -> MiniModalQuotation :",
    props.quotationInfo,
  ); */

  switch (props.quotationInfo.quotationType) {
    case "foundation":
      dataSource = quotationFoundations[props.quotationInfo.indexToSelect];

      dataToComponents(dataSource, "foundation");

      break;
    case "plumbing":
      dataSource = quotationPlumbing[props.quotationInfo.indexToSelect];

      dataToComponents(dataSource, "plumbing");
      break;
    case "electricity":
      dataSource = quotationElectricity[props.quotationInfo.indexToSelect];
      dataToComponents(dataSource, "electricity");
      break;
    case "roofing":
      dataSource = quotationRoofing[props.quotationInfo.indexToSelect];

      dataToComponents(dataSource, "roofing");
      break;
    default:
      throw new Error(
        "Error Fn *dataToFetch* --MiniModalQuotation component-- ",
      );
  }

  /* collect data Fetched */
  dataFetched.value = dataSource;
};

// Use a watcher instead of onBeforeUpdate
watch(
  () => props.quotationInfo,
  (newInfo) => {
    if (newInfo) {
      dataToFetch(); // This only runs when the data actually changes
    }
  },
  { deep: true },
);
</script>
<template>
  <div class="item__quotation w-full h-full">
    <TitleMiniQuotation :data-title="dataTitle" />
    <div class="record__quotation w-full pt-4">
      <div class="record__designation w-full flex flex-row justify-between">
        <h4>Designation</h4>
        <h4>Cost</h4>
      </div>
      <div
        class="record__overwall-work w-full h-max pt-1 mt-4 flex flex-col justify-center"
      >
        <div id="mini__modal" class="box__overall-pricing">
          <ResumeQuotationCost :data-resumeQuotation="dataResumeQuotation" />
        </div>

        <div class="box__materials-glance">
          <div class="box__materials-animation">
            <MaterialQuotation :data-materials="dataMaterials" />
          </div>
        </div>
      </div>

      <div class="record__block-delivery">
        <DeliveryQuotationTime
          :data-delivery="dataDelivery"
          class="text-var[(--accent-color-3)]"
        />
      </div>

      <!-- v-if *foundation* or *roofing* -->
      <div v-if="extraBoxInfo" class="block__phase-work">
        <div
          id="cta__msg-reminder"
          class="cta__phase-todisplay relative w-full h-12"
        >
          <div class="phase__one active__phase">
            <div
              v-if="!indexLang"
              class="pointer__phase-box w-full flex flex-row justify-between"
            >
              <div class="pointer__phase-toshow">
                <p class="stick__cater-size opacity-70">Suivant</p>
                <div class="icon__arrow-right"></div>
              </div>
              <div class="cta__next-phase">
                <div class="icon__player-right"></div>
                <p class="stick__cater-size opacity-75">Phase 2</p>
              </div>
            </div>
            <div
              v-else
              class="pointer__phase-box w-full flex flex-row justify-between"
            >
              <div class="pointer__phase-toshow">
                <p class="stick__cater-size opacity-70">Next</p>
                <div class="icon__arrow-right"></div>
              </div>
              <div class="cta__next-phase">
                <div class="icon__player-right"></div>
                <p class="stick__cater-size opacity-75">Phase 2</p>
              </div>
            </div>
          </div>
          <div class="phase__two">
            <div
              v-if="!indexLang.val"
              class="pointer__phase-box w-full flex flex-row justify-between"
            >
              <div class="pointer__phase-toshow">
                <p class="stick__cater-size opacity-70">Precedent</p>
                <div class="icon__arrow-right"></div>
              </div>
              <div class="cta__next-phase">
                <div class="icon__player-right"></div>
                <p class="stick__cater-size opacity-75">Phase 1</p>
              </div>
            </div>
            <div
              v-else
              class="pointer__phase-box w-full flex flex-row justify-between"
            >
              <div class="pointer__phase-toshow">
                <p class="stick__cater-size opacity-70">Previous</p>
                <div class="icon__arrow-right"></div>
              </div>
              <div class="cta__next-phase">
                <div class="icon__player-right"></div>
                <p class="stick__cater-size opacity-75">Phase 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
ul {
  list-style: none;
}

h4 {
  font-size: var(--cater-size);
}

p {
  font-size: var(--mid-size);
}

/* test new size *p* */
p {
  font-size: var(--cater-size);
}

.stick__min-size {
  font-size: var(--mini-size);
}

.stick__cater-size {
  font-size: var(--cater-size);
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

/* cta-- phase-quotation to watch */
.phase__one,
.phase__two {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
}

.phase__one.active__phase,
.phase__two.active__phase {
  opacity: 1;
  visibility: visible;
}
</style>
