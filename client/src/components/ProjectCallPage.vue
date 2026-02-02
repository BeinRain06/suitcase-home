<script setup>
import { reactive, onMounted, onUpdated } from "vue";

import MiniQuotation from "./MiniQuotation.vue";

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
  <section id="project__call" class="project__call w-full">
    <div class="project__call-container pb-6">
      <div
        class="project__btn-display w-full flex flex-row justify-between pt-4 px-4"
      >
        <div class="project__cta-backward">
          <span class="basis--icon guidance--right-arrow"></span>
        </div>
        <!-- only appear when navlink projec is clicked -->
        <div class="cta__slide-projects w-30 h-16 pr-2">
          <div
            class="cta__slide-content w-full h-full flex flex-row justify-center items-center gap-2"
          >
            <div
              class="cta__project-backward w-full h-full grid place-items-center"
            >
              <span class="basis--icon simple-line-icons--arrow-left"></span>
            </div>
            <div class="cta__numbers-play"><p>1</p></div>
            <div
              class="cta__project-forward w-full h-full grid place-items-center"
            >
              <span
                class="rotate__right basis--icon simple-line-icons--arrow-left"
              ></span>
            </div>
          </div>
        </div>
      </div>
      <!-- project show layout -->
      <div class="project__layout w-full px-[3%] flex flex-col gap-4">
        <div class="project__title">
          <h2>DANTON SHIELD</h2>
        </div>
        <div
          class="project__spec-layout w-full flex flex-row justify-between gap-12"
        >
          <!-- first area -description -->
          <div class="project__description w-1/2">
            <div class="project__specification">
              <div class="project__land-area py-1">
                <div class="project__space">
                  <h4>200 Ft Square</h4>
                </div>
              </div>
              <div class="project__rooms-in py-6">
                <div class="project__rooms-standard">
                  <div class="room__item">
                    <div class="icon__room"></div>
                    <div class="project__numbers-rooms">
                      <span class="smaller__span">02 Bedrooms</span>
                    </div>
                  </div>
                  <div class="room__item">
                    <div class="icon__room"></div>
                    <div class="project__numbers-rooms">
                      <span class="smaller__span">01 Kitchen</span>
                    </div>
                  </div>
                  <div class="room__item">
                    <div class="icon__room"></div>
                    <div class="project__numbers-rooms">
                      <span class="smaller__span">02 Living Rooms</span>
                    </div>
                  </div>
                  <div class="room__item">
                    <div class="icon__room"></div>
                    <div class="project__numbers-rooms">
                      <span class="smaller__span">02 Toilets</span>
                    </div>
                  </div>
                </div>
                <div class="project__roof-type">
                  <div class="icon__room"></div>
                  <div class="project__numbers-rooms pl-4">
                    <span class="smaller__span">02 Slopes Roof</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="project__hook-presentation h-[11.25rem] mt-4">
              <p class="project__hook-text variant__weight-one py-6 opacity-90">
                Maison adaptable, pièce indépendantes, conversations en privée.
                Profitez de votre liberté et prenez des decisions solo dont vous
                êtes assez fier.
              </p>
            </div>
            <div class="project__hook-cta relative w-max h-max">
              <div class="cta__button--depth"></div>
              <a
                v-if="!indexLang.val"
                href="
        #"
                class="cta__button-primary"
                >TELECHARGER PLAN</a
              >
              <a
                v-else
                href="
        #"
                class="cta__button-primary"
                >DOWNLOAD PLAN</a
              >
            </div>
          </div>
          <!-- second area -quotation -->
          <div class="project__minibox-quotation w-1/2">
            <div
              class="project__minibox-container relative w-full h-max pb-2 pt-4 px-[3%]"
            >
              <div
                class="project__delivery-container absolute w-max h-7 top-4 right-4"
              >
                <div
                  class="project__delivery size__scale-92 w-max h-full py-[2px] px-2 grid place-items-center"
                >
                  <span class="smaller__span">02 Months Execution</span>
                </div>
              </div>
              <div
                class="project__minibox-title w-max py-6 px-1 flex flex-row gap-1"
              >
                <div class="icon_quotation"></div>
                <div class="minibox__title flex flex-row">
                  <h4>Quotation</h4>
                  <h4 class="size__scale-88">(niveau 0)</h4>
                </div>
              </div>
              <!-- sample splitted Quotation -->
              <div class="project__overview-quotation w-full">
                <div
                  class="floors__metrics w-full flex flex-row justify-between"
                >
                  <h5>Floor</h5>

                  <div class="cta__floors w-max flex flex-row gap-2">
                    <div class="cta__floor-quotation w-4">
                      <span class="smaller__span">0</span>
                    </div>
                    <div class="cta__floor-quotation active__floor w-4">
                      <span>1</span>
                    </div>
                  </div>
                </div>
                <div class="project__items-quotation w-full pt-1">
                  <MiniQuotation :user-language="props.userLanguage" />
                  <!-- <MiniQuotation /> -->
                </div>
              </div>
              <!-- cta slide 04 quotations sheet -->
              <div class="cta__control-screendisplay w-full pt-2">
                <div
                  class="cta_screendisplay-content w-full h-20 flex flex-row justify-between items-center"
                >
                  <div
                    class="cta_half-quotation w-max px-2 flex flex-row gap-5"
                  >
                    <div
                      class="cta__quotation-resume active_resume h-max pb-[1px] opacity-80"
                    >
                      1
                    </div>
                    <div
                      class="cta__quotation-resume h-max pb-[1px] opacity-80"
                    >
                      2
                    </div>
                  </div>
                  <div class="cta__choices-quotationdisplay">
                    <div class="cta__grid-display">
                      <div id="cta__play-numberone" class="cta__play-number">
                        <div id="cta__domain-one" class="cta__domain">
                          <p>A</p>
                        </div>
                      </div>
                      <div id="cta__play-numbertwo" class="cta__play-number">
                        <div id="cta__domain-two" class="cta__domain">
                          <p>B</p>
                        </div>
                      </div>
                      <div id="cta__play-numberthree" class="cta__play-number">
                        <div id="cta__domain-three" class="cta__domain">
                          <p>C</p>
                        </div>
                      </div>
                      <div id="cta__play-numberfour" class="cta__play-number">
                        <div id="cta__domain-four" class="cta__domain">
                          <p>D</p>
                        </div>
                      </div>
                      <div id="cta__play-linkall" class="cta__play-viewall">
                        <span
                          class="smaller__span size__scale-88 w-max mt-4 px-2 text-[var(--text-paragraph)] bg-[var(--background-secondary)] rounded-full"
                          >view all</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* utilities */
