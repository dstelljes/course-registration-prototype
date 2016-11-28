import { APP_BASE_HREF } from "@angular/common";
import { NgModule as Module } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { CartModule } from "../cart";
import { EnrollmentModule } from "../enrollment";
import { SearchModule } from "../search";

import { UIComponent } from "./components/ui";
import { UIHeaderComponent } from "./components/header";

export { UIState } from "./interfaces";

@Module({
  bootstrap: [
    UIComponent
  ],
  declarations: [
    UIComponent,
    UIHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {
      useHash: true
    }),

    CartModule,
    EnrollmentModule,
    SearchModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    }
  ]
})
export class UIModule {

};
