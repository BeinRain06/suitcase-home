import { defineStore } from "pinia";

export const useProjectStore = defineStore("project-state", {
  state: () => ({
    halfResumeOne: {
      isfoundation_expanded: false,
      isPlumbing_expanded: false,
    },
    halfResumetwo: {
      isElectricity_expanded: false,
      isRoofing_expanded: false,
    },
    isBtnJoystickTrigerred: false,
    isBoxMaterialExpanded: false,
    quotationTypeSelect: "",
  }),
  actions: {},
});
