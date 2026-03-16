<script setup>
import {
  ref,
  reactive,
  onMounted,
  computed,
  onBeforeUpdate,
  nextTick,
  watch,
} from "vue";
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";

import MiniQuotation from "./MiniQuotation.vue";
import HouseCues from "../some-svg-components/HouseCues.vue";

import { initInfoProject } from "../reusable-function/initInfoProjects";

import { useProjectStore } from "../store-management/useProjectStore";

const router = useRouter();

const route = useRoute();

const emit = defineEmits(["update-modalpage"]);

const props = defineProps({
  userLanguage: String,
});

const projectStore = useProjectStore();

const halfResumeRef1 = ref();
const halfResumeRef2 = ref();
const lastQuotationType = ref("foundation");

const numberBtnSlide = reactive({
  0: {
    id: "btn-slide-1",
    text: "1",
  },
  1: {
    id: "btn-slide-2",
    text: "2",
  },
  2: {
    id: "btn-slide-3",
    text: "3",
  },
});

const isBtnJoystickTrigerred = computed(() => {
  return projectStore.$state.isBtnJoystickTrigerred;
});

const isBoxMaterialExpanded = computed(() => {
  return projectStore.$state.isBoxMaterialExpanded;
});

const isActiveResume = reactive({ one: true, two: false });

const isActiveProjectDisplay = reactive({
  one: true,
  two: true,
  three: true,
  four: true,
});

const isActiveBtnJoyStick = reactive({
  one: false,
  two: false,
  three: false,
  four: false,
});

const errDownloadMsg = ref("");

const numbersBtnRef = ref({});

const typeQuotation = ref(["foundation", "plumbing", "electricity", "roofing"]);

const setItemRef = (el, key) => {
  if (el) {
    numbersBtnRef.value[key] = el;
  }
};

const durationProject = ref({ durationStage: "" });

const home = ref({ name: "", land_area: "", benefit: "" });

const roomInProject = ref({
  bedroom: {
    fr: "",
    en: "",
  },
  kitchen: {
    fr: "",
    en: "",
  },
  diningroom: {
    fr: "",
    en: "",
  },
  livingroom: {
    fr: "",
    en: "",
  },
  toilet: {
    fr: "",
    en: "",
  },
  keyelement: {
    fr: "",
    en: "",
  },
});

const houseType = ref({
  one_floor: "true",
  level: "0",
});

const activeFloor = ref({ floor_0: true }); // true --active floor 0, false --active floor 1

const activeFloorWatch = computed(() => {
  return activeFloor.value.floor_0;
});

const initInfos = ref({
  0: {},
  1: {},
  2: {},
  3: {},
});

/* const isBtnSlider = ref(true); */

const btnSliderRef = ref();

const indexLang = computed(() => {
  return props.userLanguage === "FR" ? 0 : 1;
});

const goBackHome = () => {
  router.push({ name: "home" });
};

const handleFloorChange = async (e) => {
  const targetElt = e.currentTarget;

  console.log("targetElt:", targetElt);

  const projectId = route.params.projectId;

  if (projectId !== "dexter_flip") return;

  if (targetElt.id === "floor_0") {
    activeFloor.value.floor_0 = true;
    houseType.value.level = "0";

    // update data is made in watch --activeFloorWatch--
  } else {
    activeFloor.value.floor_0 = false;
    houseType.value.level = "1";

    // update data is made in watch --activeFloorWatch--
  }
};

const handleSwitchPage = () => {
  emit("update-modalpage", { isModalPage: true });
};

const handleShiftResume = (e) => {
  //desactivate any selected Joystick Button
  projectStore.$patch({
    isBtnJoystickTrigerred: false,
    isBoxMaterialExpanded: false,
  });

  const targetElt = e.target;

  isActiveResume.one = false;
  isActiveResume.two = false;

  // button reaction & displayed box container
  if (
    targetElt.id === "cta-resume-one" ||
    e.currentTarget.getAttribute("data-cta-resume") === "cta-resume-one"
  ) {
    if (targetElt.id === "cta-resume-one") {
      isActiveResume.one = true;
      isActiveResume.two = false;

      projectStore.$patch({
        isBtnJoystickTrigerred: false,
        isBoxMaterialExpanded: false,
      });
    }

    halfResumeRef1.value.classList.add("activeproject__resume");
    halfResumeRef2.value.classList.remove("activeproject__resume");
  } else if (
    targetElt.id === "cta-resume-two" ||
    e.currentTarget.getAttribute("data-cta-resume") === "cta-resume-two"
  ) {
    if (targetElt.id === "cta-resume-two") {
      isActiveResume.one = false;
      isActiveResume.two = true;

      projectStore.$patch({
        isBtnJoystickTrigerred: false,
        isBoxMaterialExpanded: false,
      });
    }

    halfResumeRef2.value.classList.add("activeproject__resume");
    halfResumeRef1.value.classList.remove("activeproject__resume");
  }
};

