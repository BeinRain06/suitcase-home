import { projects } from "../api-data/general-data-center-project";

export const initInfoProject = async (projectId, isCallPage, isActiveFloor) => {
  // 1. Move declarations INSIDE to ensure a "fresh" object for every call
  const initInformation = { 0: {}, 1: {}, 2: {}, 3: {} };
  const durationOfProject = { durationStage: "" };
  const homeIn = { name: "", land_area: "", benefit: "" };
  const houseCallType = { one_floor: true, level: "0" };
  let roomEntireProject = {};

  const typeQuotation = ["foundation", "plumbing", "electricity", "roofing"];

  // 2. Find the project once instead of switching inside a loop
  const projectMap = {
    danton_shield: 0,
    merry_clap: 1,
    dexter_flip: 2,
  };

  const pIndex = projectMap[projectId];

  if (pIndex === undefined) throw new Error("Project ID not found");

  const projectData = projects[pIndex];

  // 3. Process the data
  typeQuotation.forEach((type, index) => {
    initInformation[index] = {
      projectId: projectId,
      quotationType: type,
      indexToSelect: pIndex,
      activeFloor: isActiveFloor,
    };
  });

  if (isCallPage === "main-page") {
    durationOfProject.durationStage = projectData.duration_stage;
    homeIn.name = projectData.name;
    homeIn.land_area = projectData.area.land;
    homeIn.benefit = projectData.benefit;
    roomEntireProject = projectData.compartment;

    // Special case for dexter_flip
    if (projectId === "dexter_flip") {
      houseCallType.one_floor = false;
    }

    return {
      // No need for 'await' here, just return the object
      initInformation,
      durationOfProject,
      homeIn,
      roomEntireProject,
      houseCallType,
    };
  }

  return initInformation;
};

/* export const initInfoProject = async (projectId, isCallPage, isActiveFloor) => {
  console.log("isActiveFloor:", isActiveFloor);

  // 1. Move declarations INSIDE to ensure a "fresh" object for every call
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

    return await {
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
}; */
