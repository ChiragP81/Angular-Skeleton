import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { DatatableComponent } from './datatable/datatable.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicValComponent } from 'src/app/shared/components/dynamic-val/dynamic-val.component';


@NgModule({
  declarations: [
    ProfileComponent,
    DatatableComponent,
    DynamicValComponent

  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class FeatureModule { }
