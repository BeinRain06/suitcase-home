import { defineStore } from "pinia";

export const useDisplayDataStore = defineStore("displayData", {
  state: () => ({
    isNavbar: true,
    isFooter: true,
    isLoading: false /* nrmal set : false */,
  }),
  actions: {},
});
