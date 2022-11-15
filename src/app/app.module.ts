import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouteService } from './services/route.service';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AffiliateLayoutComponent } from './layouts/affiliate-layout/affiliate-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { UserStorageService } from './services/user-storage.service';
import { AddAffiliateComponent } from './ManageAffiliates/add-affiliate/add-affiliate.component';
import { AddAdminComponent } from './ManageAdminAffiliate/add-admin/add-admin.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './ClientView/add-user/add-user.component';
import { ProductsComponent } from './manageProducts/products/products.component';
import { AffiliatesComponent } from './ManageAffiliates/affiliates/affiliates.component';
import { ViewOrderComponent } from './ManageOrders/view-order/view-order.component';
import { AdminsComponent } from './ManageAdminAffiliate/admins/admins.component';

const routes: Routes =[
  { path: '', redirectTo: 'login', pathMatch: 'full'}, 
  { path: 'login',                           component:LoginComponent },
  { path: 'request-affiliation/step-1',      component: AddAdminComponent},
  { path: 'request-affiliation/step-2',      component: AddAffiliateComponent},
  { path: 'register',                        component: AddUserComponent}
  
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,

    NavbarModule,
    FooterModule,
    SidebarModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AffiliateLayoutComponent,
    ClientLayoutComponent,
    LoginComponent,
    UserComponent,
    ProductsComponent,
    AffiliatesComponent,
    AdminsComponent,
    ViewOrderComponent
  ],
  providers: [
    RouteService,
    UserStorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { 
  constructor (private router: Router, private routeService: RouteService) {
    routeService.onUserChange.subscribe(this.resetRouterConfig(true).bind(this))
    this.resetRouterConfig(false)()
    this.router.initialNavigation()
  }

  reloadCurrentRoute(){
    const currentUrl = this.router.url
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  resetRouterConfig(refresh: boolean) {
    return () => {
      console.log('resetRouterConfig()');
      const constructedConfig = [
        
        {
          path: '',
          loadChildren: () => {
            if (this.routeService.userLogged() == "admin") {
              return import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
            } else if (this.routeService.userLogged() == "affiliate") {
              return import('./layouts/affiliate-layout/affiliate-layout.module').then(x => x.AffiliateLayoutModule)
            } else if (this.routeService.userLogged() == "client") {
              return import('./layouts/client-layout/client-layout.module').then((m) => m.ClientLayoutModule)
            } else {
              return routes
            }

          },
        },
      ];

      this.router.resetConfig(constructedConfig);

      if (refresh) this.reloadCurrentRoute();
    };
  }

}
