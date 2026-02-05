<script setup>
import { reactive, onMounted, onUpdated } from "vue";
import ProjectCallPage from "../components/ProjectCallPage.vue";
import ProjectModalPage from "../components/ProjectModalPage.vue";

const props = defineProps({ userLanguage: String });

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
  <div class="project__container activate__modal w-full">
    <div class="projectcallpage__wrap w-hull h-full">
      <ProjectCallPage :user-language="props.userLanguage" />
    </div>
    <!-- Modal page appearance -->
    <div class="projectmodalpage__wrap active__project-modal">
      <ProjectModalPage :user-language="props.userLanguage" />
    </div>
  </div>
</template>
<style scoped>
/* container height */

.project__container {
  position: relative;
  width: 100vw;
  height: calc(100vh - 3.125rem);
  /* overflow-y: scroll;
  scroll-margin-block: auto;
  scroll-padding-top: auto; */
}

.project__container.activate__modal {
  position: relative;
  width: 100vw;
  height: auto;
  /* overflow-y: hidden;
  scroll-margin-block: 0;
  scroll-padding-top: 0; */
}

.projectmodalpage__wrap {
  position: absolute;
  top: 0;
  left: -25%;
  width: 100%;
  height: 100%;
  background-color: hsla(300, 20%, 99%, 0.86);
  background-color: hsla(300, 20%, 99%, 0.96);
  /* opacity: 0.85; */
  visibility: hidden;
  z-index: 0;
  transition: all 350ms ease-in-out;
}

.projectmodalpage__wrap.active__project-modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(300, 20%, 99%, 0.86);
  background-color: hsla(300, 20%, 99%, 0.96);
  visibility: visible;
  /* opacity: 1; */
  z-index: 35;
}
</style>