const controlProjectToDisplay = (indexSelect, isExpanded) => {
  if (isExpanded) {
    Object.keys(isActiveBtnJoyStick).forEach((key, index) => {
      if (index !== indexSelect) {
        isActiveBtnJoyStick[key] = false;
        isActiveProjectDisplay[key] = false;
      } else {
        isActiveBtnJoyStick[key] = true;
        isActiveProjectDisplay[key] = true;
      }
    });
  } else {
    Object.keys(isActiveBtnJoyStick).forEach((key, index) => {
      if (index === indexSelect.one || index === indexSelect.two) {
        isActiveBtnJoyStick[key] = false;
        isActiveProjectDisplay[key] = true;
      }
    });
  }
};

const switchProjectToView = (quotationType, statusExpanded) => {
  if (statusExpanded) {
    switch (quotationType) {
      case "foundation":
        controlProjectToDisplay(0, statusExpanded);

        break;
      case "plumbing":
        controlProjectToDisplay(1, statusExpanded);

        break;
      case "electricity":
        controlProjectToDisplay(2, statusExpanded);

        break;
      case "roofing":
        controlProjectToDisplay(3, statusExpanded);
        break;
      default:
        throw new Error(
          "Error --handleProjectDisplay Fn if-- ProjectCallpage Component",
        );
    }
  } else {
    console.log("TRIAL BEAR--");
    switch (quotationType) {
      case "foundation":
        controlProjectToDisplay({ one: 0, two: 1 }, statusExpanded);
        break;
      case "plumbing":
        controlProjectToDisplay({ one: 0, two: 1 }, statusExpanded);
        break;
      case "electricity":
        controlProjectToDisplay({ one: 2, two: 3 }, statusExpanded);
        break;
      case "roofing":
        controlProjectToDisplay({ one: 2, two: 3 }, statusExpanded);
        break;
      default:
        throw new Error(
          "Error --handleProjectDisplay Fn else-- ProjectCallpage Component",
        );
    }
  }
};

const handleJoystickPlay = async (e) => {
  console.log("e.target --handleJoystickPlay Fn--:", e.currentTarget);

  const indexTarget = e.currentTarget.getAttribute("data-index");

  let quotationType;

  typeQuotation.value.map((item, index) => {
    if (index === +indexTarget) {
      quotationType = item;
      return;
    }
  });

  handleShiftResume(e);

  /* handle show/hide > box materials < --in MiniQuotation-- */

  /* by  playing *isBtnJoystickTrigerred* and *isBoxMaterialExpanded* global Var */

  if (lastQuotationType.value !== quotationType) {
    switchProjectToView(lastQuotationType.value, false);
  }

  await projectStore.$patch({
    isBtnJoystickTrigerred: true,
    isBoxMaterialExpanded: true,
    quotationTypeSelect: quotationType,
  });

  switchProjectToView(quotationType, true);
};

const handleProjectDisplay = async () => {
  /* NOTE: work in collaboration with --handleResumeDisplay Fn-- in **<MiniQuotation/>** */

  //goal activate/not btnJoystcick and project to display

  const isBoxExpanded = await projectStore.$state.isBoxMaterialExpanded;

  const quotationTypeSelection = await projectStore.$state.quotationTypeSelect;

  if (isBoxExpanded) {
    switch (quotationTypeSelection) {
      case "foundation":
        controlProjectToDisplay(0, isBoxExpanded);
        break;
      case "plumbing":
        controlProjectToDisplay(1, isBoxExpanded);
        break;
      case "electricity":
        controlProjectToDisplay(2, isBoxExpanded);
        break;
      case "roofing":
        controlProjectToDisplay(3, isBoxExpanded);
        break;
      default:
        throw new Error("Error --handleProjectDisplay Fn if statement--");
    }
  } else {
    switch (quotationTypeSelection) {
      case "foundation":
        controlProjectToDisplay({ one: 0, two: 1 }, isBoxExpanded);
        break;
      case "plumbing":
        controlProjectToDisplay({ one: 0, two: 1 }, isBoxExpanded);
        break;
      case "electricity":
        controlProjectToDisplay({ one: 2, two: 3 }, isBoxExpanded);
        break;
      case "roofing":
        controlProjectToDisplay({ one: 2, two: 3 }, isBoxExpanded);
        break;
      default:
        throw new Error("Error --handleProjectDisplay Fn else statement--");
    }
  }
};

const arrowSlideIndexNumber = (targetElt, typeArrow) => {
  const carriedInfo = {
    indexNumber: -1,
    childrenArray: [],
  };
  let lastIndexNumber;
  const parentElt = targetElt.parentElement;
  const childrenNodeList = parentElt.querySelectorAll("p");
  const childrenArray = [...childrenNodeList];
  carriedInfo.childrenArray = childrenArray;

  childrenArray.map((item, index) => {
    if (item.classList.contains("active__number-play")) {
      lastIndexNumber = index;
      return;
    }
  });

  if (typeArrow === "forward") {
    if (lastIndexNumber === 2) return;

    // hide and highlight last and new targeted element number
    childrenArray[lastIndexNumber].classList.remove("active__number-play");
    childrenArray[lastIndexNumber + 1].classList.add("active__number-play");

    carriedInfo.indexNumber = lastIndexNumber + 1;
  } else {
    if (lastIndexNumber === 0) return;
    // hide and highlight last and new targeted element number
    childrenArray[lastIndexNumber].classList.remove("active__number-play");
    childrenArray[lastIndexNumber - 1].classList.add("active__number-play");

    carriedInfo.indexNumber = lastIndexNumber - 1;
  }

  return carriedInfo;
};

