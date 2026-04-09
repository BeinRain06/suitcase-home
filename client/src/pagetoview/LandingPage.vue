<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import {
  hero,
  mission,
  projects,
  services,
  trust,
  reinforcement,
} from "../api-data/general-data-center-project.js";

const props = defineProps({ userLanguage: String });

const router = useRouter();

const indexLang = computed(() => {
  return props.userLanguage === "FR" ? 0 : 1;
});

const handleRoute = async (route, projectId, queryValue) => {
  const catchProjectId = projectId || "";
  const catchQueryValue = queryValue || "";
  switch (route) {
    case "contact":
      await router.push({ path: "/contact" });
      break;
    case "home":
      await router.push({ path: "/" }); // have to introduce **hashId**
      break;
    case "project":
      await router.push({
        path: `/project/${catchProjectId}`,
        query: { value: `${catchQueryValue}` },
      }); // check if it is working both without and with *projectId*
      break;
    default:
      throw new Error("Error --handleRoute Fn-- in -- *LandingPage* component");
  }
};
</script>
<template>
  <main id="landingpage">
    <!-- hero section -->
    <section id="hero" class="hero">
      <div class="hero__container">
        <div
          class="hero__description max-[420px]:h-[88%] h-max flex flex-col max-[420px]:items-center max-[420px]:justify-center justify-start items-start gap-7"
        >
          <div
            class="hero_text w-[84%] md:w-[72%] xl:w-[58%] h-auto max-[420px]:pt-[12%] pt-[8%] md:pt-[6%] xl:pt-20 flex flex-col gap-4"
          >
            <h1
              v-if="!indexLang"
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
              class="hero__subvalue-proposal font-light text-[var(--background-primary)] max-[420px]:opacity-95 opacity-80"
            >
              {{ hero[indexLang].subValueProposal }}
            </p>
          </div>
          <div class="hero__cta-button relative w-max h-max">
            <div class="cta__button--depth"></div>
            <a
              v-if="!indexLang"
              href="
        #hero"
              class="cta__button-primary"
              @click.stop.prevent="async () => handleRoute('contact')"
              >OBTENEZ UN AVIS GRATUIT</a
            >
            <a
              v-else
              href="
        #hero"
              class="cta__button-primary"
              @click.stop.prevent="async () => handleRoute('contact')"
              >GET GUIDANCE FREE</a
            >
          </div>
        </div>
        <div class="hero__image-container">
          <div class="hero__image"></div>
        </div>
      </div>
    </section>
    <!-- mission section  -->
    <section id="mission" class="mission">
      <div
        class="mission__container max-[768px]:bg-[var(--background-secondary)] flex flex-col md:flex-row-reverse justify-between gap-6 md:gap-12 lg:gap-16"
      >
        <div class="mission__title-mobile md:hidden">
          <h3
            class="mission__title w-[75%] pt-2 px-4 pb-2 mx-auto mb-1 text-center tracking-wide"
          >
            MISSION
          </h3>
        </div>
        <div
          class="mission__image-container relative max-[768px]:w-[90%] w-full md:w-[45%] lg:w-[44%] xl:w-[35%] h-[20rem] lg:h-[28.75rem] max-[768px]:mx-auto max-[768px]:mx-0"
        >
          <div class="mission__image"></div>
          <div class="mission__message--before"></div>
        </div>
        <div
          class="mission__description w-full md:w-[55%] lg:w-[56%] xl:w-[65%] flex flex-col gap-8 md:gap-[7%] lg:gap-[15.5%]"
        >
          <div class="mission__text">
            <h3 class="mission__title pt-5 max-[768px]:hidden">MISSION</h3>
            <p
              class="mission__value font-extralight opacity-85 pt-4 lg:pt-[7.5%]"
            >
              {{ mission[indexLang].vision }}
            </p>
          </div>
          <div class="mission__cta-button relative w-max h-max">
            <div class="cta__button--depth"></div>
            <a
              v-if="!indexLang"
              href="
        #mission"
              class="cta__button-primary"
              @click.stop.prevent="async () => handleRoute('contact')"
              >EN CONNAITRE PLUS</a
            >
            <a
              v-else
              href="
        #mission"
              class="cta__button-primary"
              @click.stop.prevent="async () => handleRoute('contact')"
              >KNOW BETTER</a
            >
          </div>
        </div>
      </div>
    </section>
    <!-- projects -->
    <section id="projects" class="projects">
      <div class="projects__container w-full flex flex-col space-y-4">
        <h3
          class="projects__gen-title w-max pb-[2px] border-b border-solid grid place-items-center"
        >
          PROJECTS
        </h3>
        <div
          class="project__card"
          :key="projects[key].id"
          v-for="(item, key) in projects"
        >
          <div
            class="project__description w-full h-full flex flex-col md:flex-row gap-8"
          >
            <div
              class="project__image-container w-full h-6/12 md:w-1/3 md:h-full"
            >
              <div :id="`card_image_${key}`" class="project__image"></div>
            </div>
            <div class="project__text w-full h-6/12 md:w-2/3">
              <h5
                class="project__title md:size__p-regular lg:size__p-large pt-1"
              >
                {{ projects[key].name }}
              </h5>
              <p
                v-if="!indexLang"
                class="project__benefit size__p-cater lg:size__p-medium pt-3"
              >
                {{ projects[key].benefit.fr }}
              </p>
              <p
                v-else
                class="project__benefit size__p-cater lg:size__p-medium"
              >
                {{ projects[key].benefit.en }}
              </p>

              <div class="project__cta-button pt-4 pb-1">
                <a
                  :href="`#${projects[key].id}`"
                  class="cta__button-secondary"
                  v-if="!indexLang"
                  @click.stop.prevent="
                    async () =>
                      handleRoute('project', `${projects[key].id}`, 'single')
                  "
                  >{{ projects[key].button.fr }}</a
                >
                <a
                  href="#"
                  class="cta__button-secondary"
                  v-else
                  @click.stop.prevent="
                    () =>
                      handleRoute('project', `${projects[key].id}`, 'single')
                  "
                  >{{ projects[key].button.en }}</a
                >
              </div>
            </div>
          </div>
          <div
            :id="`card_shadow_${key}`"
            class="project__shadow-shade w-full h-full absolute z-0"
          ></div>
        </div>
      </div>
    </section>
    <!-- services section -->
    <section id="services" class="services">
      <div
        class="services__container w-full flex flex-col mt-4 pt-20 px-[5%] lg:px-[7%]"
      >
        <h3 class="trust__gen-title pb-[2px] self-center">SERVICES</h3>
        <div class="services__cards pt-16">
          <div
            :key="item.id"
            v-for="(item, key) in services"
            class="service__card"
          >
            <div class="service__title text-[var(--highlight-text)]">
              <h5 v-if="!indexLang" class="font-bold">
                {{ services[key].title.fr }}
              </h5>
              <h5 v-else>{{ services[key].title.en }}</h5>
            </div>
            <div
              class="service__text bg-[var(--accent-color-1)] p-2 grid place-items-center"
            >
              <p v-if="!indexLang">
                {{ services[key].offer.fr }}
              </p>
              <p v-else>
                {{ services[key].offer.en }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="services__cta-container w-full flex flex-row justify-end pt-20"
        >
          <div class="services__cta-button relative w-max h-max">
            <div class="cta__button--depth"></div>
            <a
              v-if="!indexLang"
              href="
        #services"
              class="cta__button-primary"
              @click.stop.prevent="async () => handleRoute('contact')"
              >OBTENEZ UN AVIS GRATUIT</a
            >
            <a
              v-else
              href="
        #services"
              class="cta__button-primary"
              @click.stop.prevent="async () => handleRoute('contact')"
              >GET GUIDANCE FREE</a
            >
          </div>
        </div>
      </div>
    </section>
    <!-- trust -->
    <section id="trust" class="trust">
      <div
        class="trust__container w-full mt-16 pt-20 max-[420px]:pt-16 md:pb-18 lg:pb-28 max-[420px]:pb-10 px-[6%] lg:px-[7%] flex flex-col gap-8 lg:gap-6"
      >
        <h3 class="trust__gen-title highlighted__h3 pb-[2px] self-center">
          WHY US ?
        </h3>
        <div class="trust__deal-content w-full pt-10">
          <div class="trust__deal w-full">
            <div
              id="benefit__item1"
              class="trust__item relative md:pr-[1.125rem] w-full flex max-[520px]:flex-col flex-row items-center justify-center md:justify-start lg:justify-end gap-[1.35rem] max-[520px]:pb-[2.025rem]"
            >
              <div class="trust1__border--shadow"></div>
              <div class="trust__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21.45 7.5H9.99A2 2 0 0 0 8.06 6h-1a2 2 0 0 0-1.93 1.5H2.55a.5.5 0 0 0-.5.5a.51.51 0 0 0 .5.5h2.58A2 2 0 0 0 7.06 10h1a2 2 0 0 0 1.93-1.5h11.46a.5.5 0 0 0 0-1M8.06 9h-1a1.006 1.006 0 0 1-1-.98V8a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2m13.39 6.5h-2.58a2 2 0 0 0-1.93-1.5h-1a2 2 0 0 0-1.93 1.5H2.55a.5.5 0 0 0 0 1h11.46a2 2 0 0 0 1.93 1.5h1a2 2 0 0 0 1.93-1.5h2.58a.5.5 0 0 0 .5-.5a.51.51 0 0 0-.5-.5m-3.51.5a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1.006 1.006 0 0 1 1 .98Z"
                  />
                </svg>
              </div>
              <div
                class="trust__text w-[80%] lg:w-[75%] max-[520px]:items-center max-[520px]:gap-[0.675rem] flex flex-col gap-[1.125rem]"
              >
                <h5 v-if="!indexLang" class="trust__title">
                  {{ trust[0].title.fr }}
                </h5>
                <h5 v-else class="trust__title">{{ trust[0].title.en }}</h5>
                <p v-if="!indexLang" class="trust__description smaller__p">
                  {{ trust[0].description.fr }}
                </p>
                <p v-else class="trust__description smaller__p">
                  {{ trust[0].description.en }}
                </p>
              </div>
            </div>
            <div
              id="benefit__item2"
              class="trust__item relative md:pr-[2.25rem] lg:pr-[1.125rem] w-full flex max-[520px]:flex-col flex-row items-center justify-center gap-[1.35rem] md:border-r-4 md:border-solid md:border-[var(--accent-color-1)] rounded-sm max-[520px]:pb-[2.025rem]"
            >
              <div class="trust2__border--shadow"></div>
              <div class="trust__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4.415 7.22a.76.76 0 0 0-.35.64v9.67a1.54 1.54 0 0 0 .88 1.38l5.96 2.82a2.62 2.62 0 0 0 2.19 0l5.96-2.82a1.54 1.54 0 0 0 .88-1.38V7.86a.74.74 0 0 0-.36-.64l-2.23-1.15v-1a1 1 0 0 0-.15-.52l-1.33-2.16a.75.75 0 0 0-1.28 0L13.3 4.5l-.66-1.07a.76.76 0 0 0-.64-.35a.79.79 0 0 0-.64.36l-.65 1.06L9.4 2.39a.75.75 0 0 0-1.28 0L6.805 4.55a1 1 0 0 0-.15.52v1Zm12.93-.01l.7.35l-.7.33Zm-2.44-3.43h.64l.5.81h-1.64Zm1.44 1.81v2.77l-.61.29V5.59Zm-2.23 0h.62v3.53l-.62.3Zm-5.67-1.81h.64l.5.81h-1.64Zm1.44 1.81v3.82l-.61-.29V5.59Zm-2.23 0h.62v3.06l-.62-.29Zm-1 1.62v.68l-.7-.33ZM5.365 18a.52.52 0 0 1-.3-.47V8.24l6.43 3.04v9.59Zm6.13-7.83l-.61-.29V6.64h.61Zm-.32-4.53l.51-.82h.62l.51.82Zm1.94 1v3.25l-.62.29V6.64ZM12.5 20.88v-9.59l6.44-3.05v9.29a.51.51 0 0 1-.31.47Z"
                  />
                </svg>
              </div>
              <div
                class="trust__text w-[75%] max-[520px]:items-center max-[520px]:gap-[0.675rem] flex flex-col gap-[1.125rem]"
              >
                <h5 v-if="!indexLang" class="trust__title">
                  {{ trust[1].title.fr }}
                </h5>
                <h5 v-else class="trust__title">{{ trust[1].title.en }}</h5>

                <p v-if="!indexLang" class="trust__description smaller__p">
                  {{ trust[1].description.fr }}
                </p>
                <p v-else class="trust__description smaller__p">
                  {{ trust[1].description.en }}
                </p>
              </div>
            </div>
            <div
              id="benefit__item3"
              class="trust__item relative md:pr-[2.25rem] lg:pr-[1.125rem] w-full flex max-[520px]:flex-col flex-row items-center justify-center gap-[1.35rem] md:border-r-4 md:border-solid md:border-[var(--accent-color-1)] rounded-sm max-[520px]:pb-[2.025rem]"
            >
              <div class="trust3__border--shadow"></div>
              <div class="trust__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12.6 20.936h-1.3a.88.88 0 0 1-.852-.654l-.774-2.833l-2.5 1.435a.886.886 0 0 1-1.06-.138l-.925-.919a.884.884 0 0 1-.143-1.066l1.469-2.545l-.006-.016l-2.787-.747a.88.88 0 0 1-.654-.851V11.3a.88.88 0 0 1 .652-.85l2.839-.777L5.12 7.171a.885.885 0 0 1 .141-1.062l.918-.918a.885.885 0 0 1 1.061-.142l2.552 1.465h.012l.745-2.79a.88.88 0 0 1 .851-.655h1.3a.88.88 0 0 1 .852.655l.762 2.838l2.509-1.441a.885.885 0 0 1 1.059.138l.926.919a.88.88 0 0 1 .141 1.067l-1.466 2.532l.008.022l2.786.746a.88.88 0 0 1 .653.851v1.3a.88.88 0 0 1-.654.852l-2.837.774l1.439 2.505a.88.88 0 0 1-.141 1.063l-.917.917a.89.89 0 0 1-1.063.141l-2.539-1.462l-.018.014l-.745 2.785a.885.885 0 0 1-.855.651m-1.21-1h1.119l.738-2.756a.89.89 0 0 1 .528-.592l.134-.052a.87.87 0 0 1 .76.057l2.51 1.445l.789-.789l-1.423-2.478a.88.88 0 0 1-.048-.78l.052-.125a.88.88 0 0 1 .584-.51l2.8-.749v-1.12l-2.755-.737a.89.89 0 0 1-.592-.529l-.052-.132a.88.88 0 0 1 .057-.763l1.449-2.508l-.8-.79l-2.48 1.425a.88.88 0 0 1-.772.052l-.115-.047a.89.89 0 0 1-.518-.588l-.748-2.806h-1.115l-.738 2.762a.88.88 0 0 1-.539.6l-.12.045a.87.87 0 0 1-.751-.058L6.822 5.962l-.789.789l1.422 2.476a.89.89 0 0 1 .046.785l-.051.12a.88.88 0 0 1-.579.5l-2.8.758v1.121l2.757.738a.89.89 0 0 1 .591.525l.048.121a.87.87 0 0 1-.055.77l-1.454 2.516l.8.791l2.47-1.419a.88.88 0 0 1 .787-.045l.106.044a.87.87 0 0 1 .526.591Zm-1.64-2.454h.008Zm-.15-.061h.007Zm4.655-10.885"
                  />
                  <path
                    fill="currentColor"
                    d="M12 15a3 3 0 1 1 3-3a3 3 0 0 1-3 3m0-5a2 2 0 1 0 2 2a2 2 0 0 0-2-2"
                  />
                </svg>
              </div>
              <div
                class="trust__text w-[75%] max-[520px]:items-center max-[520px]:gap-[0.675rem] flex flex-col gap-[1.125rem]"
              >
                <h5 v-if="!indexLang" class="trust__title">
                  {{ trust[2].title.fr }}
                </h5>
                <h5 v-else class="trust__title">{{ trust[2].title.en }}</h5>

                <p v-if="!indexLang" class="trust__description smaller__p">
                  {{ trust[2].description.fr }}
                </p>
                <p v-else class="trust__description smaller__p">
                  {{ trust[2].description.en }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="trust__cta-container w-full flex flex-row justify-center pt-10 pb-20 z-20"
        >
          <div class="trust__cta-button relative w-max h-max">
            <div class="cta__button--depth"></div>
            <a
              v-if="!indexLang"
              href="
        #trust"
              class="cta__button-primary"
              @click.stop.prevent="
                async () => handleRoute('project', 'danton_shield', 'multiple')
              "
              >VOIR EXAMPLE PROJETS</a
            >
            <a
              v-else
              href="
        #trust"
              class="cta__button-primary"
              @click.stop.prevent="async () => handleRoute('project')"
              >LOOK SAMPLE PROJECTS</a
            >
          </div>
        </div>
      </div>
    </section>
    <!-- breathing -->
    <section id="breathing" class="breathing">
      <div
        class="breathing__container relative w-full h-[26rem] min-[420px]:h-[28rem] md:h-[32.5rem] lg:h-[38.5rem] mt-8 bg-[var(--background-primary)] border-b-12 border-solid border-[var(--accent-color-2)] outline-none overflow-hidden"
      >
        <!-- <div class="breathing__image"></div> -->
        <div class="breathing__left-scene">
          <div class="breathing__image"></div>
        </div>
        <div class="breathing__right-scene"></div>

        <div class="breathing_description">
          <h1
            v-if="!indexLang"
            class="breathing__ft-size text-[var(--accent-color-1)]"
          >
            Ravivez Votre Journée... Retournez à la maison sachant que les lieux
            vous appartiennent
          </h1>
          <h1 v-else class="breathing__ft-size text-[var(--accent-color-1)]">
            Rekindle Your Day ... Get Back Home Knowing the Place is Yours
          </h1>
        </div>
      </div>
    </section>
    <!-- reinforcement -->
    <section id="reinforcement" class="reinforcement">
      <div
        class="reinforcement__container flex flex-col md:flex-row-reverse justify-between gap-6 md:gap-12 lg:gap-16"
      >
        <div class="reinforcement__title-mobile md:hidden">
          <h3
            class="reinforcement__title w-[75%] pt-2 px-4 pb-2 mx-auto mb-1 text-center tracking-wide"
          >
            COLLABORATION
          </h3>
        </div>
        <div
          class="reinforcement__image-container relative max-[768px]:w-[90%] w-full md:w-[45%] lg:w-[44%] xl:w-[35%] h-[20rem] lg:h-[28.75rem] max-[768px]:mx-auto max-[768px]:mx-0"
        >
          <div class="reinforcement__image"></div>
          <div class="reinforcement__message--before"></div>
        </div>
        <div
          class="reinforcement__description w-full md:w-[55%] lg:w-[56%] xl:w-[65%] flex flex-col gap-8 md:gap-[7%] lg:gap-[15.5%]"
        >
          <div class="reinforcement__text">
            <h3 class="reinforcement__title pt-5 max-[768px]:hidden">
              COLLABORATION
            </h3>
            <p
              class="reinforcement__value font-extralight opacity-85 pt-4 lg:pt-[7.5%]"
            >
              {{ reinforcement[indexLang].vision }}
            </p>
          </div>
          <div class="reinforcement__cta-button relative w-max h-max">
            <div class="cta__button--depth"></div>
            <a
              v-if="!indexLang"
              href="
        #reinforcement"
              class="cta__button-primary"
              @click.stop.prevent="async () => handleRoute('contact')"
              >EN CONNAITRE PLUS</a
            >
            <a
              v-else
              href="
        #reinforcement"
              class="cta__button-primary"
              @click.stop.prevent="async () => handleRoute('contact')"
              >KNOW BETTER</a
            >
          </div>
        </div>
      </div>
    </section>
    <!-- farewell -->
    <section id="farewell" class="farewell">
      <div
        class="farewell__container relative w-full max-[420px]:h-[25.875rem] h-[30.6rem] md:h-[23.125rem] mt-12 pt-10 px-[7%] bg-[var(--accent-color-2)]"
      >
        <div class="farewell__image"></div>
        <div class="farewell__description w-full z-10">
          <div
            class="farewell__text max-[420px]:w[86%] w-[78%] text-center text-[var(--highlight-text)] pb-4 lg:pb-0 mx-auto opacity-65"
          >
            <h2 v-if="!indexLang">
              Pas besoin d'etre criard ou ventard. Si d'autres l'on construit
              ces lieux d'habitations plaisants. Pleins de joyeux matins et de
              paisible soirs. Pourquoi pas Vous ?
            </h2>
            <h2 v-else>
              There is no need to be loud or boastful. If others has built it.
              Pleasant places of living full of happier morning and restful
              evening. Why not You?
            </h2>
          </div>
          <div class="farewell__cta-container w-full flex flex-row justify-end">
            <div
              class="farewell__cta-button relative max-[420px]:mx-auto mx-0 w-max h-max z-10"
            >
              <div class="cta__button--depth"></div>
              <a
                v-if="!indexLang"
                href="
        #farewell"
                class="cta__button-primary"
                @click.stop.prevent="
                  async () =>
                    handleRoute('project', 'danton_shield', 'multiple')
                "
                >VOIR EXAMPLE PROJETS</a
              >
              <a
                v-else
                href="#farewell
        "
                class="cta__button-primary"
                @click.stop.prevent="async () => handleRoute('project')"
                >LOOK SAMPLE PROJECTS</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
/* utilities */
h5 {
  font-weight: bold;
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

.breathing__ft-size {
  font-size: calc(3.25rem + 0.12vw);
}

@media screen and (min-width: 140px) {
  /* utilities */
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
    z-index: 0;
    transform: skewY(3deg);
  }

  .size__p-large {
    font-size: var(--subtitle-size);
    font-weight: 900;
  }

  .size__p-regular {
    font-size: var(--regular-size);
    font-weight: 400;
  }

  .size__p-medium {
    font-size: var(--mid-size);
    font-weight: 400;
  }

  .size__p-cater {
    font-size: var(--cater-size);
    font-weight: 300;
  }

  .size__p-mini {
    font-size: var(--mini-size);
    font-weight: 300;
  }

  /* landing page */

  #landingpage {
    overflow-x: hidden;
  }

  /* hero section */
  .hero__container {
    --hero-title-size: calc(1.35rem + 0.12vw);
    --regular-size: calc(0.86rem + 0.05vw);
    position: relative;
    width: 100vw;
    height: 32rem;
    padding: 3% 3% 2%;
    margin: 0 auto;
    background: linear-gradient(
      20deg,
      hsl(345, 72%, 24%),
      hsl(32, 30%, 37%) 87%
    );
    z-index: 2;
  }

  .hero__image-container {
    position: absolute;
    top: 0.5rem;
    left: 0;
    width: 100%;
    height: 105%;
  }

  .hero__image {
    position: absolute;
    top: 3.3%;
    right: 2%;
    width: 96%;
    height: 100%;
    background: url("../assets/images/hero-image_7.png") top 45% right 0%
      no-repeat;
    background-size: cover;
    background-blend-mode: overlay;
    z-index: -3;
    opacity: 0.62;
    clip-path: xywh(0 5px 100% 86% round 2% 0px);
  }

  /* mission, reinforcement */
  /* mission, reinforcement */
  .mission__container,
  .reinforcement__container {
    width: 100%;
    padding: 3rem 1rem 3.5rem;
  }

  .mission__image-container,
  .reinforcement__image-container {
    transform: scale(0.9);
  }

  .reinforcement__container h3.reinforcement__title {
    font-size: calc(var(--regular-size) + 0.1vw);
  }

  .mission__image,
  .reinforcement__image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background: url("../assets/images/hero-image_4.png") top 45% right -6%
    no-repeat; */
    background: rgba(0, 0, 0, 0.4)
      url("../assets/images/Atana-Paskalev_Pixabay.jpg") center no-repeat;
    background-size: cover;
    border: 1px solid transparent;
    box-shadow: 0px 0px 12px var(--link--external-btn);
    border-radius: 3px;
    z-index: 0;
  }

  .reinforcement__image {
    background: rgba(0, 0, 0, 0.65)
      url("../assets/images/Tung-Nguyen_Pixabay.jpg") center no-repeat;
    z-index: 0;
  }

  .mission__message--before,
  .reinforcement__message--before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--title-color);
    transform: translateY(5%);
    border-radius: 5px;
    opacity: 0.98;
    z-index: -3;
    transform: skew(-5deg, 2deg);
  }

  .mission__cta-button,
  .reinforcement__cta-button {
    margin: 0 auto;
  }

  /* projects */
  .projects__container {
    width: 100%;
    padding: 2.5rem 0.5rem 0;
  }

  .projects__gen-title {
    margin-inline: auto;
    margin-bottom: 1rem;
  }

  .project__card {
    width: 100%;
    margin: 0 auto;
    height: 26.5rem;
    padding: 2rem 1rem 1.35rem;
    border-radius: 0.8rem;
  }

  .project__image {
    width: 100%;
    height: 100%;
    background: url("../assets/images/C-Hickenbotham_Pixabay_1280.jpg") center
      no-repeat;
    background-size: cover;
  }

  #card_image_1.project__image {
    background: url("../assets/images/Paul-Brennan_Pixabay_1280.jpg") center
      no-repeat;
    background-size: cover;
  }

  #card_image_2.project__image {
    background: url("../assets/images/Jlyne-Hanback_Pixabay_1280.jpg") center
      no-repeat;
    background-size: cover;
  }

  /* services */
  .services__container {
    background: linear-gradient(
      60deg,
      hsl(300, 20%, 99%) 97%,
      hsl(345, 60%, 72%) 3%
    );
  }

  .services__cards {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    gap: 2rem;
  }

  .service__card {
    width: 100%;
    height: 100%;
    padding: 1rem 1rem 1.5rem;
    background-color: var(--accent-color-1);
    text-align: center;
    display: grid;
    grid-auto-columns: 100%;
    grid-template-rows: 2rem 10rem;
    gap: 1rem;
    border-radius: 1rem;
    outline: none;
  }

  .service__card .service__text {
    background-color: var(--accent-color-2);
    border-radius: 0;
  }

  .service__card .service__text p {
    opacity: 0.8;
    font-size: var(--mid-size);
    font-weight: 200;
  }

  /* trust section */
  .trust__container {
    position: relative;
    height: 100%;
    background: linear-gradient(
      300deg,
      hsl(300, 20%, 99%) 97%,
      hsl(32, 50%, 72%) 3%
    );
    z-index: 0;
  }

  .trust1__border--shadow,
  .trust2__border--shadow,
  .trust3__border--shadow {
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    width: 4px;
    height: 6rem;
    background-color: var(--accent-color-1);
  }

  .trust2__border--shadow {
    right: 100%;
  }

  .trust__deal {
    margin: 0 auto;
    display: grid;
    grid-template-areas:
      "benefit-1"
      "benefit-2"
      "benefit-3";
    gap: 1.35rem;
    grid-template-columns: 96%;
    grid-template-rows: auto auto;
    place-content: center center;
  }

  #benefit__item1 {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }

  #benefit__item2 {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
  }

  #benefit__item3 {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
  }

  .trust__text p {
    opacity: 0.65;
    font-weight: 300;
  }

  /* breathing */

  .breathing__ft-size {
    font-size: calc(1.65rem + 0.12vw);
  }

  .breathing__left-scene {
    position: absolute;
    top: -9%;
    left: -1%;
    width: 65%;
    height: 78%;
    background-color: var(--background-primary);
    transform: rotate(5deg);
    border-radius: 40%;
    overflow: hidden;
    outline: 3px solid var(--background-secondary);
    z-index: 5;
  }

  .breathing__image {
    width: 97%;
    aspect-ratio: unset;
    height: 100%;
    position: absolute;
    top: 60%;
    left: 51%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.2) url("/src/assets/images/Azubcic_Pixabay.jpg")
      center no-repeat;
    background-size: cover;
    background-blend-mode: overlay;
    clip-path: circle(90%);
  }

  .breathing__right-scene {
    position: absolute;
    top: 0;
    right: -25%;
    width: 136%;
    height: 138%;
    background: linear-gradient(
      315deg,
      hsl(345, 42%, 48%),
      hsl(345, 52%, 24%),
      hsl(345, 28%, 32%)
    );

    transform: rotate(180deg);
    overflow: hidden;
    outline: 3px solid var(--background-secondary);
    z-index: 3;
  }

  .breathing_description {
    position: absolute;
    top: 24%;
    right: 10%;
    width: 75%;
    opacity: 0.79;
    height: max-content;
    padding-top: 10%;
    z-index: 10;
  }

  /* farewell */
  .farewell__text h2 {
    font-size: var(--subtitle-size);
    font-size: calc(var(--regular-size) + 0.95vw);
    line-height: 1.6;
  }
}

