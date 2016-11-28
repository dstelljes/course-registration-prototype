import { NgModule as Module } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DataModule } from '../data';

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
    DataModule,
    RouterModule.forChild(routes)
  ]
})
export class SearchModule {

}
