<script setup></script>
<template>
  <div id="loading__page" class="loading__page relative">
    <div class="loading__page-content">
      <div
        class="loading__box w-full h-full flex flex-col justify-center items-center gap-10"
      >
        <p class="loading__label ft-bold">Loading</p>

        <ul
          class="loading__circles-shape w-full flex flex-row justify-center gap-16"
        >
          <li id="loading__circle-1"><div class="loading__circle"></div></li>
          <li id="loading__circle-2"><div class="loading__circle"></div></li>
          <li id="loading__circle-3"><div class="loading__circle"></div></li>
          <li id="loading__circle-4"><div class="loading__circle"></div></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* loading layout  */
ul {
  list-style: none;
}

.loading__page {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    20deg,
    hsl(345, 72%, 24%) 22%,
    hsl(32, 30%, 37%) 78%
  );
  overflow-y: hidden;
}

.loading__page-content {
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  height: 18.75rem;
}

.loading__box .loading__label {
  color: var(--background-primary);
  font-size: var(--hero-title-size);
  animation: anim-label-color 1.8s ease-in-out infinite;
}

@keyframes anim-label-color {
  0% {
    color: var(--background-primary);
    opacity: 1;
  }
  70% {
    color: hsl(300, 20%, 86%);
    opacity: 0.95;
  }
  100% {
    color: hsl(300, 20%, 79%);
    opacity: 0.95;
    opacity: 0.92;
  }
}

.loading__circle {
  width: 1.2rem;
  height: 1.2rem;
}

#loading__circle-1 {
  animation: load-circle 1.8s ease-out 0.12s infinite;
}

#loading__circle-2 {
  animation: load-circle 1.8s ease-out 0.12s infinite;
}

#loading__circle-3 {
  animation: load-circle 1.8s ease-out 0.12s infinite;
}

#loading__circle-4 {
  animation: load-circle 1.8s ease-out 0.12s infinite;
}

@keyframes load-circle {
  0% {
    visibility: visible;
    opacity: 0.95;
    background-color: hsl(300, 20%, 65%);
    border-radius: 50%;
    border: 1px solid var(--accent-color-1);
  }

  60% {
    visibility: visible;
    opacity: 0.68;
    background-color: hsl(300, 20%, 70%);
    border-radius: 50%;
    border: 1px solid var(--accent-color-1);
  }

  100% {
    visibility: hidden;
    opacity: 0.1;
    background-color: hsl(300, 20%, 72%);
    border-radius: 50%;
    border: 1px solid var(--accent-color-1);
  }
}
</style>
