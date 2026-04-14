<script setup>
function goHome() {
  /* sent.value = false;
  resetAll(); */

  /* router.push("/"); */
  router.push({ name: "home" });
}
</script>
<template>
  <div class="success__screen-container">
    <div class="success__icon-wrap">
      <svg viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="20" stroke="#22c55e" stroke-width="1.8" />
        <path
          d="M13 22l6 6 12-12"
          stroke="#22c55e"
          stroke-width="2.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <p class="success__title text-[var(--title-color)] opacity-80">
      Message Sent!
    </p>

    <p class="success__sub">
      Thank you — your message was delivered successfully.<br />
      We are grateful and will get back to you as soon as possible.
    </p>

    <a class="back__home" href="/" @click.prevent="goHome">← Back home</a>
  </div>
</template>
<style scoped>
/* ── Success screen ───────────────────────────────── */
.success__screen {
  text-align: center;
  padding: 1rem 0 0.5rem;
}

.success__icon-wrap {
  margin: 0 auto 1.5rem;
  width: 80px;
  height: 80px;
  background: rgba(34, 197, 94, 0.07);
  border: 1.5px solid rgba(34, 197, 94, 0.25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: popIn 0.5s 0.05s var(--ease-spring) both;
}
@keyframes popIn {
  from {
    opacity: 0;
    transform: scale(0.4);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.success__icon-wrap svg {
  width: 38px;
  height: 38px;
}
.success__icon-wrap svg circle {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: drawCircle 0.5s 0.3s var(--ease-smooth) forwards;
}
.success__icon-wrap svg path {
  stroke-dasharray: 35;
  stroke-dashoffset: 35;
  animation: drawCheck 0.35s 0.75s var(--ease-smooth) forwards;
}
@keyframes drawCircle {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes drawCheck {
  to {
    stroke-dashoffset: 0;
  }
}

.success__title {
  font-size: 1.65rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  animation: fadeUp 0.4s 0.4s var(--ease-smooth) both;
}

.success__sub {
  font-size: 0.9rem;
  line-height: 1.7;
  max-width: 320px;
  margin: 0 auto 1.8rem;
  animation: fadeUp 0.4s 0.5s var(--ease-smooth) both;
}

.back__home {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.7rem 1.6rem;
  opacity: 0.75;
  background: none;
  border: 1.5px solid var(--border-idle);
  border-radius: 999px;
  color: var(--highlight-text);
  font-size: var(--mini-size);
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  transition:
    border-color 0.25s 0.35s,
    color 0.25s,
    transform 0.15s var(--ease-spring);
  animation: fadeUp 0.4s 0.65s var(--ease-smooth) both;
}

.back__home:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-1px);
}
.back__home:active {
  transform: translateY(0);
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