const handleArrowSlide = (e, typeArrow) => {
  /* console.log("e target :", e.currentTarget); */

  /* **numberMagicShift** = padding-inline/2 + widthBoxNumber + (gapBetweenNumber - padding-inline/2); */
  let computedStyle;
  let computedStyleNumber;
  let leftVal = null; // purpose manipulate left
  const numberMagicShift = 56; // 56px
  const marginError = 1; // 1px
  let projectId;
  const numbersArray = ["1", "2", "3"];

  const targetElt = e.currentTarget;
  targetElt.classList.add("arrow__slide-anim");

  if (typeArrow === "forward") {
    const carriedInfo = arrowSlideIndexNumber(targetElt, "forward");

    const prevElt = targetElt.previousElementSibling;

    computedStyle = window.getComputedStyle(prevElt);

    if (computedStyle.left === "-85px") return;

    computedStyleNumber = parseFloat(computedStyle.left);

    leftVal =
      computedStyleNumber -
      numberMagicShift +
      marginError * carriedInfo.indexNumber;

    const tagNumber = carriedInfo.childrenArray[carriedInfo.indexNumber];

    console.log(
      "tagNumber.innerText --handleArrowSlide Fn--:",
      tagNumber.innerText,
    );

    if (tagNumber.innerText === "1") projectId = "danton_shield";

    if (tagNumber.innerText === "2") projectId = "merry_clap";

    if (tagNumber.innerText === "3") projectId = "dexter_flip";

    console.log("projectId --handleArrowSlide Fn-- :", projectId);

    prevElt.style.left = `${leftVal}px`;
  } else if (typeArrow === "backward") {
    const carriedInfo = arrowSlideIndexNumber(targetElt, "backward");

    const nextElt = targetElt.nextElementSibling;
    computedStyle = window.getComputedStyle(nextElt);

    if (computedStyle.left === "24px") return;

    computedStyleNumber = parseFloat(computedStyle.left);

    leftVal =
      computedStyleNumber +
      numberMagicShift -
      marginError * (carriedInfo.indexNumber + 1);

    const tagNumber = carriedInfo.childrenArray[carriedInfo.indexNumber];

    if (tagNumber.innerText === "1") projectId = "danton_shield";

    if (tagNumber.innerText === "2") projectId = "merry_clap";

    if (tagNumber.innerText === "3") projectId = "dexter_flip";

    nextElt.style.left = `${leftVal}px`;
  }

  //remove the second layer floor appearance
  if (projectId !== "dexter_flip") {
    /* activeFloor.value.floor_0 = true; */
    houseType.value.one_floor = true;
  } else {
    /*     activeFloor.value.floor_0 = false; */
    houseType.value.one_floor = false;
  }

  //remove anim arrow before ending
  targetElt.classList.remove("arrow__slide-anim");

  //moving to the next route
  router.push({
    name: "project",
    params: { projectId: `${projectId}` },
    query: { value: "multiple" },
  });
};

const triggerDownload = async (filename) => {
  const assetUrl = `/pdfs/${filename}.pdf`;

  const response = await fetch(assetUrl);

  console.log("response --triggerDownload Fn", response);

  if (!response.ok) {
    throw new Error(
      `Could not find "${filename}.pdf" (HTTP ${response.status ?? "unreachable"})`,
    );
  }

  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);

  const anchor = document.createElement("a");
  anchor.href = objectUrl;
  anchor.download = `${filename}.pdf`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

  setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
};

const handleDownloadPdf = () => {
  const projectId = route.params.projectId;

  const filename = `plan-${projectId}`;

  try {
    if (projectId === "dexter_flip") {
      const MULTIPLE_PDF_FILENAMES = {
        [projectId]: [`plan-${projectId}-1`, `plan-${projectId}-2`],
      };

      MULTIPLE_PDF_FILENAMES[projectId].map((filename) => {
        triggerDownload(filename);
      });
    } else {
      triggerDownload(filename);
    }
  } catch (err) {
    console.error("[DownloadPdf]", err);

    setTimeout(() => {
      errDownloadMsg.value = `Downlaoaded Failed : ${err.message}`;
    }, 5000);

    errDownloadMsg.value = "";
  }
};

