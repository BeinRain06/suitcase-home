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
    <div class="contact__container">
      <div class="contact__layout-form">
        <div class="contact__image-wrap">
          <div class="contact__image"></div>
        </div>
        <div class="contact__form-group">
          <div class="contact__form-title">
            <h3 v-if="!indexLang.val">
              Un Conseil, une Préoccupation, plus de détails
            </h3>
            <h3 v-else>Any Guidance, preoccupation, more details</h3>
          </div>
          <div class="contact__form">
            <div class="contact__form-item">
              <label for="pseudoname">Pseudo Name</label>
              <input
                id="pseudoname"
                name="pseudoname"
                class="input__form"
                placeholder="Please Enter Your name or pseudoname"
              />
              <div class="display__input-error"></div>
            </div>
            <div class="contact__form-item">
              <label for="useremail.l">Email</label>
              <input
                id="useremail"
                name="useremail"
                class="input__form"
                placeholder="Your email address"
              />
              <div class="display__input-error"></div>
            </div>
            <div class="contact__form-item">
              <label for="message">Message</label>
              <input
                id="message"
                name="message"
                class="input__form"
                placeholder="Just tell us what is your need..."
              />
              <div class="display__input-error"></div>
            </div>
            <div class="contact__form-validation">
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
      <div class="contact__layout-phones">
        <div class="box__transition">
          <p>OR</p>
        </div>
        <div class="contact__phones-title">
          <h2>CONTACT US</h2>
        </div>
        <div class="contact__phones">
          <div class="phone__icon">
            <div class="icon__phone"></div>
            <div class="icon__whatsapp"></div>
          </div>
          <h3 class="phone_number">6 72 99 97 49</h3>
          <h3 class="phone__space">/</h3>
          <h3 class="phone_number">6 76 93 58 16</h3>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
