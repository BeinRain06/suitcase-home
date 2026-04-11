<script setup>
import "../style-contact-submit.css";

import {
  ref,
  reactive,
  onUpdated,
  computed,
  watch,
  nextTick,
  onMounted,
  onUnmounted,
} from "vue";

import { useRouter } from "vue-router";

import { useDisplayDataStore } from "../store-management/useDisplayDataStore.js";

import { useWhatsappStore } from "../store-management/whatsappStore.js";

import { sendDataMail } from "../api-data/api-email-function.js";

import ContactCues from "../some-svg-components/ContactCues.vue";

const props = defineProps({ userLanguage: String });

const router = useRouter();

const displayStore = useDisplayDataStore();
const whatsappStore = useWhatsappStore();

const indexLang = computed(() => {
  return props.userLanguage === "FR" ? 0 : 1;
});

const name = reactive(makeField());
const email = reactive(makeField());
const message = reactive(makeField());
const secretPassRef = ref();

/* ── Submit state ─────────────────────────────── */
const sending = ref(false); // normal set: false
const sent = ref(false); // normal set: false
const sendError = ref("");

/* ─── Recipient tags ──────────────────────────── */
const recipients = ref([]); // [{ id, email, removing }]
const tagDraft = ref("");
const tagInputRef = ref(null);
const recipientsError = ref(false);

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
const DEBOUNCE_MS = 3000; // 3 seconds after user stops typing

const THIS_GOOGLE_APP_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyvQPOhvzy8fLFCUyjV8mm8Lur_-8cTTUetxWQvgIfubVLOlYwSCKUF1Vd03M04evpC/exec";

/*  const URL = "https://script.google.com/macros/s/AKfycbw0eKT4aqGJ44i2V7NN253u05Qit8lfUJqaj9kbPWGRPr6VIlj9sYZHAFeTOt7XOZxi/exec"; */

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
  f.valid = cc >= 80 && cc <= 350;
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
const charCount = computed(() => countChars(message.value));

const counterClass = computed(() => {
  if (!message.validated || message.typing) return "";
  if (charCount.value > 350) return "over";
  if (charCount.value >= 80) return "ok";
  return "over"; // too few words also styled red
});

const messageError = computed(() => {
  const cc = charCount.value;
  if (cc < 80)
    return `Too short — ${80 - cc} more character${80 - cc > 1 ? "s" : ""} needed.`;
  if (cc > 350)
    return `Too long — please remove ${cc - 350} character${cc - 350 > 1 ? "s" : ""}.`;
  return "";
});

const formReady = computed(() => name.valid && email.valid && message.valid);

async function submitForm() {
  // 1. Force-validate all fields immediately (covers the
  //    edge case where the user never blurred a field)
  [name, email, message].forEach((f) => {
    clearTimeout(f._timer);
    f.typing = false;
    f.validated = true;
    validators.get(f)(f);
    f.showError = !f.valid;
  });

  // 2. Abort if anything is still invalid
  if (!formReady.value) return;

  // 3. Prepare data template parameters.
  const formData = {
    name: name.value.trim(),
    email: email.value.trim(),
    message: message.value.trim(),
    secretKey: secretPassRef.value.value,
  };

  // 4. Send
  sendError.value = "";
  /* sending.value = true; */

  try {
    sending.value = true;

    await nextTick();

    await sendDataMail(formData, THIS_GOOGLE_APP_SCRIPT_URL);

    setTimeout(() => {
      sent.value = true;
    }, 3000);

    //5. Success
    sending.value = false;
    /*  sent.value = true; */
    resetAll();
  } catch (err) {
    // Failure
    sending.value = false;
    sendError.value = "Something went wrong — please try again in a moment.";
    console.error("[sendDataMail error]", err);
  }
}

/* ── Reset all reactive field state ───────────── */
function resetAll() {
  [name, email, message].forEach((f) => Object.assign(f, makeField()));
  sendError.value = "";
}

function goHome() {
  /* sent.value = false;
  resetAll(); */

  /* router.push("/"); */
  router.push({ name: "home" });
}

/* handlescroll -whatsapp btn display */
const handleScroll = () => {
  const scrollY = window.scrollY; // Current distance from top

  const windowHeight = window.innerHeight; // Height of the browser window
  const documentHeight = document.documentElement.scrollHeight; // Total page height

  // 1. Logic for appearing: 50px from the BOTTOM
  // Total height - (scroll position + window size) = distance from bottom
  const distanceFromBottom = Math.max(
    documentHeight - (scrollY + windowHeight),
  );

  whatsappStore.$patch({ isItContactPage: true });

  // 2. FLAG: Is the user essentially at the bottom?
  // We use 50px OR a check to see if they can't scroll any further
  const isAtBottom =
    distanceFromBottom <= 50 || scrollY + windowHeight >= documentHeight - 2;

  // 3. FLAG: Is the user essentially at the top?
  const isAtTop = scrollY <= 60;

  // THE LOGIC
  if (isAtBottom) {
    whatsappStore.show();
  } else if (isAtTop) {
    // We use "else if" so the 'show' logic takes priority
    // if the page is so short that top and bottom overlap.
    whatsappStore.hide();
  }
};

