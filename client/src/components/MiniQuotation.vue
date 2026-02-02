<script setup>
import { reactive, onMounted, onUpdated } from "vue";

const props = defineProps({
  userLanguage: String,
});

const indexLang = reactive({ val: 0 });

onMounted(() => {
  if (props.userLanguage) {
    indexLang.val = props.userLanguage === "FR" ? 0 : 1;
  }
});

onUpdated(() => {
  if (props.userLanguage) {
    indexLang.val = props.userLanguage === "FR" ? 0 : 1;
  }
});
</script>
<template>
  <div class="item__quotation w-full h-full">
    <div
      class="label__quotation w-max pb-1 text-[var(--link--external-btn)] border-b-1 border-solid border-[var(--accent-color-2)] flex flex-row gap-2"
    >
      <p>A</p>
      <p>-</p>
      <p>Foundation And Structure</p>
    </div>
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
          <ul class="w-full flex flex-row justify-between">
            <li><p>Materials + labor</p></li>
            <li class="w-max h-full flex flex-row items-center gap-4">
              <div><p>2.400.000</p></div>
              <div class="cta__expand-details grid place-items-center">
                <div
                  class="cta__work button__circle grid place-items-center cursor-pointer"
                >
                  <span
                    class="basis--icon simple-line-icons--arrow-down"
                  ></span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="box__toggled-structure">
          <div
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
          </div>
          <div
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
          <div
            class="detail__final-cost w-full h-16 pt-1 px-2 flex flex-row justify-between items-center border border-solid border-[var(--accent-color-2)]"
          >
            <div class="total__label h-full">
              <p class="font-bold text-[var(--link--external-btn)]">TOTAL</p>
            </div>
            <div class="total__investment h-full">
              <p class="font-bold opacity-65">2.400.000</p>
              <p class="pl-1 font-bold opacity-65">XAF</p>
            </div>
          </div>
        </div>
      </div>
      <div class="record__block-delivery">
        <!-- v-if quotation foundation -->
        <div
          class="record__delivery w-full h-12 mt-0 px-2 flex flex-row justify-between"
        >
          <p class="stick__cater-size opacity-60">Delivery Times</p>
          <p
            class="stick__cater-size opacity-80 text-[var(--link--external-btn)]"
          >
            02 Weeks
          </p>
        </div>

        <!-- v-else quotation non-foundation --set *hidden* - temporary -->
        <div
          class="record__delivery hidden w-full h-16 mt-4 px-2 flex flex-row justify-between"
        >
          <p>Delivery Times</p>
          <p class="opacity-80 text-[var(--link--external-btn)]">02 Weeks</p>
        </div>
      </div>

      <!-- v-if quotation foundation-->
      <div class="block__phase-work">
        <div
          id="cta__msg-reminder"
          class="cta__phase-todisplay relative w-full h-12"
        >
          <div class="phase__one active__phase">
            <div
              v-if="!indexLang.val"
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
