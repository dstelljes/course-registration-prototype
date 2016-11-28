import { CommonModule } from "@angular/common";
import { NgModule as Module } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DataModule } from "../data";

import { CourseDetailPageComponent } from "./components/course-detail-page";
import { CourseResultListComponent } from "./components/course-result-list";
import { SearchPageComponent } from "./components/search-page";

const routes: Routes = [
  {
    component: SearchPageComponent,
    path: 'search',
    children: [{
      component: CourseDetailPageComponent,
      path: ':subject/:number'
    }]
  }
];

@Module({
  declarations: [
    CourseDetailPageComponent,
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
