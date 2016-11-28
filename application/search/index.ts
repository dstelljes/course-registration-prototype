import { CommonModule } from "@angular/common";
import { NgModule as Module } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DataModule } from "../data";

import { CourseResultListComponent } from "./components/course-result-list";
import { SearchPageComponent } from "./components/search-page";

const routes: Routes = [
  {
    component: SearchPageComponent,
    path: 'search'
  }
];

@Module({
  declarations: [
    CourseResultListComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    DataModule,
    RouterModule.forChild(routes)
  ]
})
export class SearchModule {

}
