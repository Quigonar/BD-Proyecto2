import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LbdModule } from '../../lbd/lbd.module';
import { FooterModule } from 'app/shared/footer/footer.module';
import { NavbarModule } from 'app/shared/navbar/navbar.module';
import { SidebarModule } from 'app/sidebar/sidebar.module';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { AddAdminComponent } from 'app/ManageAdminAffiliate/add-admin/add-admin.component';
import { AdminsComponent } from 'app/ManageAdminAffiliate/admins/admins.component';
import { EditAdminComponent } from 'app/ManageAdminAffiliate/edit-admin/edit-admin.component';
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
import { ReportsComponent } from 'app/Reports/reports/reports.component';
import { AddAffiliateComponent } from 'app/ManageAffiliates/add-affiliate/add-affiliate.component';
import { AdminLayoutComponent } from './admin-layout.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    ReactiveFormsModule,

    NavbarModule,
    FooterModule,
    SidebarModule,
  ],
  declarations: [
    EmployeesComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,

    AffiliatesComponent,
    AddAffiliateComponent,
    EditAffiliateComponent,
    AffiliationComponent,

    AdminsComponent,
    AddAdminComponent,
    EditAdminComponent,

    TypesComponent,
    AddTypeComponent,
    EditTypeComponent,

    DealersComponent,
    AddDealerComponent,
    EditDealerComponent,

    ReportsComponent
  ],
  providers: [
  ],
})

export class AdminLayoutModule {}
