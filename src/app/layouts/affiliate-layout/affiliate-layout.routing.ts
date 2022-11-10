import { Routes } from '@angular/router';

import { AddProductComponent } from 'app/manageProducts/add-product/add-product.component';
import { EditProductComponent } from 'app/manageProducts/edit-product/edit-product.component';
import { ProductsComponent } from 'app/manageProducts/products/products.component';



export const AffiliateLayoutRoutes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full'},
    { path: 'products',        component: ProductsComponent },
    { path: 'add-product',     component: AddProductComponent},
    { path: 'edit-product',    component: EditProductComponent},
];