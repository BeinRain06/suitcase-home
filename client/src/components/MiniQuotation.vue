<script setup>
import { ref, reactive, onMounted, onUpdated, computed } from "vue";

import TitleMiniQuotation from "./TitleMiniQuotation.vue";
import DeliveryQuotationTime from "./DeliveryQuotationTime.vue";

import ResumeQuotationCost from "./ResumeQuotationCost.vue";
import MaterialQuotation from "./MaterialQuotation.vue";

import {
  quotationFoundations,
  quotationPlumbing,
  quotationElectricity,
  quotationRoofing,
} from "../api-data/particular-data-center-project";

const props = defineProps({
  quotationInfo: {
    projectId: String,
    quotationType: String,
    indexToSelect: Number,
  },
  userLanguage: String,
});

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

const dataFetched = ref(null);

const activeLayer = ref({ foundation: 0, roof: 0 }); // foundation or roof materials weren't all stacking in our designed card (html &css). We create an object boolean: 0 or 1 to display th entire materials.

const activeFloor = ref({ floor_0: true }); // true --active floor 0, false --active floor 1

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
  activeFloor: activeFloor.value,
  activeLayer: activeLayer.value,
});

const dataToComponents = (dataSource, quotationType) => {
  let catchCost = {};
  let catchVolume = {};

  dataTitle.value.quotationType = quotationType;
  dataResumeQuotation.value.quotationType = quotationType;
  dataDelivery.value.quotationType = quotationType;
  dataMaterials.value.quotationType = quotationType;

  switch (quotationType) {
    case "foundation":
      /* dataTitle first fetch */
      const caseTitle1 =
        dataSource.part_1?.title || dataSource.floor_1?.part_1?.title;
      const caseTitle2 =
        dataSource.part_2?.title || dataSource.floor_1?.part_2?.title;

      dataTitle.value.title.part1 = caseTitle1;
      dataTitle.value.title.part2 = caseTitle2;
      /* dataResumeQuotation first fetch */
      const caseRes1 =
        dataSource.part_1?.total || dataSource.floor_1?.part_1?.total;
      const caseRes2 =
        dataSource.part_2?.total || dataSource.floor_1?.part_2?.total;

      dataResumeQuotation.value.totalCost.part1 = caseRes1;
      dataResumeQuotation.value.totalCost.part2 = caseRes2;
      /* dataDelivery first fetch */
      const caseDel1 =
        dataSource.part_1?.delivery || dataSource.floor_1?.part_1?.delivery;
      const caseDel2 =
        dataSource.part_2?.delivery || dataSource.floor_1?.part_2?.delivery;

      dataDelivery.value.delayToExecute.part1 = caseDel1;
      dataDelivery.value.delayToExecute.part2 = caseDel2;
      /* dataMaterials first fetch */
      const caseMat1 =
        dataSource.part_1?.materials || dataSource.floor_1?.part_1?.materials;
      const caseMat2 =
        dataSource.part_2?.materials || dataSource.floor_1?.part_2?.materials;

      dataMaterials.value.materialTemplate.part1 = caseMat1;

      dataMaterials.value.materialTemplate.part2 = caseMat2;

      catchCost = {
        part1: {
          materials:
            dataSource.part_1?.material_cost ||
            dataSource.floor_1?.part_1?.material_cost,
          labor: dataSource.part_1?.labor || dataSource.floor_1?.part_1?.labor,
          total: dataSource.part_1?.total || dataSource.floor_1?.part_1?.total,
        },
        part2: {
          materials:
            dataSource.part_2?.material_cost ||
            dataSource.floor_1?.part_2?.material_cost,
          labor: dataSource.part_2?.labor || dataSource.floor_1?.part_2?.labor,
          total: dataSource.part_2?.total || dataSource.floor_1?.part_2?.total,
        },
      };
      dataMaterials.value.cost = catchCost;

      /* data volume catch */

      catchVolume = {
        part1: dataSource.part_1?.volume || dataSource.floor_1?.part_1.volume,
        part2: dataSource.part_2?.volume || dataSource.floor_1?.part_2.volume,
      };

      dataMaterials.value.volume = catchVolume;

      break;
    case "plumbing":
      /* dataTitle first fetch */
      dataTitle.value.title = dataSource.title;
      /* dataResumeQuotation first fetch */
      dataResumeQuotation.value.totalCost = dataSource.total;
      /* dataDelivery first fetch */
      dataDelivery.value.delayToExecute = dataSource.delivery;
      dataDelivery.value.delayToExecute = dataSource.delivery;
      /* dataMaterials first fetch */
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
      /* dataTitle first fetch */
      dataTitle.value.title = dataSource.title;
      /* dataResumeQuotation first fetch */
      dataResumeQuotation.value.totalCost = dataSource.total;
      /* dataDelivery first fetch */
      dataDelivery.value.delayToExecute = dataSource.delivery;
      dataDelivery.value.delayToExecute = dataSource.delivery;
      /* dataMaterials first fetch */
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
      /* dataTitle first fetch */
      dataTitle.value.title.part1 = dataSource.part_1.title;
      dataTitle.value.title.part2 = dataSource.part_2.title;
      /* dataResumeQuotation first fetch */
      dataResumeQuotation.value.totalCost.part1 = dataSource.part_1.total;
      dataResumeQuotation.value.totalCost.part2 = dataSource.part_2.total;
      /* dataDelivery first fetch */
      dataDelivery.value.delayToExecute.part1 = dataSource.part_1.delivery;
      dataDelivery.value.delayToExecute.part2 = dataSource.part_2.delivery;
      /* dataMaterials first fetch */
      dataMaterials.value.materialTemplate.part1 = dataSource.part_1.materials;
      dataMaterials.value.materialTemplate.part2 = dataSource.part_2.materials;

      catchCost = {
        part1: {
          materials: dataSource.part_1.material_cost,
          labor: dataSource.part_1.labor,
          total: dataSource.part_1.total,
        },
        part2: {
          materials: dataSource.part_2.material_cost,
          labor: dataSource.part_2.labor,
          total: dataSource.part_2.total,
        },
      };
      dataMaterials.value.cost = catchCost;

      /* data roof surface */
      dataMaterials.value.surface = dataSource.surface;
      break;
    default:
      throw new Error(
        "Error Fn *dataToComponents* --MiniQuotation component-- ",
      );
      break;
  }

  /* collect data Fetched */
  dataFetched.value = dataSource;
};

