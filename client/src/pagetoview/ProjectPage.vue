<script setup>
import { ref, reactive, onMounted, onUpdated } from "vue";
import ProjectCallPage from "../components/ProjectCallPage.vue";
import ProjectModalPage from "../components/ProjectModalPage.vue";

const props = defineProps({ userLanguage: String });

const indexLang = reactive({ val: 0 });

const projectContainerRef = ref();
const projectModalRef = ref();

const handleModalPage = (objMsg) => {
  if (objMsg.isModalPage) {
    projectContainerRef.value.classList.add("activate__modal");
    projectModalRef.value.classList.add("active__project-modal");
  } else {
    projectContainerRef.value.classList.remove("activate__modal");
    projectModalRef.value.classList.remove("active__project-modal");
  }
};

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
  <div class="project__container w-full" ref="projectContainerRef">
    <div class="projectcallpage__wrap w-full">
      <ProjectCallPage
        :user-language="props.userLanguage"
        @update-modalpage="handleModalPage"
      />
    </div>
    <!-- Modal page appearance -->
    <div class="projectmodalpage__wrap" ref="projectModalRef">
      <ProjectModalPage
        :user-language="props.userLanguage"
        @update-modalpage="handleModalPage"
      />
    </div>
  </div>
</template>
<style scoped>
/* container height */

.project__container {
  position: relative;
  width: 100vw;
  height: 100%;
  overflow-y: hidden;
  /* overflow-y: scroll;
  scroll-margin-block: auto;
  scroll-padding-top: auto; */
}

.project__container.activate__modal {
  position: relative;
  width: 100vw;
  height: max-content;
  overflow-y: auto;
  /* overflow-y: hidden;
  scroll-margin-block: 0;
  scroll-padding-top: 0; */
}

.projectmodalpage__wrap {
  position: absolute;
  top: 0;
  left: -25%;
  width: 100%;
  /* height: 100%; */
  height: calc(100vh + 3.125rem);
  height: auto;
  background-color: hsla(300, 20%, 99%, 0.86);
  background-color: hsla(300, 20%, 99%, 0.96);
  opacity: 0.25;
  visibility: hidden;
  overflow-y: hidden;
  z-index: 0;
  transition: all 250ms ease-in-out;
}

.projectmodalpage__wrap.active__project-modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: hsla(300, 20%, 99%, 0.86);
  background-color: hsla(300, 20%, 99%, 0.96);
  opacity: 1;
  visibility: visible;
  overflow-y: scroll;
  z-index: 35;
  transition: all 500ms ease-in-out;
}
</style>
