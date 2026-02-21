import { projects } from "../api-data/general-data-center-project";

const initInformation = {
  0: {},
  1: {},
  2: {},
  3: {},
};

const durationOfProject = { durationStage: "" };

const homeIn = { name: "", land_area: "", benefit: "" };

const houseCallType = { one_floor: "true", level: "0" };

let roomEntireProject = {};

export const initInfoProject = (projectId, isCallPage, isActiveFloor) => {
  const typeQuotation = ["foundation", "plumbing", "electricity", "roofing"];

  if (isCallPage === "main-page") {
    typeQuotation.forEach((type, index) => {
      switch (projectId) {
        case "danton_shield":
          initInformation[index] = {
            projectId: projectId,
            quotationType: type,
            indexToSelect: 0,
            activeFloor: isActiveFloor,
          };
          durationOfProject.durationStage = projects[0].duration_stage;
          homeIn.name = projects[0].name;
          homeIn.land_area = projects[0].area.land;
          homeIn.benefit = projects[0].benefit;
          roomEntireProject = projects[0].compartment;
          break;
        case "merry_clap":
          initInformation[index] = {
            projectId: projectId,
            quotationType: type,
            indexToSelect: 1,
            activeFloor: isActiveFloor,
          };
          durationOfProject.durationStage = projects[1].duration_stage;
          homeIn.name = projects[1].name;
          homeIn.land_area = projects[1].area.land;
          homeIn.benefit = projects[1].benefit;
          roomEntireProject = projects[1].compartment;
          break;
        case "dexter_flip":
          initInformation[index] = {
            projectId: projectId,
            quotationType: type,
            indexToSelect: 2,
            activeFloor: isActiveFloor,
          };
          durationOfProject.durationStage = projects[2].duration_stage;
          homeIn.name = projects[2].name;
          homeIn.land_area = projects[2].area.land;
          homeIn.benefit = projects[2].benefit;
          roomEntireProject = projects[2].compartment;
          houseCallType.one_floor = false;
          break;
        default:
          throw new Error(
            "Error occured while affecting --var-- ,   initInfoProjects File-- ",
          );
      }
    });

    return {
      initInformation,
      durationOfProject,
      homeIn,
      roomEntireProject,
      houseCallType,
    };
  } else {
    typeQuotation.forEach((type, index) => {
      switch (projectId) {
        case "danton_shield":
          initInformation[index] = {
            projectId: projectId,
            quotationType: type,
            indexToSelect: 0,
          };
          break;
        case "merry_clap":
          initInformation[index] = {
            projectId: projectId,
            quotationType: type,
            indexToSelect: 1,
          };
          break;
        case "dexter_flip":
          initInformation[index] = {
            projectId: projectId,
            quotationType: type,
            indexToSelect: 2,
          };
          break;
        default:
          throw new Error(
            "Error occured while affecting --var-- ,   initInfoProjects File-- ",
          );
      }
    });

    return initInformation;
  }
};
