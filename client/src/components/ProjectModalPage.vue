<script setup>
import { ref, onMounted, onUpdated } from "vue";
import { useRoute } from "vue-router";

import MiniModalQuotation from "./MiniModalQuotation.vue";
import { initInfoProject } from "../reusable-function/initInfoProjects";

const route = useRoute();

const emit = defineEmits(["update-modalpage"]);

const props = defineProps({
  userLanguage: String,
});

const initInfos = ref({ 0: {}, 1: {}, 2: {}, 3: {} });

const handleSwitchPage = () => {
  emit("update-modalpage", { isModalPage: false });
};

onMounted(() => {
  const catchArrayParams = route.params.projectId;

  const projectId = catchArrayParams[0] || "danton_shield";

  initInfos.value = initInfoProject(projectId, "modal-page");
});
</script>
<template>
  <section id="project__modal" class="project__modal w-full">
    <div
      class="project__modal-container w-full h-full flex flex-col gap-6 overflow-x-hidden"
    >
      <div
        class="cta__modal-close w-full h-24 px-4 flex flex-row items-center justify-end cursor-pointer"
        @click="handleSwitchPage"
      >
        <div class="cta__modalbtn-close">x</div>
      </div>
      <!-- quotation layout -->
      <div class="project__quotation-templates">
        <div class="template__bar-squaresplitter"></div>
        <div class="project__quotation-grid">
          <!-- insert the four component (*MiniTemplateQuotation*) -->
          <div id="modal__quotation-one" class="px-[5%]">
            <MiniModalQuotation
              :quotation-info="initInfos[0]"
              :user-language="props.userLanguage"
              class="p-4 bg-[var(--background-secondary)]"
            />
          </div>
          <div id="modal__quotation-two" class="px-[5%]">
            <MiniModalQuotation
              :quotation-info="initInfos[1]"
              :user-language="props.userLanguage"
              class="p-4 bg-[var(--accent-color-1)]"
            />
          </div>
          <div id="modal__quotation-three" class="px-[5%]">
            <MiniModalQuotation
              :quotation-info="initInfos[2]"
              :user-language="props.userLanguage"
              class="p-4 bg-[var(--accent-color-1)]"
            />
          </div>
          <div id="modal__quotation-four" class="px-[5%]">
            <MiniModalQuotation
              :quotation-info="initInfos[3]"
              :user-language="props.userLanguage"
              class="p-4 bg-[var(--background-secondary)]"
            />
          </div>
        </div>
      </div>
      <div
        class="cta__modal-download w-full pb-2 px-4 flex flex-row justify-end"
      >
        <div
          class="cta__modalbtn-download w-max px-4 py-2 mb-4 text-[var(--link--external-btn)] border-b-1 border-solid border-[var(--link--external-btn)] cursor-pointer rounded-sm"
        >
          <span>Download Plan</span>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
@media screen and (min-width: 140px) {
  .cta__modalbtn-close {
    width: 2.6rem;
    height: 2.6rem;
    color: var(--background-primary);
    background-color: rgba(0, 0, 0, 0.4);
    font-size: var(--subtitle-size);
    border: 1px solid transparent;
    border-radius: 50%;
    opacity: 0.48;
    display: grid;
    place-items: center;
  }

  .cta__modalbtn-download span {
    font-size: var(--mid-size);
  }

  /* project quotation template (will be not visble in fact due to the flow web page med-queries of the ProjectCallPage --Component--) */

  .project__quotation-grid {
    padding-inline: 0;
  }
}

@media screen and (min-width: 420px) {
  /* project modal container */
  .project__modal-container {
    overflow-x: hidden;
  }

  /* project quotation templates */
  .project__quotation-templates {
    display: block;
    width: 100%;
    height: auto;
    min-height: 75rem;
    margin: 0 auto;
  }

  .project__quotation-grid {
    width: 100%;
    height: 100%;
    margin-top: 0.25rem;
    padding-inline: 3%;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto auto;
    gap: 2.5rem;
  }
}

@media screen and (min-width: 920px) {
  /* project quotation templates */

  .project__quotation-templates {
    width: max(52rem, 88%);
    height: 75rem;
    min-height: 75rem;
    margin: 0 auto;
  }

  .project__quotation-grid {
    padding-inline: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(18rem, 1fr));
    gap: 1rem;
  }

  .template__bar-squaresplitter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 80%;
    background-color: var(--accent-color-2);
  }
}

/* #modal__quotation-one {
  width: 100%;
  height: 100%;

  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
} */

/* #modal__quotation-two {
  width: 100%;
  height: 100%;

  grid-row: 1 / span 1;
  grid-column: 2 / span 1;
} */

/* #modal__quotation-three {
  width: 100%;
  height: 100%;

  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
} */

/* #modal__quotation-four {
  width: 100%;
  height: 100%;

  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
} */
</style>
