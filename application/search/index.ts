import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule as Module } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DataModule } from "../data";

import { CourseDetailPageComponent } from "./components/course-detail-page";
import { CourseResultFilterComponent } from "./components/course-result-filter";
import { CourseResultListComponent } from "./components/course-result-list";
import { SearchPageComponent } from "./components/search-page";

import { SearchCriteriaPipe } from "./pipes/search-criteria";

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
    CourseResultFilterComponent,
    CourseResultListComponent,
    SearchPageComponent,

    SearchCriteriaPipe
  ],
  imports: [
    CommonModule,
    DataModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SearchModule {

}