.variant__weight-one {
  font-weight: 300;
  line-height: 1.8;
}

.size__scale-92 {
  transform: scale(0.92);
}

.size__scale-88 {
  transform: scale(0.88);
}

.cta__domain p {
  font-size: var(--cater-size);
}

.cta__button--depth {
  position: absolute;
  /* top: -36%; */
  top: 12%;
  left: -1%;
  width: 100%;
  height: 134%;
  background-color: var(--link--external-btn);
  opacity: 0.65;
  border-radius: 1.5rem;
  z-index: -1;
  transform: skewY(3deg);
}

/* project specification */
.project__rooms-standard {
  width: 80%;
  height: 6.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 2.5rem 2.5rem 1.5rem;
}

/* project quotation */
.project__minibox-container {
  border: 1px solid var(--accent-color-2);
  border-radius: 0.5rem;
}

.cta__floor-quotation {
  opacity: 0.85;
}

.cta__floor-quotation.active__floor {
  /* active floor --remove --smaller__span-- class for the span child */
  opacity: 0.9;
}

.project__delivery {
  color: var(--background-primary);
  background-color: var(--link--external-btn);
  box-shadow: 0px 1px 4px var(--text-paragraph);
  border-radius: 0.25rem;
  opacity: 0.8;
}

/* cta choice quotation display */
.cta__quotation-resume {
  color: inherit;
  border: 1px solid transparent;
  border-radius: 0;
  transition: all 300ms ease-in-out;
}

.cta__quotation-resume.active_resume {
  color: var(--title-color);
  border-bottom: 1px solid var(--title-color);
  border-radius: 1.5rem;
}

.cta__grid-display {
  width: 10rem;
  height: 6rem;
  display: grid;
  grid-template-columns: repeat(4, 2rem);
  grid-template-rows: 1.6rem 1.6rem 1.2rem;
  column-gap: 0.5rem;
  opacity: 0.8;
}

.cta__play-number,
.cta__play-viewall {
  display: grid;
  place-items: center;
}

#cta__play-numberone {
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
}

#cta__play-numbertwo {
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
}

#cta__play-numberthree {
  grid-column: 3 / span 1;
  grid-row: 1 / span 1;
}

#cta__play-numberfour {
  grid-column: 4 / span 1;
  grid-row: 2 / span 1;
}

#cta__play-linkall {
  grid-column: 2 / span 2;
  grid-row: 2 / span 1;
}

.cta__domain {
  width: 1.5rem;
  height: 1.5rem;
  /*  padding: 0.25rem; */
  border: 1px solid var(--accent-color-2);
  border-radius: 50%;
  display: grid;
  place-items: center;
}
</style>
