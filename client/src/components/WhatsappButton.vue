<script setup>
import { useRoute } from "vue-router";

import { storeToRefs } from "pinia";

import { useWhatsappStore } from "../store-management/whatsappStore";

const route = useRoute();

const whatsappStore = useWhatsappStore();

const { isContactPage } = storeToRefs(whatsappStore);
</script>
<template>
  <div class="whatsapp__Button-page">
    <!-- Floating Whatsapp icon -->
    <transition name="whatsapp-fade">
      <div
        v-show="whatsappStore.isVisible"
        class="whatsapp__float-container"
        @click="whatsappStore.triggerWhatsApp"
      >
        <div
          class="whatsapp__icon-container flex justify-center items-center"
          :class="{ animate__pulse: isContactPage, '': !isContactPage }"
        >
          <div class="icon__whatsapp grid place-items-center">
            <div
              class="icon__content basis--icon streamline-logos--whatsapp-logo"
            ></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<style scoped>
/* floating whatsapp icon */
.whatsapp__float-container {
  width: 3rem;
  height: 3rem;
  position: fixed;
  right: 3%;
  bottom: 5%;
  z-index: 100;
}

.whatsapp__icon-container {
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: hsl(0, 0%, 100%);
  background-color: hsl(142, 70%, 49%);
  border-radius: 50%;
}

/*-- whatsapp-fade transition -- */
.whatsapp-fade-enter-active,
.whatsapp-fade-leave-active {
  transition: opacity 0.5s ease;
}

.whatsapp-fade-enter-from,
.whatsapp-fade-leave-to {
  opacity: 0;
}

/* animation whatsapp button specific in contact page */
/* 2. Create the Pulse Rings */
.whatsapp__icon-container.animate__pulse::before,
.whatsapp__icon-container.animate__pulse::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsl(142, 70%, 49%); /* Same color as the icon */
  border-radius: 50%;
  z-index: -1; /* Place rings behind the icon */
  opacity: 0.7;
}

/* 3. Animate the Rings */
.whatsapp__icon-container::before {
  animation: pulse-wave 2s infinite ease-out;
}

.whatsapp__icon-container::after {
  animation: pulse-wave 2s infinite ease-out 0.5s; /* 0.5s delay for second wave */
}

/* 4. Define the Pulse Keyframes */
@keyframes pulse-wave {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1.5); /* How far the pulse spreads */
    opacity: 0;
  }
}

/* Ensure the icon stays above the pulse */
.icon__whatsapp {
  position: relative;
  z-index: 2;
}
</style>