watch(
  [isBtnJoystickTrigerred, isBoxMaterialExpanded],
  async (
    [newBtnJoystickTrigerred, newBoxMaterialExpanded],
    [oldBtnJoystickTrigerred, oldBoxMaterialExpanded],
  ) => {
    // watch react naturalle before component mount It is why we add **nextTick**
    await nextTick();

    newBtnJoystickTrigerred = await newBtnJoystickTrigerred;

    newBoxMaterialExpanded = await newBoxMaterialExpanded;

    if (!newBtnJoystickTrigerred && !newBoxMaterialExpanded) {
      Object.keys(isActiveBtnJoyStick).forEach((key, index) => {
        isActiveBtnJoyStick[key] = false;
        isActiveProjectDisplay[key] = true;
      });
    }
  },
);

watch(activeFloorWatch, async (newActiveFloor, oldActiveFloor) => {
  // watch reacts naturally before component mount It is why we add **nextTick**
  await nextTick();

  newActiveFloor = await newActiveFloor;

  oldActiveFloor = await oldActiveFloor;

  console.log("newActiveFloor:", newActiveFloor);
  console.log("oldActiveFloor:", oldActiveFloor);

  if (newActiveFloor !== oldActiveFloor) {
    const projectId = route.params.projectId;

    console.log("projectId", projectId);

    if (projectId !== "dexter_flip") return;

    /* const projectId = projectIdArr[0]; */

    const isFloor_0 = newActiveFloor ? "0" : "1";

    /* dataToFetch(isFloor_0); */
    const {
      initInformation,
      durationOfProject,
      homeIn,
      roomEntireProject,
      houseCallType,
    } = await initInfoProject(projectId, "main-page", isFloor_0);

    initInfos.value = initInformation;
    durationProject.value = durationOfProject;
    home.value = homeIn;
    roomInProject.value = roomEntireProject;
    houseType.value = houseCallType;

    await initInfos.value;
  }
});

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.projectId !== from.params.projectId) {
    const projectParams = to.params.projectId;

    const projectId = projectParams;

    const isActiveFloor = (await activeFloor.value.floor_0) ? "0" : "1";

    const {
      initInformation,
      durationOfProject,
      homeIn,
      roomEntireProject,
      houseCallType,
    } = await initInfoProject(projectId, "main-page", isActiveFloor);

    initInfos.value = initInformation;
    durationProject.value = durationOfProject;
    home.value = homeIn;
    roomInProject.value = roomEntireProject;
    houseType.value = houseCallType;
  }
});

