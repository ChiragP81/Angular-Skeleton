import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { DatatableComponent } from './datatable/datatable.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProfileComponent,
    DatatableComponent,

  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
  ]
})
export class FeatureModule { }
