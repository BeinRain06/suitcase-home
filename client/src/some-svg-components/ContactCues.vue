<script setup>
import { reactive, onMounted } from "vue";

const props = defineProps({
  iconContact: String,
});

const activeIcon = reactive({
  username: false,
  email: false,
  message: false,
  phone: false,
  whatsapp: false,
});

onMounted(() => {
  switch (props.iconContact) {
    case "username":
      activeIcon.username = true;
      break;
    case "email":
      activeIcon.email = true;
      break;
    case "message":
      activeIcon.message = true;
      break;
    case "phone":
      activeIcon.phone = true;
      break;
    case "whatsapp":
      activeIcon.whatsapp = true;
      break;
    default:
      throw new Error("There is  a problem displaying icon-contact");
      break;
  }
});
</script>
<template>
  <div
    id="svg__contact-page"
    class="svg__contact-page w-full h-full grid place-items-center"
  >
    <!-- svg username -->
    <div
      id="svg__username"
      class="svg__contact"
      :class="{ active: activeIcon.username }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 160"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="roomBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color: #f0e6ff; stop-opacity: 1" />
            <stop offset="100%" style="stop-color: #d9c8f5; stop-opacity: 1" />
          </linearGradient>
          <linearGradient id="bedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: #c084fc" />
            <stop offset="100%" style="stop-color: #9333ea" />
          </linearGradient>
        </defs>
        <!-- Room walls -->
        <rect
          width="200"
          height="160"
          rx="12"
          fill="url(#roomBg)"
          stroke="#c084fc"
          stroke-width="2"
        />
        <!-- Floor -->
        <rect
          x="10"
          y="110"
          width="180"
          height="40"
          rx="6"
          fill="#e9d5ff"
          opacity="0.5"
        />
        <!-- Bed frame -->
        <rect
          x="30"
          y="75"
          width="140"
          height="55"
          rx="8"
          fill="url(#bedGrad)"
          opacity="0.9"
        />
        <!-- Mattress -->
        <rect x="35" y="78" width="130" height="45" rx="6" fill="#f3e8ff" />
        <!-- Pillow left -->
        <rect
          x="42"
          y="82"
          width="38"
          height="24"
          rx="10"
          fill="white"
          stroke="#d8b4fe"
          stroke-width="1.5"
        />
        <!-- Pillow right -->
        <rect
          x="120"
          y="82"
          width="38"
          height="24"
          rx="10"
          fill="white"
          stroke="#d8b4fe"
          stroke-width="1.5"
        />
        <!-- Blanket -->
        <rect
          x="35"
          y="100"
          width="130"
          height="20"
          rx="5"
          fill="#c084fc"
          opacity="0.7"
        />
        <!-- Headboard -->
        <rect x="30" y="60" width="140" height="22" rx="8" fill="#7e22ce" />
        <!-- Bedside table left -->
        <rect
          x="8"
          y="85"
          width="18"
          height="25"
          rx="4"
          fill="#a855f7"
          opacity="0.8"
        />
        <circle cx="17" cy="97" r="2.5" fill="#f3e8ff" />
        <!-- Bedside table right -->
        <rect
          x="174"
          y="85"
          width="18"
          height="25"
          rx="4"
          fill="#a855f7"
          opacity="0.8"
        />
        <circle cx="183" cy="97" r="2.5" fill="#f3e8ff" />
        <!-- Lamp left -->
        <line
          x1="17"
          y1="85"
          x2="17"
          y2="75"
          stroke="#7e22ce"
          stroke-width="1.5"
        />
        <ellipse
          cx="17"
          cy="72"
          rx="8"
          ry="5"
          fill="#fef3c7"
          stroke="#f59e0b"
          stroke-width="1"
        />
        <!-- Lamp right -->
        <line
          x1="183"
          y1="85"
          x2="183"
          y2="75"
          stroke="#7e22ce"
          stroke-width="1.5"
        />
        <ellipse
          cx="183"
          cy="72"
          rx="8"
          ry="5"
          fill="#fef3c7"
          stroke="#f59e0b"
          stroke-width="1"
        />
        <!-- Window -->
        <rect
          x="75"
          y="12"
          width="50"
          height="35"
          rx="5"
          fill="#bfdbfe"
          stroke="#93c5fd"
          stroke-width="1.5"
        />
        <line
          x1="100"
          y1="12"
          x2="100"
          y2="47"
          stroke="#93c5fd"
          stroke-width="1"
        />
        <line
          x1="75"
          y1="29"
          x2="125"
          y2="29"
          stroke="#93c5fd"
          stroke-width="1"
        />
        <!-- Stars on window -->
        <text x="82" y="26" font-size="7" fill="#fbbf24">✦</text>
        <text x="106" y="23" font-size="5" fill="#fbbf24">✦</text>
      </svg>
    </div>
    <!-- svg email -->
    <div
      id="svg__email"
      class="svg__contact"
      :class="{ active: activeIcon.email }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 160"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="roomBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color: #f0e6ff; stop-opacity: 1" />
            <stop offset="100%" style="stop-color: #d9c8f5; stop-opacity: 1" />
          </linearGradient>
          <linearGradient id="bedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: #c084fc" />
            <stop offset="100%" style="stop-color: #9333ea" />
          </linearGradient>
        </defs>
        <!-- Room walls -->
        <rect
          width="200"
          height="160"
          rx="12"
          fill="url(#roomBg)"
          stroke="#c084fc"
          stroke-width="2"
        />
        <!-- Floor -->
        <rect
          x="10"
          y="110"
          width="180"
          height="40"
          rx="6"
          fill="#e9d5ff"
          opacity="0.5"
        />
        <!-- Bed frame -->
        <rect
          x="30"
          y="75"
          width="140"
          height="55"
          rx="8"
          fill="url(#bedGrad)"
          opacity="0.9"
        />
        <!-- Mattress -->
        <rect x="35" y="78" width="130" height="45" rx="6" fill="#f3e8ff" />
        <!-- Pillow left -->
        <rect
          x="42"
          y="82"
          width="38"
          height="24"
          rx="10"
          fill="white"
          stroke="#d8b4fe"
          stroke-width="1.5"
        />
        <!-- Pillow right -->
        <rect
          x="120"
          y="82"
          width="38"
          height="24"
          rx="10"
          fill="white"
          stroke="#d8b4fe"
          stroke-width="1.5"
        />
        <!-- Blanket -->
        <rect
          x="35"
          y="100"
          width="130"
          height="20"
          rx="5"
          fill="#c084fc"
          opacity="0.7"
        />
        <!-- Headboard -->
        <rect x="30" y="60" width="140" height="22" rx="8" fill="#7e22ce" />
        <!-- Bedside table left -->
        <rect
          x="8"
          y="85"
          width="18"
          height="25"
          rx="4"
          fill="#a855f7"
          opacity="0.8"
        />
        <circle cx="17" cy="97" r="2.5" fill="#f3e8ff" />
        <!-- Bedside table right -->
        <rect
          x="174"
          y="85"
          width="18"
          height="25"
          rx="4"
          fill="#a855f7"
          opacity="0.8"
        />
        <circle cx="183" cy="97" r="2.5" fill="#f3e8ff" />
        <!-- Lamp left -->
        <line
          x1="17"
          y1="85"
          x2="17"
          y2="75"
          stroke="#7e22ce"
          stroke-width="1.5"
        />
        <ellipse
          cx="17"
          cy="72"
          rx="8"
          ry="5"
          fill="#fef3c7"
          stroke="#f59e0b"
          stroke-width="1"
        />
        <!-- Lamp right -->
        <line
          x1="183"
          y1="85"
          x2="183"
          y2="75"
          stroke="#7e22ce"
          stroke-width="1.5"
        />
        <ellipse
          cx="183"
          cy="72"
          rx="8"
          ry="5"
          fill="#fef3c7"
          stroke="#f59e0b"
          stroke-width="1"
        />
        <!-- Window -->
        <rect
          x="75"
          y="12"
          width="50"
          height="35"
          rx="5"
          fill="#bfdbfe"
          stroke="#93c5fd"
          stroke-width="1.5"
        />
        <line
          x1="100"
          y1="12"
          x2="100"
          y2="47"
          stroke="#93c5fd"
          stroke-width="1"
        />
        <line
          x1="75"
          y1="29"
          x2="125"
          y2="29"
          stroke="#93c5fd"
          stroke-width="1"
        />
        <!-- Stars on window -->
        <text x="82" y="26" font-size="7" fill="#fbbf24">✦</text>
        <text x="106" y="23" font-size="5" fill="#fbbf24">✦</text>
      </svg>
    </div>
    <!-- svg message -->
    <div
      id="svg__message"
      class="svg__contact"
      :class="{ active: activeIcon.message }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 160"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="roomBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color: #f0e6ff; stop-opacity: 1" />
            <stop offset="100%" style="stop-color: #d9c8f5; stop-opacity: 1" />
          </linearGradient>
          <linearGradient id="bedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: #c084fc" />
            <stop offset="100%" style="stop-color: #9333ea" />
          </linearGradient>
        </defs>
        <!-- Room walls -->
        <rect
          width="200"
          height="160"
          rx="12"
          fill="url(#roomBg)"
          stroke="#c084fc"
          stroke-width="2"
        />
        <!-- Floor -->
        <rect
          x="10"
          y="110"
          width="180"
          height="40"
          rx="6"
          fill="#e9d5ff"
          opacity="0.5"
        />
        <!-- Bed frame -->
        <rect
          x="30"
          y="75"
          width="140"
          height="55"
          rx="8"
          fill="url(#bedGrad)"
          opacity="0.9"
        />
        <!-- Mattress -->
        <rect x="35" y="78" width="130" height="45" rx="6" fill="#f3e8ff" />
        <!-- Pillow left -->
        <rect
          x="42"
          y="82"
          width="38"
          height="24"
          rx="10"
          fill="white"
          stroke="#d8b4fe"
          stroke-width="1.5"
        />
        <!-- Pillow right -->
        <rect
          x="120"
          y="82"
          width="38"
          height="24"
          rx="10"
          fill="white"
          stroke="#d8b4fe"
          stroke-width="1.5"
        />
        <!-- Blanket -->
        <rect
          x="35"
          y="100"
          width="130"
          height="20"
          rx="5"
          fill="#c084fc"
          opacity="0.7"
        />
        <!-- Headboard -->
        <rect x="30" y="60" width="140" height="22" rx="8" fill="#7e22ce" />
        <!-- Bedside table left -->
        <rect
          x="8"
          y="85"
          width="18"
          height="25"
          rx="4"
          fill="#a855f7"
          opacity="0.8"
        />
        <circle cx="17" cy="97" r="2.5" fill="#f3e8ff" />
        <!-- Bedside table right -->
        <rect
          x="174"
          y="85"
          width="18"
          height="25"
          rx="4"
          fill="#a855f7"
          opacity="0.8"
        />
        <circle cx="183" cy="97" r="2.5" fill="#f3e8ff" />
        <!-- Lamp left -->
        <line
          x1="17"
          y1="85"
          x2="17"
          y2="75"
          stroke="#7e22ce"
          stroke-width="1.5"
        />
        <ellipse
          cx="17"
          cy="72"
          rx="8"
          ry="5"
          fill="#fef3c7"
          stroke="#f59e0b"
          stroke-width="1"
        />
        <!-- Lamp right -->
        <line
          x1="183"
          y1="85"
          x2="183"
          y2="75"
          stroke="#7e22ce"
          stroke-width="1.5"
        />
        <ellipse
          cx="183"
          cy="72"
          rx="8"
          ry="5"
          fill="#fef3c7"
          stroke="#f59e0b"
          stroke-width="1"
        />
        <!-- Window -->
        <rect
          x="75"
          y="12"
          width="50"
          height="35"
          rx="5"
          fill="#bfdbfe"
          stroke="#93c5fd"
          stroke-width="1.5"
        />
        <line
          x1="100"
          y1="12"
          x2="100"
          y2="47"
          stroke="#93c5fd"
          stroke-width="1"
        />
        <line
          x1="75"
          y1="29"
          x2="125"
          y2="29"
          stroke="#93c5fd"
          stroke-width="1"
        />
        <!-- Stars on window -->
        <text x="82" y="26" font-size="7" fill="#fbbf24">✦</text>
        <text x="106" y="23" font-size="5" fill="#fbbf24">✦</text>
      </svg>
    </div>
    <!-- svg phone -->
    <div
      id="svg__phone"
      class="svg__contact"
      :class="{ active: activeIcon.phone }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 160"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="roomBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color: #f0e6ff; stop-opacity: 1" />
            <stop offset="100%" style="stop-color: #d9c8f5; stop-opacity: 1" />
          </linearGradient>
          <linearGradient id="bedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: #c084fc" />
            <stop offset="100%" style="stop-color: #9333ea" />
          </linearGradient>
        </defs>
        <!-- Room walls -->
        <rect
          width="200"
          height="160"
          rx="12"
          fill="url(#roomBg)"
          stroke="#c084fc"
          stroke-width="2"
        />
        <!-- Floor -->
        <rect
          x="10"
          y="110"
          width="180"
          height="40"
          rx="6"
          fill="#e9d5ff"
          opacity="0.5"
        />
        <!-- Bed frame -->
        <rect
          x="30"
          y="75"
          width="140"
          height="55"
          rx="8"
          fill="url(#bedGrad)"
          opacity="0.9"
        />
        <!-- Mattress -->
        <rect x="35" y="78" width="130" height="45" rx="6" fill="#f3e8ff" />
        <!-- Pillow left -->
        <rect
          x="42"
          y="82"
          width="38"
          height="24"
          rx="10"
          fill="white"
          stroke="#d8b4fe"
          stroke-width="1.5"
        />
        <!-- Pillow right -->
        <rect
          x="120"
          y="82"
          width="38"
          height="24"
          rx="10"
          fill="white"
          stroke="#d8b4fe"
          stroke-width="1.5"
        />
        <!-- Blanket -->
        <rect
          x="35"
          y="100"
          width="130"
          height="20"
          rx="5"
          fill="#c084fc"
          opacity="0.7"
        />
        <!-- Headboard -->
        <rect x="30" y="60" width="140" height="22" rx="8" fill="#7e22ce" />
        <!-- Bedside table left -->
        <rect
          x="8"
          y="85"
          width="18"
          height="25"
          rx="4"
          fill="#a855f7"
          opacity="0.8"
        />
        <circle cx="17" cy="97" r="2.5" fill="#f3e8ff" />
        <!-- Bedside table right -->
        <rect
          x="174"
          y="85"
          width="18"
          height="25"
          rx="4"
          fill="#a855f7"
          opacity="0.8"
        />
        <circle cx="183" cy="97" r="2.5" fill="#f3e8ff" />
        <!-- Lamp left -->
        <line
          x1="17"
          y1="85"
          x2="17"
          y2="75"
          stroke="#7e22ce"
          stroke-width="1.5"
        />
        <ellipse
          cx="17"
          cy="72"
          rx="8"
          ry="5"
          fill="#fef3c7"
          stroke="#f59e0b"
          stroke-width="1"
        />
        <!-- Lamp right -->
        <line
          x1="183"
          y1="85"
          x2="183"
          y2="75"
          stroke="#7e22ce"
          stroke-width="1.5"
        />
        <ellipse
          cx="183"
          cy="72"
          rx="8"
          ry="5"
          fill="#fef3c7"
          stroke="#f59e0b"
          stroke-width="1"
        />
        <!-- Window -->
        <rect
          x="75"
          y="12"
          width="50"
          height="35"
          rx="5"
          fill="#bfdbfe"
          stroke="#93c5fd"
          stroke-width="1.5"
        />
        <line
          x1="100"
          y1="12"
          x2="100"
          y2="47"
          stroke="#93c5fd"
          stroke-width="1"
        />
        <line
          x1="75"
          y1="29"
          x2="125"
          y2="29"
          stroke="#93c5fd"
          stroke-width="1"
        />
        <!-- Stars on window -->
        <text x="82" y="26" font-size="7" fill="#fbbf24">✦</text>
        <text x="106" y="23" font-size="5" fill="#fbbf24">✦</text>
      </svg>
    </div>

    <!-- svg whatsapp -->
    <div
      id="svg__whatsapp"
      class="svg__contact"
      :class="{ active: activeIcon.whatsapp }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 160"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="roomBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color: #f0e6ff; stop-opacity: 1" />
            <stop offset="100%" style="stop-color: #d9c8f5; stop-opacity: 1" />
          </linearGradient>
          <linearGradient id="bedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: #c084fc" />
            <stop offset="100%" style="stop-color: #9333ea" />
          </linearGradient>
        </defs>
        <!-- Room walls -->
        <rect
          width="200"
          height="160"
          rx="12"
          fill="url(#roomBg)"
          stroke="#c084fc"
          stroke-width="2"
        />
        <!-- Floor -->
        <rect
          x="10"
          y="110"
          width="180"
          height="40"
          rx="6"
          fill="#e9d5ff"
          opacity="0.5"
        />
        <!-- Bed frame -->
        <rect
          x="30"
          y="75"
          width="140"
          height="55"
          rx="8"
          fill="url(#bedGrad)"
          opacity="0.9"
        />
        <!-- Mattress -->
        <rect x="35" y="78" width="130" height="45" rx="6" fill="#f3e8ff" />
        <!-- Pillow left -->
        <rect
          x="42"
          y="82"
          width="38"
          height="24"
          rx="10"
          fill="white"
          stroke="#d8b4fe"
          stroke-width="1.5"
        />
        <!-- Pillow right -->
        <rect
          x="120"
          y="82"
          width="38"
          height="24"
          rx="10"
          fill="white"
          stroke="#d8b4fe"
          stroke-width="1.5"
        />
        <!-- Blanket -->
        <rect
          x="35"
          y="100"
          width="130"
          height="20"
          rx="5"
          fill="#c084fc"
          opacity="0.7"
        />
        <!-- Headboard -->
        <rect x="30" y="60" width="140" height="22" rx="8" fill="#7e22ce" />
        <!-- Bedside table left -->
        <rect
          x="8"
          y="85"
          width="18"
          height="25"
          rx="4"
          fill="#a855f7"
          opacity="0.8"
        />
        <circle cx="17" cy="97" r="2.5" fill="#f3e8ff" />
        <!-- Bedside table right -->
        <rect
          x="174"
          y="85"
          width="18"
          height="25"
          rx="4"
          fill="#a855f7"
          opacity="0.8"
        />
        <circle cx="183" cy="97" r="2.5" fill="#f3e8ff" />
        <!-- Lamp left -->
        <line
          x1="17"
          y1="85"
          x2="17"
          y2="75"
          stroke="#7e22ce"
          stroke-width="1.5"
        />
        <ellipse
          cx="17"
          cy="72"
          rx="8"
          ry="5"
          fill="#fef3c7"
          stroke="#f59e0b"
          stroke-width="1"
        />
        <!-- Lamp right -->
        <line
          x1="183"
          y1="85"
          x2="183"
          y2="75"
          stroke="#7e22ce"
          stroke-width="1.5"
        />
        <ellipse
          cx="183"
          cy="72"
          rx="8"
          ry="5"
          fill="#fef3c7"
          stroke="#f59e0b"
          stroke-width="1"
        />
        <!-- Window -->
        <rect
          x="75"
          y="12"
          width="50"
          height="35"
          rx="5"
          fill="#bfdbfe"
          stroke="#93c5fd"
          stroke-width="1.5"
        />
        <line
          x1="100"
          y1="12"
          x2="100"
          y2="47"
          stroke="#93c5fd"
          stroke-width="1"
        />
        <line
          x1="75"
          y1="29"
          x2="125"
          y2="29"
          stroke="#93c5fd"
          stroke-width="1"
        />
        <!-- Stars on window -->
        <text x="82" y="26" font-size="7" fill="#fbbf24">✦</text>
        <text x="106" y="23" font-size="5" fill="#fbbf24">✦</text>
      </svg>
    </div>
  </div>
</template>
<style scoped>
.svg__contact {
  display: none;
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  outline: none;
  border: 1px solid transparent;
}

.svg__contact.active {
  display: grid;
  width: 100%;
  height: 80%;
  padding-top: 0.25rem;
  border-radius: 0.25rem;
  place-items: center;
  outline: none;
  border: 1px solid transparent;
}
</style>
