import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./sanity_project.js";

export default defineCliConfig({
  api: { projectId, dataset },
  // `sanity deploy` publishes the Studio at https://hopecompassioncenter.sanity.studio
  studioHost: "hopecompassioncenter",
  // The deployed Studio's application ID, so later deploys update it without prompting.
  deployment: { appId: "hhywzx47v39p8zb5ffl1eqrv" },
});
