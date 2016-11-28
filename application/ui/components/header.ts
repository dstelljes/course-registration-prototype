import { Component } from "@angular/core";

@Component({
  selector: 'ui-header',
  styles: [
    require("./header.scss")
  ],
  template: `
    <header class="ui-header">
      <div class="grid-container">
        <h1 class="ui-brand">Course Registration</h1>
        
        <nav class="ui-primary-navigation">
          <ul class="horizontal-list">
            <li class="item">
              <a routerLink="/search" routerLinkActive="active">Course search</a>
            </li>

            <li class="item">
              <a routerLink="/cart" routerLinkActive="active">My cart</a>
            </li>

            <li class="item">
              <a routerLink="/enrollment" routerLinkActive="active">My enrollment</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  ` 
})
export class UIHeaderComponent {

}