@media screen and (min-width: 420px) {
  /* utilities */
  a.cta__button-primary {
    font-size: var(--cater-size);
  }

  /* hero section */
  .hero__container {
    --hero-title-size: calc(1.45rem + 0.12vw);
    --regular-size: calc(0.86rem + 0.05vw);

    height: 39rem;
    padding: 0 3%;
  }

  .hero__image-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .hero__image {
    right: 0;
    width: 80%;
    height: 100%;
    background: url("../assets/images/hero-image_7.png") top 45% right -2.5%
      no-repeat;
  }

  /* mission, reinforcement */
  /* mission, reinforcement */
  .mission__container,
  .reinforcement__container {
    width: 100%;
    padding: 3rem 2rem 3.5rem;
  }

  .mission__image-container,
  .reinforcement__image-container {
    transform: scale(0.9);
  }

  .reinforcement__container h3.reinforcement__title {
    font-size: var(--subtitle-size);
  }

  /* projects */
  .projects__container {
    padding: 4rem 2rem 0.5rem;
  }

  .projects__gen-title {
    margin-inline: 0;
    margin-bottom: 1rem;
  }

  .project__card {
    width: 90%;
    padding: 2rem 1rem 1.5rem;
  }

  /* services */
  .services__cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .service__card {
    padding: 0.5rem 0.65rem 1.5rem;
  }

  /* trust section */
  .trust__deal {
    margin: 0 auto;
    grid-template-columns: 96%;
  }

  /* breathing */
  .breathing__ft-size {
    font-size: calc(2.15rem + 0.12vw);
  }

  .breathing__left-scene {
    position: absolute;
    top: -5%;
    left: -1%;
    width: 65%;
    height: 100%;
    transform: rotate(10deg);
  }

  .breathing__image {
    width: 97%;
    aspect-ratio: unset;
    height: 100%;
    position: absolute;
    top: 60%;
    left: 51%;
  }

  .breathing_description {
    position: absolute;
    top: 6.8%;
    right: 10%;
    width: 84%;
    opacity: 0.89;
    padding-top: 12%;
  }

  .breathing__right-scene {
    position: absolute;
    top: 0;
    right: -25%;
    width: 136%;
    height: 138%;
    transform: rotate(290deg);
  }

  /* farewell */
  .farewell__text h2 {
    font-size: var(--title-size);
    line-height: 1.45;
  }
}