const dataToFetch = () => {
  let dataSource = null;

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
      throw new Error("--Error DataFetch Fn --ProjectCallPage component--");
  }

  /* collect data Fetched */
  dataFetched.value = dataSource;
};

onMounted(async () => {
  const quotationInfoCatch = await props.quotationInfo; // This line is important! to made ready for use *quotationInfo* props to the component.

  dataToFetch(); // if for some way dataFetch eems to not be giving -- also use  --await--
});

onUpdated(() => {
  if (props.userLanguage) {
    indexLang.val = props.userLanguage === "FR" ? 0 : 1;
  }
});
</script>
<template>
  <div class="item__quotation w-full h-full">
    <TitleMiniQuotation :data-title="dataTitle" />
    <!-- <div
      class="label__quotation w-max pb-1 text-[var(--link--external-btn)] border-b-1 border-solid border-[var(--accent-color-2)] flex flex-row gap-2"
    >
      <p>A</p>
      <p>-</p>
      <p>Foundation And Structure</p>
    </div> -->
    <div class="record__quotation w-full pt-4">
      <div class="record__designation w-full flex flex-row justify-between">
        <h4>Designation</h4>
        <h4>Cost</h4>
      </div>
      <div
        class="record__overwall-work w-full h-92 pt-1 mt-4 flex flex-col justify-center"
      >
        <div
          class="box__overall-pricing w-full px-2 flex flex-row justify-between bg-[var(--background-secondary)]"
        >
          <ResumeQuotationCost :data-resumeQuotation="dataResumeQuotation" />
        </div>

        <div class="box__materials-glance">
          <MaterialQuotation :data-materials="dataMaterials" />

          <!-- <div
            class="detail__structured-items w-full h-[12.5rem] flex flex-row"
          >
            <div class="items__structure-lab w-6/12 h-full">
              <div
                class="structure__title w-full h-6 px-2 text-left border-l-1 border-solid border-[var(--accent-color-2)]"
              >
                <p class="smaller_span">material</p>
              </div>
              <div
                class="structure__materials_needed w-full h-[11rem] py-2 px-2 border border-r-0 border-solid border-[var(--accent-color-2)]"
              >
                <div class="structure__single-material w-full py-2">
                  <div
                    class="structure__to-install w-full flex flex-row justify-between"
                  >
                    <p class="stick__cater-size">- 27 pillars</p>
                    <p class="stick__cater-size">2*20*20</p>
                  </div>
                  <div class="unit__panel w-full flex flex-row justify-end">
                    <p class="stick__min-size font-extralight">(m*cm*cm)</p>
                  </div>
                </div>
                <div class="structure__single-material w-full py-2">
                  <div
                    class="structure__to-install w-full flex flex-row justify-between"
                  >
                    <p class="stick__cater-size">- 9 beams</p>
                    <p class="stick__cater-size">2*20*20</p>
                  </div>
                  <div class="unit__panel w-full flex flex-row justify-end">
                    <p class="stick__min-size font-extralight">(m*cm*cm)</p>
                  </div>
                </div>
                <div class="structure__single-material w-full py-2">
                  <div class="structure__organic-components">
                    <p class="stick__min-size opacity-75 font-bold">
                      - Sands, Rocks, Woods, Nails...included
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="account__volume-occupied w-2/12 h-full grid place-items-center border border-solid border-[var(--accent-color-2)]"
            >
              <p>08 m³</p>
            </div>
            <div
              class="materials__investment w-4/12 h-full grid place-items-center border border-l-0 border-solid border-[var(--accent-color-2)]"
            >
              <p class="opacity-80">1.600.000</p>
            </div>
          </div> -->

          <!-- <div
            class="detail__labor w-full h-10 px-2 flex flex-row justify-between items-center border-l-1 border-r-1 border-solid border-[var(--accent-color-2)]"
          >
            <div class="labor__label w-8/12 h-full flex flex-row items-center">
              <p>Labor</p>
            </div>
            <div
              class="labor__investment w-4/12 h-full flex flex-row items-center justify-end"
            >
              <p class="opacity-80">800.000</p>
            </div>
          </div>
 -->
          <!-- <div
            class="detail__final-cost w-full h-16 pt-1 px-2 flex flex-row justify-between items-center border border-solid border-[var(--accent-color-2)]"
          >
            <div class="total__label h-full">
              <p class="font-bold text-[var(--link--external-btn)]">TOTAL</p>
            </div>
            <div class="total__investment h-full">
              <p class="font-bold opacity-65">2.400.000</p>
              <p class="pl-1 font-bold opacity-65">XAF</p>
            </div>
          </div> -->
        </div>
      </div>

      <div class="record__block-delivery">
        <DeliveryQuotationTime :data-delivery="dataDelivery" />
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
              v-if="!indexLang"
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
  font-size: var(--regular-size);
}

p {
  font-size: var(--mid-size);
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
