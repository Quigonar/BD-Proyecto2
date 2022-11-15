import { Routes } from '@angular/router';
import { RouteService } from 'app/services/route.service';
import { AddAdminComponent } from 'app/ManageAdminAffiliate/add-admin/add-admin.component';
import { AdminsComponent } from 'app/ManageAdminAffiliate/admins/admins.component';
import { EditAdminComponent } from 'app/ManageAdminAffiliate/edit-admin/edit-admin.component';
import { AddAffiliateComponent } from 'app/ManageAffiliates/add-affiliate/add-affiliate.component';
import { OrdersComponent } from 'app/ManageOrders/orders/orders.component';
import { ViewOrderComponent } from 'app/ManageOrders/view-order/view-order.component';

import { AddProductComponent } from 'app/manageProducts/add-product/add-product.component';
import { EditProductComponent } from 'app/manageProducts/edit-product/edit-product.component';
import { ProductsComponent } from 'app/manageProducts/products/products.component';
import { UserComponent } from 'app/user/user.component';

export const AffiliateLayoutRoutes: Routes = [
    { path: '', redirectTo: 'user', pathMatch: 'full'},
    { path: 'user',                         component: UserComponent },
    { path: 'products/:id',                 component: ProductsComponent },
    { path: 'add-product/:id',              component: AddProductComponent},
    { path: 'edit-product/:id/:product',    component: EditProductComponent},
    { path: 'orders/:id',                   component: OrdersComponent},
    { path: 'view-order/:id/:order',        component: ViewOrderComponent}
];