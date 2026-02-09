<script setup>
import { reactive, onMounted, onUpdated } from "vue";
const props = defineProps({ userLanguage: String });

const indexLang = reactive({ val: 0 });

onMounted(() => {
  if (props.userLanguage) {
    indexLang.val = props.userLanguage === "FR" ? 0 : 1;
  }
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
            <p v-if="!indexLang.val" class="w-[80%] font-semibold opacity-60">
              Un Conseil, une Préoccupation, plus de détails...
            </p>
            <p v-else class="w-[80%] font-semibold opacity-60">
              Any Guidance, preoccupation, more details...
            </p>
          </div>
          <div class="contact__form pt-6">
            <div class="contact__form-item w-full flex flex-col gap-2">
              <label for="pseudoname">username</label>
              <input
                id="pseudoname"
                name="pseudoname"
                class="input__form"
                placeholder="Please Enter Your name or pseudoname"
              />
              <div class="display__input-error"></div>
            </div>
            <div class="contact__form-item w-full mt-4 flex flex-col gap-2">
              <label for="useremail.l">Email</label>
              <input
                id="useremail"
                name="useremail"
                class="input__form"
                placeholder="Your email address"
              />
              <div class="display__input-error"></div>
            </div>
            <div class="contact__form-item w-full mt-4 flex flex-col gap-2">
              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                class="textarea__form"
                placeholder=" Tell us your need or suggestions..."
              ></textarea>
              <div class="display__input-error"></div>
            </div>
            <div
              class="contact__validation-wrap w-full h-20 px-4 flex flex-row justify-end items-center"
            >
              <div class="contact__form-validation relative w-max h-max">
                <a
                  v-if="!indexLang.val"
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

a.cta__button-primary {
  font-size: var(--mini-size);
  font-weight: 500;
  line-height: 1.4;
  opacity: 0.74;
}

h4.phone__number,
h4.phone__space {
  font-size: var(--regular-size);
  color: var(--text-paragraph);
  /* color: var(--title-color); */
  opacity: 0.7;
}

/* contact layout form */

.contact__layout-form {
  width: min(90%, 60rem);
  padding-top: 0.5rem;
  height: 34rem;
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
</style>
