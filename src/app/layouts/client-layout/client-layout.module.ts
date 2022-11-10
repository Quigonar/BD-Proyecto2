import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LbdModule } from '../../lbd/lbd.module';

import { ClientLayoutRoutes } from './client-layout.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClientLayoutRoutes),
    FormsModule,
    LbdModule,
    ReactiveFormsModule,
  ],
  declarations: [
  ],
  providers: [
  ],
})
export class ClientLayoutModule {}