@media screen and (min-width: 768px) {
  /* utilities */
  .cta__button--depth {
    top: 12%;
    left: -1%;
    border-radius: 1.5rem;
    z-index: 0;
    transform: skewY(3deg);
  }

  a.cta__button-primary {
    font-size: var(--cater-size);
  }

  p.mission__value {
    font-size: var(--mid-size);
    line-height: 1.6;
  }

  /* hero section */
  .hero__container {
    --hero-title-size: calc(1.82rem + 0.12vw);
    --regular-size: calc(1.12rem + 0.05vw);

    width: 100vw;

    height: 32rem;
    padding: 2.5% 5% 0;
  }

  .hero__image {
    width: 74%;
    height: 100%;
    background: url("../assets/images/hero-image_7.png") top 45% right -3%
      no-repeat;
    z-index: -1;
  }

  /* mission, reinforcement */
  /* mission, reinforcement */
  .mission__container,
  .reinforcement__container {
    width: 100%;
    padding: 7rem 3rem 3rem;
  }

  .mission__image-container,
  .reinforcement__image-container {
    transform: scale(1);
  }

  .reinforcement__container h3.reinforcement__title {
    font-size: var(--title-size);
  }

  .mission__image,
  .reinforcement__image {
    width: 100%;
    height: 100%;
  }

  .mission__cta-button,
  .reinforcement__cta-button {
    margin: 0;
  }

  /* projects */
  .projects__container {
    width: 100%;
    padding: 4rem 3rem 2rem;
  }

  .projects__gen-title {
    margin-inline: auto;
    margin-bottom: 2rem;
  }

  .project__card {
    width: 90%;
    height: 14.5rem;
  }

  /* services */

  .services__cards {
    width: 96%;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .service__card {
    padding: 0.5rem 0.65rem 1.5rem;
  }

  .service__card .service__text p {
    font-size: var(--cater-size);
  }

  /* trust section */
  .trust2__border--shadow {
    display: none;
  }

  .trust3__border--shadow {
    display: none;
  }

  .trust__deal {
    margin: 0;
    display: grid;
    grid-template-areas:
      "benefit-1 benefit-1 benefit-2 benefit-2"
      "benefit-1 benefit-1 benefit-3 benefit-3";
    gap: 1.35rem;
    grid-template-columns: 22% 22% 24% 24%;
    grid-template-rows: auto auto;
    place-content: center center;
  }

  #benefit__item1 {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }

  #benefit__item2 {
    grid-column: 3 / span 2;
    grid-row: 1 / span 1;
  }

  #benefit__item3 {
    grid-column: 3 / span 2;
    grid-row: 2 / span 1;
  }

  /* breathing */

  .breathing__ft-size {
    font-size: calc(2.75rem + 0.12vw);
  }

  .breathing__left-scene {
    position: absolute;
    top: -15%;
    left: -1%;
    width: 65%;
    height: 123%;
  }

  .breathing__image {
    width: 97%;
    aspect-ratio: 16/15;
    height: unset;
    position: absolute;
    top: 53%;
    left: 51%;
  }

  .breathing_description {
    position: absolute;
    top: 7.8%;
    right: 5%;
    width: 60%;
    opacity: 0.79;
    padding-top: 16%;
  }

  .breathing__right-scene {
    transform: rotate(315deg);
  }
}

