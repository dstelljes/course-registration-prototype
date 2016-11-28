import { NgModule as Module } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EnrollmentPageComponent } from "./components/enrollment-page";

const routes: Routes = [
  {
    component: EnrollmentPageComponent,
    path: 'enrollment'
  }
];

@Module({
  declarations: [
    EnrollmentPageComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class EnrollmentModule {

}
