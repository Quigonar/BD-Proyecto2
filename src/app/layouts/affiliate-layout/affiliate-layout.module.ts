import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LbdModule } from '../../lbd/lbd.module';

import { AffiliateLayoutRoutes } from './affiliate-layout.routing';

import { AddProductComponent } from 'app/manageProducts/add-product/add-product.component';
import { EditProductComponent } from 'app/manageProducts/edit-product/edit-product.component';
import { ProductsComponent } from 'app/manageProducts/products/products.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AffiliateLayoutRoutes),
    FormsModule,
    LbdModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProductsComponent,
    AddProductComponent,
    EditProductComponent,
  ],
  providers: [
  ],
})
export class AffiliateLayoutModule {}