onMounted(async () => {
  /* console.log("initInfos --onMounted :", initInformation); */

  const catchArrayQuery = route.query.value;

  if (catchArrayQuery === "single") {
    btnSliderRef.value.classList.remove("active__slide-box");
  } else {
    btnSliderRef.value.classList.add("active__slide-box");
  }

  const catchArrayParams = route.params.projectId;

  console.log("catchArrayParams:", catchArrayParams);

  let projectId = catchArrayParams[0] || "danton_shield";

  if (numbersBtnRef.value) {
    const numberHighlight = numbersBtnRef.value[0];
    numberHighlight.classList.add("active__number-play");

    if (projectId !== "danton_shield") {
      projectId = "danton_shield";

      router
        .replace({
          name: "project",
          params: { projectId: "danton_shield" },
          query: { value: "multiple" },
        })
        .catch((err) =>
          console.log(
            "error tyring to replace params router in --onMounted Hook",
          ),
        );
    }
  }

  const isActiveFloor = (await activeFloor.value.floor_0) ? "0" : "1";

  /* console.log("isActiveFloor --onMounted:", isActiveFloor); */

  const {
    initInformation,
    durationOfProject,
    homeIn,
    roomEntireProject,
    houseCallType,
  } = await initInfoProject(projectId, "main-page", isActiveFloor);

  initInfos.value = initInformation;
  durationProject.value = durationOfProject;
  home.value = homeIn;
  roomInProject.value = roomEntireProject;
  houseType.value = houseCallType;
});
</script>
<template>
  <section id="project__call" class="project__call w-full">
    <div class="project__call-container pb-10">
      <div
        class="project__btn-display w-full flex flex-row justify-between pt-4 px-4"
      >
        <div class="project__cta-backward cursor-pointer" @click="goBackHome">
          <span class="basis--icon guidance--right-arrow"></span>
        </div>
        <!-- only appear when navlink project is clicked -->
        <div ref="btnSliderRef" class="cta__slide-projects w-26 h-12 px-2">
          <div
            class="cta__slide-content relative w-full h-full flex flex-row justify-between items-center gap-0 overflow-hidden"
          >
            <div
              class="cta__project-backward w-6 h-full grid place-items-center cursor-pointer z-10"
              @click="(e) => handleArrowSlide(e, 'backward')"
            >
              <span class="basis--icon simple-line-icons--arrow-left"></span>
            </div>
            <div class="cta__numbers-play">
              <p
                class="cta__number-play"
                :key="value.id"
                v-for="(value, key) in numberBtnSlide"
                :ref="(el) => setItemRef(el, key)"
              >
                {{ value.text }}
              </p>
            </div>
            <div
              class="cta__project-forward w-6 h-full grid place-items-center cursor-pointer z-10"
              @click="(e) => handleArrowSlide(e, 'forward')"
            >
              <span
                class="rotate__right basis--icon simple-line-icons--arrow-left"
              ></span>
            </div>
          </div>
        </div>
      </div>
      <!-- project show layout -->
      <div class="project__layout">
        <div
          class="project__title mt-6 mb-4 max-[420px]:mb-0 md:mb-1 md:mt-0 w-full flex flex-row justify-between max-[420px]:justify-center"
        >
          <h2 class="opacity-68">{{ home.name }}</h2>
          <div
            class="project__remind-area flex flex-row items-center gap-1 max-[420px]:hidden md:hidden"
          >
            <div class="icon__land w-4 h-full flex flex-row">
              <HouseCues icon-sketch="land" />
            </div>
            <h5 class="opacity-70 ft-bold">{{ home.land_area }}</h5>
          </div>
        </div>
        <div
          class="project__spec-layout w-full flex flex-col md:flex-row justify-between gap-12"
        >
          <!-- first area -description -->
          <div
            class="project__description w-full md:w-1/2 flex max-[420px]:flex-col flex-row md:flex-col"
          >
            <div
              class="project__specification max-[420px]:w-full w-1/2 md:w-auto"
            >
              <div class="project__land-area py-1">
                <div
                  class="project__space w-40 h-max flex flex-row items-center gap-2 max-[420px]:justify-center max-[420px]:mx-auto"
                >
                  <div class="icon__land w-7 h-full">
                    <HouseCues icon-sketch="land" />
                  </div>
                  <h4 class="opacity-65">{{ home.land_area }}</h4>
                </div>
              </div>
              <div class="project__rooms-in py-2 md:py-6">
                <div class="project__rooms-standard">
                  <div
                    class="room__item w-max h-10 flex flex-row items-center gap-2"
                  >
                    <div class="icon__room w-6 h-6">
                      <HouseCues icon-sketch="bedroom" />
                    </div>
                    <div class="project__numbers-rooms">
                      <span v-if="!indexLang" class="smaller__span">{{
                        roomInProject.bedroom.fr
                      }}</span>
                      <span v-else class="smaller__span">{{
                        roomInProject.bedroom.en
                      }}</span>
                    </div>
                  </div>
                  <div
                    class="room__item w-max h-10 flex flex-row items-center gap-2"
                  >
                    <div class="icon__room w-6 h-6">
                      <HouseCues icon-sketch="kitchen" />
                    </div>
                    <div class="project__numbers-rooms">
                      <span v-if="!indexLang" class="smaller__span">{{
                        roomInProject.kitchen.fr
                      }}</span>
                      <span v-else class="smaller__span">{{
                        roomInProject.kitchen.en
                      }}</span>
                    </div>
                  </div>
                  <div
                    class="room__item w-max h-10 flex flex-row items-center gap-2"
                  >
                    <div class="icon__room w-6 h-6">
                      <HouseCues icon-sketch="diningRoom" />
                    </div>
                    <div class="project__numbers-rooms">
                      <span v-if="!indexLang" class="smaller__span">{{
                        roomInProject.diningroom.fr
                      }}</span>
                      <span v-else class="smaller__span">{{
                        roomInProject.diningroom.en
                      }}</span>
                    </div>
                  </div>
                  <div
                    class="room__item w-max h-10 flex flex-row items-center gap-2"
                  >
                    <div class="icon__room w-6 h-6">
                      <HouseCues icon-sketch="livingRoom" />
                    </div>
                    <div class="project__numbers-rooms">
                      <span v-if="!indexLang" class="smaller__span">{{
                        roomInProject.livingroom.fr
                      }}</span>
                      <span v-else class="smaller__span">{{
                        roomInProject.livingroom.en
                      }}</span>
                    </div>
                  </div>
                  <div
                    class="room__item w-max h-10 flex flex-row items-center gap-2"
                  >
                    <div class="icon__room w-6 h-6">
                      <HouseCues icon-sketch="toilet" />
                    </div>
                    <div class="project__numbers-rooms">
                      <span v-if="!indexLang" class="smaller__span">{{
                        roomInProject.toilet.fr
                      }}</span>
                      <span v-else class="smaller__span">{{
                        roomInProject.toilet.en
                      }}</span>
                    </div>
                  </div>
                </div>
                <div
                  class="project__key-element max-[420px]:mt-2 max-md:mt-6 w-max h-10 flex flex-row items-center"
                >
                  <div class="icon__room w-6 h-6">
                    <HouseCues icon-sketch="keyPlace" />
                  </div>
                  <div class="project__numbers-rooms pl-4">
                    <span v-if="!indexLang" class="smaller__span">{{
                      roomInProject.keyelement.fr
                    }}</span>

                    <span v-else class="smaller__span">{{
                      roomInProject.keyelement.en
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="project__hook-presentation max-[420px]:w-full w-1/2 h-max pb-6 mt-4 md:w-auto max-[420px]:pb-2 max-md:mt-2"
            >
              <p
                v-if="!indexLang"
                class="project__hook-text max-[420px]:px-[10%] max-md:px-[1%] w-full variant__weight-one py-6"
              >
                {{ home.benefit.fr }}
              </p>
              <p
                v-else
                class="project__hook-text max-md:px-[1%] w-full variant__weight-one py-6"
              >
                {{ home.benefit.en }}
              </p>
            </div>
            <div
              class="project__hook-cta relative w-max h-max max-md:hidden"
              @click="handleDownloadPdf"
            >
              <div class="cta__button--depth"></div>
              <a
                v-if="!indexLang"
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
            <p v-if="errDownloadMsg" class="text-red-500">
              {{ errDownloadMsg }}
            </p>
          </div>
          <!-- second area -quotation -->
          <div
            class="project__minibox-quotation max-[420px]:hidden w-full md:w-1/2"
          >
            <div
              class="project__minibox-container relative w-full h-max pb-2 pt-4 px-[3%]"
            >
              <div
                class="project__delivery-container absolute w-max h-7 top-4 right-4"
              >
                <div
                  class="project__delivery size__scale-92 w-max h-full py-[2px] px-2 grid place-items-center"
                >
                  <span v-if="!indexLang" class="smaller__span">{{
                    durationProject.durationStage.fr
                  }}</span>
                  <span v-else class="smaller__span">{{
                    durationProject.durationStage.en
                  }}</span>
                </div>
              </div>
              <div
                class="project__minibox-title w-max py-6 px-1 flex flex-row gap-1"
              >
                <div class="icon_quotation"></div>
                <div class="minibox__title flex flex-row opacity-65">
                  <h4>Quotation</h4>
                  <h4 v-if="!houseType.one_floor" class="size__scale-88">
                    niveau {{ houseType.level }}
                  </h4>
                </div>
              </div>
              <!-- sample splitted Quotation -->
              <div class="project__overview-quotation w-full">
                <div
                  class="floors__metrics w-full flex flex-row justify-between"
                >
                  <h5 class="opacity-75 text-[var(--title-color)]">Floor</h5>

                  <div class="cta__floors w-max flex flex-row gap-2">
                    <div
                      id="floor_0"
                      class="cta__floor-quotation w-4 cursor-pointer"
                      @click="(e) => handleFloorChange(e)"
                    >
                      <p
                        :class="{
                          'font-semibold': activeFloorWatch,
                          smaller__span: !activeFloorWatch,
                        }"
                      >
                        0
                      </p>
                    </div>
                    <div
                      v-if="!houseType.one_floor"
                      id="floor_1"
                      class="cta__floor-quotation active__floor w-4 cursor-pointer"
                      @click="(e) => handleFloorChange(e)"
                    >
                      <p
                        :class="{
                          'font-semibold': !activeFloorWatch,
                          smaller__span: activeFloorWatch,
                        }"
                      >
                        1
                      </p>
                    </div>
                  </div>
                </div>
                <div class="project__items-container">
                  <div
                    id="half__quotation-one"
                    class="project__items-quotation activeproject__resume"
                    ref="halfResumeRef1"
                  >
                    <div
                      id="project__item-first"
                      :class="{
                        'project__item-container activeproject__display':
                          isActiveProjectDisplay.one,
                        'project__item-container': !isActiveProjectDisplay.one,
                      }"
                    >
                      <div class="project__item-animation">
                        <MiniQuotation
                          :quotation-info="initInfos[0]"
                          :user-language="props.userLanguage"
                          @updatebtn-background="handleProjectDisplay"
                        />
                      </div>
                    </div>
                    <div
                      id="project__item-second"
                      :class="{
                        'project__item-container activeproject__display':
                          isActiveProjectDisplay.two,
                        'project__item-container': !isActiveProjectDisplay.two,
                      }"
                    >
                      <div class="project__item-animation">
                        <MiniQuotation
                          :quotation-info="initInfos[1]"
                          :user-language="props.userLanguage"
                          @updatebtn-background="handleProjectDisplay"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    id="half__quotation-two"
                    class="project__items-quotation"
                    ref="halfResumeRef2"
                  >
                    <div
                      id="project__item-third"
                      :class="{
                        'project__item-container activeproject__display':
                          isActiveProjectDisplay.three,
                        'project__item-container':
                          !isActiveProjectDisplay.three,
                      }"
                    >
                      <div class="project__item-animation">
                        <MiniQuotation
                          :quotation-info="initInfos[2]"
                          :user-language="props.userLanguage"
                          @updatebtn-background="handleProjectDisplay"
                        />
                      </div>
                    </div>
                    <div
                      id="project__item-fourth"
                      :class="{
                        'project__item-container activeproject__display':
                          isActiveProjectDisplay.four,
                        'project__item-container': !isActiveProjectDisplay.four,
                      }"
                    >
                      <div class="project__item-animation">
                        <MiniQuotation
                          :quotation-info="initInfos[3]"
                          :user-language="props.userLanguage"
                          @updatebtn-background="handleProjectDisplay"
                        />
                      </div>
                    </div>
                  </div>
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
                      id="cta-resume-one"
                      :class="{
                        'active_resume cta__quotation-resume  h-max pb-[1px] opacity-80 cursor-pointer':
                          isActiveResume.one,
                        'cta__quotation-resume  h-max pb-[1px] opacity-80 cursor-pointer':
                          !isActiveResume.one,
                      }"
                      @click.stop.prevent="(e) => handleShiftResume(e)"
                    >
                      1
                    </div>
                    <div
                      id="cta-resume-two"
                      :class="{
                        'active_resume cta__quotation-resume  h-max pb-[1px] opacity-80 cursor-pointer':
                          isActiveResume.two,
                        'cta__quotation-resume  h-max pb-[1px] opacity-80 cursor-pointer':
                          !isActiveResume.two,
                      }"
                      @click.stop.prevent="(e) => handleShiftResume(e)"
                    >
                      2
                    </div>
                  </div>
                  <div class="cta__choices-quotationdisplay">
                    <div class="cta__grid-display">
                      <div id="cta__play-numberone" class="cta__play-number">
                        <div
                          id="cta__domain-one"
                          :class="{
                            'cta__domain activeplay__joystick':
                              isActiveBtnJoyStick.one,
                            cta__domain: !isActiveBtnJoyStick.one,
                          }"
                          data-index="0"
                          data-cta-resume="cta-resume-one"
                          @click.stop.prevent="(e) => handleJoystickPlay(e)"
                        >
                          <p>A</p>
                        </div>
                      </div>
                      <div id="cta__play-numbertwo" class="cta__play-number">
                        <div
                          id="cta__domain-two"
                          :class="{
                            'cta__domain activeplay__joystick':
                              isActiveBtnJoyStick.two,
                            cta__domain: !isActiveBtnJoyStick.two,
                          }"
                          data-index="1"
                          data-cta-resume="cta-resume-one"
                          @click.stop.prevent="(e) => handleJoystickPlay(e)"
                        >
                          <p>B</p>
                        </div>
                      </div>
                      <div id="cta__play-numberthree" class="cta__play-number">
                        <div
                          id="cta__domain-three"
                          :class="{
                            'cta__domain activeplay__joystick':
                              isActiveBtnJoyStick.three,
                            cta__domain: !isActiveBtnJoyStick.three,
                          }"
                          data-index="2"
                          data-cta-resume="cta-resume-two"
                          @click.stop.prevent="(e) => handleJoystickPlay(e)"
                        >
                          <p>C</p>
                        </div>
                      </div>
                      <div id="cta__play-numberfour" class="cta__play-number">
                        <div
                          id="cta__domain-four"
                          :class="{
                            'cta__domain activeplay__joystick':
                              isActiveBtnJoyStick.four,
                            cta__domain: !isActiveBtnJoyStick.four,
                          }"
                          data-index="3"
                          data-cta-resume="cta-resume-two"
                          @click.stop.prevent="(e) => handleJoystickPlay(e)"
                        >
                          <p>D</p>
                        </div>
                      </div>
                      <div
                        id="cta__play-linkall"
                        class="cta__play-viewall cursor-pointer"
                        @click="handleSwitchPage"
                      >
                        <span
                          class="smaller__span size__scale-88 w-max mt-4 px-3 text-[var(--text-paragraph)] bg-[var(--highlight-background)] rounded-full"
                          >view all</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- media queries download plan cta widht <= 768px -->
          <div
            class="project__hook-cta relative w-max h-max mx-auto mt-1 mb-6 md:hidden"
          >
            <div class="cta__button--depth"></div>
            <a
              v-if="!indexLang"
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
      </div>
    </div>
  </section>
