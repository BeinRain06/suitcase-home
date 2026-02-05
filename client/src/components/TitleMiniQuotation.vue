<script setup>
import { computed, reactive, onMounted } from "vue";
const props = defineProps({
  dataTitle: {
    userLanguage: String,
    quotationType: String,
    title: { fr: String, en: String } || {
      part1: { fr: String, en: String },
      part2: { fr: String, en: String },
    },
    activeLayer: {
      foundation: Number,
      roof: Number,
    },
  },
});

const indexLang = computed(() => {
  return props.dataTitle.userLanguage === "FR" ? 0 : 1;
});

const title = computed(() => {
  return props.dataTitle.title;
});

const activeLayerFoundation = computed(() => {
  return props.dataTitle.activeLayer.foundation;
});

const activeLayerRoof = computed(() => {
  return props.dataTitle.activeLayer.roof;
});

/* onMounted(() => {
  console.log("title in dataTitle props :", props.dataTitle.title);
}); */
</script>
<template>
  <div class="title_mini-container">
    <!-- foundation title -->
    <div
      v-if="props.dataTitle.quotationType === 'foundation'"
      class="title__mini-content"
    >
      <div
        v-if="activeLayerFoundation === 0"
        class="label__quotation w-max pb-1 text-[var(--link--external-btn)] border-b-1 border-solid border-[var(--accent-color-2)] flex flex-row gap-2"
      >
        <p>A</p>
        <p>-</p>
        <p v-if="!indexLang">{{ title.part1.fr }}</p>
        <p v-else>{{ title.part1.en }}</p>
      </div>
      <div
        v-else
        class="label__quotation w-max pb-1 text-[var(--link--external-btn)] border-b-1 border-solid border-[var(--accent-color-2)] flex flex-row gap-2"
      >
        <p>A</p>
        <p>-</p>
        <p v-if="!indexLang">{{ title.part2.fr }}</p>
        <p v-else>{{ title.part2.en }}</p>
      </div>
    </div>
    <!-- roofing title -->
    <div
      v-else-if="props.dataTitle.quotationType === 'roofing'"
      class="title__mini-content"
    >
      <div
        v-if="activeLayerRoof === 0"
        class="label__quotation w-max pb-1 text-[var(--link--external-btn)] border-b-1 border-solid border-[var(--accent-color-2)] flex flex-row gap-2"
      >
        <p>D</p>
        <p>-</p>
        <p v-if="!indexLang">{{ title.part1.fr }}</p>
        <p v-else>{{ title.part1.en }}</p>
      </div>
      <div
        v-else
        class="label__quotation w-max pb-1 text-[var(--link--external-btn)] border-b-1 border-solid border-[var(--accent-color-2)] flex flex-row gap-2"
      >
        <p>D</p>
        <p>-</p>
        <p v-if="!indexLang">{{ title.part2.fr }}</p>
        <p v-else>{{ title.part2.en }}</p>
      </div>
    </div>
    <!-- electricity or plumbing title -->
    <div v-else class="title__mini-content">
      <div
        class="label__quotation w-max pb-1 text-[var(--link--external-btn)] border-b-1 border-solid border-[var(--accent-color-2)] flex flex-row gap-2"
      >
        <p v-if="props.dataTitle.quotationType === 'plumbing'">B</p>
        <p v-if="props.dataTitle.quotationType === 'electricity'">C</p>
        <p>-</p>
        <p v-if="!indexLang.val">{{ title.fr }}</p>
        <p v-else>{{ title.en }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
p {
  font-size: var(--mid-size);
}
</style>
