import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LbdModule } from '../../lbd/lbd.module';

import { AffiliateLayoutRoutes } from './affiliate-layout.routing';

import { AddProductComponent } from 'app/manageProducts/add-product/add-product.component';
import { EditProductComponent } from 'app/manageProducts/edit-product/edit-product.component';
import { ProductsComponent } from 'app/manageProducts/products/products.component';
import { AddAffiliateComponent } from 'app/ManageAffiliates/add-affiliate/add-affiliate.component';
import { AdminsComponent } from 'app/ManageAdminAffiliate/admins/admins.component';
import { AddAdminComponent } from 'app/ManageAdminAffiliate/add-admin/add-admin.component';
import { EditAdminComponent } from 'app/ManageAdminAffiliate/edit-admin/edit-admin.component';
import { OrdersComponent } from 'app/ManageOrders/orders/orders.component';
import { ViewOrderComponent } from 'app/ManageOrders/view-order/view-order.component';
import { FooterModule } from 'app/shared/footer/footer.module';
import { NavbarModule } from 'app/shared/navbar/navbar.module';
import { SidebarModule } from 'app/sidebar/sidebar.module';
import { UserComponent } from 'app/user/user.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AffiliateLayoutRoutes),
    FormsModule,
    LbdModule,
    ReactiveFormsModule,

    NavbarModule,
    FooterModule,
    SidebarModule,
  ],
  declarations: [
    AddProductComponent,
    EditProductComponent,
    OrdersComponent,
  ],
  providers: [
  ],
})
export class AffiliateLayoutModule {}
