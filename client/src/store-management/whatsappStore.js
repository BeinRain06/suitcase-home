// stores/whatsappStore.js
import { defineStore } from "pinia";

export const useWhatsappStore = defineStore("whatsapp", {
  state: () => ({
    isVisible: false,
    isItContactPage: false,
    phoneNumber: "237676935816",
    message: "Hello! I am reaching out from Suitcase Home Contact.",
  }),
  getters: {
    isContactPage: (state) => state.isItContactPage,
  },
  actions: {
    show() {
      this.isVisible = true;
    },
    hide() {
      this.isVisible = false;
    },
    updateConfig(newNumber, newMessage) {
      if (newNumber) this.phoneNumber = newNumber;
      if (newMessage) this.message = newMessage;
    },
    triggerWhatsApp() {
      // 1. Clean the phone number (remove any non-digits just in case)
      const cleanPhone = this.phoneNumber.replace(/\D/g, "");

      // 2. Encode the message for URL safety
      const encodedMessage = encodeURIComponent(this.message);

      // 3. Construct the final URL
      const url = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
      // 4. Open in a new tab
      // On mobile, this will automatically trigger the "Open in WhatsApp" prompt.
      // On desktop, it will open WhatsApp Web or the Desktop App.
      window.open(url, "_blank", "noopener,noreferrer");
    },
  },
});
