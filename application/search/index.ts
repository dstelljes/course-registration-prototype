import { NgModule as Module } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SearchPageComponent } from "./components/search-page";

const routes: Routes = [
  {
    component: SearchPageComponent,
    path: 'search'
  }
];

@Module({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class SearchModule {

}
