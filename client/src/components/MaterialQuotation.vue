<script setup>
import { computed } from "vue";

const props = defineProps({
  dataMaterials: {
    userLanguage: String,
    quotationType: String,
    materialTemplate: {
      needOne: {
        fr: String,
        en: String,
      },
      needTwo: {
        fr: String,
        en: String,
      },
      needThree: {
        fr: String,
        en: String,
      },
    } || {
      part1: {
        needOne: {
          fr: String,
          en: String,
        } || {
          qty: { fr: String, en: String },
          dimensions: String,
          units: String,
        },
        needTwo: {
          fr: String,
          en: String,
        } || {
          qty: { fr: String, en: String },
          dimensions: String,
          units: String,
        },
        needThree: String || {
            fr: String,
            en: String,
          } || {
            qty: { fr: String, en: String },
            dimensions: String,
            units: String,
          },
      },
      part2: {
        needOne: {
          fr: String,
          en: String,
        },
        needTwo: {
          fr: String,
          en: String,
        },
      },
    },
    cost: {
      materials: String,
      labor: String,
      total: String,
    } || {
      part1: { materials: String, labor: String, total: String },
      part2: { materials: String, labor: String, total: String },
    },
    surface: String,
    volume: { part1: String, part2: String },
    activeFloor: {
      floor_0: Boolean,
    },
    activeLayer: {
      foundation: String,
      roof: String,
    },
  },
});

const indexLang = computed(() => {
  /* console.log("userLang Call :", props.dataMaterials.userLanguage); */

  return props.dataMaterials.userLanguage === "FR" ? 0 : 1;
});

const quotationType = computed(() => {
  return props.dataMaterials.quotationType;
});

const materialTemplate = computed(() => {
  /* console.log("materialTemplate Call :", props.dataMaterials.materialTemplate); */

  return props.dataMaterials.materialTemplate;
});

const cost = computed(() => {
  /*   console.log("cost call:", ) */
  return props.dataMaterials.cost;
});

const activeLayerFoundation = computed(() => {
  return props.dataMaterials.activeLayer.foundation;
});

const activeLayerRoof = computed(() => {
  return props.dataMaterials.activeLayer.roof;
});

