<script setup>
import { reactive, onUpdated, computed } from "vue";

const props = defineProps({ userLanguage: String });

/* const indexLang = reactive({ val: 0 }); */

const indexLang = computed(() => {
  return props.userLanguage === "FR" ? 0 : 1;
});

const name = reactive(makeField());
const email = reactive(makeField());
const message = reactive(makeField());

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
const DEBOUNCE_MS = 3000; // 3 seconds after user stops typing

function countChars(str) {
  return str.length;
}

function makeField() {
  return {
    value: "",
    touched: false, // has the user ever typed?
    blurred: false, // has the field lost focus?
    typing: false, // debounce pending (dots visible)
    validated: false, // debounce fired at least once
    valid: false,
    showError: false,
    _timer: null,
  };
}

/* ── Validators ─────────────────────────────── */

function validateName(f) {
  f.valid = f.value.trim().length >= 6;
}

function validateEmail(f) {
  f.valid = EMAIL_REGEX.test(f.value.trim());
}

function validateMessage(f) {
  const cc = countChars(f.value);
  f.valid = cc >= 150 && cc <= 350;
}

const validators = new Map([
  [name, validateName],
  [email, validateEmail],
  [message, validateMessage],
]);

/* ── Core logic ─────────────────────────────── */
function onInput(f) {
  f.touched = true;
  f.typing = true;
  f.showError = false;

  // Clear previous timer
  clearTimeout(f._timer);

  f._timer = setTimeout(() => {
    f.typing = false;
    f.validated = true;
    validators.get(f)(f);
    // Show error only after debounce + invalid
    f.showError = !f.valid;
  }, DEBOUNCE_MS);
}

// Blur: validate immediately (no waiting)
function onBlur(f) {
  f.blurred = true;
  clearTimeout(f._timer);
  f.typing = false;
  if (f.touched) {
    f.validated = true;
    validators.get(f)(f);
    f.showError = !f.valid;
  }
}

/* ── CSS class helper ───────────────────────── */

function fieldClass(f) {
  if (!f.validated || f.typing) return "";
  return f.valid ? "is__valid" : "is__invalid";
}

/* ── Char count / counter class ─────────────── */
const wordCount = computed(() => countChars(message.value));

const counterClass = computed(() => {
  if (!message.validated || message.typing) return "";
  if (wordCount.value > 350) return "over";
  if (wordCount.value >= 150) return "ok";
  return "over"; // too few words also styled red
});

const messageError = computed(() => {
  const cc = wordCount.value;
  if (cc < 150)
    return `Too short — ${150 - cc} more character${150 - cc > 1 ? "s" : ""} needed.`;
  if (cc > 350)
    return `Too long — please remove ${cc - 350} character${cc - 350 > 1 ? "s" : ""}.`;
  return "";
});

