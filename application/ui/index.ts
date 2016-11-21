import { APP_BASE_HREF } from "@angular/common";
import { NgModule as Module } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { UIComponent } from "./components/ui";

export { UIState } from "./interfaces";

@Module({
  bootstrap: [
    UIComponent
  ],
  declarations: [
    UIComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {
      useHash: true
    })
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
