import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./sanity_project.js";

export default defineCliConfig({
  api: { projectId, dataset },
  // `sanity deploy` publishes the Studio at https://hopecompassioncenter.sanity.studio
  studioHost: "hopecompassioncenter",
});