watch(sent, async (newSent, oldSent) => {
  if (newSent) {
    await displayStore.$patch({ isNavbar: false });
  }
});

onUpdated(() => {
  if (props.userLanguage) {
    indexLang.val = props.userLanguage === "FR" ? 0 : 1;
  }
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <section id="contact" class="contact">
    <transition name="vt" mode-out="out-in">
      <!-- ══════════════════════════════════════════
           FORM VIEW  — only 3 fields, no recipient input
      ══════════════════════════════════════════════ -->
      <div v-if="!sent" key="form">
        <div class="contact__container w-full pt-20 pb-8">
          <div
            class="contact__layout-form relative mx-auto flex flex-col min-[620px]:flex-row justify-center"
          >
            <div
              class="contact__image-wrap w-full h-0 min-[420px]:h-4/12 min-[420px]:block min-[620px]:w-1/2 min-[620px]:h-full p-8"
            >
              <div class="contact__image"></div>
            </div>
            <div
              class="contact__form-group w-full h-full min-[420px]:h-8/12 min-[620px]:w-1/2 min-[620px]:h-full flex flex-col py-4 min-[620px]:py-8 px-6"
            >
              <div class="contact__form-title">
                <p v-if="!indexLang" class="w-[80%] font-semibold opacity-60">
                  Un Conseil, une Préoccupation, plus de détails...
                </p>
                <p v-else class="w-[80%] font-semibold opacity-60">
                  Any Guidance, preoccupation, more details...
                </p>
              </div>
              <div class="contact__form pt-6">
                <input
                  type="hidden"
                  name="secretkey"
                  value="mypass_realestate_project_1"
                  ref="secretPassRef"
                />
                <div
                  class="contact__form-field w-full flex flex-col gap-2"
                  :class="fieldClass(name)"
                >
                  <div
                    class="label__wrap w-max h-8 flex flex-row items-center gap-2"
                  >
                    <div class="icon__label pl-2 pt-[2px]">
                      <div
                        class="icon__content basis--icon solar--user-outline"
                      ></div>
                    </div>
                    <label for="name">username</label>
                  </div>
                  <div class="input__form-wrap relative">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      class="input__form"
                      v-model="name.value"
                      placeholder="e.g: johnwick"
                      autocomplete="off"
                      :disabled="sending"
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
                      <div
                        class="error__msg"
                        :class="{ visible: name.showError }"
                      >
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
                  <div
                    class="label__wrap w-max h-8 flex flex-row items-center gap-2"
                  >
                    <div class="icon__label pl-2 pt-[2px]">
                      <div
                        class="icon__content basis--icon streamline--send-email"
                      ></div>
                    </div>
                    <label for="email">Email</label>
                  </div>
                  <div class="input__wrap-form relative">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      class="input__form"
                      v-model="email.value"
                      placeholder="e.g: you@example.com"
                      autocomplete="off"
                      :disabled="sending"
                      @input="onInput(email)"
                      @blur="onBlur(email)"
                    />
                    <div class="status-icon">
                      <div
                        class="typing-dots"
                        :class="{ active: email.typing }"
                      >
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
                    <div
                      class="error__msg"
                      :class="{ visible: email.showError }"
                    >
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
                  <div
                    class="label__wrap w-max h-8 flex flex-row items-center gap-2"
                  >
                    <div class="icon__label pl-2 pt-[2px]">
                      <div
                        class="icon__content basis--icon wpf--message-outline"
                      ></div>
                    </div>
                    <label for="message">Message</label>
                  </div>
                  <div class="input__wrap-form relative">
                    <textarea
                      id="message"
                      name="message"
                      class="textarea__form"
                      v-model="message.value"
                      placeholder=" Tell us your need or suggestions..."
                      :disabled="sending"
                      @input="onInput(message)"
                      @blur="onBlur(message)"
                    ></textarea>
                  </div>
                  <div
                    class="counter w-full flex flex-row justify-end"
                    :class="counterClass"
                  >
                    <span class="smaller__span"
                      >{{ charCount }} / 350 chars</span
                    >
                  </div>
                  <transition name="err">
                    <div
                      class="error__msg"
                      :class="{ visible: message.showError }"
                    >
                      <span
                        class="smaller__span -mt-[0.45rem] pl-[0.2rem] flex items-center gap-[0.4rem] text-[var(--border-red)]"
                        >{{ messageError }}</span
                      >
                    </div>
                  </transition>
                </div>
                <div
                  class="contact__validation-wrap w-full h-12 min-[420px]:h-20 pl-4 pr-1 flex flex-row justify-center min-[420px]:justify-end items-center"
                >
                  <!-- SEND ERROR IF OCCUR -->
                  <div v-if="sendError" class="send__error">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle
                        cx="10"
                        cy="10"
                        r="9"
                        stroke="#ef4444"
                        stroke-width="1.5"
                      />
                      <path
                        d="M10 6v4.5M10 13v.5"
                        stroke="#ef4444"
                        stroke-width="1.8"
                        stroke-linecap="round"
                      />
                    </svg>
                    <p>{{ sendError }}</p>
                  </div>
                  <!-- VALIDATION BUTTON -->
                  <div
                    class="contact__form-validation relative w-max h-max"
                    :disabled="sending || !formReady"
                    @click.stop="submitForm"
                  >
                    <button v-if="!indexLang" class="submit__form">
                      <div v-if="!sending" class="block text-[length:inherit]">
                        Laisser un Message
                      </div>
                      <div
                        v-else
                        class="w-max flex flex-row gap-2 text-[length:inherit]"
                      >
                        <!-- <span class="spinner w-max hidden"></span> -->
                        <span class="smaller__span"
                          >Your message is being transferred…</span
                        >
                      </div>
                    </button>
                    <button v-else class="submit__form">
                      <div v-if="!sending" class="block text-[length:inherit]">
                        Drop a Message
                      </div>
                      <div
                        v-else
                        class="w-max flex flex-row gap-2 text-[length:inherit]"
                      >
                        <span class="spinner w-max"></span>
                        <span class="smaller__span"
                          >Your message is being transferred…</span
                        >
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="contact__vertical-straightbar hidden min-[620px]:block"
            ></div>
          </div>
          <div class="contact__layout-phones relative mx-auto">
            <div class="contact__phones w-full flex flex-col items-center">
              <div class="contact__box-transition">
                <p>OR</p>
              </div>
              <div class="contact__phones-title pt-12">
                <p
                  class="font-semibold opacity-60 text-[var(--highlight-text)]"
                >
                  CONTACT US
                </p>
              </div>
              <div
                class="contact__phones w-8/12 h-3/12 pt-2 min-[620px]:pt-8 mx-auto flex flex-col items-center justify-center gap-2"
              >
                <div
                  class="icons__phone-number w-max h-6 flex flex-row gap-2 items-center justify-center"
                >
                  <div
                    class="icon__phone opacity-80 text-[var(--highlight-text)]"
                  >
                    <div
                      class="icon__content basis--icon mdi-light--phone"
                    ></div>
                  </div>
                  <!-- <div class="icon__whatsapp">
                    <div
                      class="icon__content basis--icon streamline-logos--whatsapp-logo"
                    ></div>
                  </div> -->
                </div>
                <div
                  class="phone__numbers w-full pt-3 flex flex-col items-center min-[620px]:flex-row min-[620px]:justify-center"
                >
                  <h4 class="phone__number">+237 6 72 99 97 49</h4>
                  <h4 class="phone__space min-[620px]:ml-4">/</h4>
                  <h4 class="phone__number min-[620px]:ml-4">
                    +237 6 76 93 58 16
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /form -->

      <!-- ══════════════════════════════════════════
           SUCCESS SCREEN
      ══════════════════════════════════════════════ -->
      <div v-else key="success" class="success__screen mt-20">
        <div class="success__icon-wrap">
          <svg viewBox="0 0 44 44" fill="none">
            <circle
              cx="22"
              cy="22"
              r="20"
              stroke="#22c55e"
              stroke-width="1.8"
            />
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
      <!-- /success -->
    </transition>
  </section>
</template>
<style scoped>
@media screen and (min-width: 140px) {
  /* utilities */

  h4.phone__number,
  h4.phone__space {
    font-size: var(--regular-size);
    font-weight: medium;
    color: var(--link--external-btn);
    opacity: 0.74;
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
    width: min(94%, 60rem);
    padding-top: 0.5rem;
    height: 41rem;
    border-radius: 0.25rem;
    border: 1px solid var(--accent-color-2);
    border-bottom: 1px solid transparent;
  }

  .contact__image {
    width: 100%;
    height: 100%;
    display: none;
    background: url("../assets/images/Solomon-Rodgers_Pixabay.jpg") no-repeat
      center;
    background-size: cover;
    border-radius: 0.35rem;
    border: 1px solid transparent;
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

  /* contact phone area */

  .contact__layout-phones {
    width: min(94%, 60rem);
    height: 14rem;
    border: 1px solid var(--accent-color-2);
  }

  .contact__phones-title > p {
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
}

@media screen and (min-width: 420px) {
  .contact__layout-form {
    /* contact layout form */
    width: min(90%, 60rem);
    height: 54rem;
  }

  .contact__image {
    display: block;
    border: 1px solid var(--accent-color-1);
  }

  /* contact phone area */
  .contact__layout-phones {
    width: min(90%, 60rem);
  }
}

@media screen and (min-width: 620px) {
  /* contact layout form */
  .contact__layout-form {
    width: min(90%, 60rem);
    height: 44rem;
  }
}

@media screen and (min-width: 1040px) {
  /* contact layout form */

  .contact__layout-form {
    width: min(90%, 60rem);
    padding-top: 0.5rem;
    height: 40rem;
  }
}
</style>
