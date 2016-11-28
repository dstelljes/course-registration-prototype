import { platformBrowserDynamic as platform } from "@angular/platform-browser-dynamic";

import { UIModule } from "./ui";

require("./shared/styles/application.scss");

document.addEventListener("DOMContentLoaded", () => {
  platform().bootstrapModule(UIModule)
    .catch(error => console.error(error));
});
