<script setup>
import { ref, reactive, computed, onUpdated } from "vue";
import { stringifyQuery } from "vue-router";

const props = defineProps({ userLanguage: String });

const hero = reactive({
  0: {
    valueProposal:
      "Consolidez la prochaine étape vers l'autonomie. Construisez votre maison complète à un budget raisonnable. ",
    subValueProposal:
      "Tourner la page sur des lieux d'habitations lugubres, des promesses de réparations à n'en plus finir, des menaces et abus de language. Devenez propriétaire et retrouvez la sérénité.",
  },
  1: {
    valueProposal:
      "Uplift Your Next Step For Autonomy. Build Your Entire House On Reasonable Budget.",
    subValueProposal:
      "Escape wretched rented places, countless repair's promises, excessiveness and threatening. Own the space and have peace of mind",
  },
});

/* const indexLang = ref(0); */

const indexLang = reactive({ val: 0 });

onUpdated(() => {
  console.log("userLanguage", props.userLanguage);
  if (props.userLanguage) {
    indexLang.val = props.userLanguage === "FR" ? 0 : 1;
  }
});
</script>
<template>
  <main id="landingpage">
    <!-- hero section -->
    <section id="hero" class="hero">
      <div class="hero__container">
        <div class="hero__description h-max flex flex-col gap-6">
          <div class="hero_text w-[58%] h-full pt-20 flex flex-col gap-4">
            <h1
              v-if="!indexLang.val"
              class="hero__value-proposal text-[var(--background-secondary)]"
            >
              Consolidez la prochaine étape vers
              <span class="inline-block text-[var(--highlight-text)]">
                l'autonomie.
              </span>
              Construisez votre maison complète à un budget raisonnable.
            </h1>
            <h1
              v-else
              class="hero__value-proposal text-[var(--background-secondary)]"
            >
              Uplift Your Next Step For
              <span class="inline-block text-[var(--highlight-text)]">
                Autonomy.
              </span>
              Build Your Entire House On Reasonable Budget.
            </h1>
            <p
              class="hero__subvalue-proposal font-bold text-[var(--background-primary)]"
            >
              {{ hero[indexLang.val].subValueProposal }}
            </p>
          </div>
          <div class="hero__cta-button">
            <a
              href="
        #"
              class="cta__button-primary"
              >GET GUIDANCE FREE</a
            >
          </div>
        </div>
        <div class="hero__image-container">
          <div class="hero__image"></div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.hero__container {
  position: relative;
  width: 100vw;
  height: 78vh;
  padding: 0 3.5rem;
  margin: 0 auto;
  background: linear-gradient(20deg, hsl(345, 72%, 24%), hsl(32, 30%, 37%) 87%);
  z-index: 3;
}

.hero__image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* padding-right: 5%; */
  /* background-color: hsla(0, 0%, 2%, 0.363); */
}

.hero__image {
  position: absolute;
  top: 3.3%;
  right: 0;
  width: 70%;
  height: 100%;
  background: url("../assets/images/hero-image_4.png") top 45% right -6%
    no-repeat;
  background-size: cover;
  /* transform: scale(0.96); */
  background-blend-mode: overlay;
  z-index: -1;
  opacity: 0.62;
  clip-path: xywh(0 5px 100% 86% round 2% 0px);
}
</style>
