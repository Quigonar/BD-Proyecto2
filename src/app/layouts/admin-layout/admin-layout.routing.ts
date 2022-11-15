import { Routes } from '@angular/router';

import { AddAdminComponent } from 'app/ManageAdminAffiliate/add-admin/add-admin.component';
import { AdminsComponent } from 'app/ManageAdminAffiliate/admins/admins.component';
import { EditAdminComponent } from 'app/ManageAdminAffiliate/edit-admin/edit-admin.component';
import { AddAffiliateComponent } from 'app/ManageAffiliates/add-affiliate/add-affiliate.component';
import { AffiliatesComponent } from 'app/ManageAffiliates/affiliates/affiliates.component';
import { AffiliationComponent } from 'app/ManageAffiliates/affiliation/affiliation.component';
import { EditAffiliateComponent } from 'app/ManageAffiliates/edit-affiliate/edit-affiliate.component';
import { AddTypeComponent } from 'app/ManageCommerceTypes/add-type/add-type.component';
import { EditTypeComponent } from 'app/ManageCommerceTypes/edit-type/edit-type.component';
import { TypesComponent } from 'app/ManageCommerceTypes/types/types.component';
import { AddDealerComponent } from 'app/ManageDealers/add-dealer/add-dealer.component';
import { DealersComponent } from 'app/ManageDealers/dealers/dealers.component';
import { EditDealerComponent } from 'app/ManageDealers/edit-dealer/edit-dealer.component';
import { AddEmployeeComponent } from 'app/ManageEmployees/add-employee/add-employee.component';
import { EditEmployeeComponent } from 'app/ManageEmployees/edit-employee/edit-employee.component';
import { EmployeesComponent } from 'app/ManageEmployees/employees/employees.component';
import { Report1Component } from 'app/Reports/report1/report1.component';
import { Report2Component } from 'app/Reports/report2/report2.component';
import { ReportsComponent } from 'app/Reports/reports/reports.component';


export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'employees', pathMatch: 'full'},
    { path: 'employees',         component:EmployeesComponent},
    { path: 'add-employee',      component:AddEmployeeComponent},
    { path: 'edit-employee/:id', component:EditEmployeeComponent},
    { path: 'affiliates',        component:AffiliatesComponent},
    { path: 'add-affiliate',     component:AddAffiliateComponent},
    { path: 'edit-affiliate/:id',component:EditAffiliateComponent},
    { path: 'admins',            component:AdminsComponent},
    { path: 'add-admin',         component:AddAdminComponent},
    { path: 'edit-admin/:id',    component:EditAdminComponent},
    { path: 'affiliation/:id',   component:AffiliationComponent},
    { path: 'types',             component:TypesComponent},
    { path: 'add-type',          component:AddTypeComponent},
    { path: 'edit-type/:id',     component:EditTypeComponent},
    { path: 'dealers',           component:DealersComponent},
    { path: 'add-dealer',        component:AddDealerComponent},
    { path: 'edit-dealer/:id',   component:EditDealerComponent},
    { path: 'reports',           component:ReportsComponent},
    { path: 'reports-1',         component:Report1Component},
    { path: 'reports-2',         component:Report2Component},
];