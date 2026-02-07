<script setup>
import { reactive, onMounted, onUpdated } from "vue";
import { useRoute } from "vue-router";

import MiniModalQuotation from "./MiniModalQuotation.vue";

const route = useRoute();

const props = defineProps({
  userLanguage: String,
});

const initInfos = reactive({ 0: {}, 1: {}, 2: {}, 3: {} });

onMounted(() => {
  /* This has to be done dynamically (not yet proper route redirection)

  const projectId = route.query.projectId; */

  const projectId = route.query.projectId || "dexter_flip";

  const typeQuotation = ["foundation", "plumbing", "electricity", "roofing"];

  typeQuotation.forEach((type, index) => {
    switch (projectId) {
      case "danton_shield":
        initInfos[index] = {
          projectId: projectId,
          quotationType: type,
          indexToSelect: 0,
        };
        break;
      case "merry_clap":
        initInfos[index] = {
          projectId: projectId,
          quotationType: type,
          indexToSelect: 1,
        };
        break;
      case "dexter_flip":
        initInfos[index] = {
          projectId: projectId,
          quotationType: type,
          indexToSelect: 2,
        };
        break;
      default:
        throw new Error(
          "Error occured while affecting --indexLink-- ,   LifeCycle onMounted(() => {...}), --ProjectModalPage component-- ",
        );
    }
  });

  /* console.log("initInfos :", initInfos); */
});
</script>
<template>
  <section id="project__modal" class="project__modal w-full">
    <div class="project__modal-container w-full flex flex-col gap-4">
      <div
        class="cta__modal-close w-full h-24 px-4 flex flex-row items-center justify-end"
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
          class="cta__modalbtn-download w-max py-1 text-[var(--link--external-btn)] border-b-1 border-solid border-[var(--link--external-btn)] cursor-pointer rounded-sm"
        >
          <span>Download Plan</span>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
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

/* project height container */

#project__modal {
  width: 100%;
  height: 100%;
}

/* project quotation templates */

.project__quotation-templates {
  width: max(60rem, 84%);
  height: max-content;
  margin: 0 auto;
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

.project__quotation-grid {
  width: 100%;
  height: 70rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto auto;
  gap: 1rem;
}

#modal__quotation-one {
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
}

#modal__quotation-two {
  grid-row: 1 / span 1;
  grid-column: 2 / span 1;
}

#modal__quotation-three {
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
}

#modal__quotation-four {
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
}
</style>