onUpdated(() => {
  if (props.userLanguage) {
    indexLang.val = props.userLanguage === "FR" ? 0 : 1;
  }
});
</script>
<template>
  <section id="contact" class="contact">
    <div class="contact__container w-full pt-20 pb-8">
      <div
        class="contact__layout-form relative mx-auto flex flex-row justify-center"
      >
        <div class="contact__image-wrap w-1/2 h-full p-8">
          <div class="contact__image"></div>
        </div>
        <div class="contact__form-group w-1/2 flex flex-col py-8 px-6">
          <div class="contact__form-title">
            <p v-if="!indexLang" class="w-[80%] font-semibold opacity-60">
              Un Conseil, une Préoccupation, plus de détails...
            </p>
            <p v-else class="w-[80%] font-semibold opacity-60">
              Any Guidance, preoccupation, more details...
            </p>
          </div>
          <div class="contact__form pt-6">
            <div
              class="contact__form-field w-full flex flex-col gap-2"
              :class="fieldClass(name)"
            >
              <label for="name">username</label>
              <div class="input__form-wrap relative">
                <input
                  id="name"
                  type="text"
                  class="input__form"
                  v-model="name.value"
                  placeholder="e.g: johnwick"
                  autocomplete="off"
                  @input="onInput(name)"
                  @blur="onBlur(name)"
                />
                <div class="status-icon">
                  <!-- typing dots shown while debounce pending -->
                  <div class="typing-dots" :class="{ active: name.typing }">
                    <span></span><span></span><span></span>
                  </div>
                  <!-- check -->
                  <svg
                    class="icon-check"
                    v-if="!name.typing"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      stroke="#22c55e"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6 10l3 3 5-5"
                      stroke="#22c55e"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <!-- x -->
                  <svg
                    class="icon-x"
                    v-if="!name.typing"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      stroke="#ef4444"
                      stroke-width="1.5"
                    />
                    <path
                      d="M7 7l6 6M13 7l-6 6"
                      stroke="#ef4444"
                      stroke-width="1.8"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <transition name="err">
                  <div class="error__msg" :class="{ visible: name.showError }">
                    <span
                      class="smaller__span mt-[0.15rem] pl-[0.2rem] flex items-center gap-[0.4rem] text-[var(--border-red)]"
                      >Username must be at least 6 characters.</span
                    >
                  </div>
                </transition>
              </div>
            </div>
            <div
              class="contact__form-field w-full mt-4 flex flex-col gap-2"
              :class="fieldClass(email)"
            >
              <label for="email">Email</label>
              <div class="input__wrap-form relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  class="input__form"
                  v-model="email.value"
                  placeholder="e.g: you@example.com"
                  autocomplete="off"
                  @input="onInput(email)"
                  @blur="onBlur(email)"
                />
                <div class="status-icon">
                  <div class="typing-dots" :class="{ active: email.typing }">
                    <span></span><span></span><span></span>
                  </div>
                  <svg
                    class="icon-check"
                    v-if="!email.typing"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      stroke="#22c55e"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6 10l3 3 5-5"
                      stroke="#22c55e"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    class="icon-x"
                    v-if="!email.typing"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      stroke="#ef4444"
                      stroke-width="1.5"
                    />
                    <path
                      d="M7 7l6 6M13 7l-6 6"
                      stroke="#ef4444"
                      stroke-width="1.8"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
              <transition name="err">
                <div class="error__msg" :class="{ visible: email.showError }">
                  <span
                    class="smaller__span mt-[0.15rem] pl-[0.2rem] flex items-center gap-[0.4rem] text-[var(--border-red)]"
                    >Please enter a valid email address.</span
                  >
                </div>
              </transition>
            </div>
            <div
              class="contact__form-field w-full mt-4 flex flex-col gap-2"
              :class="fieldClass(message)"
            >
              <label for="message">Message</label>
              <div class="input__wrap-form relative">
                <textarea
                  id="message"
                  name="message"
                  class="textarea__form"
                  placeholder=" Tell us your need or suggestions..."
                ></textarea>
              </div>
              <div
                class="counter w-full flex flex-row justify-end"
                :class="counterClass"
              >
                <span class="smaller__span">{{ wordCount }} / 350 chars</span>
              </div>
              <transition name="err">
                <div class="error__msg" :class="{ visible: message.showError }">
                  <span
                    class="smaller__span -mt-[0.45rem] pl-[0.2rem] flex items-center gap-[0.4rem] text-[var(--border-red)]"
                    >{{ messageError }}</span
                  >
                </div>
              </transition>
            </div>
            <div
              class="contact__validation-wrap w-full h-20 pl-4 pr-1 flex flex-row justify-end items-center"
            >
              <div class="contact__form-validation relative w-max h-max">
                <a
                  v-if="!indexLang"
                  href="
        #"
                  class="cta__button-primary"
                  >Laisser un Message</a
                >
                <a
                  v-else
                  href="
        #"
                  class="cta__button-primary"
                  >Leave a Message</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="contact__vertical-straightbar"></div>
      </div>
      <div class="contact__layout-phones relative mx-auto">
        <div class="contact__phones w-full flex flex-col items-center">
          <div class="contact__box-transition">
            <p>OR</p>
          </div>
          <div class="contact__phones-title pt-12">
            <p class="font-semibold opacity-60">CONTACT US</p>
          </div>
          <div
            class="contact__phones w-8/12 pt-8 mx-auto flex flex-row justify-center"
          >
            <div class="phone__icon">
              <div class="icon__phone"></div>
              <div class="icon__whatsapp"></div>
            </div>
            <h4 class="phone__number">6 72 99 97 49</h4>
            <h4 class="phone__space ml-4">/</h4>
            <h4 class="phone__number ml-4">6 76 93 58 16</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* utilities */

h4.phone__number,
h4.phone__space {
  font-size: var(--regular-size);
  color: var(--text-paragraph);
  /* color: var(--title-color); */
  opacity: 0.7;
}

#contact {
  --border-red: #ac3030;
  --border-green: #22c55e;
  --glow-green: rgba(34, 197, 94, 0.18);
  --glow-red: rgba(239, 68, 68, 0.18);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
}

/* contact layout form */

.contact__layout-form {
  width: min(90%, 60rem);
  padding-top: 0.5rem;
  height: 38rem;
  border-radius: 0.25rem;
  border: 1px solid var(--accent-color-2);
  border-bottom: 1px solid transparent;
}

