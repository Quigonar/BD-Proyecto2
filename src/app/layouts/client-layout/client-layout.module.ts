import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LbdModule } from '../../lbd/lbd.module';

import { ClientLayoutRoutes } from './client-layout.routing';
import { FooterModule } from 'app/shared/footer/footer.module';
import { NavbarModule } from 'app/shared/navbar/navbar.module';
import { SidebarModule } from 'app/sidebar/sidebar.module';
import { AddUserComponent } from 'app/ClientView/add-user/add-user.component';
import { FeedbackComponent } from 'app/ClientView/feedback/feedback.component';
import { ProductComponent } from 'app/ClientView/product/product.component';
import { ShoppingCartComponent } from 'app/ClientView/shopping-cart/shopping-cart.component';
import { ProductsComponent } from 'app/manageProducts/products/products.component';
import { AffiliatesComponent } from 'app/ManageAffiliates/affiliates/affiliates.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClientLayoutRoutes),
    FormsModule,
    LbdModule,
    ReactiveFormsModule,

    NavbarModule,
    FooterModule,
    SidebarModule,
  ],
  declarations: [
    AddUserComponent,
    FeedbackComponent,
    ProductComponent,
    ShoppingCartComponent,
  ],
  providers: [
  ],
})
export class ClientLayoutModule {}
