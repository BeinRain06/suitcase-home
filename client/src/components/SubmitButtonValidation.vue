<script setup>
const props = defineProps({
  indexLang: Number,
  sending: Boolean,
});
</script>
<template>
  <!-- VALIDATION BUTTON -->
  <div class="contact__form-lead relative w-full h-full">
    <button v-if="!props.indexLang" class="submit__form">
      <div v-if="!props.sending" class="block text-[length:inherit]">
        Laisser un Message
      </div>
      <div v-else class="w-max flex flex-row gap-2 text-[length:inherit]">
        <!-- <span class="spinner w-max hidden"></span> -->
        <span class="smaller__span">Your message is being transferred…</span>
      </div>
    </button>
    <button v-else class="submit__form">
      <div v-if="!props.sending" class="block text-[length:inherit]">
        Drop a Message
      </div>
      <div v-else class="w-max flex flex-row gap-2 text-[length:inherit]">
        <span class="spinner w-max"></span>
        <span class="smaller__span">Your message is being transferred…</span>
      </div>
    </button>
  </div>
</template>
<style scoped>
/* ── Submit button ────────────────────────────────── */
:root {
  --border-red: #ac3030;
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
}

/* submit button */

.contact__form-lead button.submit__form {
  padding: 0.6em 1.25em;
  font-size: var(--mini-size);
  font-weight: 500;
  line-height: 1.4;
  opacity: 0.545;
  color: var(--accent-color-1);
  background-color: var(--text-paragraph);
  transform: scale(1);
  transition: all 350ms ease;
  /*  transition:
    opacity 0.2s,
    transform 0.15s var(--ease-spring); */
  outline-offset: 0px;
  outline: 0px solid var(--background-primary);
  border-radius: 1.5rem;
}

.contact__form-lead button.submit__form:hover {
  padding: 0.6em 1.25em;
  font-size: var(--mini-size);
  opacity: 0.85;
  background-color: var(--title-color);
  transform: scale(1.05);
  outline-offset: -3px;
  outline: 1px solid var(--background-primary);
  transition: all 650ms ease;
  /* transition:
    opacity 0.2s,
    transform 0.15s var(--ease-spring); */
}

.contact__form-lead button.submit__form:focus {
  opacity: 0.46;
  background-color: var(--text-paragraph);
  transform: scale(1.05);
  outline-offset: -3px;
  outline: 1px solid var(--background-primary);
  transition: all 650ms ease;
}

.contact__form-lead:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}
.contact__form-lead:active:not(:disabled) {
  transform: translateY(0);
}
.contact__form-lead:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
</style>