.contact__image {
  width: 100%;
  height: 100%;
  background: url("../assets/images/Solomon-Rodgers_Pixabay.jpg") no-repeat
    center;
  background-size: cover;
  border-radius: 0.35rem;
  border: 1px solid var(--accent-color-1);
}

.contact__vertical-straightbar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2px;
  height: 80%;
  border: 2px solid var(--accent-color-2);
}

/* contact phone title */

.contact__layout-phones {
  width: min(90%, 60rem);
  height: 12rem;
  border: 1px solid var(--accent-color-2);
}

.contact__phones-title h4 {
  letter-spacing: 2px;
}

.contact__box-transition {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5rem;
  padding: 0.25rem 0;
  text-align: center;
  background-color: var(--background-primary);
}

input,
textarea {
  /* Smooth border + shadow transition */
  transition:
    border-color 0.35s var(--ease-smooth),
    box-shadow 0.35s var(--ease-smooth),
    background 0.35s var(--ease-smooth);
}

/* label display */
.contact__form-field.is__valid label {
  color: var(--border-green);
}

.contact__form-field.is__invalid label {
  color: var(--border-red);
}

/* State: valid */
.contact__form-field.is__valid input,
.contact__form-field.is__valid textarea {
  opacity: 0.86;
  border-color: var(--border-green);
  box-shadow:
    0 0 0 3px var(--glow-green),
    0 2px 12px rgba(34, 197, 94, 0.08);
  background-color: hsl(41, 22%, 86%);
}

/* State: invalid */
.contact__form-field.is__invalid input,
.contact__form-field.is__invalid textarea {
  opacity: 0.86;
  border-color: var(--border-red);
  box-shadow:
    0 0 0 3px var(--glow-red),
    0 2px 12px rgba(239, 68, 68, 0.08);
  background-color: var(--accent-color-1);
}

/* Status icon */

.status-icon {
  position: absolute;
  right: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.status-icon svg {
  width: 18px;
  height: 18px;
  opacity: 0;
  transform: scale(0.5) rotate(-20deg);
  transition:
    opacity 0.3s var(--ease-smooth),
    transform 0.4s var(--ease-spring);
}

.contact__form-field.is__valid .icon-check {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.contact__form-field.is__invalid .icon-x {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

/* Typing indicator dots */
.typing-dots {
  display: flex;
  align-items: center;
  gap: 3px;
  opacity: 0;
  transition: opacity 0.2s;
}
.typing-dots.active {
  opacity: 1;
}
.typing-dots span {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--muted);
  animation: bounce 1s infinite ease-in-out;
}
.typing-dots span:nth-child(2) {
  animation-delay: 0.15s;
}
.typing-dots span:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  40% {
    transform: translateY(-4px);
    opacity: 1;
  }
}

/* Char counter */
.counter {
  color: var(--link--external-btn);
  margin-top: 0.4rem; /* add or not */
  font-variant-numeric: tabular-nums;
  transition: color 0.3s;
}

.counter.over {
  color: var(--border-red);
}
.counter.ok {
  color: var(--border-green);
}

/* error message */
.error__msg {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transform: translateY(-6px);
  transition:
    max-height 0.4s var(--ease-smooth),
    opacity 0.35s var(--ease-smooth),
    transform 0.35s var(--ease-spring);
}

.error__msg.visible {
  max-height: 60px;
  opacity: 1;
  transform: translateY(0);
}

/* .error__msg span {
  font-size: var(--mini-size);
} */

.error__msg span::before {
  content: "↳";
  font-size: var(--mini-size);
  opacity: 0.7;
}

/* Shake animation for instant red feedback */

.contact__form-field.shake input,
.contact__form-field.shake textarea {
  animation: shake 0.4s var(--ease-smooth);
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-4px);
  }
  40% {
    transform: translateX(4px);
  }
  60% {
    transform: translateX(-3px);
  }
  80% {
    transform: translateX(3px);
  }
}

/* submit button */

a.cta__button-primary {
  padding: 0.6em 1.25em;
  font-size: var(--mini-size);
  font-weight: 500;
  line-height: 1.4;
  opacity: 0.545;
  background-color: var(--text-paragraph);
  transform: scale(1);
  transition: all 350ms ease;
  outline-offset: 0px;
  outline: 0px solid var(--background-primary);
}

a.cta__button-primary:hover {
  padding: 0.6em 1.25em;
  font-size: var(--mini-size);
  opacity: 0.85;
  background-color: var(--title-color);
  transform: scale(1.05);
  outline-offset: -3px;
  outline: 1px solid var(--background-primary);
  transition: all 650ms ease;
}
</style>
