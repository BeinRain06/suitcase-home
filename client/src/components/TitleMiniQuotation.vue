<script setup>
const props = defineProps({
  dataTitle: {
    userLanguage: String,
    quotationType: String,
    activeLayer: {
      foundation: Number,
      roof: Number,
    },
  },
  userLanguage: String,
});
</script>
<template>
  <div class="title_mini_container">
    <!-- foundation title -->
    <div
      v-if="props.dataTitle.quotationType === 'foundation'"
      class="label__quotation w-max pb-1 text-[var(--link--external-btn)] border-b-1 border-solid border-[var(--accent-color-2)] flex flex-row gap-2"
    >
      <p>{{ dataSpread?.letterRef }}</p>
      <p>-</p>
      <p v-if="!indexLang.val">Foundation And Structure</p>
      <p v-else></p>
    </div>
    <!-- roofing title -->
    <div
      v-else-if="props.dataTitle.quotationType === 'roofing'"
      class="label__quotation w-max pb-1 text-[var(--link--external-btn)] border-b-1 border-solid border-[var(--accent-color-2)] flex flex-row gap-2"
    >
      <p>{{ dataSpread?.letterRef }}</p>
      <p>-</p>
      <p v-if="!indexLang.val">Foundation And Structure</p>
      <p v-else></p>
    </div>
    <!-- electricity or plumbing title -->
    <div
      v-else
      class="label__quotation w-max pb-1 text-[var(--link--external-btn)] border-b-1 border-solid border-[var(--accent-color-2)] flex flex-row gap-2"
    >
      <p>{{ dataSpread?.letterRef }}</p>
      <p>-</p>
      <p v-if="!indexLang.val">Foundation And Structure</p>
      <p v-else></p>
    </div>
  </div>
</template>
<style scoped></style>
