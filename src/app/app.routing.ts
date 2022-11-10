/*import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductsComponent } from './manageProducts/products/products.component';

const routes: Routes =[
  { path: '', redirectTo: 'login', pathMatch: 'full'}, 
  { path: '', component:LoginComponent },
  //{ path: 'products', component:ProductsComponent}
  /*{ path: '', component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule { }*/
