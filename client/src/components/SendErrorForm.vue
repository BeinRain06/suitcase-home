<script setup>
import { ref } from "vue";

const props = defineProps({
  sendError: String,
});
</script>
<template>
  <div class="send__error-wrap">
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="#ef4444" stroke-width="1.5" />
      <path
        d="M10 6v4.5M10 13v.5"
        stroke="#ef4444"
        stroke-width="1.8"
        stroke-linecap="round"
      />
    </svg>
    <p>{{ props.sendError }}</p>
  </div>
</template>
<style scoped>
/* ── Send error bar ───────────────────────────────── */
.send__error-wrap {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 0.9rem;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: var(--border-red);
  font-size: 0.85rem;
  animation: slideUp 0.35s var(--ease-spring) both;
}
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