@media screen and (min-width: 1280px) {
  /* utilities */
  .cta__button--depth {
    top: 12%;
    left: -1%;
    border-radius: 1.5rem;
    z-index: 0;
    transform: skewY(3deg);
  }

  a.cta__button-primary {
    font-size: var(--mid-size);
  }

  p.mission__value {
    font-size: var(--regular-size);
    line-height: 1.6;
  }

  /* hero section */
  .hero__container {
    --hero-title-size: calc(2.25rem + 0.12vw);
    --regular-size: calc(1.18rem + 0.05vw);

    height: 83vh;
    padding: 0 5% 2%;
  }

  .hero__image {
    width: 70%;
    height: 100%;
    background: url("../assets/images/hero-image_7.png") top 45% right -6%
      no-repeat;
    z-index: -1;
  }

  /* mission, reinforcement */
  .mission__container,
  .reinforcement__container {
    width: 100%;
    padding: 7rem 6rem 4.5rem;
  }

  /* projects */
  .projects__container {
    width: 100%;
    padding: 4rem 6rem 7rem;
  }

  .projects__gen-title {
    margin-inline: 0;
  }

  .project__card {
    width: max(54.75rem, 80%);
    height: 14.5rem;
    padding: 2rem 1rem 1.35rem;
  }

  /* services */

  .services__cards {
    width: max(54.75rem, 80%);
    grid-template-columns: repeat(3, minmax(17.5rem, 1fr));
    gap: 2rem;
  }

  .service__card {
    padding: 1rem 1rem 1.5rem;
  }

  /* trust section */
  .trust__deal {
    gap: 1.35rem;
    grid-template-columns: 22% 22% 22% 22%;
  }

  /* breathing */
  .breathing__ft-size {
    font-size: calc(3.25rem + 0.12vw);
  }

  .breathing__left-scene {
    position: absolute;
    top: -30%;
    left: -1%;
  }

  .breathing_description {
    position: absolute;
    top: 5%;
    padding-top: 8%;
  }

  .breathing__right-scene {
    position: absolute;
    top: 0;
    right: -14%;
    width: 75%;
    height: 150%;
  }
}
</style>
