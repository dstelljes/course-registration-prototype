import { NgModule as Module } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CartPageComponent } from "./components/cart-page";

const routes: Routes = [
  {
    component: CartPageComponent,
    path: 'cart'
  }
];

@Module({
  declarations: [
    CartPageComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CartModule {

}
