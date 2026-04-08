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
    activeFloor: { floor_0: true },
  }),
  getters: {
    isFloor_0: (state) => (state.activeFloor.floor_0 ? "0" : "1"),
    isBtnJoystickIn: (state) => state.isBtnJoystickTrigerred,
    isBoxMaterialIn: (state) => state.isBoxMaterialExpanded,
    quotationTypeSelect: (state) => state.quotationTypeSelect,
  },
  actions: {},
});