const surface = computed(() => {
  return props.dataMaterials.surface;
});
</script>
<template>
  <!-- materials foundation -->
  <div
    v-if="quotationType === 'foundation'"
    class="box__materials-form w-full h-full"
  >
    <!-- materials for the field -->
    <!-- active Layer Foundation === 0 -->
    <div
      v-if="activeLayerFoundation === 0"
      class="needed__materials w-full h-[12.5rem] flex flex-row"
    >
      <!-- materials items -->
      <div class="needed__materials-content w-6/12 h-full">
        <!-- title -->
        <div
          class="material__generic-title w-full h-6 px-2 text-left border-l-1 border-solid border-[var(--accent-color-2)]"
        >
          <p class="smaller_span">material</p>
        </div>
        <!-- materials -->
        <div
          class="needed__construction-elements w-full h-[11rem] py-2 px-2 border border-r-0 border-solid border-[var(--accent-color-2)]"
        >
          <div class="need__pinpointed-element w-full py-2">
            <div
              class="structure__to-install w-full flex flex-row justify-between"
            >
              <!--when  needOne String -->
              <p v-if="!indexLang" class="stick__cater-size">
                {{ materialTemplate.part1.needOne?.fr || "" }}
              </p>
              <p v-else class="stick__cater-size">
                {{ materialTemplate.part1.needOne?.en || "" }}
              </p>
              <!-- when needOne Object -->
              <p v-if="!indexLang" class="stick__cater-size w-1/2 text-left">
                {{ materialTemplate.part1.needOne?.qty.fr || "" }}
              </p>
              <p v-else class="stick__cater-size w-1/2 text-left">
                {{ materialTemplate.part1.needOne?.qty.en || "" }}
              </p>
              <p class="stick__cater-size w-1/2 text-right">
                {{ materialTemplate.part1.needOne?.dimensions || "" }}
              </p>
            </div>
            <div class="unit__panel w-full flex flex-row justify-end">
              <p class="stick__min-size font-extralight">
                {{ materialTemplate.part1.needOne?.units || "" }}
              </p>
            </div>
          </div>
          <div class="need__pinpointed-element w-full py-2">
            <div
              class="structure__to-install w-full flex flex-row justify-between"
            >
              <!--when  needTwo String -->
              <p v-if="!indexLang" class="stick__cater-size">
                {{ materialTemplate.part1.needTwo?.fr || "" }}
              </p>
              <p v-else class="stick__cater-size">
                {{ materialTemplate.part1.needTwo?.en || "" }}
              </p>
              <!-- when needTwo Object -->
              <p v-if="!indexLang" class="stick__cater-size w-1/2 text-left">
                {{ materialTemplate.part1.needTwo?.qty.fr || "" }}
              </p>
              <p v-else class="stick__cater-size w-1/2 text-left">
                {{ materialTemplate.part1.needTwo?.qty.en || "" }}
              </p>
              <p class="stick__cater-size w-1/2 text-right">
                {{ materialTemplate.part1.needTwo?.dimensions || "" }}
              </p>
            </div>
            <div class="unit__panel w-full flex flex-row justify-end">
              <p class="stick__min-size font-extralight">
                {{ materialTemplate.part1.needTwo?.units || "" }}
              </p>
            </div>
          </div>
          <div class="need__pinpointed-element w-full py-2">
            <div
              class="structure__to-install w-full flex flex-row justify-between"
            >
              <!--when  needThree String -->
              <p
                v-if="!indexLang"
                class="stick__min-size w-max max-w-full flex-shrink-0"
              >
                {{ materialTemplate.part1.needThree?.fr || "" }}
              </p>
              <p v-else class="stick__min-size w-full flex-shrink-0">
                {{ materialTemplate.part1.needThree?.en || "" }}
              </p>
              <!-- when needThree Object -->
              <p v-if="!indexLang" class="stick__min-size w-1/2 text-left">
                {{ materialTemplate.part1.needThree?.qty?.fr || "" }}
              </p>
              <p v-else class="stick__min-size w-1/2 text-left">
                {{ materialTemplate.part1.needThree?.qty?.en || "" }}
              </p>
              <p class="stick__min-size w-1/2 text-right">
                {{ materialTemplate.part1.needThree?.dimensions || "" }}
              </p>
            </div>
            <div class="unit__panel w-full flex flex-row justify-end">
              <p class="stick__min-size font-extralight">
                {{ materialTemplate.part1.needThree?.units || "" }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- volume -->
      <div
        class="detail__volume-occupied w-2/12 h-full grid place-items-center border border-solid border-[var(--accent-color-2)]"
      >
        <p>{{ dataMaterials.volume.part1 }}</p>
      </div>
      <!-- material investment -->
      <div
        class="detail__investment w-4/12 h-full grid place-items-center border border-l-0 border-solid border-[var(--accent-color-2)]"
      >
        <p class="opacity-80">{{ cost.part1.materials }}</p>
      </div>
    </div>

    <!-- active Layer Foundation === 1 -->
    <div
      v-else-if="activeLayerFoundation === 1"
      class="needed__materials w-full h-[12.5rem] flex flex-row"
    >
      <!-- materials items -->
      <div class="needed__materials-content w-6/12 h-full">
        <!-- title -->
        <div
          class="material__generic-title w-full h-6 px-2 text-left border-l-1 border-solid border-[var(--accent-color-2)]"
        >
          <p class="smaller_span">material</p>
        </div>
        <!-- materials -->
        <div
          class="needed__construction-elements w-full h-[11rem] py-2 px-2 border border-r-0 border-solid border-[var(--accent-color-2)]"
        >
          <div class="need__pinpointed-element w-full py-2">
            <div
              class="structure__to-install w-full flex flex-row justify-between"
            >
              <p v-if="!indexLang" class="stick__cater-size">
                {{ materialTemplate.needOne.fr }}
              </p>
              <p v-else class="stick__cater-size">
                {{ materialTemplate.needOne.en }}
              </p>
            </div>
          </div>
          <div class="need__pinpointed-element w-full py-2">
            <div
              class="structure__to-install w-full flex flex-row justify-between"
            >
              <p v-if="!indexLang" class="stick__cater-size">
                {{ materialTemplate.needTwo.fr }}
              </p>
              <p v-else class="stick__cater-size">
                {{ materialTemplate.needTwo.en }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- volume -->
      <div
        class="detail__volume-occupied w-2/12 h-full grid place-items-center border border-solid border-[var(--accent-color-2)]"
      >
        <p>{{ dataMaterials.volume.part2 }}</p>
      </div>
      <!-- material investment -->
      <div
        class="detail__investment w-4/12 h-full grid place-items-center border border-l-0 border-solid border-[var(--accent-color-2)]"
      >
        <p class="opacity-80">{{ cost.part2.materials }}</p>
      </div>
    </div>
    <!-- labor investment -->
    <div
      v-if="activeLayerFoundation === 0"
      class="labor__investment w-full h-10 px-2 flex flex-row justify-between items-center border-l-1 border-r-1 border-solid border-[var(--accent-color-2)]"
    >
      <div class="labor__label w-8/12 h-full flex flex-row items-center">
        <p>Labor</p>
      </div>
      <div
        class="labor__investment w-4/12 h-full flex flex-row items-center justify-end"
      >
        <p class="opacity-80">{{ cost.part1.labor }}</p>
      </div>
    </div>
    <div
      v-else-if="activeLayerFoundation === 1"
      class="labor__investment w-full h-10 px-2 flex flex-row justify-between items-center border-l-1 border-r-1 border-solid border-[var(--accent-color-2)]"
    >
      <div class="labor__label w-8/12 h-full flex flex-row items-center">
        <p>Labor</p>
      </div>
      <div
        class="labor__investment w-4/12 h-full flex flex-row items-center justify-end"
      >
        <p class="opacity-80">{{ cost.part2.labor }}</p>
      </div>
    </div>
    <!-- total investment -->
    <div
      v-if="activeLayerFoundation === 0"
      class="total__investment w-full h-16 pt-1 px-2 flex flex-row justify-between items-center border border-solid border-[var(--accent-color-2)]"
    >
      <div class="total__label h-full">
        <p class="font-bold text-[var(--link--external-btn)]">TOTAL</p>
      </div>
      <div class="total__investment h-full">
        <p class="font-bold opacity-65">{{ cost.part1.total }}</p>
        <p class="pl-1 font-bold opacity-65">XAF</p>
      </div>
    </div>
    <div
      v-else-if="activeLayerFoundation === 1"
      class="total__investment w-full h-16 pt-1 px-2 flex flex-row justify-between items-center border border-solid border-[var(--accent-color-2)]"
    >
      <div class="total__label h-full">
        <p class="font-bold text-[var(--link--external-btn)]">TOTAL</p>
      </div>
      <div class="total__investment h-full">
        <p class="font-bold opacity-65">{{ cost.part2.total }}</p>
        <p class="pl-1 font-bold opacity-65">XAF</p>
      </div>
    </div>
  </div>

  <!-- materials roof -->
  <div
    v-else-if="quotationType === 'roofing'"
    class="box__materials-form w-full h-full"
  >
    <!-- materials for the field -->
    <!-- active layer roof 2 -->
    <div
      v-if="activeLayerRoof === 0"
      class="needed__materials w-full h-[12.5rem] flex flex-row"
    >
      <!-- materials items -->
      <div class="needed__materials-content w-6/12 h-full">
        <!-- title -->
        <div
          class="material__generic-title w-full h-6 px-2 text-left border-l-1 border-solid border-[var(--accent-color-2)]"
        >
          <p class="smaller_span">material</p>
        </div>
        <!-- materials -->
        <div
          class="needed__construction-elements w-full h-[11rem] py-2 px-2 border border-r-0 border-solid border-[var(--accent-color-2)]"
        >
          <div class="need__pinpointed-element w-full py-2">
            <div
              class="structure__to-install w-full flex flex-row justify-between"
            >
              <p v-if="!indexLang" class="stick__cater-size">
                {{ materialTemplate.part1.needOne.fr }}
              </p>
              <p v-else class="stick__cater-size">
                {{ materialTemplate.part1.needOne.en }}
              </p>
            </div>
            <div
              class="structure__to-install w-full flex flex-row justify-between"
            >
              <p v-if="!indexLang" class="stick__cater-size">
                {{ materialTemplate.part1.needTwo.fr }}
              </p>
              <p v-else class="stick__cater-size">
                {{ materialTemplate.part1.needTwo.en }}
              </p>
            </div>
          </div>
          <div class="need__pinpointed-element w-full py-2">
            <div
              class="structure__to-install w-full flex flex-row justify-between"
            >
              <p v-if="!indexLang" class="stick__cater-size">
                {{ materialTemplate.part2.needOne.fr }}
              </p>
              <p v-else class="stick__cater-size">
                {{ materialTemplate.part2.needOne.en }}
              </p>
            </div>
            <div
              class="structure__to-install w-full flex flex-row justify-between"
            >
              <p v-if="!indexLang" class="stick__cater-size">
                {{ materialTemplate.part2.needTwo.fr }}
              </p>
              <p v-else class="stick__cater-size">
                {{ materialTemplate.part2.needTwo.en }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- volume -->
      <div
        class="detail__volume-occupied w-2/12 h-full grid place-items-center border border-solid border-[var(--accent-color-2)]"
      >
        <p>{{ surface }}</p>
      </div>
      <!-- material investment -->
      <div
        class="detail__investment w-4/12 h-full grid place-items-center border border-l-0 border-solid border-[var(--accent-color-2)]"
      >
        <p class="opacity-80">{{ cost.part1.materials }}</p>
      </div>
    </div>

    <!-- active layer roof 2 -->
    <div
      v-else-if="activeLayerRoof === 1"
      class="needed__materials w-full h-[12.5rem] flex flex-row"
    >
      <!-- materials items -->
      <div class="needed__materials-content w-6/12 h-full">
        <!-- title -->
        <div
          class="material__generic-title w-full h-6 px-2 text-left border-l-1 border-solid border-[var(--accent-color-2)]"
        >
          <p class="smaller_span">material</p>
        </div>
        <!-- materials -->
        <div
          class="needed__construction-elements w-full h-[11rem] py-2 px-2 border border-r-0 border-solid border-[var(--accent-color-2)]"
        >
          <div class="need__pinpointed-element w-full py-2">
            <div
              class="structure__to-install w-full flex flex-row justify-between"
            >
              <p v-if="!indexLang" class="stick__cater-size">
                {{ materialTemplate.part1.needOne.fr }}
              </p>
              <p v-else class="stick__cater-size">
                {{ materialTemplate.part1.needOne.en }}
              </p>
            </div>
            <div
              class="structure__to-install w-full flex flex-row justify-between"
            >
              <p v-if="!indexLang" class="stick__cater-size">
                {{ materialTemplate.part1.needTwo.fr }}
              </p>
              <p v-else class="stick__cater-size">
                {{ materialTemplate.part1.needTwo.en }}
              </p>
            </div>
            <div
              class="structure__to-install w-full flex flex-row justify-between"
            >
              <p v-if="!indexLang" class="stick__cater-size">
                {{ materialTemplate.part2.needOne.fr }}
              </p>
              <p v-else class="stick__cater-size">
                {{ materialTemplate.part2.needOne.en }}
              </p>
            </div>
            <div
              class="structure__to-install w-full flex flex-row justify-between"
            >
              <p v-if="!indexLang" class="stick__cater-size">
                {{ materialTemplate.part2.needTwo.fr }}
              </p>
              <p v-else class="stick__cater-size">
                {{ materialTemplate.part2.needTwo.en }}
              </p>
            </div>
          </div>
          <div class="need__pinpointed-element w-full py-2">
            <div
              class="structure__to-install w-full flex flex-row justify-between"
            >
              <p v-if="!indexLang" class="stick__cater-size">
                {{ materialTemplate.needTwo.fr }}
              </p>
              <p v-else class="stick__cater-size">
                {{ materialTemplate.needTwo.en }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- volume -->
      <div
        class="detail__volume-occupied w-2/12 h-full grid place-items-center border border-solid border-[var(--accent-color-2)]"
      >
        <p>{{ surface }}</p>
      </div>
      <!-- material investment -->
      <div
        class="detail__investment w-4/12 h-full grid place-items-center border border-l-0 border-solid border-[var(--accent-color-2)]"
      >
        <p class="opacity-80">{{ cost.part2.materials }}</p>
      </div>
    </div>
    <!-- labor investment -->
    <div
      v-if="activeLayerRoof === 0"
      class="labor__investment w-full h-10 px-2 flex flex-row justify-between items-center border-l-1 border-r-1 border-solid border-[var(--accent-color-2)]"
    >
      <div class="labor__label w-8/12 h-full flex flex-row items-center">
        <p>Labor</p>
      </div>
      <div
        class="labor__investment w-4/12 h-full flex flex-row items-center justify-end"
      >
        <p class="opacity-80">{{ cost.part1.labor }}</p>
      </div>
    </div>
    <div
      v-else-if="activeLayerRoof === 1"
      class="labor__investment w-full h-10 px-2 flex flex-row justify-between items-center border-l-1 border-r-1 border-solid border-[var(--accent-color-2)]"
    >
      <div class="labor__label w-8/12 h-full flex flex-row items-center">
        <p>Labor</p>
      </div>
      <div
        class="labor__investment w-4/12 h-full flex flex-row items-center justify-end"
      >
        <p class="opacity-80">{{ cost.part2.labor }}</p>
      </div>
    </div>
    <!-- total investment -->
    <div
      v-if="activeLayerRoof === 0"
      class="total__investment w-full h-16 pt-1 px-2 flex flex-row justify-between items-center border border-solid border-[var(--accent-color-2)]"
    >
      <div class="total__label h-full">
        <p class="font-bold text-[var(--link--external-btn)]">TOTAL</p>
      </div>
      <div class="total__investment h-full">
        <p class="font-bold opacity-65">{{ cost.part1.total }}</p>
        <p class="pl-1 font-bold opacity-65">XAF</p>
      </div>
    </div>
    <div
      v-else-if="activeLayerRoof === 1"
      class="total__investment w-full h-16 pt-1 px-2 flex flex-row justify-between items-center border border-solid border-[var(--accent-color-2)]"
    >
      <div class="total__label h-full">
        <p class="font-bold text-[var(--link--external-btn)]">TOTAL</p>
      </div>
      <div class="total__investment h-full">
        <p class="font-bold opacity-65">{{ cost.part2.total }}</p>
        <p class="pl-1 font-bold opacity-65">XAF</p>
      </div>
    </div>
  </div>

  <!-- materials plumbing or electricity -->
  <div v-else class="box__materials-form w-full h-full">
    <!-- materials for the field -->
    <div class="needed__materials w-full h-[12.5rem] flex flex-row">
      <!-- materials items -->
      <div class="needed__materials-content w-6/12 h-full">
        <!-- title -->
        <div
          class="material__generic-title w-full h-6 px-2 text-left border-l-1 border-solid border-[var(--accent-color-2)]"
        >
          <p class="smaller_span">material</p>
        </div>
        <!-- materials -->
        <div
          class="needed__construction-elements w-full h-[11rem] py-2 px-2 border border-r-0 border-solid border-[var(--accent-color-2)]"
        >
          <div class="need__pinpointed-element w-full py-2">
            <div
              class="structure__to-install w-full flex flex-row justify-between"
            >
              <p v-if="!indexLang" class="stick__cater-size">
                {{ materialTemplate.needOne.fr }}
              </p>
              <p v-else class="stick__cater-size">
                {{ materialTemplate.needone.en }}
              </p>
            </div>
          </div>
          <div class="need__pinpointed-element w-full py-2">
            <div
              class="structure__to-install w-full flex flex-row justify-between"
            >
              <p v-if="!indexLang" class="stick__cater-size">
                {{ materialTemplate.needTwo.fr }}
              </p>
              <p v-else class="stick__cater-size">
                {{ materialTemplate.needTwo.en }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- volume -->
      <div
        class="detail__volume-occupied w-2/12 h-full grid place-items-center border border-solid border-[var(--accent-color-2)]"
      >
        <p></p>
      </div>
      <!-- material investment -->
      <div
        class="detail__investment w-4/12 h-full grid place-items-center border border-l-0 border-solid border-[var(--accent-color-2)]"
      >
        <p class="opacity-80">{{ cost.materials }}</p>
      </div>
    </div>
    <!-- labor investment -->
    <div
      class="labor__investment w-full h-10 px-2 flex flex-row justify-between items-center border-l-1 border-r-1 border-solid border-[var(--accent-color-2)]"
    >
      <div class="labor__label w-8/12 h-full flex flex-row items-center">
        <p>Labor</p>
      </div>
      <div
        class="labor__investment w-4/12 h-full flex flex-row items-center justify-end"
      >
        <p class="opacity-80">{{ cost.labor }}</p>
      </div>
    </div>
    <!-- total investment -->
    <div
      class="total__investment w-full h-16 pt-1 px-2 flex flex-row justify-between items-center border border-solid border-[var(--accent-color-2)]"
    >
      <div class="total__label h-full">
        <p class="font-bold text-[var(--link--external-btn)]">TOTAL</p>
      </div>
      <div class="total__investment h-full">
        <p class="font-bold opacity-65">{{ cost.total }}</p>
        <p class="pl-1 font-bold opacity-65">XAF</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
p {
  font-size: var(--cater-size);
}

.stick__min-size {
  font-size: var(--mini-size);
}

.stick__cater-size {
  font-size: var(--cater-size);
}
</style>
