<script setup>
import { reactive, onMounted } from "vue";

const props = defineProps({
  iconSketch: String,
});

const activeIcon = reactive({
  bedroom: false,
  kitchen: false,
  diningRoom: false,
  livingRoom: false,
  toilet: false,
  keyPlace: false,
  land: false,
});

onMounted(() => {
  switch (props.iconSketch) {
    case "bedroom":
      activeIcon.bedroom = true;
      break;
    case "kitchen":
      activeIcon.kitchen = true;
      break;
    case "diningRoom":
      activeIcon.diningRoom = true;
      break;
    case "livingRoom":
      activeIcon.livingRoom = true;
      break;
    case "toilet":
      activeIcon.toilet = true;
      break;
    case "keyPlace":
      activeIcon.keyPlace = true;
      break;
    case "land":
      activeIcon.land = true;
      break;
    default:
      throw new Error("There is  a problem displaying icon-house");
      break;
  }
});
</script>
<template>
  <div
    id="svg__house-owner"
    class="svg__house-owner w-full h-full grid place-items-center"
  >
    <!-- svg bedroom -->
    <div
      id="svg__bedroom"
      class="svg__house"
      :class="{ active: activeIcon.bedroom }"
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

    <!-- svg kitchen -->
    <div
      id="svg__kitchen"
      class="svg__house"
      :class="{ active: activeIcon.kitchen }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 160"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="dinBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color: #fefce8" />
            <stop offset="100%" style="stop-color: #fef08a" />
          </linearGradient>
          <linearGradient id="tableGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: #d97706" />
            <stop offset="100%" style="stop-color: #92400e" />
          </linearGradient>
        </defs>
        <rect
          width="200"
          height="160"
          rx="12"
          fill="url(#dinBg)"
          stroke="#eab308"
          stroke-width="2"
        />
        <!-- Table -->
        <ellipse cx="100" cy="90" rx="65" ry="38" fill="url(#tableGrad)" />
        <ellipse
          cx="100"
          cy="90"
          rx="60"
          ry="33"
          fill="#b45309"
          opacity="0.6"
        />
        <!-- Table cloth highlight -->
        <ellipse
          cx="100"
          cy="88"
          rx="55"
          ry="29"
          fill="none"
          stroke="#fbbf24"
          stroke-width="1"
          opacity="0.5"
        />
        <!-- Table legs -->
        <line
          x1="75"
          y1="122"
          x2="70"
          y2="145"
          stroke="#78350f"
          stroke-width="4"
          stroke-linecap="round"
        />
        <line
          x1="125"
          y1="122"
          x2="130"
          y2="145"
          stroke="#78350f"
          stroke-width="4"
          stroke-linecap="round"
        />
        <!-- Chairs - top -->
        <rect
          x="65"
          y="48"
          width="28"
          height="18"
          rx="6"
          fill="#fbbf24"
          stroke="#d97706"
          stroke-width="1.5"
        />
        <rect x="67" y="44" width="24" height="8" rx="4" fill="#f59e0b" />
        <rect
          x="107"
          y="48"
          width="28"
          height="18"
          rx="6"
          fill="#fbbf24"
          stroke="#d97706"
          stroke-width="1.5"
        />
        <rect x="109" y="44" width="24" height="8" rx="4" fill="#f59e0b" />
        <!-- Chairs - bottom -->
        <rect
          x="65"
          y="110"
          width="28"
          height="18"
          rx="6"
          fill="#fbbf24"
          stroke="#d97706"
          stroke-width="1.5"
        />
        <rect x="67" y="124" width="24" height="8" rx="4" fill="#f59e0b" />
        <rect
          x="107"
          y="110"
          width="28"
          height="18"
          rx="6"
          fill="#fbbf24"
          stroke="#d97706"
          stroke-width="1.5"
        />
        <rect x="109" y="124" width="24" height="8" rx="4" fill="#f59e0b" />
        <!-- Chairs - sides -->
        <rect
          x="20"
          y="75"
          width="18"
          height="28"
          rx="6"
          fill="#fbbf24"
          stroke="#d97706"
          stroke-width="1.5"
        />
        <rect x="14" y="77" width="8" height="24" rx="4" fill="#f59e0b" />
        <rect
          x="162"
          y="75"
          width="18"
          height="28"
          rx="6"
          fill="#fbbf24"
          stroke="#d97706"
          stroke-width="1.5"
        />
        <rect x="178" y="77" width="8" height="24" rx="4" fill="#f59e0b" />
        <!-- Place settings -->
        <circle
          cx="100"
          cy="90"
          r="12"
          fill="#fff7ed"
          stroke="#fb923c"
          stroke-width="1"
        />
        <circle
          cx="70"
          cy="83"
          r="8"
          fill="#fff7ed"
          stroke="#fb923c"
          stroke-width="1"
        />
        <circle
          cx="130"
          cy="83"
          r="8"
          fill="#fff7ed"
          stroke="#fb923c"
          stroke-width="1"
        />
        <!-- Centerpiece vase -->
        <rect x="94" y="80" width="12" height="18" rx="3" fill="#a16207" />
        <ellipse cx="100" cy="79" rx="10" ry="4" fill="#ca8a04" />
        <!-- Flowers -->
        <circle cx="97" cy="73" r="5" fill="#f43f5e" opacity="0.8" />
        <circle cx="103" cy="72" r="4" fill="#fb7185" opacity="0.8" />
        <circle cx="100" cy="70" r="4" fill="#fda4af" opacity="0.9" />
        <!-- Chandelier -->
        <line
          x1="100"
          y1="0"
          x2="100"
          y2="20"
          stroke="#78350f"
          stroke-width="2"
        />
        <ellipse
          cx="100"
          cy="22"
          rx="20"
          ry="6"
          fill="#fbbf24"
          stroke="#d97706"
          stroke-width="1"
        />
        <circle
          cx="88"
          cy="25"
          r="3"
          fill="#fef9c3"
          stroke="#fbbf24"
          stroke-width="1"
        />
        <circle
          cx="100"
          cy="27"
          r="3"
          fill="#fef9c3"
          stroke="#fbbf24"
          stroke-width="1"
        />
        <circle
          cx="112"
          cy="25"
          r="3"
          fill="#fef9c3"
          stroke="#fbbf24"
          stroke-width="1"
        />
        <!-- Label -->
        <text
          x="100"
          y="155"
          text-anchor="middle"
          font-family="Georgia, serif"
          font-size="10"
          fill="#92400e"
          font-weight="bold"
        >
          DINING ROOM
        </text>
      </svg>
    </div>

    <!-- svg dining room -->
    <div
      id="svg__dining-room"
      class="svg__house"
      :class="{ active: activeIcon.diningRoom }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 160"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="dinBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color: #fefce8" />
            <stop offset="100%" style="stop-color: #fef08a" />
          </linearGradient>
          <linearGradient id="tableGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: #d97706" />
            <stop offset="100%" style="stop-color: #92400e" />
          </linearGradient>
        </defs>
        <rect
          width="200"
          height="160"
          rx="12"
          fill="url(#dinBg)"
          stroke="#eab308"
          stroke-width="2"
        />
        <!-- Table -->
        <ellipse cx="100" cy="90" rx="65" ry="38" fill="url(#tableGrad)" />
        <ellipse
          cx="100"
          cy="90"
          rx="60"
          ry="33"
          fill="#b45309"
          opacity="0.6"
        />
        <!-- Table cloth highlight -->
        <ellipse
          cx="100"
          cy="88"
          rx="55"
          ry="29"
          fill="none"
          stroke="#fbbf24"
          stroke-width="1"
          opacity="0.5"
        />
        <!-- Table legs -->
        <line
          x1="75"
          y1="122"
          x2="70"
          y2="145"
          stroke="#78350f"
          stroke-width="4"
          stroke-linecap="round"
        />
        <line
          x1="125"
          y1="122"
          x2="130"
          y2="145"
          stroke="#78350f"
          stroke-width="4"
          stroke-linecap="round"
        />
        <!-- Chairs - top -->
        <rect
          x="65"
          y="48"
          width="28"
          height="18"
          rx="6"
          fill="#fbbf24"
          stroke="#d97706"
          stroke-width="1.5"
        />
        <rect x="67" y="44" width="24" height="8" rx="4" fill="#f59e0b" />
        <rect
          x="107"
          y="48"
          width="28"
          height="18"
          rx="6"
          fill="#fbbf24"
          stroke="#d97706"
          stroke-width="1.5"
        />
        <rect x="109" y="44" width="24" height="8" rx="4" fill="#f59e0b" />
        <!-- Chairs - bottom -->
        <rect
          x="65"
          y="110"
          width="28"
          height="18"
          rx="6"
          fill="#fbbf24"
          stroke="#d97706"
          stroke-width="1.5"
        />
        <rect x="67" y="124" width="24" height="8" rx="4" fill="#f59e0b" />
        <rect
          x="107"
          y="110"
          width="28"
          height="18"
          rx="6"
          fill="#fbbf24"
          stroke="#d97706"
          stroke-width="1.5"
        />
        <rect x="109" y="124" width="24" height="8" rx="4" fill="#f59e0b" />
        <!-- Chairs - sides -->
        <rect
          x="20"
          y="75"
          width="18"
          height="28"
          rx="6"
          fill="#fbbf24"
          stroke="#d97706"
          stroke-width="1.5"
        />
        <rect x="14" y="77" width="8" height="24" rx="4" fill="#f59e0b" />
        <rect
          x="162"
          y="75"
          width="18"
          height="28"
          rx="6"
          fill="#fbbf24"
          stroke="#d97706"
          stroke-width="1.5"
        />
        <rect x="178" y="77" width="8" height="24" rx="4" fill="#f59e0b" />
        <!-- Place settings -->
        <circle
          cx="100"
          cy="90"
          r="12"
          fill="#fff7ed"
          stroke="#fb923c"
          stroke-width="1"
        />
        <circle
          cx="70"
          cy="83"
          r="8"
          fill="#fff7ed"
          stroke="#fb923c"
          stroke-width="1"
        />
        <circle
          cx="130"
          cy="83"
          r="8"
          fill="#fff7ed"
          stroke="#fb923c"
          stroke-width="1"
        />
        <!-- Centerpiece vase -->
        <rect x="94" y="80" width="12" height="18" rx="3" fill="#a16207" />
        <ellipse cx="100" cy="79" rx="10" ry="4" fill="#ca8a04" />
        <!-- Flowers -->
        <circle cx="97" cy="73" r="5" fill="#f43f5e" opacity="0.8" />
        <circle cx="103" cy="72" r="4" fill="#fb7185" opacity="0.8" />
        <circle cx="100" cy="70" r="4" fill="#fda4af" opacity="0.9" />
        <!-- Chandelier -->
        <line
          x1="100"
          y1="0"
          x2="100"
          y2="20"
          stroke="#78350f"
          stroke-width="2"
        />
        <ellipse
          cx="100"
          cy="22"
          rx="20"
          ry="6"
          fill="#fbbf24"
          stroke="#d97706"
          stroke-width="1"
        />
        <circle
          cx="88"
          cy="25"
          r="3"
          fill="#fef9c3"
          stroke="#fbbf24"
          stroke-width="1"
        />
        <circle
          cx="100"
          cy="27"
          r="3"
          fill="#fef9c3"
          stroke="#fbbf24"
          stroke-width="1"
        />
        <circle
          cx="112"
          cy="25"
          r="3"
          fill="#fef9c3"
          stroke="#fbbf24"
          stroke-width="1"
        />
      </svg>
    </div>

    <!-- svg living room -->
    <div
      id="svg__living-room"
      class="svg__house"
      :class="{ active: activeIcon.livingRoom }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 160"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="lvBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color: #fff7ed" />
            <stop offset="100%" style="stop-color: #fed7aa" />
          </linearGradient>
          <linearGradient id="sofaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: #fb923c" />
            <stop offset="100%" style="stop-color: #c2410c" />
          </linearGradient>
        </defs>
        <rect
          width="200"
          height="160"
          rx="12"
          fill="url(#lvBg)"
          stroke="#fb923c"
          stroke-width="2"
        />
        <!-- Floor rug -->
        <ellipse
          cx="100"
          cy="120"
          rx="75"
          ry="22"
          fill="#fde68a"
          opacity="0.5"
          stroke="#fbbf24"
          stroke-width="1"
        />
        <!-- TV stand -->
        <rect x="55" y="20" width="90" height="30" rx="5" fill="#292524" />
        <rect x="60" y="24" width="80" height="22" rx="3" fill="#1c1917" />
        <!-- TV screen -->
        <rect
          x="63"
          y="26"
          width="74"
          height="18"
          rx="2"
          fill="#0ea5e9"
          opacity="0.8"
        />
        <rect
          x="63"
          y="26"
          width="74"
          height="18"
          rx="2"
          fill="none"
          stroke="#38bdf8"
          stroke-width="0.5"
        />
        <!-- TV legs -->
        <rect x="85" y="50" width="4" height="8" rx="1" fill="#44403c" />
        <rect x="111" y="50" width="4" height="8" rx="1" fill="#44403c" />
        <!-- Sofa body -->
        <rect
          x="25"
          y="85"
          width="150"
          height="45"
          rx="10"
          fill="url(#sofaGrad)"
        />
        <!-- Sofa back -->
        <rect x="25" y="72" width="150" height="20" rx="8" fill="#ea580c" />
        <!-- Cushions -->
        <rect x="32" y="88" width="42" height="35" rx="7" fill="#fdba74" />
        <rect x="79" y="88" width="42" height="35" rx="7" fill="#fdba74" />
        <rect x="126" y="88" width="42" height="35" rx="7" fill="#fdba74" />
        <!-- Armrests -->
        <rect x="15" y="78" width="16" height="52" rx="8" fill="#c2410c" />
        <rect x="169" y="78" width="16" height="52" rx="8" fill="#c2410c" />
        <!-- Coffee table -->
        <rect
          x="65"
          y="58"
          width="70"
          height="20"
          rx="5"
          fill="#a16207"
          opacity="0.8"
        />
        <rect x="70" y="53" width="60" height="8" rx="3" fill="#ca8a04" />
        <!-- Table items: remote, cup -->
        <rect x="74" y="55" width="14" height="5" rx="2" fill="#1c1917" />
        <circle
          cx="115"
          cy="57"
          r="4"
          fill="#fef3c7"
          stroke="#d97706"
          stroke-width="1"
        />
        <!-- Plant corner -->
        <rect x="174" y="115" width="16" height="15" rx="3" fill="#92400e" />
        <circle cx="182" cy="110" r="10" fill="#4ade80" opacity="0.8" />
        <circle cx="174" cy="108" r="7" fill="#22c55e" opacity="0.8" />
        <circle cx="190" cy="106" r="6" fill="#16a34a" opacity="0.8" />
      </svg>
    </div>

    <!-- svg toilet -->
    <div
      id="svg__toilet"
      class="svg__house"
      :class="{ active: activeIcon.toilet }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 220 180"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="btBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1e293b" />
            <stop offset="100%" stop-color="#0f172a" />
          </linearGradient>
          <linearGradient id="tileA" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#334155" />
            <stop offset="100%" stop-color="#1e293b" />
          </linearGradient>
          <linearGradient id="porcelain" x1="0%" y1="0%" x2="30%" y2="100%">
            <stop offset="0%" stop-color="#f8fafc" />
            <stop offset="60%" stop-color="#e2e8f0" />
            <stop offset="100%" stop-color="#cbd5e1" />
          </linearGradient>
          <linearGradient id="sinkPorcelain" x1="0%" y1="0%" x2="20%" y2="100%">
            <stop offset="0%" stop-color="#f1f5f9" />
            <stop offset="100%" stop-color="#cbd5e1" />
          </linearGradient>
          <linearGradient id="mirrorGrad" x1="0%" y1="0%" x2="60%" y2="100%">
            <stop offset="0%" stop-color="#7dd3fc" stop-opacity="0.25" />
            <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0.08" />
          </linearGradient>
          <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.6" />
            <stop offset="100%" stop-color="#0284c7" stop-opacity="0.3" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="shadow">
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="4"
              flood-color="#000"
              flood-opacity="0.4"
            />
          </filter>
        </defs>

        <!-- Room background -->
        <rect width="220" height="180" rx="14" fill="url(#btBg)" />

        <!-- Wall tile grid -->
        <g opacity="0.35">
          <rect x="0" y="0" width="220" height="180" rx="14" fill="none" />
          <!-- horizontal tile lines -->
          <line
            x1="0"
            y1="30"
            x2="220"
            y2="30"
            stroke="#334155"
            stroke-width="0.8"
          />
          <line
            x1="0"
            y1="60"
            x2="220"
            y2="60"
            stroke="#334155"
            stroke-width="0.8"
          />
          <line
            x1="0"
            y1="90"
            x2="220"
            y2="90"
            stroke="#334155"
            stroke-width="0.8"
          />
          <line
            x1="0"
            y1="120"
            x2="220"
            y2="120"
            stroke="#334155"
            stroke-width="0.8"
          />
          <line
            x1="0"
            y1="150"
            x2="220"
            y2="150"
            stroke="#334155"
            stroke-width="0.8"
          />
          <!-- vertical tile lines -->
          <line
            x1="30"
            y1="0"
            x2="30"
            y2="180"
            stroke="#334155"
            stroke-width="0.8"
          />
          <line
            x1="60"
            y1="0"
            x2="60"
            y2="180"
            stroke="#334155"
            stroke-width="0.8"
          />
          <line
            x1="90"
            y1="0"
            x2="90"
            y2="180"
            stroke="#334155"
            stroke-width="0.8"
          />
          <line
            x1="120"
            y1="0"
            x2="120"
            y2="180"
            stroke="#334155"
            stroke-width="0.8"
          />
          <line
            x1="150"
            y1="0"
            x2="150"
            y2="180"
            stroke="#334155"
            stroke-width="0.8"
          />
          <line
            x1="180"
            y1="0"
            x2="180"
            y2="180"
            stroke="#334155"
            stroke-width="0.8"
          />
        </g>

        <!-- Accent tile strip -->
        <rect
          x="0"
          y="86"
          width="220"
          height="8"
          rx="0"
          fill="#0ea5e9"
          opacity="0.18"
        />

        <!-- === MIRROR === -->
        <rect
          x="12"
          y="10"
          width="78"
          height="66"
          rx="7"
          fill="url(#mirrorGrad)"
          stroke="#38bdf8"
          stroke-width="1.5"
          filter="url(#shadow)"
        />
        <!-- Mirror inner frame -->
        <rect
          x="15"
          y="13"
          width="72"
          height="60"
          rx="5"
          fill="none"
          stroke="#7dd3fc"
          stroke-width="0.7"
          opacity="0.5"
        />
        <!-- Mirror shimmer lines -->
        <line
          x1="20"
          y1="18"
          x2="36"
          y2="68"
          stroke="white"
          stroke-width="3"
          opacity="0.07"
        />
        <line
          x1="30"
          y1="14"
          x2="46"
          y2="70"
          stroke="white"
          stroke-width="1.5"
          opacity="0.06"
        />
        <!-- Sconce lights above mirror -->
        <ellipse
          cx="30"
          cy="10"
          rx="8"
          ry="4"
          fill="#fef3c7"
          opacity="0.6"
          filter="url(#softGlow)"
        />
        <ellipse
          cx="72"
          cy="10"
          rx="8"
          ry="4"
          fill="#fef3c7"
          opacity="0.6"
          filter="url(#softGlow)"
        />
        <rect x="26" y="6" width="8" height="5" rx="2" fill="#44403c" />
        <rect x="68" y="6" width="8" height="5" rx="2" fill="#44403c" />

        <!-- === SINK === -->
        <!-- Vanity cabinet -->
        <rect
          x="10"
          y="96"
          width="82"
          height="38"
          rx="6"
          fill="#1e293b"
          stroke="#334155"
          stroke-width="1.5"
          filter="url(#shadow)"
        />
        <!-- Cabinet doors -->
        <rect
          x="14"
          y="100"
          width="34"
          height="30"
          rx="3"
          fill="#0f172a"
          stroke="#334155"
          stroke-width="1"
        />
        <rect
          x="52"
          y="100"
          width="34"
          height="30"
          rx="3"
          fill="#0f172a"
          stroke="#334155"
          stroke-width="1"
        />
        <!-- Cabinet handles -->
        <rect x="28" y="114" width="8" height="2.5" rx="1.2" fill="#64748b" />
        <rect x="66" y="114" width="8" height="2.5" rx="1.2" fill="#64748b" />
        <!-- Countertop -->
        <rect
          x="8"
          y="92"
          width="86"
          height="8"
          rx="4"
          fill="#334155"
          stroke="#475569"
          stroke-width="1"
        />
        <!-- Sink basin -->
        <rect
          x="20"
          y="82"
          width="62"
          height="13"
          rx="8"
          fill="url(#sinkPorcelain)"
          stroke="#94a3b8"
          stroke-width="1.2"
          filter="url(#shadow)"
        />
        <ellipse
          cx="51"
          cy="88"
          rx="20"
          ry="7"
          fill="url(#waterGrad)"
          stroke="#38bdf8"
          stroke-width="0.8"
        />
        <!-- Drain -->
        <circle cx="51" cy="89" r="3" fill="#475569" />
        <circle cx="51" cy="89" r="1.5" fill="#1e293b" />
        <!-- Faucet body -->
        <rect x="47" y="74" width="8" height="12" rx="3" fill="#94a3b8" />
        <rect x="38" y="72" width="26" height="5" rx="2.5" fill="#cbd5e1" />
        <!-- Hot/cold knobs -->
        <circle cx="40" cy="74" r="3.5" fill="#ef4444" opacity="0.85" />
        <circle cx="63" cy="74" r="3.5" fill="#3b82f6" opacity="0.85" />
        <!-- Water drop -->
        <ellipse
          cx="51"
          cy="83"
          rx="1.5"
          ry="2.5"
          fill="#7dd3fc"
          opacity="0.7"
        />

        <!-- Soap dispenser -->
        <rect
          x="80"
          y="80"
          width="10"
          height="14"
          rx="4"
          fill="#0ea5e9"
          opacity="0.8"
        />
        <rect x="83" y="76" width="4" height="6" rx="2" fill="#38bdf8" />

        <!-- === TOILET === -->
        <!-- Tank -->
        <rect
          x="123"
          y="52"
          width="62"
          height="40"
          rx="8"
          fill="url(#porcelain)"
          stroke="#94a3b8"
          stroke-width="1.5"
          filter="url(#shadow)"
        />
        <!-- Tank lid -->
        <rect
          x="120"
          y="47"
          width="68"
          height="10"
          rx="5"
          fill="#f1f5f9"
          stroke="#cbd5e1"
          stroke-width="1.2"
        />
        <!-- Flush button -->
        <rect x="148" y="50" width="12" height="5" rx="2.5" fill="#64748b" />
        <rect x="150" y="51" width="5" height="3" rx="1.5" fill="#94a3b8" />
        <rect x="157" y="51" width="2" height="3" rx="1" fill="#94a3b8" />
        <!-- Tank water indicator -->
        <rect
          x="127"
          y="62"
          width="54"
          height="22"
          rx="4"
          fill="#bae6fd"
          opacity="0.25"
        />
        <!-- Toilet bowl side view -->
        <path
          d="M118 92 Q115 95 115 110 Q115 138 154 140 Q193 138 193 110 Q193 95 190 92 Z"
          fill="url(#porcelain)"
          stroke="#94a3b8"
          stroke-width="1.5"
          filter="url(#shadow)"
        />
        <!-- Toilet seat -->
        <path
          d="M118 92 Q120 85 154 84 Q188 85 190 92 Q192 100 154 103 Q116 100 118 92 Z"
          fill="#f8fafc"
          stroke="#cbd5e1"
          stroke-width="1.5"
        />
        <!-- Seat hinge -->
        <circle cx="140" cy="87" r="3" fill="#94a3b8" />
        <circle cx="168" cy="87" r="3" fill="#94a3b8" />
        <!-- Bowl water -->
        <ellipse cx="154" cy="118" rx="24" ry="12" fill="url(#waterGrad)" />
        <!-- Toilet base -->
        <ellipse
          cx="154"
          cy="138"
          rx="32"
          ry="8"
          fill="#e2e8f0"
          stroke="#cbd5e1"
          stroke-width="1"
        />
        <!-- Floor base panel -->
        <rect x="130" y="142" width="48" height="6" rx="3" fill="#cbd5e1" />

        <!-- === TOWEL RAIL === -->
        <rect x="100" y="95" width="4" height="55" rx="2" fill="#475569" />
        <rect x="100" y="100" width="4" height="2" rx="1" fill="#64748b" />
        <!-- Towels hanging -->
        <rect
          x="104"
          y="99"
          width="16"
          height="22"
          rx="3"
          fill="#0ea5e9"
          opacity="0.75"
        />
        <line
          x1="104"
          y1="110"
          x2="120"
          y2="110"
          stroke="#38bdf8"
          stroke-width="0.8"
          opacity="0.5"
        />
        <rect
          x="104"
          y="124"
          width="16"
          height="18"
          rx="3"
          fill="#f0abfc"
          opacity="0.75"
        />
        <line
          x1="104"
          y1="133"
          x2="120"
          y2="133"
          stroke="#e879f9"
          stroke-width="0.8"
          opacity="0.5"
        />

        <!-- === PLANTS === -->
        <rect
          x="195"
          y="140"
          width="16"
          height="20"
          rx="3"
          fill="#1e293b"
          stroke="#334155"
          stroke-width="1"
        />
        <ellipse
          cx="203"
          cy="138"
          rx="11"
          ry="8"
          fill="#166534"
          opacity="0.9"
        />
        <ellipse cx="197" cy="133" rx="8" ry="7" fill="#15803d" />
        <ellipse cx="209" cy="132" rx="8" ry="7" fill="#16a34a" />

        <!-- === FLOOR ACCENT === -->
        <rect
          x="0"
          y="162"
          width="220"
          height="18"
          rx="0"
          fill="#0f172a"
          opacity="0.7"
        />
        <line
          x1="0"
          y1="162"
          x2="220"
          y2="162"
          stroke="#0ea5e9"
          stroke-width="1.5"
          opacity="0.4"
        />
      </svg>
    </div>

    <!-- svg keyPlace -->
    <div
      id="svg__key-place"
      class="svg__house"
      :class="{ active: activeIcon.keyPlace }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 240 200"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="tpBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1e2a1a" />
            <stop offset="100%" stop-color="#111a0e" />
          </linearGradient>
          <linearGradient id="tpFloor" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#c8a878" />
            <stop offset="50%" stop-color="#b8946a" />
            <stop offset="100%" stop-color="#a8845c" />
          </linearGradient>
          <linearGradient id="tpWall" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#e8e0d0" />
            <stop offset="100%" stop-color="#d8cfc0" />
          </linearGradient>
          <linearGradient id="tpGrass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#2d5a22" />
            <stop offset="50%" stop-color="#3a7030" />
            <stop offset="100%" stop-color="#285020" />
          </linearGradient>
          <linearGradient id="tpPath" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ccc0a0" />
            <stop offset="100%" stop-color="#b8a888" />
          </linearGradient>
          <linearGradient id="tpChair" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8b5e30" />
            <stop offset="100%" stop-color="#5a3010" />
          </linearGradient>
          <radialGradient id="tpLanternGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ffe080" stop-opacity="0.5" />
            <stop offset="100%" stop-color="#ff8800" stop-opacity="0" />
          </radialGradient>
          <radialGradient id="tpPlantGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#4ade80" />
            <stop offset="100%" stop-color="#166534" />
          </radialGradient>
          <filter id="tpShadow">
            <feDropShadow
              dx="2"
              dy="2"
              stdDeviation="2"
              flood-color="#000"
              flood-opacity="0.4"
            />
          </filter>
          <filter id="tpWallShadow">
            <feDropShadow
              dx="3"
              dy="3"
              stdDeviation="4"
              flood-color="#000"
              flood-opacity="0.35"
            />
          </filter>
        </defs>

        <!-- === OUTDOOR GROUND (grass) === -->
        <rect width="240" height="200" rx="14" fill="url(#tpGrass)" />

        <!-- Grass texture dots -->
        <g fill="#3a7030" opacity="0.4">
          <circle cx="15" cy="20" r="1.5" />
          <circle cx="30" cy="35" r="1" />
          <circle cx="8" cy="55" r="1.5" />
          <circle cx="22" cy="70" r="1" />
          <circle cx="18" cy="90" r="1.5" />
          <circle cx="10" cy="110" r="1" />
          <circle cx="25" cy="130" r="1.5" />
          <circle cx="12" cy="150" r="1" />
          <circle cx="220" cy="25" r="1.5" />
          <circle cx="232" cy="45" r="1" />
          <circle cx="228" cy="65" r="1.5" />
          <circle cx="218" cy="85" r="1" />
          <circle cx="230" cy="105" r="1.5" />
          <circle cx="222" cy="125" r="1" />
          <circle cx="215" cy="145" r="1.5" />
          <circle cx="235" cy="165" r="1" />
          <circle cx="60" cy="185" r="1.5" />
          <circle cx="90" cy="192" r="1" />
          <circle cx="150" cy="188" r="1.5" />
          <circle cx="185" cy="193" r="1" />
        </g>

        <!-- === STONE WALKWAY (bottom, leading to porch) === -->
        <!-- Path -->
        <rect
          x="98"
          y="162"
          width="44"
          height="38"
          rx="3"
          fill="url(#tpPath)"
        />
        <!-- Stepping stone tiles -->
        <rect
          x="100"
          y="164"
          width="18"
          height="14"
          rx="2"
          fill="#d4c8a8"
          stroke="#b8a888"
          stroke-width="0.8"
        />
        <rect
          x="122"
          y="164"
          width="18"
          height="14"
          rx="2"
          fill="#c8bca0"
          stroke="#b8a888"
          stroke-width="0.8"
        />
        <rect
          x="100"
          y="182"
          width="18"
          height="14"
          rx="2"
          fill="#c8bca0"
          stroke="#b8a888"
          stroke-width="0.8"
        />
        <rect
          x="122"
          y="182"
          width="18"
          height="14"
          rx="2"
          fill="#d4c8a8"
          stroke="#b8a888"
          stroke-width="0.8"
        />

        <!-- === PORCH FLOOR SLAB === -->
        <rect
          x="38"
          y="88"
          width="164"
          height="74"
          rx="6"
          fill="url(#tpFloor)"
          filter="url(#tpWallShadow)"
        />
        <!-- Floor plank lines (horizontal) -->
        <g stroke="#b09060" stroke-width="0.7" opacity="0.5">
          <line x1="38" y1="100" x2="202" y2="100" />
          <line x1="38" y1="112" x2="202" y2="112" />
          <line x1="38" y1="124" x2="202" y2="124" />
          <line x1="38" y1="136" x2="202" y2="136" />
          <line x1="38" y1="148" x2="202" y2="148" />
        </g>
        <!-- Floor plank lines (vertical short breaks) -->
        <g stroke="#b09060" stroke-width="0.5" opacity="0.3">
          <line x1="70" y1="100" x2="70" y2="162" />
          <line x1="100" y1="88" x2="100" y2="162" />
          <line x1="140" y1="88" x2="140" y2="162" />
          <line x1="170" y1="100" x2="170" y2="162" />
        </g>

        <!-- === HOUSE WALL (top of porch) === -->
        <rect
          x="38"
          y="50"
          width="164"
          height="42"
          rx="4"
          fill="url(#tpWall)"
          filter="url(#tpWallShadow)"
        />
        <!-- Brick texture lines on wall -->
        <g stroke="#c8bfb0" stroke-width="0.6" opacity="0.6">
          <line x1="38" y1="62" x2="202" y2="62" />
          <line x1="38" y1="74" x2="202" y2="74" />
          <line x1="38" y1="86" x2="202" y2="86" />
          <line x1="55" y1="56" x2="55" y2="62" />
          <line x1="80" y1="56" x2="80" y2="62" />
          <line x1="110" y1="56" x2="110" y2="62" />
          <line x1="145" y1="56" x2="145" y2="62" />
          <line x1="175" y1="56" x2="175" y2="62" />
          <line x1="46" y1="62" x2="46" y2="74" />
          <line x1="72" y1="62" x2="72" y2="74" />
          <line x1="98" y1="62" x2="98" y2="74" />
          <line x1="128" y1="62" x2="128" y2="74" />
          <line x1="158" y1="62" x2="158" y2="74" />
          <line x1="190" y1="62" x2="190" y2="74" />
          <line x1="55" y1="74" x2="55" y2="86" />
          <line x1="85" y1="74" x2="85" y2="86" />
          <line x1="115" y1="74" x2="115" y2="86" />
          <line x1="148" y1="74" x2="148" y2="86" />
          <line x1="178" y1="74" x2="178" y2="86" />
        </g>

        <!-- === DOOR (top-down: shows as gap + threshold) === -->
        <!-- Door opening gap in wall -->
        <rect
          x="104"
          y="82"
          width="32"
          height="10"
          rx="2"
          fill="url(#tpFloor)"
        />
        <!-- Door itself (top-down, shown swung open to inside) -->
        <rect
          x="104"
          y="82"
          width="5"
          height="28"
          rx="1"
          fill="#7c4a1a"
          opacity="0.9"
        />
        <!-- Door arc sweep -->
        <path
          d="M109 82 Q125 90 109 110"
          stroke="#7c4a1a"
          stroke-width="0.8"
          fill="none"
          stroke-dasharray="2,2"
          opacity="0.5"
        />
        <!-- Door threshold line -->
        <line
          x1="104"
          y1="88"
          x2="136"
          y2="88"
          stroke="#8b6030"
          stroke-width="1.5"
        />

        <!-- === WINDOWS (top-down: thick wall cutouts) === -->
        <!-- Left window -->
        <rect
          x="52"
          y="82"
          width="28"
          height="8"
          rx="1"
          fill="#a0c8e8"
          stroke="#70a0c0"
          stroke-width="1"
        />
        <line
          x1="66"
          y1="82"
          x2="66"
          y2="90"
          stroke="#70a0c0"
          stroke-width="0.8"
        />
        <!-- Window sill projection -->
        <rect
          x="50"
          y="86"
          width="32"
          height="4"
          rx="1"
          fill="#d8d0c0"
          opacity="0.5"
        />

        <!-- Right window -->
        <rect
          x="160"
          y="82"
          width="28"
          height="8"
          rx="1"
          fill="#a0c8e8"
          stroke="#70a0c0"
          stroke-width="1"
        />
        <line
          x1="174"
          y1="82"
          x2="174"
          y2="90"
          stroke="#70a0c0"
          stroke-width="0.8"
        />
        <rect
          x="158"
          y="86"
          width="32"
          height="4"
          rx="1"
          fill="#d8d0c0"
          opacity="0.5"
        />

        <!-- === COLUMNS (top-down circles) === -->
        <!-- Left column -->
        <circle
          cx="52"
          cy="95"
          r="7"
          fill="#e8e0d0"
          stroke="#c0b8a8"
          stroke-width="1.5"
          filter="url(#tpShadow)"
        />
        <circle cx="52" cy="95" r="4" fill="#d8d0c0" />
        <circle cx="52" cy="95" r="2" fill="#c8c0b0" />
        <!-- Right column -->
        <circle
          cx="188"
          cy="95"
          r="7"
          fill="#e8e0d0"
          stroke="#c0b8a8"
          stroke-width="1.5"
          filter="url(#tpShadow)"
        />
        <circle cx="188" cy="95" r="4" fill="#d8d0c0" />
        <circle cx="188" cy="95" r="2" fill="#c8c0b0" />

        <!-- === ROCKING CHAIRS (top-down) === -->
        <!-- Left chair -->
        <g filter="url(#tpShadow)">
          <!-- Chair seat (oval from top) -->
          <ellipse cx="72" cy="130" rx="18" ry="16" fill="url(#tpChair)" />
          <!-- Seat cushion -->
          <ellipse
            cx="72"
            cy="130"
            rx="14"
            ry="12"
            fill="#f87171"
            opacity="0.8"
          />
          <!-- Chair back (top view = thick top edge) -->
          <rect x="56" y="110" width="32" height="6" rx="3" fill="#5a3010" />
          <!-- Rocker arcs (top view) -->
          <path
            d="M52 142 Q72 148 92 142"
            stroke="#5a3010"
            stroke-width="3"
            fill="none"
            stroke-linecap="round"
          />
          <!-- Armrests -->
          <rect x="54" y="116" width="4" height="18" rx="2" fill="#6b3a18" />
          <rect x="86" y="116" width="4" height="18" rx="2" fill="#6b3a18" />
        </g>

        <!-- Right chair -->
        <g filter="url(#tpShadow)">
          <ellipse cx="168" cy="130" rx="18" ry="16" fill="url(#tpChair)" />
          <ellipse
            cx="168"
            cy="130"
            rx="14"
            ry="12"
            fill="#34d399"
            opacity="0.75"
          />
          <rect x="152" y="110" width="32" height="6" rx="3" fill="#5a3010" />
          <path
            d="M148 142 Q168 148 188 142"
            stroke="#5a3010"
            stroke-width="3"
            fill="none"
            stroke-linecap="round"
          />
          <rect x="150" y="116" width="4" height="18" rx="2" fill="#6b3a18" />
          <rect x="182" y="116" width="4" height="18" rx="2" fill="#6b3a18" />
        </g>

        <!-- === SIDE TABLE (top-down) === -->
        <circle
          cx="120"
          cy="128"
          r="13"
          fill="#8b5e2a"
          stroke="#5a3010"
          stroke-width="1.5"
          filter="url(#tpShadow)"
        />
        <circle cx="120" cy="128" r="9" fill="#a07040" />
        <!-- Tea cups on table (top view) -->
        <circle
          cx="115"
          cy="124"
          r="4"
          fill="#f5f0e8"
          stroke="#c8a870"
          stroke-width="1"
        />
        <circle
          cx="125"
          cy="124"
          r="4"
          fill="#f5f0e8"
          stroke="#c8a870"
          stroke-width="1"
        />
        <circle
          cx="120"
          cy="133"
          r="3.5"
          fill="#fde8c0"
          stroke="#c8a870"
          stroke-width="1"
        />
        <!-- Cup inner -->
        <circle cx="115" cy="124" r="2.5" fill="#d4a840" opacity="0.6" />
        <circle cx="125" cy="124" r="2.5" fill="#d4a840" opacity="0.6" />
        <circle cx="120" cy="133" r="2" fill="#c89030" opacity="0.6" />

        <!-- === FLOWER POTS (top-down) === -->
        <!-- Left pot -->
        <circle
          cx="90"
          cy="92"
          r="9"
          fill="#c05a1a"
          stroke="#8b3a0a"
          stroke-width="1"
          filter="url(#tpShadow)"
        />
        <circle cx="90" cy="92" r="7" fill="url(#tpPlantGrad)" />
        <circle cx="87" cy="89" r="2.5" fill="#f472b6" opacity="0.9" />
        <circle cx="93" cy="89" r="2" fill="#fbbf24" opacity="0.9" />
        <circle cx="90" cy="94" r="2" fill="#f87171" opacity="0.8" />

        <!-- Right pot -->
        <circle
          cx="150"
          cy="92"
          r="9"
          fill="#c05a1a"
          stroke="#8b3a0a"
          stroke-width="1"
          filter="url(#tpShadow)"
        />
        <circle cx="150" cy="92" r="7" fill="url(#tpPlantGrad)" />
        <circle cx="147" cy="89" r="2.5" fill="#a78bfa" opacity="0.9" />
        <circle cx="153" cy="89" r="2" fill="#fb923c" opacity="0.9" />
        <circle cx="150" cy="94" r="2" fill="#f472b6" opacity="0.8" />

        <!-- === LANTERNS (top-down glow circles) === -->
        <!-- Left lantern glow -->
        <circle cx="52" cy="156" r="14" fill="url(#tpLanternGlow)" />
        <circle
          cx="52"
          cy="156"
          r="5"
          fill="#1c1410"
          stroke="#c8a020"
          stroke-width="1.5"
          filter="url(#tpShadow)"
        />
        <circle cx="52" cy="156" r="3" fill="#fef9c3" opacity="0.8" />

        <!-- Right lantern glow -->
        <circle cx="188" cy="156" r="14" fill="url(#tpLanternGlow)" />
        <circle
          cx="188"
          cy="156"
          r="5"
          fill="#1c1410"
          stroke="#c8a020"
          stroke-width="1.5"
          filter="url(#tpShadow)"
        />
        <circle cx="188" cy="156" r="3" fill="#fef9c3" opacity="0.8" />

        <!-- === GARDEN SHRUBS (corner, outside porch) === -->
        <!-- Top-left shrub -->
        <circle cx="22" cy="68" r="14" fill="#166534" opacity="0.8" />
        <circle cx="14" cy="76" r="10" fill="#15803d" opacity="0.7" />
        <circle cx="28" cy="78" r="9" fill="#14532d" opacity="0.8" />
        <circle cx="20" cy="60" r="8" fill="#4ade80" opacity="0.4" />

        <!-- Top-right shrub -->
        <circle cx="218" cy="68" r="14" fill="#166534" opacity="0.8" />
        <circle cx="226" cy="76" r="10" fill="#15803d" opacity="0.7" />
        <circle cx="212" cy="78" r="9" fill="#14532d" opacity="0.8" />
        <circle cx="220" cy="60" r="8" fill="#4ade80" opacity="0.4" />

        <!-- Bottom-left shrub -->
        <circle cx="20" cy="170" r="11" fill="#15803d" opacity="0.7" />
        <circle cx="12" cy="178" r="8" fill="#166534" opacity="0.8" />

        <!-- Bottom-right shrub -->
        <circle cx="220" cy="170" r="11" fill="#15803d" opacity="0.7" />
        <circle cx="228" cy="178" r="8" fill="#166534" opacity="0.8" />

        <!-- === DIMENSION / PLAN ANNOTATIONS === -->
        <!-- Width arrow top -->
        <line
          x1="38"
          y1="42"
          x2="202"
          y2="42"
          stroke="#80c0ff"
          stroke-width="1"
        />
        <line
          x1="38"
          y1="38"
          x2="38"
          y2="46"
          stroke="#80c0ff"
          stroke-width="1"
        />
        <line
          x1="202"
          y1="38"
          x2="202"
          y2="46"
          stroke="#80c0ff"
          stroke-width="1"
        />
        <text
          x="120"
          y="40"
          text-anchor="middle"
          font-family="monospace"
          font-size="7"
          fill="#80c0ff"
        >
          8.2 m
        </text>

        <!-- Depth arrow right -->
        <line
          x1="210"
          y1="88"
          x2="210"
          y2="162"
          stroke="#80c0ff"
          stroke-width="1"
        />
        <line
          x1="206"
          y1="88"
          x2="214"
          y2="88"
          stroke="#80c0ff"
          stroke-width="1"
        />
        <line
          x1="206"
          y1="162"
          x2="214"
          y2="162"
          stroke="#80c0ff"
          stroke-width="1"
        />
        <text
          x="222"
          y="128"
          text-anchor="middle"
          font-family="monospace"
          font-size="7"
          fill="#80c0ff"
          transform="rotate(90 222 128)"
        >
          3.7 m
        </text>

        <!-- North arrow -->
        <circle
          cx="22"
          cy="22"
          r="10"
          fill="#1a2a18"
          stroke="#4a7a3a"
          stroke-width="1"
        />
        <polygon points="22,12 19,22 22,20 25,22" fill="#80c0ff" />
        <polygon points="22,32 19,22 22,24 25,22" fill="#4a6a38" />
        <text
          x="22"
          y="14"
          text-anchor="middle"
          font-family="monospace"
          font-size="6"
          fill="#80c0ff"
        >
          N
        </text>

        <!-- Compass labels -->
        <text
          x="22"
          y="35"
          text-anchor="middle"
          font-family="monospace"
          font-size="5"
          fill="#4a8a5a"
        >
          S
        </text>
        <text
          x="12"
          y="23"
          text-anchor="middle"
          font-family="monospace"
          font-size="5"
          fill="#4a8a5a"
        >
          W
        </text>
        <text
          x="33"
          y="23"
          text-anchor="middle"
          font-family="monospace"
          font-size="5"
          fill="#4a8a5a"
        >
          E
        </text>

        <!-- === LEGEND STRIP === -->
        <rect
          x="38"
          y="172"
          width="164"
          height="20"
          rx="4"
          fill="#0e1a0a"
          opacity="0.7"
        />
        <!-- Legend items -->
        <rect x="44" y="176" width="8" height="8" rx="1" fill="url(#tpFloor)" />
        <text
          x="55"
          y="183"
          font-family="monospace"
          font-size="6"
          fill="#a0c880"
        >
          Deck
        </text>
        <rect x="82" y="176" width="8" height="8" rx="1" fill="url(#tpWall)" />
        <text
          x="93"
          y="183"
          font-family="monospace"
          font-size="6"
          fill="#a0c880"
        >
          Wall
        </text>
        <rect
          x="118"
          y="176"
          width="8"
          height="8"
          rx="1"
          fill="url(#tpChair)"
        />
        <text
          x="129"
          y="183"
          font-family="monospace"
          font-size="6"
          fill="#a0c880"
        >
          Furniture
        </text>
        <circle cx="163" cy="180" r="4" fill="#166534" />
        <text
          x="170"
          y="183"
          font-family="monospace"
          font-size="6"
          fill="#a0c880"
        >
          Shrubs
        </text>

        <!-- Label -->
        <text
          x="120"
          y="197"
          text-anchor="middle"
          font-family="'Palatino Linotype', Palatino, serif"
          font-size="11"
          fill="#a0d880"
          font-weight="bold"
          letter-spacing="2.5"
        >
          PORCH — TOP VIEW
        </text>
      </svg>
    </div>

    <!-- svg land -->
    <div id="svg__land" class="svg__house" :class="{ active: activeIcon.land }">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 160"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: #bfdbfe" />
            <stop offset="100%" style="stop-color: #dbeafe" />
          </linearGradient>
          <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: #86efac" />
            <stop offset="100%" style="stop-color: #4ade80" />
          </linearGradient>
          <linearGradient id="soilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: #d97706" />
            <stop offset="100%" style="stop-color: #92400e" />
          </linearGradient>
        </defs>
        <!-- Sky -->
        <rect
          width="200"
          height="160"
          rx="12"
          fill="url(#skyGrad)"
          stroke="#60a5fa"
          stroke-width="2"
        />
        <!-- Clouds -->
        <ellipse cx="40" cy="25" rx="20" ry="10" fill="white" opacity="0.8" />
        <ellipse cx="55" cy="20" rx="18" ry="12" fill="white" opacity="0.9" />
        <ellipse cx="25" cy="22" rx="14" ry="9" fill="white" opacity="0.8" />
        <ellipse cx="155" cy="30" rx="18" ry="9" fill="white" opacity="0.7" />
        <ellipse cx="170" cy="25" rx="16" ry="11" fill="white" opacity="0.8" />
        <ellipse cx="140" cy="27" rx="12" ry="8" fill="white" opacity="0.7" />
        <!-- Sun -->
        <circle cx="170" cy="15" r="12" fill="#fbbf24" opacity="0.9" />
        <line
          x1="170"
          y1="0"
          x2="170"
          y2="4"
          stroke="#fbbf24"
          stroke-width="2"
        />
        <line
          x1="182"
          y1="6"
          x2="179"
          y2="9"
          stroke="#fbbf24"
          stroke-width="2"
        />
        <line
          x1="186"
          y1="15"
          x2="183"
          y2="15"
          stroke="#fbbf24"
          stroke-width="2"
        />
        <!-- Ground level -->
        <rect
          x="0"
          y="95"
          width="200"
          height="65"
          rx="0"
          fill="url(#groundGrad)"
        />
        <rect x="0" y="148" width="200" height="12" rx="0" fill="#22c55e" />
        <!-- Plot boundary fence -->
        <rect
          x="15"
          y="60"
          width="170"
          height="90"
          rx="4"
          fill="none"
          stroke="#78350f"
          stroke-width="2"
          stroke-dasharray="6,3"
        />
        <!-- Fence posts -->
        <rect x="13" y="58" width="5" height="12" rx="1" fill="#92400e" />
        <rect x="182" y="58" width="5" height="12" rx="1" fill="#92400e" />
        <rect x="13" y="135" width="5" height="12" rx="1" fill="#92400e" />
        <rect x="182" y="135" width="5" height="12" rx="1" fill="#92400e" />
        <!-- Soil / plot area -->
        <rect
          x="30"
          y="100"
          width="140"
          height="42"
          rx="5"
          fill="url(#soilGrad)"
          opacity="0.7"
        />
        <!-- Soil furrows -->
        <line
          x1="30"
          y1="110"
          x2="170"
          y2="110"
          stroke="#78350f"
          stroke-width="1.5"
          opacity="0.5"
        />
        <line
          x1="30"
          y1="120"
          x2="170"
          y2="120"
          stroke="#78350f"
          stroke-width="1.5"
          opacity="0.5"
        />
        <line
          x1="30"
          y1="130"
          x2="170"
          y2="130"
          stroke="#78350f"
          stroke-width="1.5"
          opacity="0.5"
        />
        <!-- Survey marker / center pin -->
        <circle cx="100" cy="80" r="5" fill="#ef4444" />
        <line
          x1="100"
          y1="60"
          x2="100"
          y2="95"
          stroke="#ef4444"
          stroke-width="1.5"
          stroke-dasharray="3,2"
        />
        <line
          x1="30"
          y1="80"
          x2="170"
          y2="80"
          stroke="#ef4444"
          stroke-width="1.5"
          stroke-dasharray="3,2"
          opacity="0.5"
        />
        <!-- Trees -->
        <rect x="20" y="80" width="6" height="20" rx="1" fill="#78350f" />
        <circle cx="23" cy="75" r="11" fill="#16a34a" />
        <circle cx="18" cy="79" r="8" fill="#15803d" />
        <rect x="174" y="80" width="6" height="20" rx="1" fill="#78350f" />
        <circle cx="177" cy="75" r="11" fill="#16a34a" />
        <circle cx="182" cy="79" r="8" fill="#15803d" />
        <!-- Compass rose -->
        <circle
          cx="185"
          cy="110"
          r="10"
          fill="white"
          opacity="0.8"
          stroke="#60a5fa"
          stroke-width="1"
        />
        <text
          x="185"
          y="106"
          text-anchor="middle"
          font-size="6"
          fill="#1e40af"
          font-weight="bold"
        >
          N
        </text>
        <text x="185" y="118" text-anchor="middle" font-size="5" fill="#6b7280">
          S
        </text>
        <text x="179" y="112" text-anchor="middle" font-size="5" fill="#6b7280">
          W
        </text>
        <text x="191" y="112" text-anchor="middle" font-size="5" fill="#6b7280">
          E
        </text>
        <line
          x1="185"
          y1="102"
          x2="185"
          y2="107"
          stroke="#ef4444"
          stroke-width="1.5"
        />
        <line
          x1="185"
          y1="113"
          x2="185"
          y2="118"
          stroke="#374151"
          stroke-width="1"
        />
        <!-- Measurement lines -->
        <line
          x1="30"
          y1="58"
          x2="170"
          y2="58"
          stroke="#3b82f6"
          stroke-width="1"
        />
        <line
          x1="30"
          y1="55"
          x2="30"
          y2="61"
          stroke="#3b82f6"
          stroke-width="1.5"
        />
        <line
          x1="170"
          y1="55"
          x2="170"
          y2="61"
          stroke="#3b82f6"
          stroke-width="1.5"
        />
        <text x="100" y="55" text-anchor="middle" font-size="7" fill="#1d4ed8">
          ← 15m →
        </text>
      </svg>
    </div>
  </div>
</template>
<style scoped>
.svg__house {
  display: none;
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  outline: none;
  border: 1px solid transparent;
}

.svg__house.active {
  display: grid;
  width: 100%;
  height: 80%;
  padding-top: 0.1rem;
  border-radius: 0.25rem;
  place-items: center;
  outline: none;
  border: 1px solid transparent;
}
</style>
