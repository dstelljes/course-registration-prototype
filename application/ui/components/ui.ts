import { Component } from "@angular/core";

@Component({
  selector: "registration-ui",
  styles: [
    require("./ui.scss")
  ],
  template: `
    <ui-header></ui-header>

    <main class="ui-main">
      <router-outlet></router-outlet>
    </main>
  `
})
export class UIComponent {

}