</template>
<style scoped>
@media screen and (min-width: 140px) {
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

  /* slide-projects box  visibility */
  .cta__slide-projects {
    opacity: 0;
    visibility: hidden;
    transition: all 1s ease;
  }

  .cta__slide-projects.active__slide-box {
    opacity: 1;
    visibility: visible;
  }

  .arrow__slide-anim {
    animation: arrow-slide-anim 350ms ease backwards;
  }

  /* project call */
  .project__call {
    width: 100%;
    min-height: 34rem;
    height: 100%;
  }

  /* project specification */
  .project__rooms-standard {
    width: 100%;
    height: 6.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 2.5rem 2.5rem 1.5rem;
    column-gap: 2rem;
  }

  p.project__hook-text {
    font-size: var(--regular-size);
    text-align: center;
    background-color: var(--accent-color-1);
    border-radius: 0.25rem;
    border: 1px solid transparent;
    opacity: 0.85;
    transform: scale(0.9);
    /* font-family: "Source Sans 3", sans-serif; */
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
  /* project layout container */
  .project__layout {
    width: 100%;
    height: auto;
    padding: 0 3%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
    overflow: hidden;
  }

  .project__delivery {
    color: var(--background-primary);
    background-color: var(--accent-color-3);
    box-shadow: 0px 1px 4px var(--text-paragraph);
    border-radius: 0.25rem;
    opacity: 1;
  }

  /* project cards anim display (resume 1, resume 2) */

  .project__items-container {
    position: relative;
    width: 100%;
    min-height: 30.625rem;
    padding-top: 0.25rem;
  }

  #half__quotation-one.project__items-quotation.activeproject__resume,
  #half__quotation-two.project__items-quotation.activeproject__resume {
    position: relative;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: visible;
    opacity: 1;
    z-index: 3;
    transition: all 860ms ease-in-out 300ms;
  }

  #half__quotation-one.project__items-quotation {
    position: absolute;
    left: -110%;
    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0.12;
    z-index: 1;
    transition: all 650ms ease-in-out;
  }

  #half__quotation-two.project__items-quotation {
    position: absolute;
    left: 110%;
    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0.12;
    z-index: 1;
    transition: all 650ms ease-in-out;
  }

  /* responsible hide/show the entire box if the other box icon arrow-up-down side is clicked */
  .project__item-container .project__item-animation {
    position: absolute;
    width: 100%;
    height: 0;
    display: none;
    visibility: hidden;
    transition:
      height 1.5s ease-in-out 450ms,
      position 350ms ease;
  }

  .project__item-container.activeproject__display .project__item-animation {
    width: 100%;
    height: max-content;
    visibility: visible;
    position: relative;
    display: grid;
    transition:
      position 350ms ease,
      height 1.5s ease-in-out 450ms;
  }

  /* cta choice quotation display */
  .cta__quotation-resume {
    color: inherit;
    font-size: var(--regular-size);
    border: 1px solid transparent;
    border-radius: 0;
    box-shadow: 0px 0px 0px 0px transparent;
    transition: all 300ms ease-in-out;
  }

  .cta__quotation-resume.active_resume {
    color: var(--title-color);
    font-size: var(--regular-size);
    border-bottom: 1px solid var(--title-color);
    border-radius: 1.5rem;
    box-shadow: 0px 2px 10px 1px var(--highlight-text);
  }

  /* cta play joytick --style-- */
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

  /* cta play joystick --anim-- */
  .cta__domain {
    width: 1.5rem;
    height: 1.5rem;
    color: inherit;
    background-color: transparent;
    border: 1px solid var(--accent-color-2);
    border-radius: 50%;
    display: grid;
    place-items: center;
    transition: all 1s ease 1.4s;
    cursor: pointer;
  }

  .cta__domain.activeplay__joystick {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--background-primary);
    background-color: var(--link--external-btn);
    border: 1px solid transparent;
    border-radius: 44%;
    display: grid;
    place-items: center;
    transition: all 1s ease 1.6s;
    cursor: pointer;
  }

  /* cta slider 1,2.3 buttons */

  .cta__numbers-play {
    position: absolute;
    left: 24px;
    width: 150px;
    height: 42px;
    padding-inline: 11px; /*padding-inline*/
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 36px; /*gapBetweenNumber*/
    overflow: hidden;
    transition: all 350ms linear;
  }

  .cta__number-play {
    width: 20px; /*widthBoxNumber*/
    height: 100%;
    color: inherit;
    background-color: transparent;
    opacity: 1;
    display: grid;
    place-items: center;
    border: 1px solid var(--accent-color-2);
    border-radius: 28%;
    transition: all 1s ease-in-out;
  }

  .cta__number-play.active__number-play {
    width: 20px; /*widthBoxNumber*/
    height: 100%;
    color: var(--background-primary);
    background-color: var(--link--external-btn);
    opacity: 0.64;
    display: grid;
    place-items: center;
    border: 2px solid transparent;
    border-radius: 28%;
  }

  @keyframes arrow-slide-anim {
    0% {
      opacity: 0.98;
      transform: scale(0.92);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
}

@media screen and (min-width: 420px) {
  /* project specification */
  .project__rooms-standard {
    width: 96%;
    height: 6.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 2.5rem 2.5rem 1.5rem;
    column-gap: 0.92em;
  }

  p.project__hook-text {
    font-size: var(--mid-size);
    text-align: center;
    background-color: var(--accent-color-1);
    border-radius: 0.25rem;
    border: 1px solid transparent;
    opacity: 0.97;
    transform: scale(0.95);
    font-family: "Source Sans 3", sans-serif;
  }
}

@media screen and (min-width: 768px) {
  /* project specification */
  .project__rooms-standard {
    width: 80%;
    height: 6.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 2.5rem 2.5rem 1.5rem;
    column-gap: 2rem;
  }

  p.project__hook-text {
    font-size: var(--regular-size);
    text-align: left;
    background-color: transparent;
    border-radius: 0;
    opacity: 0.75;
    transform: scale(1);
    font-family: "Noto Sans", sans-serif;
  }
}

@media screen and (min-width: 1040px) {
}
</style>
