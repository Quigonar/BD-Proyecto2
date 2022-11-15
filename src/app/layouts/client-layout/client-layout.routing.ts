import { Routes } from '@angular/router';
import { FeedbackComponent } from 'app/ClientView/feedback/feedback.component';
import { ShoppingCartComponent } from 'app/ClientView/shopping-cart/shopping-cart.component';
import { ProductsComponent } from 'app/manageProducts/products/products.component';
import { ProductComponent } from 'app/ClientView/product/product.component'
import { UserComponent } from 'app/user/user.component';
import { AffiliatesComponent } from 'app/ManageAffiliates/affiliates/affiliates.component';
import { ViewOrderComponent } from 'app/ManageOrders/view-order/view-order.component';



export const ClientLayoutRoutes: Routes = [
    { path: '', redirectTo: 'user', pathMatch: 'full'},
    { path: 'user',                                     component: UserComponent },
    { path: 'restaurants/:id',                          component: AffiliatesComponent },
    { path: 'restaurant/:client/:id',                   component: ProductsComponent },
    { path: 'product/:id/:rest/:product/:qty/:order',   component: ProductComponent },
    { path: 'shopping-cart/:id',                        component: ShoppingCartComponent },
    { path: 'view-order/:id/:order',                    component: ViewOrderComponent},
    { path: 'feedback/:id/:order',                         component: FeedbackComponent },

];